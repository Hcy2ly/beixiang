/*
 * @Author: your name
 * @Date: 2019-12-15 13:40:23
 * @LastEditTime: 2019-12-19 10:30:10
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\ly_restart\1_js\1_demo1_undefined.js
 */
var x; 
console.log(x); //undefined 
if(x === void 0) {
    console.log(45); //√
}

if(x === undefined) {
    console.log(451); //√ 
}
// void 0 等同于 undefined

if(x === void(0)) {
    console.log(111);
}
