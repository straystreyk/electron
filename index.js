const fetch = require("node-fetch");
const { app, BrowserWindow } = require("electron")


const createWindow = async () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile("index.html")
}

app.whenReady().then(() => {
    createWindow()
})
