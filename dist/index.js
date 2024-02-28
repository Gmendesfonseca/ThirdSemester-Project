"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
let mainWindow;
electron_1.app.on('ready', createWindows);
function createWindows() {
    mainWindow = new electron_1.BrowserWindow({
        width: 900, height: 600,
        webPreferences: {
            preload: path_1.default.join('dist', 'src', 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false,
        },
        show: false
    });
    mainWindow.loadFile("index.html");
    mainWindow.on("ready-to-show", () => mainWindow.show());
}
