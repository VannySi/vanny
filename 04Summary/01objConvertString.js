/**
 * 将JSON对象或者对象拼成字符串
 * @param value JSON对象或者对象
 * @param index 可不传
 * */
function objConvertString(value, index) {
    var res = '';
    if(typeof value == 'object'){
        for(var i in value){
            res += '&' + objConvertString(value[i], index == undefined ? i: index + '[' + ']');
        }
    } else {
        return index + '=' + encodeURI(value);
    }
    return res.substr(1, res.length);
}