<!--
 * @Author: ly
 * @Date: 2020-01-14 22:13:44
 * @LastEditTime : 2020-01-14 23:16:52
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\LY_Restart\1_JS\DOM-\window&document对象\document-demo\document.md
 -->
# document:  代表整个HTML文档，可用来访问页面中的所有元素。

DOM 可以将任何 HTML 或者 XML 文档描绘成一个有多层节点构成的结构;
节点分为几种不同的类型，每种类型分别表示文档中不同的信息及标记;
每个节点都拥有各自的特点、数据和方法，另外也与其他系欸但存在某种关系;
节点之间的关系构成了层次，而所有页面标记则表现为一个以特定节点为根节点的树形结构。[看书去-高程]

  * document 对象是整个html文档，可以通过 document.head, document.body 等访问具体的dom节点。
  * document.documentElement 返回 html dom 中的 root(根) 节点 即<html>标签。
  * document.body 返回 html dom 中的 body 节点 即<body>标签。
  * document 获取scrollTop用document.body.scrollTop[因为如果页面不存在DTD，使用document.documentElement.scrollTop无法获取滚动条距离；]
  【DTD： DTD的全称为Document Type Definition，是一种文件定义格式，它规定了XML文件结构为XML文件提供了语法与规则。
      内部声明：<!DOCTYPE [具体的DTD语句]>
      外部声明：<!DOCTYPE 引用的DTD的根元素 关键字（SYSTEM/PUBLIC） "dtd文件名称/dtd文件的网络地址">
      对于外部声明有多种形式，主要分为SYSTEM和PUBLIC类型的文件。
      SYSTEM：一个作者或组织编写的众多XML文档中通用的DTD；
      PUBLIC：由权威机构制定，提供给特定行业或公众使用的DTD。】

  * 对象属性：
      1. document.title 文档标题 等价于HTML的<title>标签
      2. document.bgColor 页面背景颜色
      3. document.fgColor 前景色（文本颜色）
      4. document.linkColor 未点击过的链接颜色
      5. document.alinkColor 激活链接（焦点在此链接上）的颜色 【不再推荐使用此功能】
          - document.alinkColor在 dom2 HTML中已弃用，替代方法是： 
          1. CSS选择器:active（推荐使用） /:focus（IE不支持）。 
          2. document.body.aLink 
      6. document.vlinkColor 已点击过的连接颜色
      7. document.URL 在同一窗口打开另一个网页
      8. document.fileCreateDate 文件建立日期，只读属性
      9. document.fileModifiedDate 文件修改日期，只读属性
      10. document.fileSize 大小，只读属性
      11. document.cookie 设置和读出cookie
      12. document.charset 字符集

  * 对象方法：
      1. document.write() 动态向页面写入内容、
      2. document.createElement(tag) 创建指定标签的元素
      3. document.getElementById(id) 获得指定id值的元素
      4. document.getElementByName(name) 获得指定Name值得元素

  * body对象：
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

  * location-位置子对象  [***]
      1. document.location.hash  #号后的部分
      2. document.location.host   域名+端口号
      3. document.location.hostname   域名
      4. document.location.href   完整URL
      5. document.location.pathname  目录部分
      6. document.location.port   端口号
      7. document.location.protocol   网络协议
      8. document.location.search   ?号后的部分

  * 通过集合引用（以images集合为例，forms集合等类似）
      1. document.images   <img>标签
      2. document.images.length   <img>标签的个数
      3. document.images[0]    第1个<img>标签
      4. document.images[i]    第i-1个<img>标签
