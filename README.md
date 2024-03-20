# Step 1: Install the necessary dependencies

npm install --save react-dom@17.0.2
npm install --save-dev @types/node
npm install --save-dev @types/react
npm install --save-dev @types/react-dom
npm install typescript --save-dev

npm install --save electron
npm install --save react@17.0.2

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

npm install @mui/material@5.4.0

# Step 4: Compile and run the app (package.json)

{
"name": "my-electron-app",
"version": "1.0.0",
"description": "",
"main": "dist/main.js",
"scripts": {
"start": "tsc && electron .",
"electron-start": "electron .",
"build": "react-scripts build",
"eject": "react-scripts eject",
"tsc": "tsc",
"serve": "npm run tsc && npm run start && npm run electron-start"
},
"keywords": [],
"author": "",
"license": "ISC",
"dependencies": {
"@material-ui/core": "^4.12.3",
"electron": "^16.0.4",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-scripts": "^4.0.3",
"web-vitals": "^2.1.4"
},
"eslintConfig": {
"extends": [
"react-app",
"react-app/jest"
]
},
"browserslist": {
"production": [
">0.2%",
"not dead",
"not op_mini all"
],
"development": [
"last 1 chrome version",
"last 1 firefox version",
"last 1 safari version"
]
},
"devDependencies": {
"@types/node": "^20.11.26",
"@types/react": "^17.0.76",
"@types/react-dom": "^18.2.21",
"typescript": "^5.4.2"
}
}

# Run the app

npm run serve

###### TESTS USING JEST ######

NOTE: This is the test part but should be fixed, so don't install yet

npm install @testing-library/jest-dom@5.14.1 --save-dev
npm install @testing-library/react@11.2.7 --save-dev
npm install @testing-library/user-event@12.8.3 --save-dev
npm install --save web-vitals@2.1.4
npm install --save react-scripts@4.0.3

"scripts": {
"start": "react-scripts start",
"test": "react-scripts test",
"serve": "npm run tsc && npm run start && npm run electron-start"
},

  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },

"dependencies": {
"core-js": "^3.36.1",
"@testing-library/jest-dom": "^5.14.1",
"@testing-library/react": "^11.2.7",
"@testing-library/user-event": "^12.8.3",
"react-scripts": "^4.0.3",
"web-vitals": "^2.1.4"
},
