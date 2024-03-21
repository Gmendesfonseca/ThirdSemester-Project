import { app, BrowserWindow } from 'electron';
import path from 'path';
import * as url from 'url';

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preloader.ts'),
    },
  });

  win.loadURL('http://localhost:3000');
}

/*  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `/../public/index.html`),
      protocol: 'file:',
      slashes: true,
    }),
  );
}*/

app.whenReady().then(createWindow),

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});