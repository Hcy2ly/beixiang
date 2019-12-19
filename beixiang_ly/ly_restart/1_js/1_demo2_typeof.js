/*
 * @Author: Liao Ying 
 * @Date: 2019-12-17 14:08:20
 * @LastEditTime : 2019-12-18 10:01:20
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\ly_restart\1_js\demo1_typeof.js
 */

//number类型
console.log("typeof(1): " + typeof (1));
console.log("typeof(NaN): " + typeof (NaN)); //特殊的非数字值
console.log("typeof(Number.MIN_VALUE): " + typeof (Number.MIN_VALUE)); //表示的最小的数(接近 0 ,但不是负数)
console.log("typeof(Infinity): " + typeof (Infinity)); //表示无穷大特殊值

//boolean
console.log("typeof(true): " + typeof (true));

//object
console.log("typeof([]): " + typeof ([]));
console.log("typeof({}): " + typeof ({}));
console.log("typeof(Array()): " + typeof (new Array()));
console.log("typeof(null): " + typeof (null));
console.log("typeof(window): " + typeof (window)); // object 在页面上 /  在node下为undefined
console.log("typeof(document): " + typeof (document)); //object 在页面上 / 在node下为undefined


//undefined
console.log("typeof(undefined): " + typeof (undefined)); 
console.log("typeof(sss): " + typeof (sss)); //sss未定义

//function
console.log("typeof(function(){}): " + typeof (function () { }));
console.log("typeof(eval): " + typeof (eval));
console.log("typeof(Date): " + typeof (Date));

//string
console.log("typeof (''): " + typeof (''));
console.log("typeof(\"123\"): " + typeof ("123"));

