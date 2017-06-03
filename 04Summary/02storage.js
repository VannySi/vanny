/**
 * 存储localStorage
 * @param name 存储名称
 * @param content 存储值
 * @param method 存储方式：local/session，默认local
 */
function setStore(name, content, method){
    method = method || 'localStorage';
    if(!name) return;
    if(typeof content !== 'string'){
        content = JSON.stringify(content);
    }
    window[method].setItem(name, content);
    console.log(window[method].getItem(name))
}

/**
 * 获取localStorage
 * @param name 获取元素的名称
 * @param method 存储方式：local/session，默认local
 */
function getStore(name, method){
    method = method || 'localStorage';
    if(!name) return;
    return JSON.parse(window[method].getItem(name));
}

/**
 * 删除localStorage
 * @param name 删除元素的名称
 * @param method 存储方式：local/session，默认local
 */
function removeStore(name, method){
    method = method || 'localStorage';
    if(!name) return;
    window[method].removeItem(name);
}