/**
 * 常见的几种判断：判断是否为空
 * @param val 需要判断的值
 * @param method 需要判断的类型，不填则为空
 * */
function isType(val, method) {
    switch(method){
        default:{
            // 检测是否为空
            if(val && typeof val === 'object' && (val.length === undefined || val.length === 1)){
                var temp = true;
                val = val.length ? val[0] : val;
                for(var key in Object.keys(val)){
                    temp = false;
                    break;
                }
                return temp;
            } else {
                return !val || val === "" || val === 0 || val === "0" || val === null || val === false || typeof val === undefined || typeof val === 'undefined' || (typeof val === 'object' && !val.length);
            }
        } break;
    }
}
// const isNull = (val, method) => {
//     switch(method){
//         default:{
//             if(val && typeof val === 'object' && (val.length === undefined || val.length === 1)){
//                 let temp = true;
//                 val = val.length ? val[0] : val;
//                 for(let key of Object.keys(val)){
//                     temp = false;
//                     break;
//                 }
//                 return temp;
//             } else {
//                 return !val || val === "" || val === 0 || val === "0" || val === null || val === false || typeof val === undefined || typeof val === 'undefined' || (typeof val === 'object' && !val.length);
//             }
//         } break;
//     }
// };