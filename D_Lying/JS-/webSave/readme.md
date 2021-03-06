# web 前端安全编码
  1. web网页中前端开发中需要注意的几个地方
    * url链接的安全问题
    * 输入表单内容的安全问题
    * 接口提交的安全问题
    * 登陆密码的安全问题
  2. 漏洞类型-
    * xss漏洞
      跨站脚本攻击（英语：Cross-site scripting，因简称与css冲突，无奈简称为：XSS）是一种网站应用程式的安全漏洞攻击，是代码注入的一种。
      它允许恶意使用者将代码注入到网页上执行，其他使用者在观看网页时就会受到攻击，从而可以达到攻击者盗取用户信息或其他侵犯用户安全隐私的目的。
      - XSS攻击方式的几种常见类型
        1. 非持久型 XSS
          非持久型 XSS 漏洞，也叫反射型 XSS 漏洞，一般是通过给别人发送带有恶意脚本代码参数的 URL，当 URL 地址被打开时，特有的恶意代码参数被 HTML 解析、执行。
          * 如何防御
            - Web 页面渲染的所有内容或者渲染的数据都必须来自于服务端
            - 尽量不要从 URL，document.referrer，document.forms 等这种 DOM API 中获取数据直接渲染。
            - 尽量不要使用 eval, new Function()，document.write()，document.writeln()，window.setInterval()，window.setTimeout()，innerHTML，document.creteElement() 等可执行字符串的方法
            - 做不到以上几点的话，前端渲染的时候对任何的字段都需要做 escape 转义编码
              - 最普遍的做法是转义输出的内容，对于引号，尖括号，斜杠进行转义
              function escape(str) {
                str = str.replace(/&/g, '&amp;')
                str = str.replace(/</g, '&lt;')
                str = str.replace(/>/g, '&gt;')
                str = str.replace(/"/g, '&quto;')
                str = str.replace(/'/g, '&#39;')
                str = str.replace(/`/g, '&#96;')
                str = str.replace(/\//g, '&#x2F;')
                return str
              }
              通过转义可以将攻击代码 变成
              escape('<script>alert(1)</script>')
              // -> &lt;script&gt;alert(1)&lt;&#x2F;script&gt;

              - 对于显示富文本来说，不能通过上面的办法来转义所有字符，因为这样会把需要的格式也过滤掉。这种情况通常采用白名单过滤的办法，当然也可以通过黑名单过滤，但是考虑到需要过滤的标签和标签属性实在太多，更加推荐使用白名单的方式。
              以下示例使用了 js-xss 来实现。输出中保留了 h1 标签且过滤了 script 标签:
                var xss = require('xss')
                var html = xss('<h1 id="title">XSS Demo</h1><script>alert("xss");</script>')
                console.log(html)
                // -> <h1>XSS Demo</h1>&lt;script&gt;alert("xss");&lt;/script&gt;      
持久型 XSS
持久型 XSS 漏洞，也被称为存储型 XSS 漏洞，一般存在于 Form 表单提交等交互功能，如发帖留言，提交文本信息等，黑客利用的 XSS 漏洞，将内容经正常功能提交进入数据库持久保存，当前端页面获得后端从数据库中读出的注入代码时，恰好将其渲染执行。
        2. 持久型 XSS 攻击成功需要同时满足以下几个条件：
          (1) POST 请求提交表单后端没做转义直接入库。
          (2) 后端从数据库中取出数据没做转义直接输出给前端。
          (3) 前端拿到后端数据没做转义直接渲染成 DOM。
          * 如何防御
            - 后端在入库前应该选择不相信任何前端数据，将所有的字段统一进行转义处理。
            - 后端在输出给前端数据统一进行转义处理。
            - 前端在渲染页面 DOM 的时候应该选择不相信任何后端数据，任何字段都需要做转义处理。
  3. 漏洞类型二
    * CSP
    内容安全策略 (CSP) 是一个额外的安全层，用于检测并削弱某些特定类型的攻击，包括跨站脚本 (XSS) 和数据注入攻击等。无论是数据盗取、网站内容污染还是散发恶意软件，这些攻击都是主要的手段。我们可以通过 CSP 来尽量减少 XSS 攻击。CSP 本质上也是建立白名单，规定了浏览器只能够执行特定来源的代码。
    通常可以通过 HTTP Header 中的 Content-Security-Policy 来开启 CSP
      - 只允许加载本站资源
        Content-Security-Policy: default-src ‘self’
      - 只允许加载 HTTPS 协议图片
        Content-Security-Policy: img-src https://*
    * 前端CSRF安全编码
      跨站请求伪造（英语：Cross-site request forgery），也被称为 one-click attack 或者 session riding，通常缩写为 CSRF 或者 XSRF， 是一种挟制用户在当前已登录的 Web 应用程序上执行非本意的操作的攻击方法。[1] 跟跨網站指令碼（XSS）相比，XSS 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户网页浏览器的信任。
      CSRF 就是利用用户的登录态发起恶意请求, 攻击成功需要同时满足以下几个条件：
        - 用户已经登录了站点 A，并在本地记录了 cookie
        - 在用户没有登出站点 A 的情况下（也就是 cookie 生效的情况下），访问了恶意攻击者提供的引诱危险站点 B (B 站点要求访问站点A)。
        - 站点 A 没有做任何 CSRF 防御
      - 攻击方式
        假设网站中有一个通过 Get 请求提交用户评论的接口，那么攻击者就可以在钓鱼网站中加入一个图片，图片的地址就是评论接口
        <img src="http://www.domain.com/xxx?comment='attack'" />
        如果接口是 Post 提交的，就相对麻烦点，需要用表单来提交接口：
        <form action="http://www.domain.com/xxx" id="CSRF" method="post">
        <input name="comment" value="attack" type="hidden" />
        </form>
      -  防御办法
        * Get 请求不对数据进行修改
        * 不让第三方网站访问到用户 Cookie
        * 阻止第三方网站请求接口
        * 在非 GET 请求中增加 token
        * 服务器下发一个随机 Token（算法不能复杂），每次发起请求时将 Token 携带上，服务器验证 Token 是否有效。
    * 密码安全
      密码安全更多的是后端数据库的安全，其实前端也可以做些事情，
      - 比如，防止暴力破解的方式破解密码
        通常使用验证码增加延时或者限制尝试次数的方式。并且一旦用户输入了错误的密码，也不能直接提示用户输错密码，而应该提示账号或密码错误。
    * 前端敏感信息泄漏
      - 禁止使用localStorage/sessionstorage/globalStorage进行敏感信息存储
      - 使用postMessage等需要在进行白名单校验
      - 前端禁止写入cookie


      