/**
 * 获取页面链接中的属性
 * @param key 属性名
 * @param method 方式，href或者hash，默认href
 * */
function getQueryString(key, method) {
    var url = method === 'hash' ? window.location.hash : window.location.href;
    var url_arr;
    if (url.indexOf('?') !== -1) {
        url = url.split('?');
        url_arr = url[1].split('&');
        for (var k in url_arr) {
            var tmp = url_arr[k].split('=');
            if (tmp[0] === key) {
                return tmp[1];
            }
        }
        url = url[0];
    }
    url_arr = url.split(/[\\/]/);
    for (var n in url_arr) {
        if (url_arr[n] === key) {
            return url_arr[parseInt(n) + 1];
        }
    }
    return false;
}