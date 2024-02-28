
import { app, BrowserWindow, ipcMain } from 'electron';
import { cpus } from 'os';
import * as path from 'path'; // Import the 'path' module

ipcMain.handle('get-threads', () => {
  const threads = cpus().length;
  return threads;
});

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join('dist','src', 'preload.js'), // path to your preload script
    }
  });

  win.loadFile('index.html'); // path to your HTML file
}

app.whenReady().then(() => {
  createWindow();
});