touches: 当前屏幕上所有触摸点的列表;

targetTouches: 当前对象上所有触摸点的列表;

changedTouches: 涉及当前(引发)事件的触摸点的列表

通过一个例子来区分一下触摸事件中的这三个属性：

1. 用一个手指接触屏幕，触发事件，此时这三个属性有相同的值。

2. 用第二个手指接触屏幕，此时，touches有两个元素，每个手指触摸点为一个值。当两个手指触摸相同元素时，
targetTouches和touches的值相同，否则targetTouches 只有一个值。changedTouches此时只有一个值，
为第二个手指的触摸点，因为第二个手指是引发事件的原因

3. 用两个手指同时接触屏幕，此时changedTouches有两个值，每一个手指的触摸点都有一个值

4. 手指滑动时，三个值都会发生变化

5. 一个手指离开屏幕，touches和targetTouches中对应的元素会同时移除，而changedTouches仍然会存在元素。

6. 手指都离开屏幕之后，touches和targetTouches中将不会再有值，changedTouches还会有一个值，
此值为最后一个离开屏幕的手指的接触点。

2. 触点坐标选取

touchstart和touchmove使用: e.targetTouches[0].pageX 或 (jquery)e.originalEvent.targetTouches[0].pageX

touchend使用: e.changedTouches[0].pageX 或 (jquery)e.originalEvent.changedTouches[0].pageX

3.touchmove事件对象的获取

想要在touchmove:function(e,参数一)加一个参数，结果直接使用e.preventDefault()就会 e 报错，处理方法为使用arguments[0]获取event参数
touchmove:function(e,参数一){
　　var e=arguments[0]
　　e.preventDefault()
}




HTML5 中， PC 端基于鼠标的界面互动主要是单击， 移动端界面交互方式主要是触摸。
移动端浏览器触摸事件

事件名称	描述	是否包含 touches 数组
touchstart	触摸开始，多点触控，后面的手指同样会触发	是
touchmove	接触点改变，滑动时	是
touchend	触摸结束，手指离开屏幕时	是
touchcancel	触摸被取消，当系统停止跟踪触摸的时候触发	否
每个触摸事件都包括了三个触摸列表，每个列表里包含了对应的一系列触摸点（用来实现多点触控）：
1）touches：当前位于屏幕上的所有手指的列表。
2）targetTouches：位于当前DOM元素上手指的列表。
3）changedTouches：涉及当前事件手指的列表。

每个 Touch 对象包含的属性如下：
clientX：触摸目标在视口中的x坐标。

clientY：触摸目标在视口中的y坐标。

identifier：标识触摸的唯一ID。

pageX：触摸目标在页面中的x坐标。

pageY：触摸目标在页面中的y坐标。

screenX：触摸目标在屏幕中的x坐标。

screenY：触摸目标在屏幕中的y坐标。

target：触摸的DOM节点目标。


触摸事件编码
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- meta使用viewport以确保页面可自由缩放 -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>触摸事件</title>
    <!-- 引入 jQuery 库 -->
    <script src="http://apps.bdimg.com/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript">
        $(function () {
            //手指触摸屏幕时触发事件
            $('body').on('touchstart', function () {
                $('p').css({'color': '#f00'});
                console.log("用户手指触摸到屏幕...");
            });
            //手指在屏幕上移动时触发
            $('body').on('touchmove', function (even) {
                $('p').css({'color': '#0f0'});
                console.log("用户手指在屏幕上移动...");
            });
            //手指离开屏幕时触发
            $('body').on('touchend', function () {
                $('p').css({'color': '#00f'});
                console.log("用户手离开屏幕...");
            });
        });
    </script>
</head>
<body>
<p>
    工人阶级是我国的领导阶级，是全面建成小康社会、坚持和发展中国特色社会主义的...<br>
    在中国工会第十七次全国代表大会即将召开之际，让我...<br>
    工人阶级是我们党最坚实最可靠的阶级基础...<br>
    我国工人阶级是我们党最坚实最可靠的阶级基础。我国工人阶级从来都具有走在...<br>
    工人阶级和广大劳动群众始终是推动我国经济社会发展、维护社会安定团结的根本...<br>
    改革开放以来，我国工人阶级队伍不断壮大，素质全面提高，结构更加优化，面貌焕然...<br>
</p>
</body>
</html>
如果在 PC 上访问，可以使用 Chrome 浏览器的移动响应式设备进行模拟，或者直接在移动设备(如手机)上访问
Chrome 浏览器，F12 进入开发者模式，然后点击左上角的第二个按钮进行切换。
上面是使用 JQuery 的写法，推荐使用如下所示的 JavaScript 方式，因为在获取回调函数的 事件对象时，JQuery 方式会有问题，JavaScript 则是没有问题的。
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- meta使用viewport以确保页面可自由缩放 -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
 
    <title>触摸事件</title>
 
    <!-- 引入 jQuery 库 -->
    <script src="http://apps.bdimg.com/libs/jquery/1.10.2/jquery.min.js"></script>
 
    <script type="text/javascript">
        /**
         * element.addEventListener(event, function, useCapture)：向指定元素添加事件句柄
         * useCapture：true - 事件句柄在捕获阶段执行；false(默认) - 事件句柄在冒泡阶段执行
         */
        document.addEventListener('touchstart', touch, false);
        document.addEventListener('touchmove', touch, false);
        document.addEventListener('touchend', touch, false);
        function touch(event) {
            /**兼用 IE 浏览器*/
            var event = event || window.event;
            var oInp = document.getElementById("inp");
            switch (event.type) {
                case "touchstart":
                    oInp.innerHTML = "Touch started (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")";
                    break;
                case "touchend":
                    oInp.innerHTML = "<br>Touch end (" + event.changedTouches[0].clientX + "," + event.changedTouches[0].clientY + ")";
                    break;
                case "touchmove":
                    oInp.innerHTML = "<br>Touch moved (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")";
                    break;
            }
        }
    </script>
</head>
<body>
<p id="inp">
</p>
</body>
</html>
主要就是在绑定事件的部分略有不同，可以参考 HTML DOM addEventListener() 方法


触摸手指个数分析
如下所示，将屏幕上触摸的手指个数信息打印出来进行分析。
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- meta使用viewport以确保页面可自由缩放 -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css" rel="stylesheet">
        .start {
            border: 1px solid red;
            margin-top: 5px;
        }
        .move {
            border: 1px solid green;
            margin-top: 5px;
            overflow: auto;
        }
        .end {
            border: 1px solid blue;
            margin-top: 5px;
        }
    </style>
    <title>触摸事件</title>
    <!-- 引入 jQuery 库 -->
    <script src="http://apps.bdimg.com/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript">
        $(function () {
            //$(".move")[0].addEventListener("touchstart", function (event) {
            document.addEventListener("touchstart", function (event) {
                var touchesSize = event.touches.length;
                var targetTouchesSize = event.targetTouches.length;
                var changedTouchesSize = event.changedTouches.length;
                $(".start").append("tSize=" + touchesSize + ",targetTSize=" + targetTouchesSize + ",changedTSize=" + changedTouchesSize + "\r\n");
            });
            //$(".move")[0].addEventListener("touchstart", function (event) {
            document.addEventListener("touchmove", function (event) {
                var touchesSize = event.touches.length;
                var targetTouchesSize = event.targetTouches.length;
                var changedTouchesSize = event.changedTouches.length;
                $(".move").append("tSize=" + touchesSize + ",targetTSize=" + targetTouchesSize + ",changedTSize=" + changedTouchesSize + "\r\n");
 
            });
            //$(".move")[0].addEventListener("touchstart", function (event) {
            document.addEventListener("touchend", function (event) {
                var touchesSize = event.touches.length;
                var targetTouchesSize = event.targetTouches.length;
                var changedTouchesSize = event.changedTouches.length;
                $(".end").append("tSize=" + touchesSize + ",targetTSize=" + targetTouchesSize + ",changedTSize=" + changedTouchesSize + "\r\n");
            });
        });
    </script>
</head>
<body>
<div class="start">
    <b>touchstart</b>
</div>
<div class="move">
    <b>touchmove</b>
</div>
<div class="end">
    <b>touchend</b>
</div>
</body>
</html>
如下所示，左图是 document.addEventListener、右图是 $(".move")[0].addEventListener。
tSize 是当前位于屏幕上的所有手指的列表个数、targetTSize 是位于当前绑定事件的 DOM 元素上手指的列表个数、changedTSize 是涉及当前事件手指的列表个数。
对于各个数据的含义，想必测试之后一目了然，就不再多说了。


触摸目标 DOM 元素分析
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- meta使用viewport以确保页面可自由缩放 -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css" rel="stylesheet">
        html, body {
            width: 100%;
            height: 100%;
        }
        .testArea1 {
            width: 100%;
            height: 15%;
            background-color: #1b6d85;
        }
        .testArea2 {
            width: 100%;
            height: 15%;
            background-color: #1b6d85;
        }
        .start {
            border: 1px solid red;
            margin-top: 5px;
        }
        .move {
            border: 1px solid green;
            margin-top: 5px;
            overflow: auto;
        }
        .end {
            border: 1px solid blue;
            margin-top: 5px;
        }
    </style>
    <title>触摸事件</title>
    <!-- 引入 jQuery 库 -->
    <script src="http://apps.bdimg.com/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript">
        /**阻止浏览器默认右键点击事件*/
        $(document).bind("contextmenu", function () {
            console.log("用户点击鼠标右键....." + new Date().getTime());
            return false;
        });
        $(function () {
           /**注意调用的方法不要加括号()*/
            $(".testArea1")[0].addEventListener("touchstart", touchstartFun);
            $(".testArea1")[0].addEventListener("touchmove", touchmoveFun);
            $(".testArea1")[0].addEventListener("touchend", touchendFun);
 
            $(".testArea2")[0].addEventListener("touchstart", touchstartFun);
            $(".testArea2")[0].addEventListener("touchmove", touchmoveFun);
            $(".testArea2")[0].addEventListener("touchend", touchendFun);
        });
        /**
         * 手指触摸屏幕时——函数调用
         * @param event
         */
        function touchstartFun(event) {
            /**event.targetTouches[0]：表示获取发生在当前 DOM 元素第一个手指对象
             * target：手指触摸的 DOM节点，对原生 JS 不熟悉时，使用 $()转为 JQuery 对象操作
             * */
            console.log("start——" + event.targetTouches[0].target.innerHTML);//js获取触摸DOM对象的文本值
            console.log("start——" + $(event.targetTouches[0].target).attr("class"));//JQuery 获取触摸对象的class属性值
        }
        /**
         * 手指在触摸屏上移动时——函数调用
         * @param event
         */
        function touchmoveFun(event) {
            /**event.targetTouches[0]：表示获取发生在当前 DOM 元素第一个手指对象
             * target：手指触摸的 DOM节点，对原生 JS 不熟悉时，使用 $()转为 JQuery 对象操作
             * */
            console.log("move——" + event.targetTouches[0].target.innerHTML);//js获取触摸DOM对象的文本值
            console.log("move——" + $(event.targetTouches[0].target).attr("class"));//JQuery 获取触摸对象的class属性值
        }
        /**
         * 手指离开屏幕时——函数调用
         * @param event
         */
        function touchendFun(event) {
            /**event.changedTouches[0]：表示获取当前 DOM 元素发生此事件的第一个手指对象
             * target：手指触摸的 DOM节点，对原生 JS 不熟悉时，使用 $()转为 JQuery 对象操作
             *
             * 注意：离开时应该是获取 changedTouches，而不是 targetTouches、touches，因为当手指全部离开屏幕时，它们个数可能为0
             * */
            console.log("end————" + event.changedTouches[0].target.innerHTML);//js 获取触摸 DOM 对象的文本值
            console.log("end————" + $(event.changedTouches[0].target).attr("class"));//JQuery 获取触摸对象的class属性值
        }
    </script>
</head>
<body>
<div class="testArea1">
    触摸测试区域1
</div>
<div class="start">
    <b>touchstart</b>
</div>
<div class="move">
    <b>touchmove</b>
</div>
<div class="end">
    <b>touchend</b>
</div>
<div class="testArea2">
    触摸测试区域2
</div>
</body>
</html>

触摸位置分析
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- meta使用viewport以确保页面可自由缩放 -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css" rel="stylesheet">
        html, body {
            width: 100%;
            height: 100%;
        }
        .testArea1 {
            width: 100%;
            height: 15%;
            background-color: #1b6d85;
        }
        .testArea2 {
            width: 100%;
            height: 15%;
            background-color: #1b6d85;
        }
        .start {
            border: 1px solid red;
            margin-top: 5px;
        }
        .move {
            border: 1px solid green;
            margin-top: 5px;
            overflow: auto;
        }
        .end {
            border: 1px solid blue;
            margin-top: 5px;
        }
    </style>
    <title>触摸事件</title>
    <!-- 引入 jQuery 库 -->
    <script src="http://apps.bdimg.com/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript">
        /**阻止浏览器默认右键点击事件*/
        $(document).bind("contextmenu", function () {
            console.log("用户点击鼠标右键....." + new Date().getTime());
            return false;
        });
        $(function () {
            /**注意调用的方法不要加括号()*/
            $(".testArea1")[0].addEventListener("touchstart", touchstartFun);
            $(".testArea1")[0].addEventListener("touchmove", touchmoveFun);
            $(".testArea1")[0].addEventListener("touchend", touchendFun);
 
            $(".testArea2")[0].addEventListener("touchstart", touchstartFun);
            $(".testArea2")[0].addEventListener("touchmove", touchmoveFun);
            $(".testArea2")[0].addEventListener("touchend", touchendFun);
        });
        /**
         * 手指触摸屏幕时——函数调用
         * @param event
         */
        function touchstartFun(event) {
            /**event.targetTouches[0]：表示获取发生在当前 DOM 元素第一个手指对象
             * target：手指触摸的 DOM节点，对原生 JS 不熟悉时，使用 $()转为 JQuery 对象操作
             * */
            var lentgX = event.targetTouches[0].clientX;
            var lentgY = event.targetTouches[0].clientY;
            $(".start").append("<br>" + lentgX + "——" + lentgY);
        }
        /**
         * 手指在触摸屏上移动时——函数调用
         * @param event
         */
        function touchmoveFun(event) {
            /**event.targetTouches[0]：表示获取发生在当前 DOM 元素第一个手指对象
             * target：手指触摸的 DOM节点，对原生 JS 不熟悉时，使用 $()转为 JQuery 对象操作
             * */
            var lentgX = event.targetTouches[0].clientX;
            var lentgY = event.targetTouches[0].clientY;
            $(".move").append("<br>" + lentgX + "——" + lentgY);
        }
        /**
         * 手指离开屏幕时——函数调用
         * @param event
         */
        function touchendFun(event) {
            /**event.changedTouches[0]：表示获取当前 DOM 元素发生此事件的第一个手指对象
             * target：手指触摸的 DOM节点，对原生 JS 不熟悉时，使用 $()转为 JQuery 对象操作
             *
             * 注意：离开时应该是获取 changedTouches，而不是 targetTouches、touches，因为当手指全部离开屏幕时，它们个数可能为0
             * */
            var lentgX = event.changedTouches[0].clientX;
            var lentgY = event.changedTouches[0].clientY;
            $(".end").append("<br>" + lentgX + "——" + lentgY);
        }
    </script>
</head>
<body>
<div class="testArea1">
    触摸测试区域1
</div>
<div class="start">
    <b>touchstart</b>
</div>
<div class="move">
    <b>touchmove</b>
</div>
<div class="end">
    <b>touchend</b>
</div>
<div class="testArea2">
    触摸测试区域2
</div>
</body>
</html>
————————————————
版权声明：本文为CSDN博主「蚩尤后裔」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/wangmx1993328/article/details/83270166