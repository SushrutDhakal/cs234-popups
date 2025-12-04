const moduleData = {
    1: {
        title: "Module 1",
        topic: "Introduction to ADTs & Python",
        questions: [
            {
                id: "1d1",
                text: "At this point you might be asking why we went to all that trouble to define an ADT when we could have just used a Python list. Select each choice that helps to explain why we didn't just use a Python list for our case study. There may be more than one correct choice.",
                options: [
                    "We are interested in the ideas arising from the case study more than the case study itself.",
                    "The purpose of the planning stage is to assess options without coding.",
                    "For full generality, a solution should be able to be coded in any language, and not every language supports Python lists.",
                    "A Python list is a data type specific to Python, not an ADT."
                ],
                answer: ["A", "B", "C", "D"]  // All are correct based on module content
            },
            {
                id: "1e1",
                text: "Select each choice that is a true statement about pseudocode in this course. There may be more than one correct choice.",
                options: [
                    "Pseudocode is used to allow us to analyze an algorithm before coding it.",
                    "At times, algorithm sketches will be sufficient.",
                    "You need to be able to read pseudocode, but not write it.",
                    "The input, output, and side effects are mentioned in the preamble."
                ],
                answer: ["A", "B", "D"]
            },
            {
                id: "1e2",
                text: "Select each choice that is a true statement about the memory model used in the course. There may be more than one correct choice.",
                options: [
                    "The address of a chunk is the address of the first cell in the chunk.",
                    "The program gets to choose the addresses of variables used by the program.",
                    "A pointer is a type of data that can be assigned to a variable.",
                    "It is important to initialize or write memory before reading it."
                ],
                answer: ["A", "C", "D"]
            },
            {
                id: "1f1",
                text: "Select each choice that is a true statement about functions in Python. There may be more than one correct choice.",
                options: [
                    "To define a function, use def.",
                    "The first line should end with a colon.",
                    "All lines in the function body should be indented.",
                    "To return a value, use return."
                ],
                answer: ["A", "B", "C", "D"]  // All are correct
            },
            {
                id: "1f2",
                text: "Suppose you define a function mystery that consumes an integer but does not produce any value. Now suppose you assign mystery(4) to a variable result. What is the value of result?",
                options: [
                    "It has no value.",
                    "4",
                    "mystery",
                    "None"
                ],
                answer: ["D"]  // None
            },
            {
                id: "1f3",
                text: "Select each choice that evaluates to True. There may be more than one correct choice.",
                options: [
                    "not (4 != 4)",
                    "(1 == 3) or (2 < 3)",
                    "(4 < 5) and (5 < 6)",
                    "True or False"
                ],
                answer: ["A", "B", "C", "D"]  // All evaluate to True
            }
        ]
    },
    2: {
        title: "Module 2",
        topic: "Algorithm Analysis & Running Times",
        questions: [
            {
                id: "2a1",
                text: "Which is the best strategy for determining which house is cheapest to build?",
                options: [
                    "Build all three houses, keeping track of the costs of each one",
                    "Choose specific floor and wall coverings, windows, doors, and fixtures, and based on them calculate detailed costs without building",
                    "Choose categories of floor and wall coverings, windows, doors, and fixtures, and based on them calculate detailed costs without building",
                    "Make a rough estimate based on size and quantities of materials needed"
                ],
                answer: ["D"]  // Rough estimate - relates to order notation concept
            },
            {
                id: "2a2",
                text: "Select each choice that is a true statement about running times. There may be more than one correct choice.",
                options: [
                    "In most of our analyses, we will consider worst-case running time.",
                    "The best-case running time is always better than the worst-case running time.",
                    "To calculate the best-case running time, choose the smallest possible instance.",
                    "Calculating average-case running time depends on knowing a probability distribution."
                ],
                answer: ["A", "D"]
            },
            {
                id: "2b1",
                text: "Select each choice that is a simple function of n. There may be more than one correct choice.",
                options: [
                    "n²",
                    "n",
                    "log n",
                    "1"
                ],
                answer: ["A", "B", "C", "D"]  // All are simple functions
            },
            {
                id: "2b2",
                text: "Select each choice that is a function in Θ(n²). There may be more than one correct choice.",
                options: [
                    "3n² + 2n + 1",
                    "n² + 1000000",
                    "0.000001n²",
                    "n²"
                ],
                answer: ["A", "B", "C", "D"]  // All are in Θ(n²)
            },
            {
                id: "2b3",
                text: "Select each choice that is a situation in which order notation might not be helpful. There may be more than one correct choice.",
                options: [
                    "All the instances of interest are small.",
                    "The running time is the same on all instances of the same size.",
                    "You are interested in the best-case running time.",
                    "The functions you wish to compare belong to the same category."
                ],
                answer: ["A", "D"]
            },
            {
                id: "2b4",
                text: "Select each choice that provides you enough information to conclude that f(n) is smaller than g(n). There may be more than one correct choice.",
                options: [
                    "f(n) ∈ O(n) and g(n) ∈ Ω(n²)",
                    "f(n) ∈ Θ(n) and g(n) ∈ Θ(n²)",
                    "f(n) ∈ O(n²) and g(n) ∈ Ω(n)",
                    "f(n) ∈ O(log n) and g(n) ∈ Ω(n)"
                ],
                answer: ["A", "B", "D"]
            },
            {
                id: "2b5",
                text: "What can we conclude if we know that Algorithm A has worst-case running time in Θ(n) and Algorithm B has best-case running time in Θ(n²)?",
                options: [
                    "Algorithm A is better.",
                    "Algorithm B is better.",
                    "The algorithms are equally good.",
                    "We don't have enough information."
                ],
                answer: ["A"]  // A is better since its worst case is better than B's best case
            },
            {
                id: "2c1",
                text: "Select each choice that is a true statement. There may be more than one correct choice.",
                options: [
                    "Θ(n² + m) = Θ(n²) if m ≤ n",
                    "Θ(n² + m) = Θ(m) if n ≤ m",
                    "Θ(n² + m) = Θ(n² + m) if n and m are unrelated"
                ],
                answer: ["A", "C"]
            },
            {
                id: "2c2",
                text: "If f(n) ∈ Θ(n), g(n) ∈ O(n²), and h(n) ∈ Θ(n³), in which category does f(n) + g(n) + h(n) belong?",
                options: [
                    "O(n)",
                    "O(n²)",
                    "O(n³)",
                    "Θ(n³)"
                ],
                answer: ["D"]  // Θ(n³) - dominated by h(n)
            },
            {
                id: "2c3",
                text: "If f(n) ∈ Θ(n), g(n) ∈ O(n²), and h(n) ∈ Θ(n³), in which category does f(n) · g(n) · h(n) belong?",
                options: [
                    "O(n⁶)",
                    "O(n⁵)",
                    "O(n⁴)",
                    "O(n³)"
                ],
                answer: ["A"]  // O(n⁶) = Θ(n) * O(n²) * Θ(n³)
            },
            {
                id: "2d1",
                text: "Select each choice that is a line of pseudocode with a constant worst-case cost. There may be more than one correct choice.",
                options: [
                    "if Time < 3",
                    "Total ← Total + 6",
                    "while Factorial(Num) < 12",
                    "return Total // 4"
                ],
                answer: ["A", "B", "D"]
            },
            {
                id: "2d2",
                text: "Suppose that the running time of an algorithm is in Θ(m(I + A + D)). Which option gives the smallest running time?",
                options: [
                    "Θ(I) = Θ(1), Θ(A) = Θ(1), Θ(D) = Θ(1)",
                    "Θ(I) = Θ(n), Θ(A) = Θ(1), Θ(D) = Θ(1)",
                    "Θ(I) = Θ(1), Θ(A) = Θ(n), Θ(D) = Θ(1)",
                    "Θ(I) = Θ(1), Θ(A) = Θ(1), Θ(D) = Θ(n)"
                ],
                answer: ["A"]  // All constant gives smallest
            },
            {
                id: "2e1",
                text: "How should Python lists be used in the course?",
                options: [
                    "The more Python lists you use, the higher the mark you will get.",
                    "You should always use Python tuples instead of Python lists.",
                    "Only a limited set of Python list methods and functions should be used.",
                    "You should never use Python lists in this course."
                ],
                answer: ["C"]
            }
        ]
    },
    3: {
        title: "Module 3",
        topic: "Contiguous & Linked Implementations",
        questions: [
            {
                id: "3a1",
                text: "Select each choice that is a true statement. There may be more than one correct choice.",
                options: [
                    "For one ADT, there may be more than one contiguous implementation.",
                    "For a particular data structure, there may be more than one definition of the implementation.",
                    "For a particular definition of an implementation and a particular ADT operation, there may be more than one algorithm.",
                    "For a particular algorithm, there may be more than one worst-case running time with respect to the input size."
                ],
                answer: ["A", "B", "C"]
            },
            {
                id: "3a2",
                text: "Select each choice that is a correct implementation of Delete. There may be more than one correct choice.",
                options: [
                    "Searching from the first slot to the last, delete the first copy found",
                    "Searching from the first slot to the last, delete the last copy found",
                    "Searching from the last slot to the first, delete the first copy found",
                    "Searching from the last slot to the first, delete the last copy found"
                ],
                answer: ["A", "B", "C", "D"]  // All are correct implementations
            },
            {
                id: "3b1",
                text: "Select each choice that is a possible way that running times might be improved over those found in our implementation. Each choice needs to be a correct algorithm for some implementation and different from the first implementation we considered. There may be more than one correct choice.",
                options: [
                    "Save time on Create by not initializing the slots.",
                    "Save time on Is_In by searching only the first slot.",
                    "Save time on Add by keeping track of where an empty slot can be found.",
                    "Save time on Delete by deleting the first copy of the data item found."
                ],
                answer: ["A", "C", "D"]
            },
            {
                id: "3b2",
                text: "What dominates the cost of the Add operation for contiguous implementation 2?",
                options: [
                    "Searching for an empty slot in which to add the new data item",
                    "Modifying of the array by adding the new data item",
                    "Ensuring that the definition of the implementation is satisfied",
                    "All of the above"
                ],
                answer: ["C"]  // Ensuring definition is satisfied
            },
            {
                id: "3c1",
                text: "Select each choice that is a true statement about defining a class. There may be more than one correct choice.",
                options: [
                    "Use class to define a class.",
                    "Use a docstring.",
                    "Use self to refer to an object.",
                    "Use dot notation for (most) methods."
                ],
                answer: ["A", "B", "C", "D"]  // All are true
            },
            {
                id: "3d1",
                text: "Select each choice that can be used to create a Contiguous object of size 10. There may be more than one correct choice.",
                options: [
                    "self = 10",
                    "self.contiguous = 10",
                    "contiguous.contiguous(10)",
                    "Contiguous(10)"
                ],
                answer: ["D"]  // Only Contiguous(10) is correct
            },
            {
                id: "3d2",
                text: "Select each choice that is an ADT Multiset operation that is implemented using operator overloading. There may be more than one correct choice.",
                options: [
                    "Create",
                    "Is_In",
                    "Add",
                    "Delete"
                ],
                answer: ["B"]  // Is_In uses __contains__
            },
            {
                id: "3d3",
                text: "Select each choice that is an ADT Multiset operation for which the implementation changes self._first. There may be more than one correct choice.",
                options: [
                    "Create",
                    "Is_In",
                    "Add",
                    "Delete"
                ],
                answer: ["A", "C", "D"]
            },
            {
                id: "3d4",
                text: "Select each choice that is role you played in an activity on this page. There may be more than one correct choice.",
                options: [
                    "User of the module contiguous.py",
                    "Provider of the module contiguous.py",
                    "User of the ADT Multiset",
                    "Provider of the ADT Multiset"
                ],
                answer: ["A", "C", "D"]
            },
            {
                id: "3e1",
                text: "Select each choice that is a true statement about the illustration of the linked list presented above. There may be more than one correct choice.",
                options: [
                    "The linked node in the first position stores the data item 3.",
                    "The predecessor of the linked node storing the data item 1 stores the data item 6.",
                    "The linked node storing the data item 5 contains a null pointer.",
                    "The address of the linked node containing the data item 2 is smaller than the address of the linked node containing the data item 6."
                ],
                answer: null  // Cannot determine without seeing the image
            },
            {
                id: "3e2",
                text: "Select each choice that gives a step in the algorithm and a circumstance in which Current becomes the null pointer. There may be more than one correct choice.",
                options: [
                    "In the first step, the list is empty.",
                    "In the first step, the linked node in the first position contains a null pointer.",
                    "In the fourth step, Data and the data item in Node are equal.",
                    "In the fourth step, Data and the data item in Node are not equal and Current is pointing to the last linked node."
                ],
                answer: ["A", "D"]
            },
            {
                id: "3e3",
                text: "The algorithm we presented is only one possible algorithm for Add in the implementation of the ADT Multiset as a linked list. Select each choice that is a location in which a data item can be added to a linked list in a correct algorithm for Add. There may be more than one correct choice.",
                options: [
                    "At the beginning of the linked list",
                    "At the end of the linked list",
                    "Before the first copy of the same data item, if any",
                    "After the last copy of the same data item, if any"
                ],
                answer: ["A", "B", "C", "D"]  // All are valid locations
            },
            {
                id: "3e4",
                text: "What change is needed in order to delete the data item 6?",
                options: [
                    "The pointer in the linked node to which Current points should be changed to the pointer in the linked node to which Head points.",
                    "The pointer in the linked node to which Head points should be changed to the pointer in the linked node containing 2.",
                    "The pointer in the linked node containing 2 should be changed to the pointer in the linked node to which Current points.",
                    "The pointer in the linked node containing 6 should be changed to the pointer contained in Current."
                ],
                answer: null  // Depends on specific diagram
            },
            {
                id: "3e5",
                text: "After it has been initialized to Head, how many times is the Previous pointer updated if the data item to be removed is in the first linked node?",
                options: [
                    "0",
                    "1",
                    "k",
                    "k-1"
                ],
                answer: ["A"]  // 0 times - found immediately
            },
            {
                id: "3e6",
                text: "Select each choice that is an operation with constant best-case running time in the linked implementation. There may be more than one correct choice.",
                options: [
                    "Create",
                    "Is_In",
                    "Add",
                    "Delete"
                ],
                answer: ["A", "B", "C", "D"]  // All have constant best-case
            },
            {
                id: "3f1",
                text: "Suppose that current is a linked node. Which of the following will produce the value stored in the node to which current points?",
                options: [
                    "current.next.access",
                    "current.access.next",
                    "current.next().access()",
                    "current.access().next()"
                ],
                answer: null  // Depends on implementation details
            },
            {
                id: "3g1",
                text: "Select each choice that is a false statement. There may be more than one correct choice.",
                options: [
                    "The ADT Multiset is the only way to solve the case study.",
                    "The implementations we considered are the only possible implementations of the ADT Multiset.",
                    "Restricting the type of data supported might result in faster algorithms for operations.",
                    "For any implementation, there is only one way to write an algorithm for each operation."
                ],
                answer: ["A", "B", "D"]  // C is true, others are false
            }
        ]
    },
    4: {
        title: "Module 4",
        topic: "Stack, Queue, Indexed Sequence, Ranking, Grid",
        questions: [
            {
                id: "4a1",
                text: "Select each choice that is a true statement about Racket code with matching parentheses and brackets. There may be more than one correct choice.",
                options: [
                    "The number of left parentheses and brackets must equal the number of right parentheses and brackets.",
                    "A pair can match only if they are consecutive (that is, there are no other parentheses or brackets between them).",
                    "In a matching pair, the left must come before the right.",
                    "For any parenthesis or bracket between a matching pair, its match must also be between the same matching pair."
                ],
                answer: ["A", "C", "D"]
            },
            {
                id: "4a2",
                text: "At which positions in the \"pile\" do operations such as addition and deletion take place?",
                options: [
                    "Top only",
                    "Bottom only",
                    "Top and bottom",
                    "All positions"
                ],
                answer: ["A"]  // Stack - top only
            },
            {
                id: "4a3",
                text: "Select each choice that is an example of a case study that might be able to make use of a stack. There may be more than one correct choice.",
                options: [
                    "Maintaining a record of calls to a recursive function in order to use the results of one in another.",
                    "Keeping track of edits to a document so that they can be undone.",
                    "Recording who is next in line at the bank.",
                    "Storing directions taken in the exploration of a maze so that it is possible to find one's way back."
                ],
                answer: ["A", "B", "D"]  // C is Queue, not Stack
            },
            {
                id: "4b1",
                text: "What is the worst-case cost of the operation Top in contiguous implementation 1 in an array of size s storing k data items, assuming the best possible algorithm?",
                options: [
                    "Θ(1)",
                    "Θ(k)",
                    "Θ(s)",
                    "Θ(k + s)"
                ],
                answer: ["B"]  // Need to find top, which requires scanning k items
            },
            {
                id: "4b2",
                text: "What is the worst-case cost of the operation Pop in contiguous implementation 1 in an array of size s storing k data items, assuming the best possible algorithm?",
                options: [
                    "Θ(1)",
                    "Θ(k)",
                    "Θ(s)",
                    "Θ(k + s)"
                ],
                answer: ["B"]  // Θ(k)
            },
            {
                id: "4b3",
                text: "Which statement is true of the variable Top in contiguous implementation 3?",
                options: [
                    "It is never read before it is written, so we do not need to initialize it.",
                    "We can initialize it to 0.",
                    "We can initialize it to -1.",
                    "Once it has been initialized, it never changes."
                ],
                answer: ["C"]  // Initialize to -1 for empty stack
            },
            {
                id: "4b4",
                text: "Select each algorithm for contiguous implementation 3 that runs in constant time in the worst case. There may be more than one correct choice.",
                options: [
                    "Create",
                    "Is_Empty",
                    "Top",
                    "Push",
                    "Pop"
                ],
                answer: ["A", "B", "C", "D", "E"]  // All are O(1)
            },
            {
                id: "4b5",
                text: "Select each change to the implementation that might allow a faster algorithm for Pop. There may be more than one correct choice.",
                options: [
                    "Instead of a pointer to the last node in the linked list, use a pointer to the second-to-last node in the linked list.",
                    "Use pointers to both the last node in the linked list and the second-to-last node in the linked list.",
                    "Rearrange the data items so that the data item under the data item at the top of the stack can be found easily from the data item at the top of the stack.",
                    "Rearrange the data items so that the data item above the data item at the bottom of the stack can be found easily from the data item at the bottom of the stack."
                ],
                answer: ["B", "C"]
            },
            {
                id: "4b6",
                text: "Select each algorithm for linked implementation 3 that runs in constant time in the worst case. There may be more than one correct choice.",
                options: [
                    "Create",
                    "Is_Empty",
                    "Top",
                    "Push",
                    "Pop"
                ],
                answer: ["A", "B", "C", "D", "E"]  // All O(1) with proper implementation
            },
            {
                id: "4b7",
                text: "Using the best option, what is the worst-case cost of our case study algorithm as a function of n, the number of data items?",
                options: [
                    "Θ(1)",
                    "Θ(n + 2)",
                    "Θ(n)",
                    "Θ(n²)"
                ],
                answer: ["C"]  // Θ(n)
            },
            {
                id: "4c1",
                text: "What is the worst-case running time of an algorithm for Front as a function of s, the size of the array, and k, the number of data items in the array at the time of the operation?",
                options: [
                    "Θ(1)",
                    "Θ(k)",
                    "Θ(s)",
                    "Θ(k + s)"
                ],
                answer: ["A"]  // Θ(1) - direct access
            },
            {
                id: "4c2",
                text: "What is the worst-case running time of an algorithm for Enqueue as a function of k, the number of data items in the array at the time of the operation?",
                options: [
                    "Θ(1)",
                    "Θ(log k)",
                    "Θ(k)",
                    "Θ(k log k)"
                ],
                answer: ["C"]  // Θ(k) - may need to shift
            },
            {
                id: "4c3",
                text: "For each operation, select the worst-case running time of its algorithm as a function of s, the size of the array, and k, the number of data items in the array at the time of the operation. [Create(), Is_Empty(Q), Front(Q), Enqueue(Q, Data), Dequeue(Q)]",
                options: [
                    "Θ(1)",
                    "Θ(k)",
                    "Θ(s)",
                    "Θ(ks)"
                ],
                answer: "Create: Θ(s), Is_Empty: Θ(1), Front: Θ(1), Enqueue: Θ(1), Dequeue: Θ(1)"
            },
            {
                id: "4c4",
                text: "Select each choice that is an operation that can be executed in constant time in the implementation. There may be more than one correct choice.",
                options: [
                    "Create",
                    "Is_Empty",
                    "Front",
                    "Enqueue",
                    "Dequeue"
                ],
                answer: ["B", "C", "D", "E"]  // All except Create which is Θ(s)
            },
            {
                id: "4d1",
                text: "In which positions can data items be added and deleted?",
                options: [
                    "Added at the front and deleted at the back",
                    "Added at the back and deleted at the front",
                    "Added or deleted at the front or the back",
                    "Added or deleted at any position"
                ],
                answer: ["D"]  // Indexed Sequence - any position
            },
            {
                id: "4d2",
                text: "Select each choice that is an operation that can be executed in constant time in the worst case in contiguous implementation 3. There may be more than one correct choice.",
                options: [
                    "Create(Cap)",
                    "Is_Empty(I)",
                    "Add(I, Index, Data)",
                    "Delete(I, Index)"
                ],
                answer: ["A", "B"]  // Create and Is_Empty are O(1)
            },
            {
                id: "4e1",
                text: "Select each choice that is an operation that can be implemented in constant time in the best case for the implementation just discussed. You might need to change the algorithms. There may be more than one correct choice.",
                options: [
                    "Is_Empty(R)",
                    "Look_Up(R, Rank)",
                    "Add(R, Rank, Data)",
                    "Delete(R, Rank)"
                ],
                answer: ["A", "B", "C", "D"]  // All can be O(1) in best case
            },
            {
                id: "4e2",
                text: "For each operation, select the worst-case running time of its algorithm as a function of n, the number of data items stored, and p, the value of Rank. [Look_Up(R, Rank), Add(R, Rank, Data), Delete(R, Rank)]",
                options: [
                    "Θ(1)",
                    "Θ(p)",
                    "Θ(n-p)",
                    "Θ(n)",
                    "Θ(n+p)"
                ],
                answer: "Look_Up: Θ(p), Add: Θ(n-p), Delete: Θ(n-p)"
            },
            {
                id: "4e3",
                text: "For each operation, select the worst-case running time of its algorithm as a function of n, the number of data items stored, and p, the value of Rank. [Create(), Is_Empty(R), Max_Ranking(R), Look_Up(R, Rank), Add(R, Rank, Data), Delete(R, Rank)]",
                options: [
                    "Θ(1)",
                    "Θ(p)",
                    "Θ(n-p)",
                    "Θ(n)",
                    "Θ(n+p)"
                ],
                answer: "Create: Θ(1), Is_Empty: Θ(1), Max_Ranking: Θ(1), Look_Up: Θ(1), Add: Θ(n), Delete: Θ(n)"
            },
            {
                id: "4e4",
                text: "How do the algorithms and worst-case running times (in Θ notation, as a function of n) for linked implementation 2 compare to those for linked implementation 1?",
                options: [
                    "All algorithms and running times are the same",
                    "All running times are the same, but algorithms may be different",
                    "All algorithms are the same, but running times may be different",
                    "All algorithms and running times are different"
                ],
                answer: ["B"]  // Running times same, algorithms may differ
            },
            {
                id: "4f1",
                text: "Which one-dimensional ADT does our two-dimensional ADT most closely resemble?",
                options: [
                    "ADT Stack",
                    "ADT Queue",
                    "ADT Indexed Sequence",
                    "ADT Ranking"
                ],
                answer: ["C"]  // Indexed Sequence - access by position
            },
            {
                id: "4f2",
                text: "Select each choice that is an example of a case study that might be able to make use of an ADT Grid. There may be more than one correct choice.",
                options: [
                    "Recording who is next in line at the bank",
                    "Representing the colour used in each pixel in an image",
                    "Keeping track of edits to a document so that they can be undone",
                    "Keeping track of information about blocks in a city"
                ],
                answer: ["B", "D"]  // 2D data structures
            },
            {
                id: "4f3",
                text: "Consider Grid contiguous implementation 1. For each operation, select the worst-case running time of its algorithm as a function of r, the number of rows, c, the number of columns, and n, the number of data items stored in the ADT at the time of the operation. [Create(Num_Rows, Num_Cols), Rows(G), Is_Empty(G), Look_Up(G, Row, Col), Add(G, Row, Col, Data)]",
                options: [
                    "Θ(1)",
                    "Θ(n)",
                    "Θ(rc)",
                    "Θ(n+rc)"
                ],
                answer: "Create: Θ(rc), Rows: Θ(1), Is_Empty: Θ(1), Look_Up: Θ(1), Add: Θ(1)"
            },
            {
                id: "4f4",
                text: "In linked implementation 2, what is the worst-case cost Look_Up(G, Row, Col) as a function of r, the number of rows, c, the number of columns, and n, the number of data items being stored?",
                options: [
                    "Θ(1)",
                    "Θ(n)",
                    "Θ(rc)",
                    "Θ(n+rc)"
                ],
                answer: ["B"]  // Θ(n) - need to search through linked list
            },
            {
                id: "4f5",
                text: "Select each choice that is a true statement about the implementation using the ADT A and the ADT Indexed Sequence. There may be more than one correct choice.",
                options: [
                    "The provider of the ADT A is the user of the ADT Indexed Sequence.",
                    "The provider of the ADT Indexed Sequence is the user of the ADT A.",
                    "The provider of the ADT Grid is the user of the ADT Indexed Sequence.",
                    "The provider of the ADT Indexed Sequence is the user of the ADT Grid."
                ],
                answer: ["A", "C"]
            }
        ]
    },
    5: {
        title: "Module 5",
        topic: "Trees (Binary, Ordered, Unordered)",
        questions: [
            {
                id: "5a1",
                text: "Select each choice that is the number of possible edges in a tree with 20 nodes. There may be more than one correct choice.",
                options: [
                    "0",
                    "19",
                    "20",
                    "21"
                ],
                answer: ["B"]  // A tree with n nodes has n-1 edges
            },
            {
                id: "5a2",
                text: "Select each choice that is a true statement about children and parents. There may be more than one correct choice.",
                options: [
                    "A node can have more than one parent.",
                    "A node can have less than one parent.",
                    "A node can have more than one child.",
                    "A node can have less than one child."
                ],
                answer: ["B", "C", "D"]  // Root has no parent; leaves have no children; internal nodes can have multiple children
            },
            {
                id: "5a3",
                text: "Select each choice that is a true statement about any rooted tree. There may be more than one correct choice.",
                options: [
                    "The root does not have any siblings.",
                    "Two different nodes cannot have exactly the same set of descendants.",
                    "Two different nodes cannot have exactly the same set of siblings.",
                    "Two different nodes cannot have the same parents."
                ],
                answer: ["A", "B"]
            },
            {
                id: "5a4",
                text: "Select each choice that is a true statement about any rooted tree. There may be more than one correct choice.",
                options: [
                    "None of the ancestors of a node can be leaves.",
                    "If a node has descendants, at least one must be a leaf.",
                    "An internal node must have a sibling.",
                    "For any node in the tree, each other node is either its descendant or its ancestor."
                ],
                answer: ["A", "B"]
            },
            {
                id: "5a5",
                text: "Select each choice that can be the number of nodes in a perfect binary tree. There may be more than one correct choice.",
                options: [
                    "3",
                    "4",
                    "7",
                    "15"
                ],
                answer: ["A", "C", "D"]  // 2^n - 1: 1, 3, 7, 15, ...
            },
            {
                id: "5a6",
                text: "How many different shapes are possible for complete tree with 10 nodes?",
                options: [
                    "0",
                    "1",
                    "2",
                    "10"
                ],
                answer: ["B"]  // Only 1 shape for complete tree
            },
            {
                id: "5a7",
                text: "Select each choice that is an example of a case study that might be able to make use of a tree. There may be more than one correct choice.",
                options: [
                    "Diagramming a sentence using grammatical rules",
                    "Representing how languages evolved",
                    "Showing the lineage in a monarchy",
                    "Indicating the chain of command in the military"
                ],
                answer: ["A", "B", "C", "D"]  // All are tree structures
            },
            {
                id: "5b1",
                text: "Match each ADT with the type of position used for access. [Stack, Queue, Indexed Sequence, Ranking, Grid]",
                options: [
                    "top",
                    "front and back",
                    "index",
                    "rank",
                    "row and column"
                ],
                answer: "Stack→top, Queue→front and back, Indexed Sequence→index, Ranking→rank, Grid→row and column"
            },
            {
                id: "5b2",
                text: "Select each expression that evaluates to True for the image shown. There may be more than one correct choice.",
                options: [
                    "Root(Fruit) == One",
                    "Parent(Fruit, Four) == Two",
                    "Left_Child(Fruit, Two) == False",
                    "Right_Child(Fruit, Two) == Four"
                ],
                answer: null  // Depends on specific image
            },
            {
                id: "5c1",
                text: "Select each choice that is an operation with a worst-case running time in Θ(1). There may be more than one correct choice.",
                options: [
                    "Is_Empty(B)",
                    "Root(B)",
                    "Value(B, Node)",
                    "Parent(B, Node)"
                ],
                answer: ["A", "B", "C", "D"]  // All O(1) in array implementation
            },
            {
                id: "5c2",
                text: "Select each choice that is an operation with a worst-case running time in Θ(1). There may be more than one correct choice.",
                options: [
                    "Left_Child(B, Node)",
                    "Set_Value(B, Node, Data)",
                    "Add_Leaf(B, Par, Side, Data)",
                    "Delete_Leaf(B, Node)"
                ],
                answer: ["A", "B", "C", "D"]  // All O(1)
            },
            {
                id: "5c3",
                text: "For which one of the following operations is the algorithm the most unpleasant to write?",
                options: [
                    "Is_Empty(B)",
                    "Parent(B, Node)",
                    "Add_Leaf(B, Par, Side, Data)",
                    "Delete_Leaf(B, Node)"
                ],
                answer: ["D"]  // Delete_Leaf - need to handle various cases
            },
            {
                id: "5c4",
                text: "Select each choice that is a situation that might result in Last being changed. There may be more than one correct choice.",
                options: [
                    "Add_Leaf(B, Par, Side, Data) when Par is empty",
                    "Add_Leaf(B, Par, Side, Data) when the slot for the new leaf is full",
                    "Add_Leaf(B, Par, Side, Data) when the slot for the new leaf is empty",
                    "Delete_Leaf(B, Node)"
                ],
                answer: ["A", "C", "D"]
            },
            {
                id: "5c5",
                text: "For which implementation(s) can the Sibling operation be executed in constant time?",
                options: [
                    "Linked only",
                    "Contiguous only",
                    "Both linked and contiguous",
                    "Neither linked nor contiguous"
                ],
                answer: ["C"]  // Both can do it in O(1)
            },
            {
                id: "5d1",
                text: "Select each choice that could be used to bundle together the children of a node in an ordered tree. There may be more than one correct choice.",
                options: [
                    "ADT Stack",
                    "ADT Queue",
                    "ADT Indexed Sequence",
                    "ADT Ranking"
                ],
                answer: ["C", "D"]  // Need ordered access by position
            },
            {
                id: "5e1",
                text: "What is the best choice of an ADT to use to store the nodes waiting to be processed?",
                options: [
                    "ADT Multiset",
                    "ADT Stack",
                    "ADT Queue",
                    "ADT Ranking"
                ],
                answer: ["C"]  // Queue for level-order traversal
            },
            {
                id: "5e2",
                text: "Consider the ordering of nodes formed by extracted nodes in the order in which they appear in slots in a contiguous implementation of the ADT Binary Tree. Select each traversal order that describes the ordering. There may be more than one correct choice.",
                options: [
                    "Level order",
                    "Postorder",
                    "Preorder",
                    "Inorder"
                ],
                answer: ["A"]  // Level order - array stores in level order
            }
        ]
    },
    6: {
        title: "Module 6",
        topic: "Graphs (Undirected & Directed)",
        questions: [
            {
                id: "6a1",
                text: "Select each choice that is a true statement about the graph in the image. There may be more than one correct choice.",
                options: [
                    "Vertices a and d are adjacent.",
                    "The edges {a, b} and {b, d} are incident.",
                    "There are three edges incident on the vertex a.",
                    "There is an edge with endpoints b and d."
                ],
                answer: ["B", "C", "D"]  // Based on module content
            },
            {
                id: "6a2",
                text: "Select each choice that is a true statement about the directed graph in the image. There may be more than one correct choice.",
                options: [
                    "There are two directed paths between g and f.",
                    "There is a directed path from a to d.",
                    "The indegree of d is two.",
                    "The indegree of g is equal to the outdegree of g."
                ],
                answer: ["A", "C", "D"]
            },
            {
                id: "6a3",
                text: "Select each choice that is an example of a case study that might be able to make use of a graph. There may be more than one correct choice.",
                options: [
                    "Determining connections among people in a social network.",
                    "Maintaining information about the way pages are connected by links in a web site.",
                    "Assigning courses to rooms in a way that ensures that no two courses are assigned to use the same classroom at the same time.",
                    "Recording costs of travel on toll roads."
                ],
                answer: ["A", "B", "C", "D"]  // All can use graphs
            },
            {
                id: "6b1",
                text: "Select each choice that is a true statement about any graph. There may be more than one correct choice.",
                options: [
                    "Θ(n³) dominates Θ(m).",
                    "Θ(m) dominates Θ(log n).",
                    "The sum of the degrees is greater than the number of vertices.",
                    "The sum of the degrees is less than the number of vertices."
                ],
                answer: null  // Cannot determine without knowing relationship between n and m
            },
            {
                id: "6c1",
                text: "Select each operation for which the best-case running time is in Θ(1) time for an edge list. There may be more than one correct choice.",
                options: [
                    "Neighbours(G, One)",
                    "Are_Adjacent(G, One, Two)",
                    "Add_Edge(G, One, Two)",
                    "Delete_Edge(G, One, Two)"
                ],
                answer: ["C"]  // Add_Edge is O(1) - add to front of list
            },
            {
                id: "6d1",
                text: "What is the best-case running time of Neighbours(G, One) as a function of n, the number of vertices in the graph, m, the number of edges in the graph, and d, the number of neighbours of One?",
                options: [
                    "Θ(1)",
                    "Θ(d)",
                    "Θ(n)",
                    "Θ(m)"
                ],
                answer: ["C"]  // Θ(n) - need to check all vertices in adjacency matrix
            },
            {
                id: "6e1",
                text: "What is the worst-case cost of Are_Adjacent(G, One, Two) as a function of only n and m?",
                options: [
                    "Θ(1)",
                    "Θ(n)",
                    "Θ(m)",
                    "Θ(min{m, n})"
                ],
                answer: ["D"]  // Θ(min{m, n})
            },
            {
                id: "6e2",
                text: "What is the best-case cost of Are_Adjacent(G, One, Two) as a function of only n and m?",
                options: [
                    "Θ(1)",
                    "Θ(n)",
                    "Θ(m)",
                    "Θ(min{m, n})"
                ],
                answer: ["A"]  // Θ(1) - found immediately
            }
        ]
    },
    7: {
        title: "Module 7",
        topic: "Dictionary, BST, AVL Tree, (2,3) Tree",
        questions: [
            {
                id: "7a1",
                text: "For each operation, select the worst-case running time of its algorithm as a function of n, the number of data items stored at the time of the operation. [Create(), Is_Empty(D), Look_Up(D, Key), Add(D, Key, Element), Delete(D, Key)]",
                options: [
                    "Θ(1)",
                    "Θ(log n)",
                    "Θ(n)",
                    "Θ(n²)"
                ],
                answer: "Create: Θ(1), Is_Empty: Θ(1), Look_Up: Θ(n), Add: Θ(n), Delete: Θ(n)"
            },
            {
                id: "7a2",
                text: "For each operation, select the worst case running time of its algorithm. [Create(), Is_Empty(D), Look_Up(D, Key), Add(D, Key, Element), Delete(D, Key)]",
                options: [
                    "Θ(1)",
                    "Θ(log n)",
                    "Θ(n)",
                    "Θ(n²)"
                ],
                answer: "Create: Θ(1), Is_Empty: Θ(1), Look_Up: Θ(n), Add: Θ(n), Delete: Θ(n)"
            },
            {
                id: "7a3",
                text: "Select each choice that has a running time that is faster for linear search in an ordered array than for linear search in an unordered array. There may be more than one correct choice.",
                options: [
                    "Best case for successful search",
                    "Worst case for successful search",
                    "Best case for unsuccessful search",
                    "Worst case for unsuccessful search"
                ],
                answer: ["C"]  // Best case for unsuccessful - can stop early
            },
            {
                id: "7a4",
                text: "Select each choice that is a true statement about the algorithms for the two ordered implementations. There may be more than one correct choice.",
                options: [
                    "For each implementation, the worst-case costs of Add(D, Key, Element) and Delete(D, Key) are asymptotically the same.",
                    "The worst-case cost of Look_Up(D, Key) is smaller for the ordered array.",
                    "The cost of modification is linear in the contiguous implementation.",
                    "The cost of search is linear in the linked implementation."
                ],
                answer: ["A", "B", "C", "D"]  // All are true
            },
            {
                id: "7b1",
                text: "Select each choice that is also a correct description of the order in which data items are inserted. There may be more than one correct choice.",
                options: [
                    "Into an ordered array in increasing order by key",
                    "Into an ordered array in nonincreasing order by key",
                    "Into an ordered linked list in decreasing order by key",
                    "Into an ordered linked list in nondecreasing order by key"
                ],
                answer: ["A", "C"]
            },
            {
                id: "7b2",
                text: "Select each choice that is a tree traversal order that is guaranteed to result in keys in sorted order in a BST. There may be more than one correct choice.",
                options: [
                    "Level order",
                    "Preorder",
                    "Postorder",
                    "Inorder"
                ],
                answer: ["D"]  // Inorder gives sorted order
            },
            {
                id: "7c1",
                text: "Select each choice that is a true statement about operations on a binary search tree. There may be more than one correct choice.",
                options: [
                    "The only type of node that is added is a leaf.",
                    "The only type of node that is deleted is a leaf.",
                    "The Add operation does not always add a node.",
                    "The Delete operation does not always delete a node."
                ],
                answer: ["A", "C"]  // Add always adds leaf; Add may replace; Delete always deletes
            },
            {
                id: "7d1",
                text: "Select each choice that is an ADT Dictionary operation implemented in a binary search tree with a worst-case cost linear in the height of the tree. There may be more than one correct choice.",
                options: [
                    "Create",
                    "Look_Up",
                    "Add",
                    "Delete"
                ],
                answer: ["B", "C", "D"]  // Create is O(1)
            },
            {
                id: "7e1",
                text: "Select each choice that is a true statement about ADT Dictionary operations on a BST that is required to be a perfect tree. There may be more than one correct choice.",
                options: [
                    "Create() can be implemented in Θ(1) time.",
                    "Look_Up(D, Key) can be implemented in Θ(log n) time.",
                    "Add(D, Key, Element) can be implemented in Θ(log n) time.",
                    "Delete(D, Key) can be implemented in Θ(log n) time."
                ],
                answer: ["A", "B"]  // Add/Delete require restructuring perfect tree
            },
            {
                id: "7e2",
                text: "Select each operation that has worst-case running time that is logarithmic in the number of data items stored. There may be more than one correct choice.",
                options: [
                    "Create",
                    "Look_Up",
                    "Add",
                    "Delete"
                ],
                answer: ["B", "C", "D"]  // For AVL tree - all except Create
            },
            {
                id: "7f1",
                text: "In the worst case, how many pointers need to be changed for Case 3?",
                options: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                answer: ["C"]  // 3 pointers
            },
            {
                id: "7f2",
                text: "Select each choice that is true for all rotations. There may be more than one correct choice.",
                options: [
                    "The rotation ensures that the binary search tree property is preserved.",
                    "The rotation ensures that the height balance property is restored.",
                    "The rotation can be executed in constant time.",
                    "The rotation restores the height of the subtree to the same as before modification."
                ],
                answer: ["A", "B", "C"]  // D is not always true (Case 3)
            },
            {
                id: "7g1",
                text: "Select each choice that is a true statement about multiway search trees with d ranges. There may be more than one correct choice.",
                options: [
                    "If d is a constant, the best worst-case running time is asymptotically the same as for a binary search tree.",
                    "If d is a constant, the best worst-case running time is asymptotically better than for a binary search tree.",
                    "If d is not a constant, the time to process a node is constant.",
                    "If d is not a constant, the time to process a node is not a constant."
                ],
                answer: ["A", "D"]
            }
        ]
    },
    8: {
        title: "Module 8",
        topic: "Priority Queue & Heaps",
        questions: [
            {
                id: "8a1",
                text: "Select each choice that is a true statement about both keys in the ADT Priority Queue and ranks in the ADT Ranking. There may be more than one correct choice.",
                options: [
                    "They must be consecutive.",
                    "They are orderable data.",
                    "They must be distinct.",
                    "They can change as a result of operations."
                ],
                answer: ["B"]  // Both are orderable; ranks must be consecutive/distinct, keys don't
            },
            {
                id: "8a2",
                text: "Select each choice that is an implementation for which Add(P, Key, Element) can be executed in constant time in the worst case. There may be more than one correct choice.",
                options: [
                    "Ordered array",
                    "Unordered array",
                    "Ordered linked list",
                    "Unordered linked list"
                ],
                answer: ["B", "D"]  // Unordered - just add to end/front
            },
            {
                id: "8a3",
                text: "Select each choice that is an implementation for which Delete_Min(P) can be executed in constant time in the worst case. There may be more than one correct choice.",
                options: [
                    "Ordered array",
                    "Unordered array",
                    "Ordered linked list",
                    "Unordered linked list"
                ],
                answer: ["A", "C"]  // Ordered - min is at known position
            },
            {
                id: "8b1",
                text: "For each operation, select the worst-case running time of its algorithm using the AVL tree implementation. [Create(), Is_Empty(P), Look_Up_Min(), Add(P, Key, Element), Delete_Min(P)]",
                options: [
                    "Θ(1)",
                    "Θ(log n)",
                    "Θ(n)"
                ],
                answer: "Create: Θ(1), Is_Empty: Θ(1), Look_Up_Min: Θ(log n), Add: Θ(log n), Delete_Min: Θ(log n)"
            },
            {
                id: "8b2",
                text: "Select each choice that is a way of ensuring logarithmic height for a binary tree with the heap-order property. There may be more than one correct choice.",
                options: [
                    "Use an AVL tree.",
                    "Use a (2,3) tree.",
                    "Use a perfect binary tree.",
                    "Use a complete binary tree."
                ],
                answer: ["C", "D"]  // Perfect and complete ensure log height
            },
            {
                id: "8b3",
                text: "Select each choice that is a consequence of a binary tree being complete. There may be more than one correct choice.",
                options: [
                    "The paths from the root to each leaf have the same length.",
                    "The height is logarithmic in the number of nodes.",
                    "The array implementation works well.",
                    "Every node has either zero or two children."
                ],
                answer: ["B", "C"]  // A is for perfect tree; D is for full tree
            },
            {
                id: "8b4",
                text: "Select each choice that is true of any heap containing at least two data items. There may be more than one correct choice.",
                options: [
                    "The root contains the smallest key.",
                    "The second-smallest key is in a child of the root. (Remember that keys need not be distinct, so the smallest key and the second-smallest key might be equal.)",
                    "Keys in the path from a root to a leaf appear in nondecreasing order.",
                    "The value in a node's left child is smaller than the value in its right child."
                ],
                answer: ["A", "B", "C"]  // D is not guaranteed
            },
            {
                id: "8c1",
                text: "Suppose that we added a pointer Last to the last leaf in a linked implementation of an ADT Binary Tree. What is the worst-case cost of implementing Previous_Leaf(B)?",
                options: [
                    "Θ(1)",
                    "Θ(log n)",
                    "Θ(n)",
                    "Θ(n log n)"
                ],
                answer: ["B"]  // Θ(log n) - traverse up and down tree
            },
            {
                id: "8d1",
                text: "Select each choice that is a possible adjustment that might need to be made. There may be more than one correct choice.",
                options: [
                    "The shape of the tree might need to be changed by adding nodes.",
                    "The shape of the tree might need to be changed by deleting nodes.",
                    "The heap-order property might not be satisfied due to the new root.",
                    "The heap-order property might not be satisfied due to one of the leaves."
                ],
                answer: ["C"]  // Only heap-order at root needs fixing (bubble down)
            }
        ]
    },
    9: {
        title: "Module 9",
        topic: "Hashing & Average-Case Analysis",
        questions: [
            {
                id: "9a1",
                text: "What is the best worst-case running time of a searching algorithm that we've considered so far?",
                options: [
                    "Θ(1)",
                    "Θ(log n)",
                    "Θ(n)",
                    "Θ(n log n)"
                ],
                answer: ["B"]  // Θ(log n) - binary search / BST
            },
            {
                id: "9a2",
                text: "What is the best worst-case running time of a sorting algorithm that we've considered so far?",
                options: [
                    "Θ(1)",
                    "Θ(log n)",
                    "Θ(n)",
                    "Θ(n log n)"
                ],
                answer: ["D"]  // Θ(n log n) - heapsort
            },
            {
                id: "9a3",
                text: "For which of the algorithms is average-case asymptotically better than worst-case, assuming a uniform distribution?",
                options: [
                    "Linear search only",
                    "Binary search only",
                    "Both linear search and binary search",
                    "Neither linear search nor binary search"
                ],
                answer: ["D"]  // Neither - both have same asymptotic avg and worst case
            },
            {
                id: "9a4",
                text: "Which method would you be likely to use to look up the word \"walrus\" in a dictionary?",
                options: [
                    "Linear search",
                    "Binary search",
                    "Open the dictionary to where the W's are likely to be",
                    "Open the dictionary to a random page"
                ],
                answer: ["C"]  // Interpolation search - go to expected location
            },
            {
                id: "9b1",
                text: "Select each choice of ordering that gives the smallest average cost. There may be more than one correct choice.",
                options: [
                    "cat pig ape dog",
                    "pig cat dog ape",
                    "pig ape cat dog",
                    "dog pig cat ape"
                ],
                answer: null  // Depends on frequency of each item
            },
            {
                id: "9b2",
                text: "What is the worst-case cost of a successful search in a list of n data items?",
                options: [
                    "Θ(1)",
                    "Θ(log n)",
                    "Θ(n)",
                    "Θ(n²)"
                ],
                answer: ["C"]  // Θ(n) - item at end
            },
            {
                id: "9c1",
                text: "Select each choice that is a goal of hashing. There may be more than one correct choice.",
                options: [
                    "The hash function distributes keys among buckets as evenly as possible.",
                    "The hash function does not take a lot of time to compute.",
                    "Collision resolution minimizes the average number of probes required.",
                    "Collision resolution does not take a lot of time to compute."
                ],
                answer: ["A", "B", "C", "D"]  // All are goals of hashing
            },
            {
                id: "9d1",
                text: "Select each choice of a step size that is not guaranteed to prevent clustering. There may be more than one correct choice.",
                options: [
                    "-2",
                    "-1",
                    "2",
                    "3"
                ],
                answer: ["A", "C"]  // Non-coprime with table size can cause clustering
            },
            {
                id: "9d2",
                text: "For each property, select whether it is true of separate chaining only, open addressing only, both separate chaining and open addressing, or neither.",
                options: [
                    "Clustering is possible: Open addressing only",
                    "A hash function might map two keys to the same bucket: Both",
                    "In the special case in which an addition adds a data item with a key that does not already appear in the ADT, a data item can be added in constant time in the worst case: Separate chaining only"
                ],
                answer: "Clustering: Open addressing only; Hash collision: Both; Constant add: Separate chaining only"
            },
            {
                id: "9e1",
                text: "We wish to obtain worst-case costs of Θ(1) for Add_To_Bucket(Bᵢ, Value) and Θ(k) for Return_Contents(Bᵢ), where k is the number of data items in Bᵢ, or constant for an empty bucket. Select each choice of an implementation that yields these costs. There may be more than one correct choice.",
                options: [
                    "ADT Stack",
                    "ADT Queue",
                    "ADT Indexed Sequence",
                    "ADT Ranking"
                ],
                answer: ["A", "B"]  // Stack and Queue allow O(1) add
            }
        ]
    },
    10: {
        title: "Module 10",
        topic: "Skip Lists, Multi-dimensional Data, Tries",
        questions: [
            {
                id: "10a1",
                text: "What is the worst-case running time of the search algorithm as a function of n, the number of data items?",
                options: [
                    "Θ(1)",
                    "Θ(log n)",
                    "Θ(n)",
                    "Θ(n log n)"
                ],
                answer: ["C"]  // Θ(n) worst case for skip list
            },
            {
                id: "10a2",
                text: "What is the worst-case running time of the search algorithm as a function of n, the number of data items, when all the data items have height 1?",
                options: [
                    "Θ(1)",
                    "Θ(log n)",
                    "Θ(n)",
                    "Θ(n log n)"
                ],
                answer: ["C"]  // Θ(n) - degenerates to linked list
            },
            {
                id: "10b1",
                text: "Select each choice that has a type of pointer that has appeared in the linked implementation of a tree considered in this course. There may be more than one correct choice.",
                options: [
                    "A pointer from a node to its parent",
                    "A pointer from a node to its first child",
                    "A pointer from a node to its next sibling",
                    "A pointer from a node to its previous sibling"
                ],
                answer: ["A", "B", "C"]  // All except previous sibling
            },
            {
                id: "10c1",
                text: "Which of the tree traversal orders might help us find the rest of the data items in the range?",
                options: [
                    "Level order traversal",
                    "Postorder traversal",
                    "Preorder traversal",
                    "Inorder traversal"
                ],
                answer: ["D"]  // Inorder - gives sorted order for range queries
            },
            {
                id: "10d1",
                text: "Why might links based on symbols be better than links based on children in a tree?",
                options: [
                    "The length of a string is a constant with respect to the number of data items.",
                    "The number of symbols is a constant with respect to the number of data items.",
                    "The number of data items is constant with respect to the length of a string.",
                    "The number of data items is constant with respect to the number of symbols."
                ],
                answer: ["B"]  // Alphabet size is constant
            }
        ]
    }
};

