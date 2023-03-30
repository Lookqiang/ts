/**
 * 判断一个对象/数组/字符串是否为空
 * @author liubaohuo
 * @param arg <Objecy/Array/String>
 * @return isEmpty
 */
function isEmpty2(arg) {
    if (!arg) {
        return true;
    }
    let isEmpty = false;
    if (typeof arg === "object") {
        if (arg instanceof Array) {
            isEmpty = arg.length === 0;
        } else {
            isEmpty = Object.keys(arg).length === 0;
        }
    } else {
        isEmpty = arg.trim().length === 0;
    }
    return isEmpty;
}
isEmpty2(0)
export {
    isEmpty2
}