@echo off
echo ========================================
echo LearnHub EdTech - Starting Dev Server
echo ========================================
echo.

echo Checking Node modules...
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    echo.
)

echo Starting development server...
echo The app will be available at: http://localhost:5173
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

call npm run dev
