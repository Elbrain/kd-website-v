@echo off
title KD Personal Training - local site
cd /d "%~dp0"

if not exist "node_modules" (
  echo Installing dependencies ^(first run only^)...
  call npm install || (echo. & echo npm install failed & pause & exit /b 1)
)

if not exist ".next\BUILD_ID" (
  echo Building the site ^(first run only^)...
  call npm run build || (echo. & echo Build failed & pause & exit /b 1)
)

echo.
echo  ============================================
echo   KD Personal Training - local site
echo   http://localhost:3020
echo   Keep this window open. Ctrl+C to stop.
echo  ============================================
echo.

start "" "http://localhost:3020"
call npm run start
pause
