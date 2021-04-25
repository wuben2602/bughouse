@ECHO OFF

REM This batch file is for combining all js files into one js file

CD js 

TYPE *.js > bughouse
RENAME "bughouse" "bughouse.js" > nul
MOVE bughouse.js .. > nul

CD ..

echo converted all files properly