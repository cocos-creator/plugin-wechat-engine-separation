'use strict';

module.exports = {
    'title': '微信小游戏分离引擎插件',
    'separate': '允许分离引擎',
    'separate_tips': '该功能是通过共享全局引擎，来减小每个小游戏的首包大小。启用后，如果引擎在手机中已经有缓存，首包下载时将会自动剔除引擎文件，加载手机中缓存的完整版引擎。如果手机中没有缓存，将会加载完整首包，完整首包里会包含剔除后的引擎（该功能仅支持 Cocos Creator 正式版本和非调试模式）',
};
