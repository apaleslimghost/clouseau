const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
  registerWebviews: (browserId, devtoolsId) => ipcRenderer.send('register-webviews', browserId, devtoolsId),
  focusAddressBar: () => ipcRenderer.send('focus-address-bar')
})
