<!--
 * @Author: your name
 * @Date: 2020-01-01 10:17:02
 * @LastEditTime : 2020-01-02 00:09:44
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\LY_Restart\20200101\readme.md
 -->
1. 线程和进程的区别 【廖雪峰的多线程】。 

2. 怎么理解js是单线程的，但又可以实现异步编程  浏览器的多线程

3. 宏任务和微任务 （可以和JS单线程异步一起复习总结）

4. 思否文章：  https://segmentfault.com/u/hcy2ly/notes

？：
ajax 有单独的线程


1 👇
2 ajax -> 移出去
3 👇
4 👇   
5 👇
6 👇
7 👇    加入这个时候 ajax回调 ↓加入到队列中 应该是排在第10 对吧。因为前9都已经在事件队列中了。
8
9


也不一定  要看事件执行后谁先返回
事件队列不止一条
有 IO 的事件队列、ajax 网络请求的等等
