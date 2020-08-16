const {
  BrowserWindow
} = require('electron');
const path = require('path');

function create() {
  const win = new BrowserWindow({
    width: 1000,
    height: 680,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false // 允许加载本地资源，避免出现Not allowed to load local resource报错
    }
  });
  const url = path.resolve(__dirname, '../../renderer/pages/control/index.html');
  win.loadURL(url);
}

module.exports = {
  create
};
