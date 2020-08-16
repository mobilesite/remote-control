const {
  BrowserWindow
} = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let win;

function create() {
  win = new BrowserWindow({
    width: 600,
    height: 300,
    webPreferences: {
      nodeIntegration: true
    }
  });
  const url = isDev ? 'http://localhost:3000' : path.resolve(__dirname, '../../renderer/pages/main/index.html');
  win.loadURL(url);
}

function send(channel, ...args) {
  win.webContents.send(channel, ...args);
}

module.exports = {
  create,
  send
};
