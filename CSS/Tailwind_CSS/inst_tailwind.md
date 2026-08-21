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

Breakpoints in tailwindcss ---
    
 Breakpoint Prefix	Minimum Width	 CSS Equivalent
         sm	           640px	   @media (width >= 40rem)
         md	           768px	   @media (width >= 48rem)
         lg	           1024px	   @media (width >= 64rem)
         xl	           1280px	   @media (width >= 80rem)
         2xl	       1536px	   @media (width >= 96rem)


6. npm install tailwindcss @tailwindcss/vite     

    this is used for React + Vite + Tailwind... projects
    