<!--
 * @Author: ly
 * @Date: 2020-01-14 22:12:14
 * @LastEditTime : 2020-01-14 22:13:21
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\LY_Restart\1_JS\DOM-\window.md
 -->
 # window： 代表浏览器中的一个打开的窗口
 
  * 对象属性：
      1. window.self引用本窗口window == window.self
      2. window.name 为窗口名字
      3. window.defaultStatus 窗户状态栏信息
      4. window.location URL地址，设置改属性可打开新的页面
  * 对象方法：
      1. window.alert("text") 提示信息会话框
      2. window.confirm("text") 确认会话框
      3. window.prompt("text") 键盘输入会话框
      4. window.setInterval(func, time) 每个指定时间（毫秒）执行一次操作；  window.clearInterval() 清除时间间隔
      5. window.setTimeout(action, time) 等待指定时间（毫秒）后再执行操作； window.clearTimeout()  阻止函数的执行
      6. window.open() 打开新的窗口；  window.close() 关闭窗口
  * 成员对象：
      1. window.event
      2. window.document
      3. windiw.history
          - window.history.length 浏览过的页面数
          - window.history.back() 后退
          - window.history.forward() 前进
          - window.history.go(i) 前进或后退i个页面（i>0 前进， i<0 后退）
      4. window.screen
          - window.screen.width 屏幕宽度  //375
          - window.screen.height 屏幕高度 //667
          - window.screen.colorDepth 屏幕色深 //24
          - window.screen.availWidth 屏幕可用高度（除去任务栏的高度） //375
      5. window.navigator 现在成为识别客户端浏览器的实施标准。
          - window.navigator.appCodeName 浏览器代码名 
          - window.navigator.appName 浏览器名 
          - window.navigator.platform 返回浏览器平台（操作系统）  
          - window.navigator.userAgent 由客户机发送服务器的user-agent（用户代理）头部的值  
          - window.navigator.cookieEnabled 浏览器是否启用cookie 
          - window.navigator.appVersion 浏览器补丁版本 
          - window.navigator.plugins 插件标识  
          - window.navigator.language 返回浏览器语言 
          - window.navigator.onLine 用户是否在线  
          - window.navigator.mimeTypes MIME类型（数组）  
          - window.navigator.javaEnabled()  
          * 来自 navigator 对象的信息通常是误导性的，不应该用于检测浏览器版本，因为：
              1. 不同浏览器能够使用相同名称
              2. 导航数据可被浏览器拥有者更改
              3. 某些浏览器会错误标识自身以绕过站点测试
              4. 浏览器无法报告发布晚于浏览器的新操作系统
      6. window.location 是最有用的BOM对象之一，它提供了一些导航信息。
          - window.location.hash 返回URL中的hash（#号后跟0或者多个字符），如果URL中不包含散列，则返回空字符串。 //""(假如有"#contents")
          - window.location.host 返回服务器名称和端口号（如果有）//www.baidu.com"
          - window.location.hostname 返回不带端口号的服务器名称
          - window.location.href 返回当前加载页面的完整url。而location对象的toString()也返回这个值。
          - window.location.pathname 返回url中的目录或者文件名。
          - window.location.port 返回url指定的端口号。如果不存在，则返回空字符串。
          - window.location.protocol 返回页面使用协议。
          - window.location.search 返回url 中 ?后的所有字符串。
