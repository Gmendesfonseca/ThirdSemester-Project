# Step 1: Install the necessary dependencies

cd electron-app
npm install @emotion/styled
npm install @mui/material
npm install @mui/icons-material
npm install

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
"exclude": ["node_modules"],
"files": [],
"references": [{ "path": "./tsconfig.node.json" }, { "path": "./tsconfig.web.json" }]
}

# Step 3: Compile and run the app (package.json)

{
"name": "electron-app",
"version": "1.0.0",
"description": "An Electron application with React and TypeScript",
"main": "./out/main/index.js",
"author": "example.com",
"homepage": "https://electron-vite.org",
"scripts": {
"format": "prettier --write .",
"lint": "eslint . --ext .js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix",
"typecheck:node": "tsc --noEmit -p tsconfig.node.json --composite false",
"typecheck:web": "tsc --noEmit -p tsconfig.web.json --composite false",
"typecheck": "npm run typecheck:node && npm run typecheck:web",
"start": "electron-vite preview",
"dev": "electron-vite dev",
"build": "npm run typecheck && electron-vite build",
"postinstall": "electron-builder install-app-deps",
"build:unpack": "npm run build && electron-builder --dir",
"build:win": "npm run build && electron-builder --win",
"build:mac": "electron-vite build && electron-builder --mac",
"build:linux": "electron-vite build && electron-builder --linux"
},
"dependencies": {
"@electron-toolkit/preload": "^3.0.0",
"@electron-toolkit/utils": "^3.0.0",
"@mui/material": "^5.15.14"
},
"devDependencies": {
"@electron-toolkit/eslint-config-prettier": "^2.0.0",
"@electron-toolkit/eslint-config-ts": "^1.0.1",
"@electron-toolkit/tsconfig": "^1.0.1",
"@testing-library/jest-dom": "^6.4.2",
"@testing-library/react": "^14.2.2",
"@testing-library/user-event": "^14.5.2",
"@types/node": "^18.19.9",
"@types/react": "^18.2.48",
"@types/react-dom": "^18.2.18",
"@vitejs/plugin-react": "^4.2.1",
"electron": "^28.2.0",
"electron-builder": "^24.9.1",
"electron-vite": "^2.0.0",
"eslint": "^8.56.0",
"eslint-plugin-react": "^7.33.2",
"prettier": "^3.2.4",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"typescript": "^5.3.3",
"vite": "^5.0.12"
}
}

# Run the app

npm run dev

###### TESTS USING JEST

NOTE: This is the test part but should be fixed, so don't install yet

npm install --save react-scripts
npm install --save web-vitals@2.1.4

"scripts": {
"start": "react-scripts start",
"serve": "npm run tsc && npm run start && npm run electron-start"
},

"dependencies": {
"react-scripts": "^4.0.3",
"web-vitals": "^2.1.4"
},
