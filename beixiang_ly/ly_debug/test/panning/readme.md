   1. 埋点  
   2. 商品有无判断。商品是否可以滚动判断。长度大于多少小于多少 √
     
     
1. 整个top有问题，主题尺不对，红包需要给我一个背景图，最好有一个红包存放的具体位置高度，就像主题那样，宽度均为最大宽度即可
2. 联系客服，应该是两行，因为字体大小不一样。而且 联系客服 的字体也不不一样，所以应该分三块
3. 折扣小图标也要切图给我
4. 分享赚的背景切图。（后面的99.99元没有 其他都有）
5. 最下面的横屏商品也没有切。



js逻辑
1. 图片滚动   => 点击其中一张
2. =>  图片变大。这里必须使用弹层，。因为我用flex布局写的三个盒子的渲染。如果用类名将他变大他就会出来，两边盒子往中间缩写。最重要是的盒子是自动互动的，banner高度为210限制了盒子的大小显示，将盒子切割了。（不知道是不是overflow： hidden的原因）
ps： 实在不行可以给盒子定宽高。让三个盒子不要改变位置//不建议。因为只有中间的盒子能点。

3. 其实为了效果，最好用activity的方式。因为这样盒子可以有变大的效果。如果用弹层的方式不知道能不能实现。（先把js写完试试）

4. click-btn点击拆 => 打开了，打开这里给一个放大的光效，同时隐藏盒子一显示盒子2，页面变成盒子2的型态。（然后这里加上一个翅膀扇动的动态。）
✔

0805 ：
1. 翅膀扇动 √
2. 跳转客服的链接 √
3. 埋点的名字在哪里获取（confluence??)  √
4. 用户使用了红包然后可以重新抽取。
5. 倒计时15分钟向用户发送提醒。push为跳转红包落地页
6. 2小时候，红包失效，抽奖重置。

埋点自定义命名:
1. 页面曝光  shoppingHongbao_panning_PageEntry
2. 红包点击  shoppingHongbao_panning_btnClick
3. 商品点击  shoppingHongbao_panning_goodsClick
4. 联系客服  shoppingHongbao_panning_showCommodityDetail
  showCommodityDetail: function(data, callback) {
    jsbridge("showCommodityDetail", data, callback);
  }
5. 购物红包使用率
6. 咨询页面红包曝光


ajax
复制代码
 1 $.ajaxSetup({
 2             beforeSend: function () {
 3                 //ajax请求之前
 4             },
 5             complete: function () {
 6                 //ajax请求完成，不管成功失败
 7             },
 8             error: function () {
 9                 //ajax请求失败
10             }
11         }
默认环境为app内.所以进来的时候页面就是app环境 无需判断。

post/get   要重启


引入商品页面加载。在请求成功后去使用页面图片和page的加载/
折扣。  
     
     
     //html
     <!-- <div class="card-cover">
       <div class="big-card">
         <div class="red1"></div>
         <div class="red2"></div>
         <div class="card-btn"></div>
       </div>
       <div class="card-close"></div>
     </div> -->


     //less
.card-cover {
  position: fixed;
  z-index: 300;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: none;
  .big-card {
    position: absolute;
    width: 495 / @mrem;
    height: 610 / @mrem;
    z-index: 100;
    top: 185 / @mrem;
    left: 50%;
    background-image: url(./img/redbag.png);
    background-repeat: no-repeat;
    background-size: 100%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: center;
    animation: shake .8s ease-in-out forwards;
    .red1 {
      position: absolute;
      width: 276 / @mrem;
      height: 351 / @mrem;
      right: -123 / @mrem;
      background-image: url(./img/red1.png);
      background-repeat: no-repeat;
      background-size: 100%;
    }
    .red2 {
      position: absolute;
      width: 272 / @mrem;
      height: 351 / @mrem;
      top: 302 / @mrem;
      left: -132 / @mrem;
      background-image: url(./img/red2.png);
      background-repeat: no-repeat;
      background-size: 100%;
    }
    .card-btn {
      position: relative;
      width: 150 / @mrem;
      height: 150 / @mrem;
      margin-top: 100 / @mrem;
    }
  }
  .card-close {
    position: absolute;
    top: 72 / @mrem;
    right: 59 / @mrem;
    width: 52 / @mrem;
    height: 52 / @mrem;
    background-image: url(./img/close.png);
    background-repeat: no-repeat;
    background-size: 100%;
  }
}