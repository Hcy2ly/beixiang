/*
 * @Author: Liao Ying
 * @Date: 2019-12-19 14:21:42
 * @LastEditTime : 2019-12-28 00:02:18
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \activity-h5\src\page\actNewYear\entry.js
 */
import "./entry.less";
import "lib/lib-zepto/1.0.0/zepto.min";
import ActCommon from "lib/actCommon";
import utils from "lib/utils";
import { domain } from "../../utils/getDomain";
// import Log from "lib/log";
// import JSB from "../../lib/jsb";
import countdown from "../../lib/countdown"; //倒计时插件
// import VConsole from "vconsole/dist/vconsole.min.js"; //import vconsole
// new VConsole(); // 初始化

const isApp = utils.isApp();

var activity = {
  isClickMore: false, //是否点击过查看更多
  domain: domain,
  orderLength: 2, //订单数
  userId: 22,
  token: '',
  deviceId: '',
  version: '',
  countDown: 0, //倒计时时间
  isOdd: true,
  getMoney: 0,
  init() {
    $('.body-me').hide();
    this.isOdd = (this.userId % 2 != 0); //奇数
    this.isOdd ? this._showInfos.page1() : this._showInfos.page2();
    $('.more, .pack-up').hide(); //加载更多和收起隐藏
    // 页面曝光埋点
    // Log.pageExposureLog();
    this.judgeTime();
    this.bind();
  },
  //页面点击事件
  bind() {
    let self = activity;
    //规则
    $('.rule').on('click', function () {
      $('.rule-model').show();
    });
    //关闭规则弹窗
    $('.close').on("click", function () {
      $('.rule-model').hide();
    });
    //点击报名 -> 倒计时72:00:00 -> 去下单
    $('.signUp').off().on("click", function () {
      !self.isTureTime() ? self.ajaxJoin() : self.showCountdown();
      // Log.pageMainClickLog();
    });
    //去下单
    $('.goTo').off().on('click', function () {
      // Log.pageSubClickLog().then(() => {
      window.location.href = "https://web.iwangzha.com/specialField/index?id=56";
      // JSB('gotoNaviTab',{index: 'taoquan'});
      // JSB('showAppIndex', {});
      // });
    });
    //领取 
    $('.go-get').off().on("click", function () {
      self.ajaxGet();
    });
    //开心收下
    $('.get-award .get').off().on('click', function () {
      $('.get-award').hide();
    });
    // 收起
    $('.pack-up').off().on('click', function () {
      self.isClickMore = true; //已经请求过数据
      $('.lists-detail').hide();
      self._showUpDown.down(); //收起来
    });
    // 点击查看更多
    $('.more').off().on("click", function () {
      !self.isClickMore ? self.showDetail() : $('.lists-detail').show(); //如果是第一次点击去请求接口
      self._showUpDown.up(); //加载更多
    });
  },

  //展示活动未开始前页面信息 page1 page2
  _showInfos: {
    page1() {
      $('#NewYear_container2').hide();
      $('#NewYear_container').show();
      $('title').text("元旦感恩回馈");
      $('.ranking-me').hide();
    },
    page2() {
      $('#NewYear_container').hide();
      $('#NewYear_container2').show();
      $('html,body').attr("background", "#FCB599");
      $('title').text("年度大PK");
      $('.ranking-me').hide();
    }
  },
  //展示加载更多和收起
  _showUpDown: {
    down() { //收起来
      $('.pack-up').hide();
      $('.more').show();
    },
    up() { //加载更多
      $('.pack-up').show();
      $('.more').hide();
    }
  },
  //先做一个时间判断 因为需要展示排行榜页面的情况只有在活动期间和活动结束 / 活动开始前是没有的
  judgeTime() {
    var self = activity;
    //如果时间还没到
    if (self.isEarly()) {
      // eslint-disable-next-line no-console
      console.log('敬请期待~');
    } else { //时间
      self.ajaxIndex(); //请求接口做活动期间和结束的区分
    }
  },
  //请求首页面数据接口
  ajaxIndex() {
    let self = activity;
    $.ajax({
      url: `${self.domain}/new/day/index`,
      data: {
        token: activity.token
      },
      success: function (res) {
        const { code, data = {}, desc } = utils.filterDataNull(res);
        const { joinFlag, receiveFlag, totalPrice, rank, orderNum, rankList } = data;
        if (code == "0") {
          if (data) {
            //看看是否有排行榜信息 （不必根据是否在规定时间展示）
            if (rankList && rankList.length > 0) {
              self.showTop123(rankList); //展示前三（上墙）
            }
            // 个人排行展示 报名了都显示
            if (joinFlag) {
              $('.ranking-me').show();
              rank ? $('.ranking-me .my-top').text(rank) : $('.ranking-me .my-top').text('未上榜');
              orderNum ? $('.ranking-me .my-num').text(orderNum) : $('.ranking-me .my-num').text('0');
            }

            // 个人补贴奖励
            var appendPriceMe = function () {
              $('.body-me').show();
              self.isOdd ? $('.me-text').show() : $('.me-text').hide();
            };

            //看看补贴是否有 
            if (totalPrice && totalPrice > 0) {
              self.getMoney = totalPrice;
              //奖励机制移除。append补贴页面
              $('.body').remove();
              appendPriceMe();
              !self.isOdd && $('.signUp').remove();//是偶数页面把上面的报名按钮去掉
              totalPrice && $('.body-me .price').text(`补贴：${totalPrice}元`);
              orderNum && $('.body-me .txt-num').text(`${orderNum}单`);
            }
            
            //在活动范围
            if (self.isTureTime()) {
              // 如果参与过报名
              if (joinFlag) {
                //看看补贴是否有 
                if (totalPrice && totalPrice > 0) {
                  if (self.isOdd) {
                    //所有报名都变成去下单
                    $('.signUp').hide();
                  }
                  $('.goTo').show();
                }
              }
            } else { //结束后
              $('.body').remove(); //奖励机制移除。
              //展示ending页面
              var gameOver = function () {
                $('.content-award').append(`  
                        <div class="ending2">
                          <div class="ending">
                            <span>活动已结束</span>
                          </div>
                          <button class="joinFalse">
                            <span class="b"><span class="b1"></span><span class="b2"></span> </span>
                            未参与
                          </button>
                        </div>`);
              };
              // 判断是否参与过报名
              if (joinFlag) {
                //看补贴是否存在  没报名的人是没有补贴的。
                if (totalPrice && totalPrice != 0) {
                  // 查看补贴是否领取 
                  if (receiveFlag) {
                    if (self.isOdd) {
                      $('.signUp').addClass('joinFalse');
                      $('.signUp .button-txt').text('活动已结束');
                    }
                    $('.go-get').addClass('joinFalse').show();
                    $('.go-get .button-txt').text('已领取');
                  } else {
                    //没领取是否在规定时间
                    if (self.isCanReceive()) {
                      $('.go-get').show();
                    } else {
                      gameOver();
                    }
                  }
                }
              } else {
                $('.body-me').remove();
                !self.isOdd && $('.signUp').remove();//是偶数页面把上面的报名按钮去掉
                gameOver();
              }
            }

          } else {
            console.log(desc);
          }
        }
      }
    });

  },

  //展示前三名
  showTop123(rankList) {
    var self = activity;
    var lens;
    if (rankList.length >= 3) {
      lens = 3;
      //展示前三后面的所有。
      self.showLists(rankList);
    } else {
      lens = rankList.length;
    }
    rankListFor();
    function rankListFor() {
      for (let i = 0; i < lens; i++) {
        $(`.top${i + 1} .avator`).attr('background', `url(${rankList[i].img}) center/100% no-repeat`);
        $(`.top${i + 1} .txt2-count`).text(rankList[i].orderCount);
        $(`.top${i + 1} .list-username`).text(rankList[i].nickName);
      }
    }
  },

  //展示前三之后排名
  showLists(rankList) {
    $('.nothing').remove(); //移除
    let self = activity, listDatil;

    if (rankList.length >= 6) {
      listDatil = rankList.splice(3, 3); //从第四个开始截取三个 456
      self.appendLists(listDatil, 4);
      self._showUpDown.down();
    } else {
      listDatil = rankList.splice(3, rankList.length - 3); //从第四个开始截取三个 456
      self.appendLists(listDatil, 4);
      // self._showUpDown.up();
    }
  },

  //append 排行榜
  appendLists(lists, n) {
    let dom = "", m = n;
    lists.forEach(({ nickName, orderCount, img, userId }) => {
      dom += `
          <div class="list ${activity.userId == userId ? "isMe" : ""}">
            <div class="list-ranking">${n}</div>
            <div class="list-user">
              <i class="avator" style="background:url(${img}) center / 100% no-repeat"></i>
              <span>${nickName}</span>
            </div>
            <div class="list-order ${activity.userId == userId ? "isMe" : ""}">${orderCount}</div>
          </div>
          `;
      n++;
    });
    if (m == 4) { //初始值。
      $('.list456').html(dom);
    } else {
      $('.lists-detail').html(dom);
    }
  },

  // 点击更多的时候请求接口拿到20为排名信息
  showDetail() {
    let self = activity;
    $.ajax({
      url: `${self.domain}/new/day/index`,
      data: {
        token: activity.token
      },
      success: function (res) {
        const { code, data = {}, desc } = utils.filterDataNull(res);
        const { rankList } = data;
        if (code == "0") {
          if (data) {
            let lists = rankList.splice(6, rankList.length - 6); //从第七个开始截取
            self.appendLists(lists, 7);
          }
        } else {
          console.log(desc);
        }
      }
    });
  },

  //报名
  ajaxJoin() {
    let self = activity;
    $.ajax({
      url: `${self.domain}/new/day/join`,
      data: {
        token: activity.token
      },
      success: function (res) {
        const { code, data = {}, desc } = utils.filterDataNull(res);
        if (code == "0") {
          if (data) { //根据数据判断
            if (self.isTureTime()) { //在活动期间
              utils.showToast("报名成功", 1000);
              self.ajaxIndex(); //重新请求数据渲染
            }
          } else {
            self.isTureTime() && utils.showToast("您暂无参与资格", 1000);
            self.isLayer() && utils.showToast("活动已结束", 1000);
          }
        } else {
          console.log(desc);
        }
      }
    });
  },

  //领取
  ajaxGet() {
    let self = activity;
    $.ajax({
      url: `${self.domain}/new/day/receive`,
      data: {
        token: activity.token
      },
      success: function (res) {
        const { code, data = {}, desc } = utils.filterDataNull(res);
        if (code == "0") {
          if (data) {
            $('.go-get').addClass('joinFalse').show();
            $('.go-get .button-txt').text('已领取');
            $('.get-award').show();
            $('.icon-num .num').text(`+${self.getMoney}`);
          }
        } else {
          console.log(desc);
        }
      }
    });
  },

  // 倒计时
  showCountdown() {
    let self = activity;
    self.isTureTime();
    (self.countDown && self.countDown > 0) && countdown.init({
      container: $(".signUp .button-txt"),
      timeStamp: self.countDown,  //时间戳以秒为单位
      formate: 'HH:MM:SS',
      counting: () => { },
      end: () => {
        self.ajaxIndex(); //刷新页面
      }
    });
  },

  //判断是否在指定期间内
  isTureTime() {
    // 将计划开始时间转成以秒为单位：
    let planStartTime = "2019-12-23";
    let startTime = new Array();
    startTime = planStartTime.split('-');
    planStartTime = Date.UTC(parseInt(startTime[0]), parseInt(startTime[1]), parseInt(startTime[2]));
    // 将计划结束时间转成以秒为单位：
    let planStopTime = "2020-1-1";
    let stopTime = new Array();
    stopTime = planStopTime.split('-');
    planStopTime = Date.UTC(parseInt(stopTime[0]), parseInt(stopTime[1]), parseInt(stopTime[2]));

    //获取当前时间
    let nowTime = new Date();
    //当前年
    let nowYear = nowTime.getFullYear();
    //当前月，记得要加1
    let nowMonth = nowTime.getMonth() + 1;
    //当前日
    let nowDay = nowTime.getDate();
    // 当前小时
    let nowHours = nowTime.getHours();
    // 当前分钟
    let nowMinutes = nowTime.getMinutes();
    // 当前秒
    let nowSeconds = nowTime.getSeconds();

    // 将当前系统时间转化成以秒为单位：
    nowTime = Date.UTC(nowYear, nowMonth, nowDay);
    activity.countDown = Date.UTC(nowYear, nowMonth, nowDay, nowHours, nowMinutes, nowSeconds) - planStartTime;

    // 判断：如果当前系统时间大于等于开始时间以及小于等于结束时间则登记成功
    if (nowTime >= planStartTime && nowTime <= planStopTime) {
      return true;
    } else {
      return false;
    }
  },

  //活动结束之后
  isLayer() {
    // 将计划结束时间转成以秒为单位：
    let planStopTime = "2020-1-1";
    let stopTime = new Array();
    stopTime = planStopTime.split('-');
    planStopTime = Date.UTC(parseInt(stopTime[0]), parseInt(stopTime[1]), parseInt(stopTime[2]));

    //获取当前时间
    let nowTime = new Date();
    //当前年
    let nowYear = nowTime.getFullYear();
    //当前月，记得要加1
    let nowMonth = nowTime.getMonth() + 1;
    //当前日
    let nowDay = nowTime.getDate();
    // 将当前系统时间转化成以秒为单位：
    nowTime = Date.UTC(nowYear, nowMonth, nowDay);

    // 判断：如果当前系统时间大于等于开始时间以及小于等于结束时间则登记成功
    if (nowTime > planStopTime) {
      return true;
    } else {
      return false;
    }
  },

  //活动之前
  isEarly() {
    // 将计划开始时间转成以秒为单位：
    let planStartTime = "2019-12-24";
    let startTime = new Array();
    startTime = planStartTime.split('-');
    planStartTime = Date.UTC(parseInt(startTime[0]), parseInt(startTime[1]), parseInt(startTime[2]));

    //获取当前时间
    let nowTime = new Date();
    //当前年
    let nowYear = nowTime.getFullYear();
    //当前月，记得要加1
    let nowMonth = nowTime.getMonth() + 1;
    //当前日
    let nowDay = nowTime.getDate();
    // 将当前系统时间转化成以秒为单位：
    nowTime = Date.UTC(nowYear, nowMonth, nowDay);

    // 判断：如果当前系统时间大于等于开始时间以及小于等于结束时间则登记成功
    if (nowTime < planStartTime) {
      return true;
    } else {
      return false;
    }
  },

  //活动结束之后 控制仅限1月2日可领取奖励。
  isCanReceive() {
    // 将计划开始时间转成以秒为单位：
    let planStartTime = "2020-1-1";
    let startTime = new Array();
    startTime = planStartTime.split('-');
    planStartTime = Date.UTC(parseInt(startTime[0]), parseInt(startTime[1]), parseInt(startTime[2]));
    // 将计划结束时间转成以秒为单位：
    let planStopTime = "2020-1-3";
    let stopTime = new Array();
    stopTime = planStopTime.split('-');
    planStopTime = Date.UTC(parseInt(stopTime[0]), parseInt(stopTime[1]), parseInt(stopTime[2]));

    //获取当前时间
    let nowTime = new Date();
    //当前年
    let nowYear = nowTime.getFullYear();
    //当前月，记得要加1
    let nowMonth = nowTime.getMonth() + 1;
    //当前日
    let nowDay = nowTime.getDate();
    // 将当前系统时间转化成以秒为单位：
    nowTime = Date.UTC(nowYear, nowMonth, nowDay);

    // 判断：如果当前系统时间大于开始时间以及小于结束时间则登记成功
    if (nowTime > planStartTime && nowTime < planStopTime) {
      return true;
    } else {
      return false;
    }
  }

};
if (isApp) {
  const actCommon = new ActCommon(() => {
    activity.token = actCommon.getToken();
    activity.deviceId = actCommon.getDeviceId();
    activity.version = actCommon.getVersion();
    activity.userId = actCommon.getUserId();
    // Log.init({
    //   token: activity.token,
    //   deviceId: activity.deviceId,
    //   version: activity.version,
    //   pageId: 46
    // });
    activity.init();
  });
} else {
  activity.init();
}



