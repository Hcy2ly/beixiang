import "./entry.less";
import { dataLog } from "../../utils/dataLog";
require("lib/lib-zepto/1.0.0/zepto.min");
import Cache from "../../lib/cache";
import utils from "../../lib/utils";
const cache = new Cache();
import Download from "../../lib/download";
/*eslint-disable*/
// import VConsole from "vconsole/dist/vconsole.min.js";
// new VConsole();
const stamp = 1799000;
var invitePaket = {
  ajaxDomain: "",
  getUserUrl: "",
  jumpDomain: "",
  openId: "",
  unionId: "",
  type: "",
  init() {
    if (document.domain.indexOf("test") > -1) {
      this.ajaxDomain = "https://dweb-test.iwangzha.com";
      this.getUserUrl = "https://dnews-test.iwangzha.com/auth/wx/getWeixinUser";
      this.jumpDomain = "https://dnews-test.nmgqi.cn";
    } else {
      this.ajaxDomain = "https://dweb.iwangzha.com";
      this.getUserUrl = "https://dnews.iwangzha.com/auth/wx/getWeixinUser";
      this.jumpDomain = "https://dnew.nmgqi.cn";
    }
    let self = invitePaket;
    const openStatus = cache.get("openStatus");
    const local_stamp = cache.get("stamp") && parseInt(cache.get("stamp"));

    self.type = utils.getUrlParameter("type"); //判断链接是否是二维码链接
    self.type ? self.browserType() : self.getuserInfo(); // 判断页面打开途径（二维码或者微信分享）
    pushHistory();
    window.addEventListener(
      "popstate",
      function() {
        document.addEventListener(
          "WeixinJSBridgeReady",
          function() {
            WeixinJSBridge.call("closeWindow");
          },
          false
        );
        //这个可以关闭ios系统的手机
        WeixinJSBridge.call("closeWindow");
      },
      false
    );
    function pushHistory() {
      var state = {
        title: "title",
        url: "#"
      };
      window.history.pushState(state, "title", "#");
    }

    if (openStatus == 1) {
      $(".tips").hide();
      $("#top1").hide();
      $("#top2").show();
      self.showTime(local_stamp);
    }
    dataLog({ //页面曝光埋点
      pageId: 9
    });
  },
  bind() {
    $("#top1 .btn").on("click", function() {
      cache.set("stamp", stamp, 1);
      cache.set("openStatus", "1", 1 / 48);
      $(".tips").hide();
      $("#top1").hide();
      $("#top2").show();
      invitePaket.showTime(stamp);
    });
  },
  getuserInfo() {
    var code = utils.getUrlParameter("code");

    if (code) { //没有code 意味什么呢？ 也去下载？
      $.ajax({
        type: "get",
        url: invitePaket.getUserUrl,
        dataType: "json",
        data: {
          code,
          inviteId: window.userId,
          sourcekey: "active_invite",
          systemId: 0 // 4表示锁粉 默认锁粉 发圈用 / 0为邀请好友
        },
        success: function(res) {
          if (res.data) {
            invitePaket.openId = res.data.openId;
            invitePaket.unionId = res.data.unionId;
          }
          $("#redpacket-btn").on("click", function() {
            Download.download();
          });
        }
      });
    } else {
      $("#redpacket-btn").on("click", function() {
        Download.download();
      });
    }
  },
  time(stamp) {
    let leave1 = stamp % (24 * 3600 * 1000);
    let hours = Math.floor(leave1 / (3600 * 1000));
    let leave2 = leave1 % (3600 * 1000);
    let minutes = Math.floor(leave2 / (60 * 1000));
    let leave3 = leave2 % (60 * 1000);
    let seconds = Math.round(leave3 / 1000);
    hours = hours >= 10 ? hours : "0" + hours;
    minutes = minutes >= 10 ? minutes : "0" + minutes;
    seconds = seconds >= 10 ? seconds : "0" + seconds;
    return { hours, minutes, seconds };
  },
  showTime(stamp) {
    const { minutes, seconds } = this.time(stamp);
    if (stamp < 0) {
      window.timer && clearTimeout(window.timer);
      cache.remove("stamp");
      cache.remove("openStatus");
      // $(".redpacket-btn").unbind("click");
      $("#top2").hide();
      $("#top1").show();
      $(".tips").show();
      invitePaket.init();
      return;
    }
    $(".min").text(minutes);
    $(".sec").text(seconds);
    cache.set("stamp", stamp, 1);
    stamp = stamp - 1000;
    window.timer = setTimeout(() => {
      this.showTime(stamp);
    }, 1000);
  },
  getUrl() {
        $.ajax({
          type: "get",
          url: `${invitePaket.ajaxDomain}/short/returnShort/${invitePaket.type}`,
          dataType: "json",
          data: {},
          success: function(res) {
            if (res.data) {
              window.location.replace(res.data); //替换链接
            }
          }
        });
  },
  browserType() {
    var ua = navigator.userAgent.toLowerCase(); //获取扫码的浏览器对象
    if (ua.indexOf("micromessenger") !== -1) {
      // 微信扫码
      invitePaket.getUrl();
    } else {
      //非微信扫码 添加一个蒙层 请使用微信扫码打开   // 微信链接提示/
  
      // $('body').append(`<div class="cover">请使用微信扫码打开</div>`);
      if (document.domain.indexOf("-test") > -1) {
        invitePaket.state = "test";
        invitePaket.newDomain = "https://dnews-test.iwangzha.com";
        invitePaket.shareUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6197195002b8c62a&redirect_uri=${invitePaket.jumpDomain}/dmm-h5/new_invitePaket/index.html?userId=${window.userId}&response_type=code&scope=snsapi_userinfo&state=test#wechat_redirect`; //当弱网环境下 默认分享链接
      } else {
        invitePaket.newDomain = "https://dnews.iwangzha.com";
        invitePaket.shareUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6197195002b8c62a&redirect_uri=${invitePaket.jumpDomain}/dmm-h5/new_invitePaket/index.html?userId=${window.userId}&response_type=code&scope=snsapi_userinfo&state=${window.userId}#wechat_redirect`; //当弱网环境下 默认分享链接
      }
      window.location.href = invitePaket.shareUrl; 
    }
  }
};

window.userId = utils.getUrlParameter("userId");
invitePaket.init();
invitePaket.bind();
