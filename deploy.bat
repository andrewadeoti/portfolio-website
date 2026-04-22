@echo off
echo 🌱 Deploying Andrew's Digital Garden ^& Portfolio Website
echo ==================================================

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git is not installed. Please install Git first from https://git-scm.com/
    pause
    exit /b 1
)

REM Check if we're in the right directory
if not exist "index.html" (
    echo ❌ index.html not found. Please run this script from your website directory.
    pause
    exit /b 1
)

echo ✅ Found website files

REM Initialize git repository if not already done
if not exist ".git" (
    echo 📁 Initializing Git repository...
    git init
    echo ✅ Git repository initialized
) else (
    echo ✅ Git repository already exists
)

REM Add all files
echo 📝 Adding files to Git...
git add .

REM Commit changes
echo 💾 Committing changes...
git commit -m "Deploy portfolio website - %date% %time%"

REM Check if remote origin exists
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo 🔗 Please add your GitHub repository as remote origin:
    echo    git remote add origin https://github.com/andrewadeoti/your-repo-name.git
    echo.
    echo 📋 Steps to complete deployment:
    echo 1. Create a new repository on GitHub
    echo 2. Run: git remote add origin https://github.com/andrewadeoti/your-repo-name.git
    echo 3. Run: git push -u origin main
    echo 4. Go to repository Settings ^> Pages
    echo 5. Select 'Deploy from a branch' and choose 'main'
    echo 6. Your site will be live at: https://andrewadeoti.github.io/your-repo-name/
) else (
    echo 🚀 Pushing to GitHub...
    git push origin main
    echo ✅ Website pushed to GitHub!
    echo.
    echo 📋 Next steps:
    echo 1. Go to your GitHub repository
    echo 2. Click Settings ^> Pages
    echo 3. Select 'Deploy from a branch'
    echo 4. Choose 'main' branch
    echo 5. Click Save
    echo 6. Wait 5-10 minutes for deployment
    echo 7. Your site will be live!
)

echo.
echo 🎉 Deployment script completed!
echo 📚 Check deployment-guide.md for more deployment options
pause 