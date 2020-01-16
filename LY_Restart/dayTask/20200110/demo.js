/*
 * @Author: your name
 * @Date: 2020-01-10 16:17:50
 * @LastEditTime : 2020-01-10 16:20:06
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\LY_Restart\dayTask\20200110\demo.js
 */
var s1 = prompt("请输入任意的字符串", ""); //HTML DOM prompt() 方法  prompt() 方法用于显示可提示用户进行输入的对话框。在浏览器打开是一个弹窗。

//字符串转换为数组
var arr = s1.split("");
//利用数组对象的reverse()方法实现反转
arr.reverse();
//利用数组的join()方法转换为字符串
var str = arr.join("");
document.write(str); 

