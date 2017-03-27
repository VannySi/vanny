/**
 * 屏蔽touchmove事件
 * */
(function(doc) {
    var doBody = doc.body,
        prevent = function(e) {
            e.preventDefault();
        };
    if (!doc.addEventListener) return;
    doBody.addEventListener('touchmove', prevent, false);
})(document);

/**
 * 根据屏幕宽度自动计算字体大小
 * */
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);