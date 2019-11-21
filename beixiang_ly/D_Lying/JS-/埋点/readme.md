怎么埋点呢？
1. 要想知道埋点的方法，首先要了解埋点的分类，目前埋点主要分为三大类，分别是：
  - 代码埋点
  - 无埋点
  - 可视化埋点（可认为是无埋点的一种）

2. 已经知道了埋点的分类了，那么具体怎么实施呢，因其依靠数据，因此其步骤有三：
  1. 获取数据
  2. 展示数据
  3. 分析数据

充分准确的埋点是第一步，对后续的展示及分析都有重要的意义，因此本文重点介绍该方面。
#埋点类别详解
1. 代码埋点
优点：监控用户行为，监测数据准确
缺点：工作量大，需要手动在需要埋点的地方进行埋点，因此需要侵入业务代码，比如点击事件的回调函数、页面的生命周期、ajax回调等。

常用代码埋点类型分两类，分别为命令式、声明式
//命令式： $('button').click(() => {
  record(data);
})
//声明式： <button data-record='{key: "recordTest",data:"recordData"}'>记录</button>

* 命令式埋点：在一些事件操作的回调函数中进行埋点，埋点的数据和方法可能多种多样的，比如图片上带数据，ajax发送数据等。
* 声明式埋点：将埋点信息封装在自定义属性中，通过sdk识别自定义属性然后获取埋点数据。
 
2. 无埋点
优势：不需要关注埋点逻辑
缺点：给数据传输增加压力、无法定制

通常，当页面打开时，页面中的埋点js片段会被执行，这段js代码会异步加载一个js文件，该文件就是[无埋点的sdk]，会被浏览器请求到并执行，通过该脚本进行数据收集，当数据收集完成后，可以利用一些方法将数据传递给后端进行收集整理。
无埋点sdk执行阶段
<script type="text/javascript"> 
  var _bury = _bury || [];
  _bury.push(["_testData","网站标识"]);
  (function() {
    var jsnode = document.createElement('script');
    jsnode.type = "text/javascript";
    //这里填入js sdk链接
    jsnode.src = "xxxxxxxxxxx/bury_test.js";
    var s = document.getElementByTagName('script')[0];
    s.parentNode.insertBefore(jsnode,s);
  })
</script>
通过在页面或者基础脚本中集成这段代码，可以在对应的页面上引入我们的bury_test脚本，而bury_test脚本就是我们的埋点sdk。

埋点sdk //bury_test.js
(function() {
  var buryData = {};
  //常用信息
  if (document) {
    //域名
    buryData.domain = document.domain || '';
    //标题
    buryData.title = document.title || '';
    //访问来源
    buryData.referrer = document.referrer || '';
    //分辨率
    buryData.sw = window.screen.width || 0;
    buryData.sh = window.screen.height || 0;
    //设备信息
    buryData.lang = navigator.language || '';
    buryData.ua = navigator.userAgent || '';
    //页面加载时间
    buryData.loadT = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart || 0;
  }
  //整理埋点数据
  var arg = [];
  if (buryData) {
    for (var i in buryData) {
      arg.push(encodeURIComponent(i) + '=' + encodeURIComponent(buryData[i]));
    }
  }
  var args = arg.join('&');
})
通过以上方法，可以获取一些基本的页面数据，更多详细的数据，可以根据具体的业务需求进行添加。 如何将采集到的数据进行上报呢，需要根据具体的情况来分析了，如果没有跨域的话，最简单的当然是ajax了。但是很多sdk都涉及到跨域了，目前主流的一种方法是用js脚本创建Image对象，将image的src指向后端脚本，并将数据拼接上。

3. 可视化埋点
  - 优点：通过集成sdk，运营可自主选择，操作便捷。
  - 缺点：无法定制详细的业务数据，比如 金额、商品数量等，该类数据需要实时变化；需要统一规范，无法用在不同的设备上，比如某些特殊的设备imei并不能识别。
  - 目前很多商用软件比如Mixpanel、TalkingData、诸葛IO、腾讯MTA等都可以用来可视化埋点，用户仅需要点击想要监测的元素，然后对该埋点起个对应的名字，并给个编号，就进行了埋点。

可视化埋点的核心方案是利用xpath，是在xml文档中查找信息的语言,可以定位到固定的DOM节点。

如何获取xpath呢，这里可以提供一种方法可供参考：
var getPath = function(elem) {
  if (elem.id != '') {
    return '//*[@id=\"' + elem.id + '\"]';
  }
  if (elem == document.body) {
    return '/html/' + elem.tagName.toLowerCase();
  }
  var index = 1,
    siblings = elem.parentNode.childNodes;
  for (var i = 0, len = siblings.length; i < len; i++) {
    var sibling = siblings[i];
    if (sibling == elem) {
      return arguments.callee(elem.parentNode) + '/' + elem.tagName.toLowerCase() + '[' + (index) + ']';
    } else if (sibling.nodeType == 1 && sibling.tagName == elem.tagName) {
      index++;
    }
  }
}
通过上述方法，当我们点击某个元素时，将触发的元素event.target传入，即可得到完整的xpath。

4. 三种埋点的区别
  - 以百度举例：
    当用户点击百度一下的时候，无埋点和可视化埋点可以获取的信息有某个时刻、某个设备进行了一次搜索，甚至可以获得部分搜索信息等，但是用户在输入搜索信息时，是否进行了修改、反复删除重新输入几次等深度的业务信息，无埋点和可视化埋点是统计不到的，则需要代码埋点。