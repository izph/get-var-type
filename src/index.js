export default function (value) {
    // 判断数据是 null 的情况 
    if (value === null) {
        return value + "";
    }
    // 判断数据是引用类型的情况 
    if (typeof value === "object") {
        return Object.prototype.toString.call(value).match(/^\[object ([a-zA-Z]*)\]$/)[1].toLowerCase();
    } else {
        // 判断数据是基本数据类型的情况、函数的情况和没有传入值的情况
        return typeof value;
    }
}