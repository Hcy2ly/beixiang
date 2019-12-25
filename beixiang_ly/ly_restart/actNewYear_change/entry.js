/*
 * @Author: Liao Ying
 * @Date: 2019-12-19 14:21:42
 * @LastEditTime : 2019-12-24 22:31:13
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \activity-h5\src\page\actNewYear\entry.js
 */
import "./entry.less";
import "lib/lib-zepto/1.0.0/zepto.min";
import ActCommon from "lib/actCommon";
import utils from "lib/utils";
import { domain } from "../../utils/getDomain";
import Log from "lib/log";
// import JSB from "../../lib/jsb";
// import countdown from "../../lib/countdown"; //倒计时插件
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
  countDown: "", //倒计时时间
  isOdd: false,
  getMoney: 0,
  init() {
    let isOdd = (this.userId % 2 == 0); //奇数
    this.isOdd = isOdd;
    this.isOdd ? this._showInfos.page1() : this._showInfos.page2();
    // 页面曝光埋点
    Log.pageExposureLog();
    this.bind();
    this.ajaxIndex();
  },
  bind() {
    let self = activity;
    //规则
    $('.rule').on('click', function () {
      $('.rule-model').show();
    });
    $('.close').on("click", function () {
      $('.rule-model').hide();
    });
    // 点击加载更多
    $('.more').off().on("click", function () {
      $('.more').hide();
      !self.isClickMore ? self.showDetail() : $('.lists-detail').show();
      $('.pack-up').show();
    });
    //收起
    $('.lists').off().on("click", '.pack-up', function () {
      self.isClickMore = true; //已经请求过数据
      $('.pack-up').hide();
      $('.lists-detail').hide();
      $('.more').show();
    });
    //点击报名 -> 倒计时72:00:00 -> 去下单
    $('.signUp').off().on("click", function () {
      self.ajaxJoin();
      Log.pageMainClickLog();
    });
    //领取 
    $('.go-get').off().on("click", function () {
      $(this).attr("disabled", "disabled");
      self.ajaxGet();
    });
    //开心收下
    $('.get-award .get').off().on('click', function () {
      $('.get-award').hide();
    });
    //灰色按钮不可点击
    $('button.joinFalse').attr("disabled", "disabled");
  },
  ajaxIndex() {
    let self = activity;
    $.ajax({
      url: `${self.domain}/new/day/index`,
      data: {
        token: activity.token
      },
      success: function (res) {
        const { code, data = {}, desc } = utils.filterDataNull(res);
        const { joinFlag, rankList, totalPrice, rank, orderNum, receiveFlag } = data;
        if (code == "0") {
          if (data) {
            //在活动范围
            if (self.isTureTime()) {
              //看看是否参与了活动
              if (joinFlag) {  //参与了报名
                //所有报名都变成去下单
                $('button.signUp .button-txt').text("去下单");
                $('button.signUp').removeClass('signUp').addClass('goTo');

                //下单按钮监听 
                $('.goTo').off().on('click', function () {
                  Log.pageSubClickLog().then(() => {
                    window.location.href = "https://web.iwangzha.com/specialField/index?id=56";
                    // JSB('gotoNaviTab',{index: 'taoquan'});
                    // JSB('showAppIndex', {});
                  });
                });

                // 个人排行展示 报名了都显示
                $('.ranking-me').show();
                rank ? $('.ranking-me .my-top').text(rank) : $('.ranking-me .my-top').text('未上榜');
                orderNum ? $('.ranking-me .my-num').text(orderNum) : $('.ranking-me .my-num').text('0');
              } else {
                //未参与状态 无订单
                $('.ranking-me').hide();
              }
              //看是补贴时候存在
              if (totalPrice && totalPrice != 0) {
                self.getMoney = totalPrice;
                if (self.isOdd) { //是奇数页面
                  $('.body').hide();
                  $('.body-me').show();
                } else {
                  $('.content-award').hide(); //body
                  $('.content-award-me').show(); //body-me
                  // if (self.isLayer()) {
                  $('.goTo').hide();
                  $('.go-get').show();
                  // }
                }
                totalPrice && $('.body-me .price').text(`补贴：${totalPrice}元`);
                orderNum && $('.body-me .txt-num').text(`${orderNum}单`);

                // 是否领取奖励
                if (receiveFlag) {
                  $('.go-get').addClass('joinFalse').attr("disabled", "disabled");
                  $('.go-get .button-txt').text('已领取');
                }
              } else {
                if (self.isLayer()) {
                  $('.body').hide() && $('.goTo').remove();
                  $('.ending2').show();
                }
              }
            } else { //结束
              // 时间过期 展示活动已经结束
              if (joinFlag) {  //参与过
                if (self.isLayer()) {
                  if (self.isOdd) {
                    $('.body').hide();
                  } else {
                    $('.content-award').hide();
                    $('.content-award-me').show();
                    $('.body-me').hide();
                  }
                  $('.ending2').show();
                  $('button').addClass('joinFalse');
                  $('button').text('活动已结束');
                }

                // 个人排行展示 报名了都显示
                $('.ranking-me').show();
                rank ? $('.ranking-me .my-top').text(rank) : $('.ranking-me .my-top').text('未上榜');
                orderNum ? $('.ranking-me .my-num').text(orderNum) : $('.ranking-me .my-num').text('0');
              } else {
                //如果时间过了还没有参与 则显示未参与
                if (self.isLayer()) {
                  !self.isOdd && $('.content-award').hide();
                  $('.body').hide();
                  $('.content-award-me .body-me').hide();
                  $('.content-award-me').show();
                  $('.content-award-me .ending2').show();
                  $('button').addClass('joinFalse');
                  $('.go-get .button-txt').text('未参与');
                  $('.signUp .button-txt').text('活动已结束');
                } else {
                  $('.ranking-me, .ending2').hide();
                  $('.body').show();
                }
              }
            }

            //看看是否有排行榜信息
            if (rankList && rankList.length > 0) {
              self.showTop3(rankList);
              self.showLists(rankList);
            } else {
              self.isLayer() ? $('.ending2').show() : $('.nothing').show();
            }
          } else {
            console.log(desc);
          }
        }
      }
    });

  },
  //展示前三名
  showTop3(rankList) {
    if (rankList.length >= 3) {
      let lists = rankList.splice(0, 3);
      let dom = `<div class="second">
          <div class="avator" style="background: url(${lists[1].img}) center/100% no-repeat">
            <div class="tip">2</div>
          </div>
          <span class="txt1">奖855元</span>
          <span class="txt2">${lists[1].orderCount}<span>单</span></span>
          <span class="list-username">${lists[1].nickName}</span>
        </div>
        <div class="first">
          <div class="avator" style="background: url(${lists[0].img}) center/100% no-repeat">
            <div class="tip">1</div>
            <div class="win"></div>
          </div>
          <span class="txt1">奖1515元</span>
          <span class="txt2">${lists[0].orderCount}<span>单</span></span>
          <span class="list-username">${lists[0].nickName}</span>
        </div>
        <div class="third">
          <div class="avator" style="background: url(${lists[2].img}) center/100% no-repeat">
            <div class="tip">3</div>
          </div>
          <span class="txt1">奖515元</span>
          <span class="txt2">${lists[2].orderCount}<span>单</span></span>
          <span class="list-username">${lists[2].nickName}</span>
        </div>`;
      $('.ranking-list3').html(dom);
    }
  },
  //展示页面
  showLists(rankList) {
    $('.nothing').hide();
    let dom = "";
    let n = 4;
    if (rankList.length > 3) { //已经被截取了 这里只要它大于等于3就可以展示更多
      let lists = rankList.splice(0, 3);
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
      $('.list456').html(dom);
      $('.lists').show(); //有更多
    } else {
      rankList.forEach(({ nickName, orderCount, img }) => {
        dom += `
          <div class="list">
            <div class="list-ranking">${n}</div>
            <div class="list-user">
              <i class="avator" style="background:url(${img}) center / 100% no-repeat"></i>
              <span>${nickName}</span>
            </div>
            <div class="list-order">${orderCount}</div>
          </div>
          `;
        n++;
      });
      $('.list456').html(dom);
      $('.lists .pack-up').remove();
      $('.lists').append(`
          <div class="pack-up">
            <span class="up">收起</span>
            <i></i>
          </div>`).show();
      $('.more').hide(); //将更多隐藏
    }
  },
  // 点击更多的时候请求接口拿到20为排名信息
  showDetail() {
    let self = activity;
    $.ajax({
      url: `${self.domain}/new/day/index`,
      data: {
        token: activity.token || 'fcc864d4353e8f42de7c203c19ca78f7'
      },
      success: function (res) {
        const { code, data = {}, desc } = utils.filterDataNull(res);
        const { rankList } = data;
        if (code == "0") {
          if (data) {
            let lists = rankList.splice(6, rankList.length);
            let dom = "", n = 7;
            lists.forEach(({ nickName, orderCount, img }) => {
              dom += `
                <div class="list">
                  <div class="list-ranking">${n}</div>
                  <div class="list-user">
                    <i class="avator" style="background:url(${img}) center / 100% no-repeat"></i>
                    <span>${nickName}</span>
                  </div>
                  <div class="list-order">${orderCount}</div>
                </div>
                `;
              n++;
            });
            $('.lists-detail').html(dom);
            $('.lists').append(`
              <div class="pack-up">
                <span class="up">收起</span>
                <i></i>
              </div>`).show();
          }
        } else {
          console.log(desc);
        }
      }
    });
    let _dom = `
    `;
    $('.lists-detail').html(_dom);
  },
  //选择展示页面信息 page1 page2
  _showInfos: {
    page1() {
      $('#NewYear_container2').hide();
      $('title').text("元旦感恩回馈");
      $('#NewYear_container').show();
    },
    page2() {
      $('html,body').attr("background", "#FCB599");
      $('#NewYear_container').hide();
      $('title').text("年度大PK");
      $('#NewYear_container2').show();
    }
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
            $('.go-get').addClass('joinFalse');
            $('.go-get .button-txt').text('已领取');
            $('.get-award').show();
            $('.icon-num .num').text(self.getMoney);
          }
        } else {
          console.log(desc);
        }
      }
    });
  },

  // 倒计时
  // self.countDown && countdown.init({
  //   container: $('.button-txt'),
  //   timeStamp: self.countDown,
  //   formate: 'HH:MM:SS',
  //   counting: () => { },
  //   end: () => {
  //     self.ajaxIndex(); //刷新页面
  //   }
  // });

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
    // 将当前系统时间转化成以秒为单位：
    nowTime = Date.UTC(nowYear, nowMonth, nowDay);

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
  }
};
if (isApp) {
  const actCommon = new ActCommon(() => {
    activity.token = actCommon.getToken();
    activity.deviceId = actCommon.getDeviceId();
    activity.version = actCommon.getVersion();
    activity.userId = actCommon.getUserId();
    Log.init({
      token: activity.token,
      deviceId: activity.deviceId, 
      version: activity.version, 
      pageId: 46
    });
    activity.init();
  });
} else {
  activity.init();
}



