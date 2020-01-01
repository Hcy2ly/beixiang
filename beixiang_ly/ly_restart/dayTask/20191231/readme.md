<!--
 * @Author: your name
 * @Date: 2019-12-31 12:39:32
 * @LastEditTime : 2020-01-01 10:03:26
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\ly_restart\20191231\readme.md
 -->
1. https://www.jianshu.com/p/15f7a512c307 发布的第一篇文章。

2. 面试职位要求
    - es6 / ajax /dom / bom
        es6 promise 
    - react -redux 

    - js dom bom ajax json 

    - 网络协议 网络传输 页面优化 算法
       1. TCP/IP协议(Transmission Control Protocol/Internet Protocol)叫做传输控制/网际协议，又叫网络通讯协议，这个协议是Internet国际互联网络的基础。
       2. http（超文本传输协议） url解析
            1、先，在浏览器地址栏中输入url，先解析url，检测url地址是否合法
            2、浏览器先查看浏览器缓存-系统缓存-路由器缓存，如果缓存中有，会直接在屏幕中显示页面内容。若没有，则跳到第三步操作。
            浏览器缓存：浏览器会记录DNS一段时间，因此，只是第一个地方解析DNS请求；
            操作系统缓存：如果在浏览器缓存中不包含这个记录，则会使系统调用操作系统，获取操作系统的记录(保存最近的DNS查询缓存)；
            路由器缓存：如果上述两个步骤均不能成功获取DNS记录，继续搜索路由器缓存；
            ISP缓存：若上述均失败，继续向ISP搜索。
            3、在发送http请求前，需要域名解析(DNS解析)，解析获取相应的IP地址。
            4、浏览器向服务器发起tcp连接，与浏览器建立tcp三次握手。
            5、握手成功后，浏览器向服务器发送http请求，请求数据包。
            6、服务器处理收到的请求，将数据返回至浏览器
            7、浏览器收到HTTP响应
            8、浏览器解码响应，如果响应可以缓存，则存入缓存。
            9、 浏览器发送请求获取嵌入在HTML中的资源（html，css，javascript，图片，音乐······），对于未知类型，会弹出对话框。
            10、 浏览器发送异步请求。
            11、页面全部渲染结束。

    - GET和POST有一个重大区别，简单的说：
        GET产生一个TCP数据包；POST产生两个TCP数据包。
        长的说：
        对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；
        而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。

    - cookies机制和session机制的区别
        cookies数据保存在客户端，session数据保存在服务器端；
        cookies可以减轻服务器压力，但是不安全，容易进行cookies欺骗；
        session较安全，但占用服务器资源

3. 被问到的一些问题
    1. 介绍一下自己
    2. 你有什么想问我的吗？
    3. 你在大学怎么样？ 学的不错是吧 那说一下课程专业的基础知识把
    4. c++ 面向对象编程啥意思
    5. 浏览器新开一个链接是 进程 还是 线程 。 进程和线程的区别。
    6. 数据结构 队列 堆栈 链表 等
    7. 设计者模式
    8. 