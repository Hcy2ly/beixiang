import "./entry.less";
require("lib/lib-zepto/1.0.0/zepto.min");
import prizeNotice from "../../components/prizeNotice"; //跑马灯
import JSB from "../../lib/share";
import { domain } from "../../utils/getDomain";
import { dataLog } from '../../utils/dataLog';
import cookie from "../../lib/docCookie";
(function() {
  // activity start
  var activity = {
    userId: "",
    version: "",
    deviceId: "",
    token: "",
    isApp: true, // 默认为app内
    stamp: 12000,
    domain: domain,
    systemType: window.navigator.userAgent.indexOf("iPhone") !== -1 ? "Ios" : "Android",
    awardInfo: null,
    hasNoTimes: false,
    running: false,
    todayTotal: 0,
    toolName: "squareCircle",
    squareCircle: {
      stopStep: -1, //表示最终奖品位置
      runT: null, //转动方法
      step: -1, //计算转动的步数，控制转速和停止
      during: 2, //转速
      OFF: true, // 判断点击事件是否可以执行
      initTimer: null,
      initTime: 600, // 转圈时间
      initStep: 0,
      count: 8,
      lastResult: null,
      running(data) {
        let self = activity.squareCircle;

        if (data) {
          self.lastResult = data;
          if (data.rewardType == 2) {
            self.stopStep = 4;
          } else if (data.rewardType == 3) {
            self.stopStep = 1;
          } else if (data.rewardType == 4) {
            self.stopStep = 2;
          }
        }
        if (self.step >= 24 + self.stopStep) {
          //设置转动多少圈
          $(".brand" + (self.step % 8))
            .find("div")
            .removeClass("layer");
          self.step = self.stopStep;
          self.initStep = self.step % 8; // 抽奖结束后 init 旋转是从 中奖的当前位置 开始
          self.OFF = true; // 结束之后 重新可以点击
          clearTimeout(self.runT); //停止转动
          activity.showResult(self.lastResult);

          return;
        }
        if (self.step >= 20 + self.stopStep) {
          //在即将结束转动前减速
          self.during += 1;
        } else {
          if (self.during <= 2) {
            //控制中间转速
            self.during = 2;
          }
          self.during--;
        }
        self.step++;
        $(".brand").each(function() {
          $(this)
            .find("div")
            .addClass("layer");
        });
        $(".brand" + (self.step % 8))
          .find("div")
          .removeClass("layer");

        self.runT = setTimeout(self.running, self.during * 50);
      },
      runInit() {
        let self = activity.squareCircle;
        self.initStep++;
        // debugger;
        $(".ableClick")
          .off("click")
          .click(function() {
            activity.start();
            dataLog({
              pageId: 2,
              clickType: 'click',
              deviceId: activity.deviceId,
              token: activity.token
            });
          });
        $(".brand").each(function() {
          $(this)
            .find("div")
            .addClass("layer");
        });
        $(".brand" + (self.initStep % 8))
          .find("div")
          .removeClass("layer");
        self.step = self.initStep % 8;
      }
    },
    init: function(params, isApp = true) {
      const { userId = 0, versionName = 0, deviceId = 0, token = null } = params;
      this.userId = userId;
      this.version = versionName;
      this.deviceId = deviceId;
      this.token = token;
      this.isApp = isApp;

      this.getInitInfo();
      prizeNotice && prizeNotice.init();
      dataLog({
        pageId: 2,
        deviceId: this.deviceId,
        token: this.token
      });
    },
    events: function() {
      var self = this;
      $(".start").on("click", function() {
        self.start();
      });

      // app内部兜底
      $(".get-more .close").on("click", function() {
        $(".get-more").hide();
        // dataLog({
        //   pageId: 2,
        //   slot: 4,
        //   slotId: 5,
        //   clickType: 'close',
        //   deviceId: self.deviceId,
        //   token: self.token
        // });
      });
      $(".get-more .btn").on("click", function() {
        $(".get-more").hide();
        JSB.goTaskCenter();
        // dataLog({
        //   pageId: 2,
        //   slot: 4,
        //   slotId: 5,
        //   clickType: 'click',
        //   deviceId: self.deviceId,
        //   token: self.token
        // });
      });

      // 规则弹层
      $(".rule").on("click", function() {
        $(".ruleBoardMore").show();
        $(".mainArea").addClass("filter");
      });
      $(".bg-rule .close").on("click", function() {
        $(".ruleBoardMore").hide();
        $(".mainArea").removeClass("filter");
      });

      //app外部兜底
      $(".packet-cover .btn").on("click", function() {
        $(".get-more").hide();
        window.timer && clearTimeout(window.timer);
        window.location.href = "https://a.app.qq.com/o/simple.jsp?pkgname=com.hh.fanliwang";
      });
    },
    // 根据isApp 插入对应的Dom
    appendDom: function() {
      if (this.isApp) {
        let coinDom = '<div class="total-coin"><div class="coin-num"></div></div>'; // 零钱豆计数
        let moreDom = `
          <div class="get-more">
            <div class="content-body">
              <div class="content-head">
                <p>今日机会已用完</p>
                <div class="gift-img"></div>
              </div>
              <div class="content-middle">
                <p class="content-desc">累计获得零钱豆</p>
                <p class="total-get"></p>
                <p class="overswing">太厉害了!超过了98%的用户</p>
              </div>
              <button class="btn">去赚更多零钱豆</button>
            </div>
            <div class="close"></div>
          </div>`;
        $(".wrap").append(coinDom); //  app内部兜底
        $("body").append(moreDom); //  app内部兜底
      }
      // this.pushHistory();  // 返回拦截
    },

    pushHistory: function() {
      var state = {
        title: "title",
        url: "#"
      };
      window.history.pushState(state, null, "#");
      window.addEventListener(
        "popstate",
        function() {
          window.location.href = "https://a.app.qq.com/o/simple.jsp?pkgname=com.hh.fanliwang";
        },
        false
      );
    },
    getInitInfo: function() {
      var self = activity;
      $.ajax({
        url: `${self.domain}/activity/shake/luckDrawDetail`,
        type: "get",
        dataType: "json",
        data: {
          userId: self.userId,
          version: self.version,
          systemOpt: self.systemType,
          deviceId: self.deviceId,
          token: self.isApp ? self.token : cookie.get("token") || "",
          sourceFrom: self.isApp ? 1 : 2,
          activityFlag: self.toolName
        },
        success: function(res) {
          self.appendDom(); // 预先挂载 次数为零弹层
          self.events();//挂载事件
          !cookie.get('token')&&cookie.set("token", res.data.token); // cookie过期时间为1天。
          self.renderElement(res.data);
          self.todayTotal = res.data.lastIncome;
          $(".coin-num").text(res.data.lastIncome);
          activity.squareCircle.initTimer = setInterval(activity.squareCircle.runInit, activity.squareCircle.initTime);
        }
      });
    },

    getAward: function() {
      var self = this;
      $.ajax({
        url: `${self.domain}/activity/shake/luckDraw`,
        type: "post",
        dataType: "json",
        data: {
          userId: self.userId,
          version: self.version,
          systemOpt: self.systemType,
          deviceId: self.deviceId,
          token: self.isApp ? self.token : cookie.get("token") || "",
          sourceFrom: self.isApp ? 1 : 2,
          activityFlag: self.toolName
        },
        success: function(res) {
          if(res.code != 0 ){
            alert('操作过于频繁，请重试');
            window.location.reload();
          }
          self.renderElement(res.data);
          var square = activity.squareCircle;
          if (!square.OFF || square.count <= 0) {
            // '当前不能点击'
            return false;
          }
          square.OFF = false;
          square.stopStep = 1;
          square.runT = setTimeout(square.running, 50, res.data);
        }
      });
    },
    showResult: function(result) {
      var self = this;
      const { rewardType, rewardCoin, lastIncome, luckAdVO } = result;
      self.todayTotal = lastIncome;
      rewardType == 1 && self.popOneGoods(result); // 单个商品
      rewardType == 2 && self.popThreeGoods(result);
      rewardType == 4 && self.popFourGoods(result);
      if (rewardType === 3) {
        JSB.activityCoinPop(
          {
            actId: luckAdVO.chuanshanjiaId,
            coinNum: rewardCoin
          },
          "dealCoin"
        );
      }
    },
    reInit: function() {
      var self = this;
      self.running = false;
      activity.squareCircle.initTimer = setInterval(activity.squareCircle.runInit, activity.squareCircle.initTime);
    },
    start: function() {
      var self = activity;
      if (self.hasNoTimes) {
        if (self.isApp) {
          $(".total-get").text(this.todayTotal);
          $(".get-more").show();
          self.dataLog("activity_squareCircle_getMorePop");
        } else {
          self.showNote("次数用完了，下次再来试试吧", 1000);
        }
      } else {
        if (this.running) return;
        this.running = true;
        self.doStart();
      }
    },
    doStart: function() {
      this.awardInfo = null;
      clearInterval(activity.squareCircle.initTimer);
      this.getAward();
    },
    showTime: function(stamp) {
      var self = this;
      let seconds = parseInt(stamp / 1000);
      let msecond = (stamp % 1000) / 10;
      seconds = seconds >= 10 ? seconds : "0" + seconds;
      msecond = msecond >= 10 ? msecond : "0" + msecond;
      if (stamp < 0) {
        window.timer && clearTimeout(window.timer);
        return;
      }
      $(".second").text(seconds);
      $(".msecond").text(msecond);
      stamp = stamp - 10;
      window.window.timer = setTimeout(() => {
        self.showTime(stamp);
      }, 10);
    },
    /**
     * 渲染免费次数\我的零钱豆\每次消费
     */
    renderElement: function(result) {
      $(".dayNum")
        .html(`今日免费： ${result.usableShakeCount} 次`)
        .show();
      if (!result.usableShakeCount) {
        this.hasNoTimes = true;
      } else {
        this.hasNoTimes = false;
      }
    },
    popOneGoods: function(result) {
      var self = this;
      const { luckAdVO } = result;
      let dom = `
        <div class="coupon-modal">
          <div class="coupon-content">
            <div class="content-title"><span>恭喜中奖</span></div>
            <div class="coupon-body">
              <div class="time">领取倒计时&nbsp;<div><span class="second"></span>:<span class="msecond"></span></div></div>
              <div class="goods-area">
                <img src="${luckAdVO.img}"></img>
                <div class="goods-desc">
                  ${luckAdVO.shopType ? '<div class="tm"></div>' : '<div class="tb"></div>'}
                 <div class="title">${luckAdVO.dtitle}</div>
                </div>
                <div class="quan">
                  <div class="left">券后￥<span>${luckAdVO.discountPrice.toFixed(2)}</span>
                  </div>
                  <div class="right">
                    <div><p>￥<span class="quan-value">${luckAdVO.couponPrice}</span></p></div>
                  </div>
                </div>
              </div>
              <div class="goods-btn" data-title="${luckAdVO.dtitle}" data-id="${luckAdVO.numIid}" data-url="${luckAdVO.url}">
                立即领券
              </div>
            </div>
            <div class="close-goods">
              残忍拒绝
            <div>
          </div>
        </div>`;
      $("body").append(dom);
      self.showTime(self.stamp);
      $(".coupon-modal .close-goods").on("click", function() {
        $(".coupon-modal").remove();
        window.timer && clearTimeout(window.timer);
        self.reInit();
        dataLog({
          pageId: 2,
          slot: 4,
          slotId: 1,
          clickType: 'close',
          token: self.token,
          deviceId: self.deviceId
        });
      });
      $(".goods-btn").on("click", function() {
        let btn = $(this);
        if (self.isApp) {
          let title = btn.data("title");
          let numIid = btn.data("id");
          self.reInit();
          window.timer && clearTimeout(window.timer);
          JSB.showCommodityDetail({
            numIid,
            title
          });
        } else {
          let url = btn.data("url");
          self.reInit();
          window.timer && clearTimeout(window.timer);
          window.location.href = url;
        }
        $(".coupon-modal").remove();
        dataLog({
          pageId: 2,
          slot: 4,
          slotId: 1,
          clickType: 'click',
          token: self.token,
          deviceId: self.deviceId
        });
      });
    },
    popThreeGoods: function(result) {
      var self = this;
      const { luckAdVOs } = result;
      let list;
      luckAdVOs.forEach(item => {
        let _dom = `
          <div class="item" data-title="${item.dtitle}" data-id="${item.numIid}" data-url="${item.memberItemUrl}">
            <div class="img">
              <img src="${item.img}"/>
            </div>
            <div class="item-info">
              <div class="item-title">
                ${item.shopType ? '<div class="tm"></div>' : '<div class="tb"></div>'}${item.title}
              </div>
              <p class="d-p">￥<span class="p">${item.discountPrice}</span><span class="words">券后</span></p>
              <p class="price">￥${item.price}</p>
              <p class="q">${item.couponPrice}元券</p>
            </div>
          </div>
        `;
        list = list ? list + _dom : _dom;
      });
      let dom = `
        <div class="coupon-modal">
          <div class="coupon-content specail">
            <div class="content-title"><span>爆款推荐</span></div>
            <div class="coupon-body">
              <div class="time">领取倒计时&nbsp;<div><span class="second"></span>:<span class="msecond"></span></div></div>
              <div class="goods-area">
                ${list}
              </div>
            </div>
            <div class="go-market" data-url="${result.finalSpecialUrl}">查看更多</div>
            <div class="close-goods">
              残忍拒绝
            <div>
          </div>
        </div>
      `;
      self.showTime(self.stamp);
      $("body").append(dom);

      $(".specail .item").on("click", function() {
        let item = $(this);
        window.timer && clearTimeout(window.timer);
        $(".coupon-modal").remove();
        if (self.isApp) {
          let title = item.data("title");
          let numIid = item.data("id");
          JSB.showCommodityDetail({
            numIid,
            title
          });
        } else {
          let url = item.data("url");
          window.location.href = url;
        }
        dataLog({
          pageId: 2,
          slot: 4,
          slotId: 1,
          clickType: 'click',
          token: self.token,
          deviceId: self.deviceId
        });
      });

      $(".specail .close-goods").on("click", function() {
        window.timer && clearTimeout(window.timer);
        self.reInit();
        $(".coupon-modal").remove();
        dataLog({
          pageId: 2,
          slot: 4,
          slotId: 2,
          clickType: 'close',
          token: self.token,
          deviceId: self.deviceId
        });
      });
      $(".specail .go-market").on("click", function() {
        let url = $(this).data("url");
        window.timer && clearTimeout(window.timer);
        self.reInit();
        $(".coupon-modal").remove();
        window.location.href = url;
        dataLog({
          pageId: 2,
          slot: 4,
          slotId: 1,
          clickType: '_click',
          token: self.token,
          deviceId: self.deviceId
        });
      });
    },
    popFourGoods: function() {
      const self = this;
      self.showTime(self.stamp);
      let moreDom = `
         <div class="showthanks">
           <div class="packet">
             <div class="packet-back"></div>
             <div class="packet-cover">
               <div class="time">领取倒计时&nbsp;<div><span class="second"></span>:<span class="msecond"></span></div></div>
               <button class="btn"></button>
             </div>
             <div class="packet-content">
               <div class="content-detail">
                 <div class="txc"></div>
                 <p class="desc">兜满满APP送你个红包</p>
                 <div class="award-money">
                   <span>16.88</span>元
                 </div>
               </div>
             </div>  
             <div class="refuse">残忍拒绝</div>
           </div>
         </div>`; // app外部兜底
      $("body").append(moreDom);
      $(".showthanks .btn").on("click", function() {
        $(".showthanks").remove();
        window.timer && clearTimeout(window.timer);
        self.reInit();
        window.location.href =
          "https://a.app.qq.com/o/simple.jsp?pkgname=com.hh.fanliwang";
        dataLog({
          token: self.token,
          pageId: 2,
          slot: 4,
          slotId: 4,
          clickType: 'click',
          deviceId: self.deviceId
        });
      });
      $(".showthanks .refuse").on("click", function() {
        $(".showthanks").remove();
        window.timer && clearTimeout(window.timer);
        self.reInit();
        dataLog({
          pageId: 2,
          slot: 4,
          slotId: 4,
          clickType: 'close',
          token: self.token,
          deviceId: self.deviceId
        });
      });
    },
    showNote(text, time) {
      if ($("#pop").length) {
        return;
      }
      $("body").append(`<div id="pop">${text}</pop>`);
      setTimeout(() => {
        $("#pop").remove();
      }, time || 800);
    },
    dataLog: function (key) {
      var self = activity;
      $.ajax({
        url: `${self.domain}/buriedpointrecord/insert`,
        type: 'post',
        dataType: "json",
        data: {
          userId: self.userId,
          from: 'web',
          key
        }
      });
    }
  };

  window.setUserId = params => {
    activity.init(params);
  };
  window.dealCoin = () => {
    activity.reInit();
    $(".coin-num").text(activity.todayTotal);
  };
  window.navigator.userAgent.toLowerCase().indexOf("taoxiaocheng") !== -1 ? JSB.getUserId({}, "setUserId") : activity.init({}, false);
})();
