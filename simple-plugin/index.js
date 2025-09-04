// 简单插件主入口文件

// 插件加载时执行的初始化函数
function onload() {
  console.log('简单插件加载成功！');
  // 显示通知提示
  if (window.siyuan) {
    window.siyuan.notification.show('简单插件', '插件已成功加载', 3000);
  }
}

// 插件卸载时执行的清理函数
function onunload() {
  console.log('简单插件已卸载');
}

// 导出插件生命周期函数
module.exports = {
  onload,
  onunload
};