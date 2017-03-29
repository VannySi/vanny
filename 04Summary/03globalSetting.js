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

/**
 * 全局变量，设置命名空间
 * */
var GLOBAL = {};
GLOBAL.namespace = function (str) {
    var arr = str.split('.'),
        o = GLOBAL;
    for(i = (arr[0] == 'GLOBAL') ? 1 : 0; i < arr.length; i++){
        o[arr[i]] = o[arr[i]] || {};
        o = o[arr[i]];
    }
};

/**
 * 去除字符串首尾的空白字符
 * @param str
 * */
function trim(str) {
    return str.replace(/^\s+|\s+$/g, "");
}

/**
 * 继承
 * @param subClass 子元素
 * @param superClass 父元素
 * */
function extend(subClass, superClass) {
    var F = function () { };
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
    subClass.superClass = superClass.prototype;
    if(superClass.prototype.constructor == Object.prototype.constructor){
        superClass.prototype.constructor = superClass;
    }
}

/**
 * 封装cookie组件
 * */
GLOBAL.namespace('Cookie');
GLOBAL.Cookie = {
    // 读取cookie
    read: function (name) {
        var cookieStr = ';' + document.cookie + ';';
        var index = cookieStr.indexOf(';' + 'name' + '=');
        if(index != -1){
            var s = cookieStr.substring(index + name.length + 3, cookieStr.length);
            return decodeURI(s.substring(0, s.indexOf(';')));
        } else {
            return null;
        }
    },
    // 设置
    set: function (name, value, expires) {
        var expDays = expires * 24 * 60 * 60 * 1000;
        var expDate = new Date();
        expDate.setTime(expDate.getTime() + expDays);
        // toUTCString() 方法可根据世界时 (UTC) 把 Date 对象转换为字符串，并返回结果
        var expString = expires ? ';expires = ' + expDate.toUTCString() : '';
        var pathString = ';path =/';
        document.cookie = name + '=' + encodeURI(value) + expString + pathString;
    },
    // 删除
    del: function (name) {
        var exp = new Date(new Date().getTime() - 1);
        var s = this.read(name);
        if(s != null){
            document.cookie = name + '=' + s + ';expires = ' + exp.toUTCString() + ';path =/';
        }
    }
};