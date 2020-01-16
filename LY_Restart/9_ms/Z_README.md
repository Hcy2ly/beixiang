<!--
 * @Author: your name
 * @Date: 2019-12-20 14:18:24
 * @LastEditTime : 2020-01-14 21:54:07
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\ly_restart\9_ms\readme.md
 -->

1. 浏览器常见状态码。
2. 原型链对象
3. 浏览器缓存
4. 事件冒泡和事件捕捉 的执行顺序和过程。https://blog.csdn.net/juzipidemimi/article/details/73388282  https://segmentfault.com/a/1190000012729080
   事件冒泡会从当前触发的事件目标一级一级往上传递，依次触发，直到 document 为止。  从内到外触发 就是事件冒泡了。
   事件捕获会从 document 开始触发，一级一级往下传递，依次触发，直到真正事件目标为止。 从外到内触发 就是事件捕捉了。
   事件委托依靠的就是事件冒泡和捕获的机制，
   // 事件监听，第三个参数是布尔值，默认 false，false 是事件冒泡，true 是事件捕获
   document.getElementById('box3').addEventListener('click', sayBox3, false);
5. 设计模式： https://blog.csdn.net/juzipidemimi/category_8986481.html


6. 职业规划 半年，一到三年，更长。
其实实习期，你就说工资随意不太看重，主要是发展的方向和学习目标为主
毕业了，就按行业水平给就行，主要前3年以积累经验和学习基础为主

7. 字符串的方法。
8. 数组的方法。 数组转字符串等。关于引用类型。
9. 对象的方法。

10. react 的生命周期函数有哪些。




# demo： 
  * format.js 实现千位分隔
  * this.js  箭头函数
  * 






