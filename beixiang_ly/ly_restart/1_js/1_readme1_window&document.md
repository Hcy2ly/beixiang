
 # document && window：

 * 【关系】
    JavaScript（ECMAScript & Browser Objects）
        - ECMAScript （指向）-> Browser Objects
        - （BOM）Browser Objects (包含（DOM）document Objects)
    DOM 与 BOM （BOM 包含 DOM）
        - Browser Objects(BOM) {
            window {
                frames[], history, location, navigator, screen,
                (DOM: document: {
                    anchors[], forms[], applets[], images[], areas[], layers[], embeds[], links[]
                })
            }
        }

 * 【window对象和document对象的区别】
    1. window 对象表示浏览器中打开的窗口，也是 ECMAScript 规定的 Global 对象。如果文档包含框架（frame 或者 iframe标签），浏览器会为HTML文档创建一个 window 对象，并为每个框架创建一个额外的 window 对象。
    2. 由于 window 对象同时扮演者 ECMAScript 中的 Global 对象的角色，因此所有的全局函数和对象都属于 window 对象的属性和方法。
    3. document 是 window 的一个对象属性， 因此可以将其作为全局对象来访问。
    4. document 对象是 HTMLDocument(继承自 Document 类）的一个实例，表示整个HTML页面。

 * 【window.location 和 document.location 有什么区别】
    1. window 对象表示浏览器中打开的窗口，也是 ECMAScript 规定的 Global 对象。如果文档包含框架（frame 或者 iframe标签），浏览器会为HTML文档创建一个 window 对象，并为每个框架创建一个额外的 window 对象。
    2. 由于 window 对象同时扮演者 ECMAScript 中的 Global 对象的角色，因此所有的全局函数和对象都属于 window 对象的属性和方法。
    3. document 是 window 的一个对象属性， 因此可以将其作为全局对象来访问。
    4. document 对象是 HTMLDocument(继承自 Document 类）的一个实例，表示整个HTML页面。

 * 【window & document 整合说明】
    1. 一般来讲，一个window里就是一个document， alert(document.location === window.location) //true
    2. 但是，iframe里面也可以装个document，在iframe里面就有区别了：
        - document表示的是一个文档对象，window表示的是一个窗口对象，一个窗口下可以有多个文档对象。
        - 一个窗口下只有一个window.location.href，但是可能有多个document.URL、document.location.href。
        - Window对象的location属性，引用的是一个Location对象，对象可以有很多属性。
        - window.location.href和document.location.href可以被赋值，然后跳转到其它页面，document.URL只能读不能写
        - 在大多数情况下，document.location和location.href是相同的。 但是，当存在服务器重定向时，document.location包含的是已经装载的URL，而location.href包含的则是原始请求的文档的URL。
            - document.location == location.href  //true
            - document.location === location.href  //false
            - document.location  //{href: "https://blog.csdn.net/xiaogangblog/article/details/100043558", ancestorOrigins: DOMStringList, origin: "https://blog.csdn.net", protocol: "https:", replace: ƒ, …}
            - location.href  //"https://blog.csdn.net/xiaogangblog/article/details/100043558"
        - contentWindow:获取指定窗口的window对象，所有主流浏览器都支持；
        - contentDocument:获取指定窗口的document对象，IE6 IE7不支持;

 * window： 代表浏览器中的一个打开的窗口
    - 对象属性：
        1. window.self引用本窗口window == window.self
        2. window.name 为窗口名字
        3. window.defaultStatus 窗户状态栏信息
        4. window.location URL地址，设置改属性可打开新的页面
    - 对象方法：
        1. window.alert("text") 提示信息会话框
        2. window.confirm("text") 确认会话框
        3. window.prompt("text") 键盘输入会话框
        4. window.setInterval(func, time) 每个指定时间（毫秒）执行一次操作；  window.clearInterval() 清除时间间隔
        5. window.setTimeout(action, time) 等待指定时间（毫秒）后再执行操作； window.clearTimeout()  阻止函数的执行
        6. window.open() 打开新的窗口；  window.close() 关闭窗口
    - 成员对象：
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

* Location:
    * 即是window对象的属性，也是document对象的属性。即window.location === document.location; //true 引用的是同一个location对象。
    * location对象的用处不只表现在它保存着当前的文档的信息，还表现在它将URL解析为独立的片段，让开发人员可以通过不同的属性访问这些片段。


 * document:  代表整个HTML文档，可用来访问页面中的所有元素。
DOM 可以将任何 HTML 或者 XML 文档描绘成一个有多层节点构成的结构。节点分为几种不同的类型，每种类型分别表示文档中不同的信息及标记。每个节点都拥有各自的特点、数据和方法，另外也与其他系欸但存在某种关系。
节点之间的关系构成了层次，而所有页面标记则表现为一个以特定节点为根节点的树形结构。【看书去-高程】
    * document 对象是整个html文档，可以通过 document.head, document.body 等访问具体的dom节点。
    * document.documentElement 返回 html dom 中的 root(根) 节点 即<html>标签。
    * document.body 返回 html dom 中的 body 节点 即<body>标签。
    * document 包括 ，获取scrollTop用过document.body.scrollTop（因为如果页面若果不存在DTD，使用document.documentElement.scrollTop无法获取滚动条距离；）
    【DTD： DTD的全称为Document Type Definition，是一种文件定义格式，它规定了XML文件结构为XML文件提供了语法与规则。
        内部声明：<!DOCTYPE [具体的DTD语句]>
        外部声明：<!DOCTYPE 引用的DTD的根元素 关键字（SYSTEM/PUBLIC） "dtd文件名称/dtd文件的网络地址">
        对于外部声明有多种形式，主要分为SYSTEM和PUBLIC类型的文件。
        SYSTEM：一个作者或组织编写的众多XML文档中通用的DTD；
        PUBLIC：由权威机构制定，提供给特定行业或公众使用的DTD。】
    - 对象属性：
        1. document.title 文档标题 等价于HTML的<title>标签
        2. document.bgColor 页面背景颜色
        3. document.fgColor 前景色（文本颜色）
        4. document.linkColor 未点击过的链接颜色
        5. document.alinkColor 激活链接（焦点在此链接上）的颜色 【不再推荐使用此功能】
            - document.alinkColor在DOM Level 2 HTML中已弃用，替代方法是： 1. CSS选择器:active（推荐使用） /:focus（IE不支持）。 2. document.body.aLink 3.
        6. document.vlinkColor 已点击过的连接颜色
        7. document.URL 在同一窗口打开另一个网页
        8. document.fileCreateDate 文件建立日期，只读属性
        9. document.fileModifiedDate 文件修改日期，只读属性
        10. document.fileSize 大小，只读属性
        11. document.cookie 设置和读出cookie
        12. document.charset 字符集
    - 对象方法：
        1. document.write() 动态向页面写入内容、
        2. document.createElement(tag) 创建指定标签的元素
        3. document.getElementById(id) 获得指定id值的元素
        4. document.getElementByName(name) 获得指定Name值得元素
    - body对象：
        1. document.body 文档主体开始和结束，等价于<body></body> / MDN： 返回当前文档中的<body>元素或者<frameset>元素.
        2. document.body.bgColor 背景颜色
        3. document.body.link 未点击过的链接颜色
        4. document.body.alink 激活链接（焦点在此链接上）的颜色
            - 设置 aLink 属性: bodyObject.aLink="color"  / document.getElementById("a").(link / vLink / aLink)
            - 返回 aLink 属性: bodyObject.aLink
        5. document.body.vlink 已点击过的链接颜色
        6. document.body.text 文本色
        7. document.body.innerText  <body>...</body> 之间的文本
        8. document.body.innerHTML  <body>...</body>之间的HTML代码
        9. document.body.（topMargin / leftMargin / rightMargin / bottomMargin） 页面（上 / 左 / 右 / 下）边距
        10. document.body.background 背景
        11. document.body.appenChild(oTag)  添加DOM对象
        12. document.body..οnclick="func()"   鼠标指针单击对象是触发
        13. document.body..οnmοuseοver="func()"   鼠标指针移到对象时触发
        14. document.body.οnmοuseοut="func()"   鼠标指针移出对象时触发
    - location-位置子对象  *********************************************************************************************************
        1. document.location.hash  #号后的部分
        2. document.location.host   域名+端口号
        3. document.location.hostname   域名
        4. document.location.href   完整URL
        5. document.location.pathname  目录部分
        6. document.location.port   端口号
        7. document.location.protocol   网络协议
        8. document.location.search   ?号后的部分
    - 通过集合引用（以images集合为例，forms集合等类似）
        1. document.images   <img>标签
        2. document.images.length   <img>标签的个数
        3. document.images[0]    第1个<img>标签
        4. document.images[i]    第i-1个<img>标签
