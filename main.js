const {app, BrowserWindow} = require('electron');
const path = require('path');
const { autoUpdater } = require("electron-updater");


const createWindow = function()
{
    const window = new BrowserWindow({
        width: 500,
        height: 400
    });
    console.log(__dirname);
    window.loadFile(path.join(__dirname, '/views/index.html'));
}

app.whenReady().then(function()
{
    createWindow();
})
export default class AppUpdater {
    constructor() {
      const log = require("electron-log")
      log.transports.file.level = "debug"
      autoUpdater.logger = log
      autoUpdater.checkForUpdatesAndNotify()
    }
  }