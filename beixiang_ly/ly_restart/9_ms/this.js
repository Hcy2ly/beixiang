/*
 * @Author: Liao Ying
 * @Date: 2019-12-22 11:12:17
 * @LastEditTime : 2019-12-22 11:13:21
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\ly_restart\9_ms\this.js
 */

import VConsole from "vconsole/dist/vconsole.min.js"; //import vconsole
new VConsole(); // 初始化
var activity = {
    a: 1,
    init() {
        console.log(this); //指向activity对象
        // this.bind();
        var obj = {
            x: 22,
            say: function () {
                console.log(this.x);
            }
        };
        obj.say();
        var b = () => {
            console.log(this);
        };
        b();
    },
    bind: () => {
        $('.close').on("click", function () {
            $('.rule-model').hide();
        });
    }
};

activity.init();


