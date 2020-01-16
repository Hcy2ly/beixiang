同源策略

1. 一个源的定义
  - 如果两个页面的协议，端口（如果有指定）和域名都相同，则两个页面具有相同的源。
2. 同源策略 （同协议 同域名 同端口号）
  - 同源策略是浏览器的一个安全功能，不同源的客户端脚本在没有明确授权的情况下，不能读写对方资源。所以xyz.com下的js脚本采用ajax读取abc.com里面的文件数据是会被拒绝的。
  - 同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。
3. 不受同源策略限制的
  - 页面中的链接，重定向以及表单提交是不会受到同源策略限制的。
  - 跨域资源的引入是可以的。但是js不能读写加载的内容。如嵌入到页面中的<script src="..."></script>，<img>，<link>，<iframe>等。

  <!-- 好吧。用了python -->

#jQuery中有专门的方法实现jsonp。
jQuery中getJSON方法
<!-- demo2中的xyz.html
<!DOCTYPE HTML>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="x-ua-compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>xyz</title>
</head>
<body>
<button id="b1">点我</button>
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
<script>
  $("#b1").click(function () {
    $.getJSON("http://127.0.0.1:8002/abc/?callback=?", function (res) {
      console.log(res);
    })
  });
</script>
</body>
</html> -->

- 要注意的是在url的后面必须要有一个callback参数，这样getJSON方法才会知道是用JSONP方式去访问服务，callback后面的那个？是jQuery内部自动生成的一个回调函数名。
- 但是如果我们想自己指定回调函数名，或者说服务上规定了回调函数名该怎么办呢？我们可以使用$.ajax方法来实现：
<!-- <!DOCTYPE HTML>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="x-ua-compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>xyz</title>
</head>
<body>
<button id="b1">点我</button>
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
<script>
  $("#b1").click(function () {
    $.ajax({
      url: "http://127.0.0.1:8002/abc/",
      dataType: "jsonp",
      jsonp: "callback",
      jsonpCallback: "rion2"
    })
  });
  function rion2(res) {
    console.log(res);
  }
</script>
</body>
</html> -->

不过我们通常都会讲回调函数写在success回调中：
<!-- <!DOCTYPE HTML>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="x-ua-compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>xyz</title>
</head>
<body>
<button id="b1">点我</button>
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
<script>
  $("#b1").click(function () {
    $.ajax({
      url: "http://127.0.0.1:8002/abc/",
      dataType: "jsonp",
      success: function (res) {
        console.log(res);
      }
    })
  })
</script>
</body>
</html> -->
 

JSONP应用
// 跨域请求示例
$("#show-tv").click(function () {
  $.ajax({
    url: "http://www.jxntv.cn/data/jmd-jxtv2.html?callback=list&_=1454376870403",
    dataType: 'jsonp',
    jsonp: 'callback',
    jsonpCallback: 'list',
    success: function (data) {
      var weekList = data.data;
      var $tvListEle = $(".tv-list");
      $.each(weekList, function (k, v) {
        var s1 = "<p>" + v.week + "列表</p>";
        $tvListEle.append(s1);
        $.each(v.list, function (k2, v2) {
          var s2 = "<p><a href='" + v2.link + "'>" + v2.name + "</a></p>";
          $tvListEle.append(s2)
        });
        $tvListEle.append("<hr>");
      })
    }
  })
});

