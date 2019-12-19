/*
 * @Author: Liao Ying
 * @Date: 2019-12-18 14:05:19
 * @LastEditTime : 2019-12-18 14:06:26
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\ly_restart\1_js\demo1.location.js
 */

//  浏览器中console 测试                     // 输出结果

document.location;

// document.location.hash  #号后的部分
// document.location.host   域名 + 端口号   //  127.0.0.1:8080
// document.location.hostname   域名       //  127.0.0.1
// document.location.href   完整URL        //  http://127.0.0.1:8080/demo1_location.js"
// document.location.pathname  目录部分    //  /demo1_location.js
// document.location.port   端口号         //  8080
// document.location.protocol   网络协议   //  http / https
// document.location.search ? 号后的部分   //  ?time=5


document.body;

// document.body 文档主体开始和结束，等价于 < body ></body > / MDN： 返回当前文档中的<body>元素或者<frameset>元素.                   //  返回 <body> ... </body> 只能输出body结构。
// document.body.bgColor 背景颜色                                                                                                // ""
// document.body.link 未点击过的链接颜色                                                                                          // ""
// document.body.alink 激活链接（焦点在此链接上）的颜色                                                                             // ""
//     - 设置 aLink 属性: bodyObject.aLink="color"   // document.getElementById("a").(link / vLink / aLink)                         
//     - 返回 aLink 属性: bodyObject.aLink                                                                                         
// document.body.vlink 已点击过的链接颜色  // ""
// document.body.text 文本色 // ""
// document.body.innerText < body >...</body > 之间的文本    // "所有文本"
// document.body.innerHTML < body >...</body > 之间的HTML代码  // 返回dom结构,以字符串形式 "<body> ... </body>"; 也可以用 document.getElementById("a").innerHTML来返回对应内容的dom结构,以字符串形式
// document.body.(topMargin / leftMargin / rightMargin / bottomMargin) 页面（上 / 左 / 右 / 下）边距   // undefined
// document.body.background 背景   //""
// document.body.appendChild(dom)  添加DOM对象            //var node=document.getElementById("myList2").lastChild; document.getElementById("myList1").appendChild(node);
// document.body.οnclick = "func()"   鼠标指针单击对象是触发   //html: <element onclick="SomeJavaScriptCode">; js: object.onclick=function(){SomeJavaScriptCode};
// document.body.οnmοuseοver = "func()"   鼠标指针移到对象时触发  
// document.body.οnmοuseοut = "func()"   鼠标指针移出对象时触发

