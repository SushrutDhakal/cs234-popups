@echo off
title CS 234 Module Questions
echo.
echo ========================================
echo    CS 234 Module Questions Website
echo ========================================
echo.
echo Starting server on http://localhost:9000
echo.
echo Press Ctrl+C to stop the server when done.
echo.

:: Wait a moment then open browser
start "" http://localhost:9000

:: Start the Python server
python -m http.server 9000

