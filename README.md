some frida scripts i used for penetesting android

# if you need to spawn new process try this conmand

frida -U -f  "com.phonepe.app" -l C:\Users\user\Documents\root.js --no-pause

# for attaching to already running process

frida -U -p 21429 -l C:\Users\user\Documents\root.js --no-pause
-p meanns process id.to get process id open terminal inside adb and type "ps | grep "frida" 
please not that frida_server should run in background to get pid

