/*
 * @Author: your name
 * @Date: 2019-12-29 15:56:59
 * @LastEditTime : 2019-12-29 23:13:54
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\ly_restart\9_ms\demo.js
 */

//ly
function format(num) {
    numArr = num.toString().split("."); //数值转换成字符串 字符串转化成数组 先把小数点分割一下。得到整数部分
    var numArr1 = numArr[0].split(""); //将整数部分换成字符串切割空字符串为数组
    var numArr2 = numArr[1] || []; //小数部分为数组2
    var nums = []; 
    let lens = numArr1.length - 1; //拿到数组最后一个元素地址
    for (var i = lens; i >= 0; i--) {
        // console.log(i, '******', numArr1[i]);
        nums.push(numArr1[i]); //从最后一个元素开始添加进来
        if (((lens + 1) - i) % 3 == 0 && i != 0) { //添加三个加一个',' ,最后一位被添加时不加','
            // console.log('途经此地',i);
            nums.push(",");
        }
    }
    nums.reverse(); //倒序
    nums = numArr2.length ? nums.join("") + `.${numArr2}` : nums.join("");
    return nums;
}
console.log(format(16454588.92)); //16,454,588.92
console.log(format(1645458.92)); //1,645,458.92
console.log(format(164545456888.92));//164,545,456,888.92
console.log(format(1345678.92));//1,345,678.92
console.log(format(235566));//235,566

//hh
// function format(num) {
//     numArr = num.toString().split("."); //数值转换成字符串 字符串转化成数组 先把小数点分割一下。得到整数部分
//     var numArr1 = numArr[0].split(""); //将整数部分换成字符串切割空字符串为数组
//     var numArr2 = numArr[1] || []; //小数部分为数组2
//     var nums = [];
//     for (var i = numArr1.length; i > 0; i--) {
//         if (i % 3 == 0 && i != (numArr1.length || 0)) {
//             nums.push(",");
//         }
//         nums.push(numArr1[numArr1.length - i]);
//     }
//     return numArr2.length ? nums.join("") + `.${numArr2}` : nums.join("");
// }
// console.log(format(235566));
// console.log(format(2355661));
// console.log(format(23556612));
// console.log(format(235566.03));
// console.log(format(2355661.03));
// console.log(format(23556612.55));

//baidu
function numFormat(num) {
    num = num.toString().split(".");  // 分隔小数点
    console.log(num);
    var arr = num[0].split("").reverse();  // 转换成字符数组并且倒序排列
    var res = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (i % 3 === 0 && i !== 0) {
            res.push(",");   // 添加分隔符
        }
        res.push(arr[i]);
    }
    res.reverse(); // 再次倒序成为正确的顺序
    console.log(res, typeof res);
    if (num[1]) {  // 如果有小数的话添加小数部分
        res = res.join("").concat("." + num[1]); //concat(可以放很多数组的元素)
    } else {
        res = res.join("");
    }
    return res;
}
console.log(numFormat(1345678.92));
console.log(numFormat(235566));