import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `/../public/index.js`),
      protocol: 'file:',
      slashes: true,
    }),
  );
}

app.whenReady().then(createWindow);
