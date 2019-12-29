<!--
 * @Author: your name
 * @Date: 2019-12-20 14:18:24
 * @LastEditTime : 2019-12-29 23:27:58
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



# 书籍推荐
  1.《javascript面向对象编程指南》，风格轻松易懂，比较适合初学者，原型讲得透彻，12种继承方式

  2.《js权威指南》、《js高级程序设计》，这两本书经典，但太厚，比较适合当做参考书。

  3.《你不知道的javascript》狙击js核心细节，闭包、原型、this讲得都还清楚。

  4.《js设计模式与开发实践》这本书把js的设计模式讲得非常清晰，一点不晦涩，看起来不怎么难理解。

  5.《正则指引》，分析源码时，如果正则表达式不懂，没法进行下去的。此书相对来说讲得比较清晰。

  6.《基于MVC的JavaScript Web富应用开发》，看完后，应该能写出自己的mvc框架了，推荐。。

  7.《javascript函数式编程》，js是一门函数式语言，此书是函数式编程一个入门。

  8.《js忍者秘籍》，jq作者写的。

  9.《javascript框架设计》

  css相关的书籍推荐：

  1.《css权威指南》，css基础知识点那是讲得非常清楚的。什么层叠优先级、line-height啥的。不是随便一本书都敢叫“权威指南”的。


# demo： 
  * format.js 实现千位分隔
  * this