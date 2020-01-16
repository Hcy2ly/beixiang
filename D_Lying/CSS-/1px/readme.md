      // &::after {
      //   position: absolute;
      //   bottom: 0;
      //   left: 0;
      //   content: "";
      //   width: 100%;
      //   height: 1px;
      //   background-color: rgba(217, 217, 217, 1);
      //   transform: scaleY(0.5); // !
      // }
      // &:last-child {
      //   &::after {
      //     width: 0;
      //     height: 0;
      //   }
      // }

      伪类实现

产生原因： 
"Retina"一词，原意是“视网膜”的意思，指显示屏的分辨率极高，使得肉眼无法分辨单个像素。为普通屏幕的2倍。
由于设备的分辨率不同，和科技的发展，Retina屏的出现，分辨率变为普通屏幕的2倍，1px的边框在devicePixelRatio = 2 的 Retina屏下会显示成2px，所以在普通分辨率高清屏下看着1px总是感觉变胖勒。

解决方案： 
1. 建立媒体查询适配
优点：简单，好理解
缺点：兼容性差，目前之余IOS8+才支持，在IOS7及其以下、安卓系统都是显示0px。
<!-- css -->
.border {
      border: 1px solid #000;
}
@media(-webkit-min-device-pixel-ratio: 2) {
      .border {
            border: 0.5px solid #000;
      }
}
@media screen and (-webkit-min-device-pixel-ratio: 3) {
    .border { border: 0.333333px solid #999 }
}

<!-- js 可以写成这样： -->
<body><div id="main" style="border: 1px solid #000000;"></div></body>
<script type="text/javascript">
    if (window.devicePixelRatio && devicePixelRatio >= 2) {
        var main = document.getElementById('main');
        main.style.border = '.5px solid #000000';
    }
</script>


2. css3伪类 + transform: scale(0.5)    推荐: 很灵活
缺点：圆角无法实现，实现4条边框比较麻烦

.radius-border {
      position: relative;
}
@media screen and (-webkit-min-device-pixel-ratio: 2) {
      .radius-border:before {
            content: "";
            pointer-events: none;/*防止点击触发*/
            box-sizing: border-box;
            position: absolute;
            width: 200%;
            height: 2px;
            left: 0;
            top: 0;
            border-radius: 8px;
            border: 1p solid #000;
            -webkit-transform(scaleY(0.5));
            -webkit-transform-origin: 0 0;
            transform(scaleY(0.5));
            transform-origin: 0 0;
      }
}

<!-- 还有一种写法： -->
1.) 设置height: 1px，根据媒体查询结合transform缩放为相应尺寸。

div {
    height:1px;
    background:#000;
    -webkit-transform: scaleY(0.5);
    -webkit-transform-origin:0 0;
    overflow: hidden;
}

2.) 用::after和::befor,设置border-bottom：1px solid #000,然后在缩放-webkit-transform: scaleY(0.5);可以实现两根边线的需求
div::after{
    content:'';width:100%;
    border-bottom:1px solid #000;
    transform: scaleY(0.5);
}

3.) 用::after设置border：1px solid #000; width:200%; height:200%,然后再缩放scaleY(0.5); 优点可以实现圆角，京东就是这么实现的，缺点是按钮添加active比较麻烦。
.div::after {
    content: '';
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #bfbfbf;
    border-radius: 4px;
    -webkit-transform: scale(0.5,0.5);
    transform: scale(0.5,0.5);
    -webkit-transform-origin: top left;
}


<!-- 共用方法：  -->
.onePxHei(@borColor:#efefef,@borPx:1px){
  &:after{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    -webkit-transform: scale(1,.5);
    transform: scale(1,.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    content: '';
    background-color: @borColor;
  }
}  


3. 媒体查询 + transfrom 对方案1的优化
/* 2倍屏 */
@media only screen and (-webkit-min-device-pixel-ratio: 2.0) {
    .border-bottom::after {
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }
}
/* 3倍屏 */
@media only screen and (-webkit-min-device-pixel-ratio: 3.0) {
    .border-bottom::after {
        -webkit-transform: scaleY(0.33);
        transform: scaleY(0.33);
    }
}

4. 使用background-image
   优点：基本所有场景都能满足，包含圆角的button，单条，多条线     
   缺点：大量使用渐变可能导致性能瓶颈

//通过background实现的1px，设置到dom本身，不会绘制padding和margin区域
.onePxBottomByBg(@borColor:#efefef,@borPx:1px){
  background-image: -webkit-linear-gradient(top, @borColor, @borColor 50%, transparent 50%);
  background-image: linear-gradient(180deg, @borColor, @borColor 50%, transparent 50%);
  background-size: 120% @borPx;
  background-repeat: no-repeat;
  background-position: bottom left;
  background-origin: content-box;
}
原理：将原本1个物理像素的边框大小利用线性渐变分割成几个部分（百分比控制），实现小于1像素效果。
linear-gradient：指定线性渐变，接受大于等于3个参数，第一个为渐变旋转角度，第二个开始为渐变的颜色和到哪个位置（百分比）全部变为该颜色，该例子中，第一句就是，渐变方向旋转180度，即从上往下（默认为0度从下往上），从红色开始渐变，到50%的位置还是红色，再渐变为继承父元素颜色。


5. 设置 border-image 方案

缺点：需要制作图片，圆角可能出现模糊

.border-image-1px {
    border-width: 1px 0px;
    -webkit-border-image: url("border.png") 2 0 stretch;
    border-image: url("border.png") 2 0 stretch;
}
border-width：指定边框的宽度，可以设定四个值，分别为上右下左border-width: top right bottom left。
border-image：该例意为：距离图片上方2px（属性值上没有单位）裁剪边框图片作为上边框，下方2px裁剪作为下边框。距离左右0像素裁剪图片即没有边框，以拉伸方式展示。

6. viewport + rem

该方案是对上述方案的优化，整体思路就是利用viewport + rem + js 动态的修改页面的缩放比例，实现小于1像素的显示。
缺点：以为缩放涉及全局的rem单位，比较适合新项目，对于老项目可能要涉及到比较多的改动。

在页面初始化时，在头部引入原始默认状态如下： <meta name="viewport" id="WebViewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
接下来的任务就是js的动态修改缩放比 以及 实现rem根元素字体大小的设置。
var viewport = document.querySelector("meta[name=viewport]")
if (window.devicePixelRatio == 1) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no')
} 
if (window.devicePixelRatio == 2) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no')
} 
if (window.devicePixelRatio == 3) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=0.333333333, maximum-scale=0.333333333, minimum-scale=0.333333333, user-scalable=no')
} 
var docEl = document.documentElement;
var fontsize = 10 * (docEl.clientWidth / 320) + 'px';
docEl.style.fontSize = fontsize;


7. box-shadow

利用阴影也可以实现，优点是没有圆角问题，缺点是颜色不好控制

div {
    -webkit-box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.5);
}
box-shadow属性的用法：box-shadow: h-shadow v-shadow [blur] [spread] [color] [inset]
参数分别表示: 水平阴影位置，垂直阴影位置，模糊距离， 阴影尺寸，阴影颜色，将外部阴影改为内部阴影，后四个可选。该例中为何将阴影尺寸设置为负数？设置成-1px 是为了让阴影尺寸稍小于div元素尺寸，这样左右两边的阴影就不会暴露出来，实现只有底部一边有阴影的效果。从而实现分割线效果（单边边框）。
