to install... tailwind CSS

1. npm init -y
2. npm install tailwindcss @tailwindcss/cli

3. Tailwind_CSS/
│
├── node_modules/
├── src/
│   ├── input.css
│   └── index.html
│
├── package.json
└── package-lock.json

4. @import "tailwindcss";     "put this in input.css"
5. npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
