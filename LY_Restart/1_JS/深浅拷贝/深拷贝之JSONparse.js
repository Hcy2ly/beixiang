/*
 * @Author: your name
 * @Date: 2019-12-20 00:46:22
 * @LastEditTime : 2019-12-20 00:54:53
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\ly_restart\1_js\1_demo5_JSONparse.js
 */

// 1. JSON.parse(JSON.stringify())


// 构造函数
function person(pname) {
    this.name = pname;
}

const Messi = new person('Messi');

// 函数
function say() {
    console.log('hi');
};

const oldObj = {
    a: say,
    b: new Array(1),
    c: new RegExp('ab+c', 'i'),
    d: Messi
};

const newObj = JSON.parse(JSON.stringify(oldObj));

// 无法复制函数
console.log(newObj.a, oldObj.a); // undefined [Function: say]
// 稀疏数组复制错误
console.log(newObj.b[0], oldObj.b[0]); // null undefined
// 无法复制正则对象
console.log(newObj.c, oldObj.c); // {} /ab+c/i
// 构造函数指向错误
console.log(newObj.d.constructor, oldObj.d.constructor); // [Function: Object] [Function: person]