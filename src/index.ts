import {app, ipcMain, BrowserWindow} from 'electron';
import path from 'path';

let mainWindow: BrowserWindow;

app.on('ready', createWindows);

function createWindows() : void {
    mainWindow = new BrowserWindow({
        width: 900, height: 600,
        webPreferences: {
            preload: path.join('dist', 'src', 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false,
        },
        show: false
    });

    mainWindow.loadFile("index.html");
    mainWindow.on("ready-to-show", () => mainWindow.show());
}