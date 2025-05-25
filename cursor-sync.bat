@echo off
chcp 65001 >nul
setlocal
:: Конфиги и гит
set CONFIG_DIR=C:\Users\atarax\AppData\Roaming\Cursor\User
set SYNC_DIR=D:\CursorSync
set GIT_REPO=https://github.com/Aleksey0x/CursorSync

echo ================================
echo   CURSOR SYNC MANAGER
echo ================================

:MENU
echo.
echo 1. Слить текущие настройки в Sync + Git Push
echo 2. Восстановить настройки из Sync
echo 3. Git Pull последних настроек
echo 4. Выйти
set /p choice=Выбери действие [1-4]: 

if "%choice%"=="1" goto BACKUP
if "%choice%"=="2" goto RESTORE
if "%choice%"=="3" goto PULL
if "%choice%"=="4" exit
goto MENU

:BACKUP
echo --- Сливаю настройки в %SYNC_DIR%...
xcopy /Y "%CONFIG_DIR%\*.json" "%SYNC_DIR%\" >nul
xcopy /Y /E /I "%CONFIG_DIR%\snippets" "%SYNC_DIR%\snippets" >nul

cd /d "%SYNC_DIR%"
git add .
git commit -m "Backup %DATE% %TIME%" >nul
git push origin main
echo --- ✅ Бэкап завершён.
pause
goto MENU

:RESTORE
echo --- Восстанавливаю из %SYNC_DIR%...
xcopy /Y "%SYNC_DIR%\*.json" "%CONFIG_DIR%\" >nul
xcopy /Y /E /I "%SYNC_DIR%\snippets" "%CONFIG_DIR%\snippets" >nul
echo --- ✅ Восстановление завершено. Перезапусти Cursor.
pause
goto MENU

:PULL
cd /d "%SYNC_DIR%"
git pull origin main
echo --- ✅ Обновлено из Git.
pause
goto MENU
