#!/bin/bash
cd "$(dirname "$0")"

if ! command -v npm >/dev/null 2>&1; then
  osascript -e 'display dialog "Node.js is not installed.\n\nInstall it from nodejs.org, then try again." buttons {"OK"} default button 1 with title "ECON 30 Website"'
  open "https://nodejs.org"
  exit 1
fi

if [ ! -d "node_modules" ]; then
  npm install
fi

if curl -s "http://localhost:5173" >/dev/null 2>&1; then
  open "http://localhost:5173"
  exit 0
fi

npm run dev &
sleep 2
open "http://localhost:5173"
