<!--
 * @Author: ly
 * @Date: 2019-12-26 14:06:53
 * @LastEditTime : 2020-01-14 22:08:14
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\ly_restart\gs-review\js\history\readme.md
 -->
 
# DOM 通过 window 操作 history 来对浏览器历史的访问。
它暴露了很多有用的方法和属性，允许你在用户浏览历史中向前和向后跳转。

一、使用go(),back(),forward()来操作向前 向后跳转

  history.back()  去上一条历史
  history.forward() 去下一条历史
  history.go() 相对当前  跳多少条记录   正=>前走  负=>后退
  1
  2
  3
二、html5新增的方法（一般用于单页面应用程序）
history.pushState();history.replaceState();window.onpopstate = function(){}

  history.pushState();//添加一条
  history.replaceState();//替换一条
  window.onpopstate = function(){}
  1
  2
  3

  * pushState(data, title, url) 追加一条历史记录
  
    data用于存储自定义数据，通常设为null
    title网页标题，基本上没有被支持，一般设为空
    url 以当前域为基础增加一条历史记录，不可跨域设置

  * replaceState(data, title, url) 
  与pushState()基本相同，不同之处在于replaceState()，只是替换当前url，不会增加/减少历史记录。
    
  * onpopstate事件，当前进或后退时则触发