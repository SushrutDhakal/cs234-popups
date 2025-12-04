// App State
let currentModule = 1;
let isRandomMode = false;
let shuffledQuestions = [];

// DOM Elements
const questionsContainer = document.getElementById('questionsContainer');
const moduleTitle = document.getElementById('moduleTitle');
const moduleTopic = document.getElementById('moduleTopic');
const questionCount = document.getElementById('questionCount');
const prevBtn = document.getElementById('prevModule');
const nextBtn = document.getElementById('nextModule');
const shuffleBtn = document.getElementById('shuffleBtn');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderModule(currentModule);
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const moduleVal = link.dataset.module;
            if (moduleVal === 'random') {
                navigateToRandom();
            } else {
                navigateToModule(parseInt(moduleVal));
            }
        });
    });

    // Prev/Next buttons
    prevBtn.addEventListener('click', () => {
        if (!isRandomMode && currentModule > 1) {
            navigateToModule(currentModule - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (!isRandomMode && currentModule < 10) {
            navigateToModule(currentModule + 1);
        }
    });

    // Shuffle button
    shuffleBtn.addEventListener('click', () => {
        if (isRandomMode) {
            shuffleAndRenderRandom();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (isRandomMode) return;
        if (e.key === 'ArrowLeft' && currentModule > 1) {
            navigateToModule(currentModule - 1);
        } else if (e.key === 'ArrowRight' && currentModule < 10) {
            navigateToModule(currentModule + 1);
        }
    });
}

// Navigate to Module
function navigateToModule(moduleNum) {
    isRandomMode = false;
    currentModule = moduleNum;
    renderModule(moduleNum);
    updateActiveNav(moduleNum);
    updateNavButtons();
    shuffleBtn.style.display = 'none';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Navigate to Random
function navigateToRandom() {
    isRandomMode = true;
    shuffleAndRenderRandom();
    updateActiveNavRandom();
    updateNavButtons();
    shuffleBtn.style.display = 'inline-flex';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Get all questions from all modules
function getAllQuestions() {
    const allQuestions = [];
    for (let i = 1; i <= 10; i++) {
        const module = moduleData[i];
        if (module && module.questions) {
            module.questions.forEach(q => {
                allQuestions.push({
                    ...q,
                    moduleNum: i,
                    moduleTopic: module.topic
                });
            });
        }
    }
    return allQuestions;
}

// Fisher-Yates shuffle
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Shuffle and render random questions
function shuffleAndRenderRandom() {
    const allQuestions = getAllQuestions();
    shuffledQuestions = shuffleArray(allQuestions);
    renderRandomQuestions();
}

// Render random questions
function renderRandomQuestions() {
    // Update header
    moduleTitle.textContent = 'Random';
    moduleTopic.textContent = 'All questions from all modules (shuffled)';
    questionCount.textContent = `${shuffledQuestions.length} questions`;

    // Render questions
    questionsContainer.innerHTML = shuffledQuestions.map((q, index) => 
        createRandomQuestionCard(q, index)
    ).join('');

    // Add event listeners for answer buttons
    setupRandomAnswerButtons();
}

// Update active nav for random
function updateActiveNavRandom() {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.module === 'random') {
            link.classList.add('active');
        }
    });
}

// Update Active Nav
function updateActiveNav(moduleNum) {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (parseInt(link.dataset.module) === moduleNum) {
            link.classList.add('active');
        }
    });
}

// Update Nav Buttons
function updateNavButtons() {
    if (isRandomMode) {
        prevBtn.disabled = true;
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = currentModule === 1;
        nextBtn.disabled = currentModule === 10;
    }
}

// Render Module
function renderModule(moduleNum) {
    const module = moduleData[moduleNum];
    
    if (!module) {
        questionsContainer.innerHTML = '<p>Module not found.</p>';
        return;
    }

    // Update header
    moduleTitle.textContent = module.title;
    moduleTopic.textContent = module.topic;
    questionCount.textContent = `${module.questions.length} questions`;

    // Render questions
    questionsContainer.innerHTML = module.questions.map((q, index) => 
        createQuestionCard(q, index)
    ).join('');

    // Add event listeners for answer buttons
    setupAnswerButtons();
}

// Setup Answer Button Event Listeners
function setupAnswerButtons() {
    document.querySelectorAll('.show-answer-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const questionId = btn.dataset.questionId;
            const answerContent = document.getElementById(`answer-${questionId}`);
            const isRevealed = answerContent.classList.contains('visible');
            
            if (isRevealed) {
                // Hide answer
                answerContent.classList.remove('visible');
                btn.classList.remove('revealed');
                btn.innerHTML = '<span class="icon">👁️</span> Show Answer';
                
                // Remove highlights from options
                const card = btn.closest('.question-card');
                card.querySelectorAll('.option-item.correct').forEach(opt => {
                    opt.classList.remove('correct');
                });
            } else {
                // Show answer
                answerContent.classList.add('visible');
                btn.classList.add('revealed');
                btn.innerHTML = '<span class="icon">✓</span> Answer Shown';
                
                // Highlight correct options
                highlightCorrectOptions(questionId);
            }
        });
    });
}

// Highlight correct options when answer is shown
function highlightCorrectOptions(questionId) {
    const module = moduleData[currentModule];
    const question = module.questions.find(q => q.id === questionId);
    
    if (!question || !question.answer || !Array.isArray(question.answer)) return;
    
    const card = document.querySelector(`[data-question-id="${questionId}"]`).closest('.question-card');
    const options = card.querySelectorAll('.option-item');
    const optionLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    
    question.answer.forEach(ans => {
        const index = optionLetters.indexOf(ans);
        if (index !== -1 && options[index]) {
            options[index].classList.add('correct');
        }
    });
}

// Create Question Card HTML
function createQuestionCard(question, index) {
    const optionLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    
    const optionsHTML = question.options.map((opt, i) => `
        <li class="option-item">
            <span class="option-marker">${optionLetters[i]}</span>
            <span class="option-text">${escapeHtml(opt)}</span>
        </li>
    `).join('');

    const answerHTML = createAnswerSection(question);

    return `
        <article class="question-card" style="animation-delay: ${index * 0.05}s">
            <div class="question-header">
                <span class="question-number">Q${question.id}</span>
                <span class="question-type">Multiple Choice</span>
            </div>
            <p class="question-text">${escapeHtml(question.text)}</p>
            <ul class="options-list">
                ${optionsHTML}
            </ul>
            ${answerHTML}
        </article>
    `;
}

// Create Answer Section HTML
function createAnswerSection(question, uniqueId = null) {
    const qId = uniqueId || question.id;
    const hasAnswer = question.answer !== null && question.answer !== undefined;
    
    if (!hasAnswer) {
        return `
            <div class="answer-section">
                <button class="show-answer-btn" disabled style="opacity: 0.5; cursor: not-allowed;">
                    <span class="icon">❓</span> Answer Not Available
                </button>
            </div>
        `;
    }
    
    let answerDisplay = '';
    
    if (Array.isArray(question.answer)) {
        // Multiple choice answers (array of letters)
        answerDisplay = question.answer.map(a => 
            `<span class="answer-item">${a}</span>`
        ).join('');
    } else if (typeof question.answer === 'string') {
        // String answer (like matching questions)
        answerDisplay = `<span class="answer-text-detail">${escapeHtml(question.answer)}</span>`;
    }
    
    return `
        <div class="answer-section">
            <button class="show-answer-btn" data-question-id="${qId}">
                <span class="icon">👁️</span> Show Answer
            </button>
            <div class="answer-content" id="answer-${qId}">
                <div class="answer-label">
                    <span class="check-icon">✓</span> Correct Answer
                </div>
                <div class="answer-text">
                    ${answerDisplay}
                </div>
            </div>
        </div>
    `;
}

// Create Random Question Card HTML
function createRandomQuestionCard(question, index) {
    const optionLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const uniqueId = `random-${index}-${question.id}`;
    
    const optionsHTML = question.options.map((opt, i) => `
        <li class="option-item">
            <span class="option-marker">${optionLetters[i]}</span>
            <span class="option-text">${escapeHtml(opt)}</span>
        </li>
    `).join('');

    const answerHTML = createAnswerSection(question, uniqueId);

    return `
        <article class="question-card" style="animation-delay: ${index * 0.03}s" data-question-answer='${JSON.stringify(question.answer)}'>
            <div class="question-header">
                <span class="question-number">Q${question.id}</span>
                <span class="question-module">Module ${question.moduleNum}</span>
                <span class="question-type">Multiple Choice</span>
            </div>
            <p class="question-text">${escapeHtml(question.text)}</p>
            <ul class="options-list">
                ${optionsHTML}
            </ul>
            ${answerHTML}
        </article>
    `;
}

// Setup Answer Button Event Listeners for Random mode
function setupRandomAnswerButtons() {
    document.querySelectorAll('.show-answer-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const questionId = btn.dataset.questionId;
            const answerContent = document.getElementById(`answer-${questionId}`);
            const isRevealed = answerContent.classList.contains('visible');
            
            if (isRevealed) {
                // Hide answer
                answerContent.classList.remove('visible');
                btn.classList.remove('revealed');
                btn.innerHTML = '<span class="icon">👁️</span> Show Answer';
                
                // Remove highlights from options
                const card = btn.closest('.question-card');
                card.querySelectorAll('.option-item.correct').forEach(opt => {
                    opt.classList.remove('correct');
                });
            } else {
                // Show answer
                answerContent.classList.add('visible');
                btn.classList.add('revealed');
                btn.innerHTML = '<span class="icon">✓</span> Answer Shown';
                
                // Highlight correct options
                highlightCorrectOptionsRandom(btn);
            }
        });
    });
}

// Highlight correct options for random questions
function highlightCorrectOptionsRandom(btn) {
    const card = btn.closest('.question-card');
    const answerData = card.dataset.questionAnswer;
    
    if (!answerData || answerData === 'null') return;
    
    let answer;
    try {
        answer = JSON.parse(answerData);
    } catch (e) {
        return;
    }
    
    if (!answer || !Array.isArray(answer)) return;
    
    const options = card.querySelectorAll('.option-item');
    const optionLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    
    answer.forEach(ans => {
        const index = optionLetters.indexOf(ans);
        if (index !== -1 && options[index]) {
            options[index].classList.add('correct');
        }
    });
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    let escaped = div.innerHTML;
    
    // Convert common patterns to styled elements
    escaped = escaped
        // Theta notation
        .replace(/Θ\(([^)]+)\)/g, '<code>Θ($1)</code>')
        .replace(/O\(([^)]+)\)/g, '<code>O($1)</code>')
        .replace(/Ω\(([^)]+)\)/g, '<code>Ω($1)</code>')
        // Code-like items
        .replace(/(\w+)\(([^)]*)\)/g, '<code>$1($2)</code>')
        // Subscripts like n², n³
        .replace(/n²/g, '<code>n²</code>')
        .replace(/n³/g, '<code>n³</code>')
        .replace(/n⁴/g, '<code>n⁴</code>')
        .replace(/n⁵/g, '<code>n⁵</code>')
        .replace(/n⁶/g, '<code>n⁶</code>');
    
    return escaped;
}

// Update nav buttons on load
updateNavButtons();

