import { ipcRenderer, contextBridge } from "electron";

contextBridge.exposeInMainWorld("api", {
    invoke: (channel: string, data: any) => {
        return ipcRenderer.invoke(channel, data);
    }
});