// resize 窗口大小发生改变的时候才会触发的，第一次加载时不会触发
var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    // 手机屏幕是否反转orientationchange
    window.addEventListener(resizeEvt, setFontSize, false); // IE 谷歌
document.addEventListener('DOMContentLoaded', setFontSize, false); //火狐
function setFontSize() {
    var cWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var basicNum = 200;
    var htmlFontSize = 10 * (cWidth / 1920);
    document.documentElement.style.fontSize = htmlFontSize + 'px';
}