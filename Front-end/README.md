# Step 1: Install the necessary dependencies

npm install --save electron
npm install react@17.0.2 react-dom@17.0.2
npm install --save-dev typescript @types/node @types/react @types/react-dom

# Step 2: Set up TypeScript: Create tsconfig.json

{
"compilerOptions": {
"target": "es5",
"module": "commonjs",
"jsx": "react",
"outDir": "./dist",
"strict": true,
"moduleResolution": "node",
"esModuleInterop": true
},
"include": ["src/**/*"],
"exclude": ["node_modules"]
}

# Step 3: Install Material-UI

npm install @material-ui/core

# Step 4: Compile and run the app (package.json)

"name": "my-electron-app",
"version": "1.0.0",
"description": "",
"main": "dist/main.js",
"scripts": {
"start": "tsc && electron .",
"test": "echo \"Error: no test specified\" && exit 1"
},
"keywords": [],
"author": "",
"license": "ISC",
"dependencies": {
"@material-ui/core": "^4.12.4",
"electron": "^29.1.1",
"react": "^17.0.2",
"react-dom": "^17.0.2"
},
"devDependencies": {
"@types/node": "^20.11.26",
"@types/react": "^17.0.76",
"@types/react-dom": "^18.2.21",
"typescript": "^5.4.2"
}

# Run the app

npm start
