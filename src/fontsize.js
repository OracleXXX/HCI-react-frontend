// resize 窗口大小发生改变的时候才会触发的，第一次加载时不会触发
let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
// 手机屏幕是否反转orientationchange
window.addEventListener(resizeEvt, setFontSize, false); // IE 谷歌
document.addEventListener('DOMContentLoaded', setFontSize, false); //火狐
function setFontSize() {
    let cWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let htmlFontSize = 10 * (Math.max(cWidth, 1300) / 1920);
    document.documentElement.style.fontSize = htmlFontSize + 'px';
}
