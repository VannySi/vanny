/**
 * 存储localStorage
 * @param name 存储名称
 * @param content 存储值
 */
function setStore(name, content) {
    if(!name) return;
    if(typeof content !== 'string'){
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 * @param name 获取元素的名称
 */
function getStore(name) {
    if(!name) return;
    return JSON.parse(window.localStorage.getItem(name));
}

/**
 * 删除localStorage
 * @param name 删除元素的名称
 */
function removeStore(name) {
    if(!name) return;
    window.localStorage.removeItem(name);
}