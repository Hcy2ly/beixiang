/*
 * @Author: Liao Ying
 * @Date: 2019-12-22 11:12:17
 * @LastEditTime : 2019-12-26 15:40:14
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\ly_restart\9_ms\this.js
 */

// import VConsole from "vconsole/dist/vconsole.min.js"; //import vconsole
// new VConsole(); // 初始化
var activity = {
    a: 1,
    init() {
        console.log(this); // 指向activity对象；输出activity对象 { a: 1, init: [Function: init], bind: [Function: bind] }
        var obj = {
            x: 22,
            say: function () {
                console.log(this.x);   // 指向obj
            },
            look: () => {
                console.log('看啥？'+ this); //this 指向 activity
                console.log('看啥？'+ JSON.stringify(this)); //this 对象化
            }
        };
        obj.say();  //22
        obj.look(); // 看啥？[object Object]  看啥？{"a":1}


        var b = () => {
            console.log(this); // es6箭头函数丢失this，指向activity。
        };
        b(); // 输出activity对象 { a: 1, init: [Function: init], bind: [Function: bind] }
    }
};

activity.init();


