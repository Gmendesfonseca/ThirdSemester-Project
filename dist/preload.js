"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld("api", {
    invoke: (channel, data) => {
        return electron_1.ipcRenderer.invoke(channel, data);
    }
});
