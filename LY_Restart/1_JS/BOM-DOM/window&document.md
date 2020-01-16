
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

 * 【 window 对象和 document 对象的区别】
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


* Location:
    * 即是window对象的属性，也是document对象的属性。即window.location === document.location; //true 引用的是同一个location对象。
    * location对象的用处不只表现在它保存着当前的文档的信息，还表现在它将URL解析为独立的片段，让开发人员可以通过不同的属性访问这些片段。

