const {
  ipcMain
} = require('electron');
const {
  send: sendMainWindow
} = require('./windows/main');
const {
  create: createControlWindow
} = require('./windows/control');

module.exports = function () {
  // 响应获取连接码的请求
  ipcMain.handle('login', async () => {
    // 先mock，返回一个六位数的code
    let code = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    return code;
  });

  // 响应成功控制事件
  ipcMain.on('control', async (e, remoteCode) => {
    // 这里跟服务端交互，但是mock返回
    // 通知主窗口同步进行变化
    sendMainWindow('control-state-change', remoteCode, 1);
    createControlWindow();
  });
}
