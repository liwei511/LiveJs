/**
 * Created by liw on 2017/6/9.
 */
//在浏览器环境下测试任何对象的某个特性是否存在
function isHostMethod(object, property){
    var t = typeof object[property];
    return t == 'function' || (!!(t == 'object' && object[property])) || t == 'unknown';
}
//eg: result = isHostMethod(xhr,"oper"); //true

//兼容IE5
function getElement(id) {
    if(document.getElementById){
        return document.getElementById(id);
    }else if(document.all){
        return document.all[id];
    }else{
        throw new Error("No way to retrieve element")
    }
}

//取得窗口左边和上边的位置
var leftPos = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == "number") ? window.screenTop : window.screenY;

//Object 排序  .localeCompare("")比较两字符串大小
function createComparisonFunction(propertyName){
    return function (object1,object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if(value1 < value2){
            return -1;
        }else if(value1 > value2){
            return 1;
        }else {
            return 0;
        }
    }
}
//数字排序
function compare(value1,value2) {
    return value1 - value2;
}
//是否电话，身份证号，邮箱

//查询location中字符串参数
function getQueryStringArgs() {
    var qs = (location.search.length > 0 ? location.search.substring(1) : "");
    var args = {},
        items = qs.length ? qs.split('&'):[],
        item = null,
        name = null,
        value = null,
        i = 0,
        len = items.length;
    for ( i = 0; i < len; i++){
        item = items.split('=');
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        if(name.length){
            args[name] = value;
        }
    }
    return args;
}