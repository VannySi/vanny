/**
 * 将JSON对象或者对象拼成字符串
 * @param value JSON对象或者对象
 * @param index 可不传
 * */
function objConvertString(value, index) {
    var res = '';
    if(typeof value === 'object'){
        for(var i in value){
            res += '&' + objConvertString(value[i], index === undefined ? i: index + '[' + ']');
        }
    } else {
        return index + '=' + encodeURI(value);
    }
    return res.substr(1, res.length);
}

/**
 * 通过递归调用让函数支持多维数组
 * @param fName 需要调用的函数名称
 * @param arr 参数数组
 * @param key 需要传递的参数位置，默认为0
 * @param check 是否需要检测函数的合法性，默认为true
 * @return 返回对param的运行结果
 */
function fn2array(fName, arr, key, check){
    key = key || 0;
    check = check || true;
    // 从外部调用时默认检测函数是否存在，多维数组递归时忽略
    if(check && typeof fName !== 'function'){
        return false;
    }
    // 如果目标不是数组则可以执行
    var content = arr[key];
    if (typeof content !== 'object') {
        return fName(arr, key);
    }
    // 如果目标是数组则递归执行
    for(var i in content){
        arr[key] = content[i];
        fn2array(fName, arr, key, false);
    }
    return content;
}