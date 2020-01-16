import "./entry.less";
import JSB from "../../lib/share";
import "lib/lib-zepto/1.0.0/zepto.min";
import "lib/lib-animate";
import { dataLog } from "../../utils/dataLog";
/*eslint-disable*/
// import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
// new VConsole();
var inviteFriends = {
  ajaxDomain: "",
  shareDomain: "https://news.nmgqi.cn",
  newDomain: "",
  shareUrl: "",
  redirectUrl: "",
  state: null,
  init() {
    if (document.domain.indexOf("-test") > -1) {
      this.state = "test";
      this.ajaxDomain = "https://dweb-test.iwangzha.com";
      this.newDomain = "https://dnews-test.iwangzha.com";
      this.shareUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6197195002b8c62a&redirect_uri=${this.shareDomain}/dmm-h5/new_invitePaket/index.html?userId=${window.userId}&response_type=code&scope=snsapi_userinfo&state=test#wechat_redirect`; //当弱网环境下 默认分享链接
    } else {
      this.ajaxDomain = "https://dweb.iwangzha.com";
      this.newDomain = "https://dnews.iwangzha.com";
      this.shareUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6197195002b8c62a&redirect_uri=${this.shareDomain}/dmm-h5/new_invitePaket/index.html?userId=${window.userId}&response_type=code&scope=snsapi_userinfo&state=${window.userId}#wechat_redirect`; //当弱网环境下 默认分享链接
    }
    this.prizeNotice();
    this.getInviteInfo();
    this.shareAuthorize();
    this.event();
    dataLog({
      pageId: 5,
      token: window.token,
      deviceId: window.deviceId
    });
  },
  event() {
    //规则
    $(".rule").on("click", function() {
      $(".rule-modal").show();
      $("body").addClass("forbidden");
    });
    $(".close").on("click", function() {
      $(".rule-modal").hide();
      $("body").removeClass("forbidden");
    });
    //领钱攻略
    $(".getMoney_rule").on("click", function() {
      var scroll_offset = $(".awardText").offset().top;
      window.scrollTo(0, scroll_offset);
    });
    //微信分享
    $(".top-inviteBtn, .share-wechatQ").on("click", function() {
      JSB.showShare({ //极光分享。
        shareType: "wechat",
        link: inviteFriends.shareUrl,
        title: "随手点一点，看看你能领多少钱？",
        desc: "帮我点一下，你也能拿最低16.88元，很简单，没有门槛，秒到账",
        imgUrl: `https://static.iwangzha.com/wz/image/common/share_redpacket.png`
      });
      dataLog({
        pageId: 5,
        token: window.token,
        deviceId: window.deviceId,
        clickType: "click",
        slot: 1,
        slotId: 1
      });
    });
    //海报分享
    $(".share-Picture").on("click", function() {
      JSB.showPosterPage();
      dataLog({
        page: 9,
        pageId: 5,
        token: window.token,
        deviceId: window.deviceId,
        version: window.versionName,
        clickType: "click",
        slot: 1,
        slotId: 3
      });
    });
  },
  shareAuthorize() {
    $.ajax({
      url: `${inviteFriends.newDomain}/auth/wx/weixinAuthUrl`,
      type: "get",
      dataType: "json",
      data: {
        silence: false,
        redirectUri: `${this.shareDomain}/dmm-h5/new_invitePaket/index.html?userId=${window.userId}`,
        state: this.state
      },
      success: function(res) {
        if (res.success) {
          inviteFriends.shareUrl = res.data;
        }
      }
    });
  },
  getInviteInfo() {
    $.ajax({
      url: `${inviteFriends.ajaxDomain}/invite/findByInviteId`,
      type: "get",
      dataType: "json",
      data: {
        inviteId: window.userId || 0,
        pageSize: 20,
        index: 0
      },
      success: function(res) {
        const { data } = res;
        if (data && data.invites > 0) {
          inviteFriends.inviteInfo(data);
        } else {
          inviteFriends.mockInfo();
        }
      }
    });
  },
  inviteInfo(data) {
    let inviteNum = `<div class="invite-num border">
    <span class="sp">成功邀请人数：<span class="spp">${data.invites}</span></span>
    <span class="sp">奖励：<span class="spp">￥${data.awards ? data.awards : 0}</span></span>
    </div>`;
    const { wzbvs } = data;
    let skipDom, Dom, dom, list;
    if (wzbvs.length > 3) {
      skipDom = '<div class="skip-btn">查看全部好友</div>';
      //展示全部
      wzbvs.forEach(item => {
        let _dom =
          item.userStatus > 0
            ? `
          <div class="carousel-item">
            <div class="item-left">
              <img  class="avator" src="${item.headUrl}" alt=""/>
              <div class="nick-name">${item.nikeName}</div>
              ${item.userStatus == 1 ? "下载并注册" : "完成首次购物"}
            </div>
            <div class="item-right">
            ${item.userStatus == 1 ? `<span>提醒TA下单</span>` : `<span>提醒TA阅读</span>`}
            </div>
          </div>`
            : "";
        Dom = Dom ? (Dom += _dom) : _dom;
      });
      //展示部分
      list = wzbvs.splice(0, 3);
      list.forEach(item => {
        let _dom =
          item.userStatus > 0
            ? `
          <div class="carousel-item">
            <div class="item-left">
              <img  class="avator" src="${item.headUrl}" alt=""/>
              <div class="nick-name">${item.nikeName}</div>
              ${item.userStatus == 1 ? "下载并注册" : "完成首次购物"}
            </div>
            <div class="item-right">
            ${item.userStatus == 1 ? `<span>提醒TA下单</span>` : `<span>提醒TA阅读</span>`}
            </div>
          </div>`
            : "";
        dom = dom ? (dom += _dom) : _dom;
      });

      $(".had-invite").append(`
        ${inviteNum}
        <div class="carousel-area">
          <div class="carousel-items">
            ${dom}
          </div>
          <div class="carousel-items">
            ${Dom}
          </div>
          ${skipDom}
        </div>`);
      $(".skip-btn").on("click", function() {
        if ($(this).text() == "查看全部好友") {
          $(this).text("收起");
          $(".carousel-items:eq(0)").hide();
          $(".carousel-items:eq(1)").show();
        } else {
          $(this).text("查看全部好友");
          $(".carousel-items:eq(0)").show();
          $(".carousel-items:eq(1)").hide();
        }
      });
    } else {
      wzbvs.forEach(item => {
        let _dom =
          item.userStatus > 0
            ? `
          <div class="carousel-item">
            <div class="item-left">
              <img  class="avator" src="${item.headUrl}" alt=""/>
              <div class="nick-name">${item.nikeName}</div>
              ${item.userStatus == 1 ? "下载并注册" : "完成首次购物"}
            </div>
            <div class="item-right">
            ${item.userStatus == 1 ? `<span>提醒TA下单</span>` : `<span>提醒TA阅读</span>`}
            </div>
          </div>`
            : "";
        dom = dom ? (dom += _dom) : _dom;
      });
      $(".had-invite").append(`
        ${inviteNum}
        <div class="carousel-area ">
          <div class="carousel-items">
            ${dom}
          </div>
        </div>  
        `);
    }
    $(".item-right span").on("click", function() {
      // JSB.openWx();
      window.location.href = "weixin://";
    });
  },
  mockInfo() {
    let inviteNum = `<div class="invite-num border">
    <span class="sp">成功邀请人数：<span class="spp">0</span></span>
    <span class="sp">奖励：<span class="spp">￥0</span></span>
    </div>`;
    let dom = `<div class="nothing">
          <div class="cry"></div>
          <p>快去邀请您的亲朋好友吧～</p>
          <p>分享至多个群聊中，成功率再提升<span>2</span>倍！</p>
          <p>邀请越多，赚越多！</p>
        </div>`;
    $(".had-invite").append(`
      ${inviteNum}
      ${dom} 
      `);
  },
  prizeNotice() {
    !(function() {
      let prizeNotice = {
        init: () => {
          prizeNotice.createDom();
          setInterval(() => {
            $(`#prizeNotice`).empty();
            prizeNotice.createDom();
          }, 2300);
        },
        createDom: () => {
          var avatorArr = [
            "http://thirdwx.qlogo.cn/mmopen/vi_32/h1qy3Qq8Hy3qibOQT5vDeMZoibicG2ZnI5DutiaTeUmXFktFW72fz2hGCn0MZYicqjyqu1MhXmfPM1ZGXT2ABY7rgag/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKj6m6P4xQyHAibqnKSncbmpmbNKHQiaZFEib57D7Gf4bbgxyk0DOnyhiaibqTWgVv2FrTES7K0CKsCURg/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK11KedaicJ8FaAVC3XYrS3hCFdE1SnSnLSYTsZj1wHrAAtZ53ScqicDoOsiaG6TzF5Fs9oibriciaNYAwQ/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/KRCEw5V21YEz7oVIU4QBXIn7PUadet7ROMvJZPntDwXecLGMmlicoibQXeUdBCNNFLx133EH7E4oR2h5sOjCPdEw/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/icT1S8Uy4lYVNmTzGsgibQ4EAoKNcI6icvvsy2ScQpI4IUbPPicw6Gka63qWuprRyiavUH4kseLdvPicx45ZB2kj7eOA/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/OJib9LnpZUakQ4ke04GcdUI7ib9Aevpv8zibJeicTVdMroGAiaaeCR28iab8PiajusojGRMBvvhzNnpeianGiawqML7byag/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJttDg1ib9YUIBulrGZicp9VnwAoWc3C94oSRxP04L3ibtuxC049XYrZOd9vTaeVSNWBEPY7FIKJaQUg/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTInkIjjWxBw5GjbiaY5A4SxmprtpXiarNmXkldymILop6TrJ24Nicw10Lib8O22q5nL9OdP3g8p8Qv9gA/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/STn4IvlkBkk15ojibEiaAnymHCWvjL3Xteicxpic4P3VicoEFiaMTeUG1CGe4fibJUpPs7yVNQsNubk7AibOWVOicgOXPog/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/OEm0SsW3dGHJMTQdGK5yhX5Isiax4seJJKA4s0t6ExWKshHrK4ScatR46FDiaiaHK5N9pbfXOia9PFNULIIvM7XFiaQ/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/uebqNMfFGGt1optQVXfTUDwNapUbx9srzsTFZ2efTUS9ChiavzsB0HP9QRWWINzGndktBSZYMOUj5we0bh4w4Gw/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epdx4NBfDjV3sicxqBF8RYQVgUctzthNKibAicUC6M6cAqNwjGIB6ib1R1iaaVHTQic4bH65za0rOkl9icCQ/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/ICaSMEO6ZOWibeiakgl6pwiaicAyIjs4tWTPsoOWzm9cNodswdX9amx3pJ7JGKlHxnXA4SfcSFUwTQrEEvPpzYd17Q/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/A9WkGiaeicmfflfRNOuzNxRagt5qrlIVZmPumdYSYriaRISyCRiaicVuhbHwrksEqe5VoMTBHaouQrPRtAtuH1KDFUA/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/xiaZibPibepFriahcrWLf0BBQvmm742B43QCxM1XKWQAaiaB1HeaF0aTkibyY4c97x32082Rnk3FtZ8l1aSq5V6gkchQ/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83ep9cDhXSGwsroIVrObozWL1tz5IxSib73Fj1phANdB2ziaFYZRUZ6TjYAUAEVO6co1Oq7jwyjaQO5ag/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/ic9eoyyyicQuicqsEp77RgsDV2obTajvMVvnq6hqE9riawV4Hiav0diaW8spOBSzhg8qPzIia4ZoQcRuoAv1uQxSaznAg/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/uOqs60y6uFicx0G22rcgkNno7CUsvkbDNGIibN2XaX14p9fygCAmQbpia4d9Tib6Cchlaia1kv9LBvbZ20SJsoSdsJA/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/fnoNvibpSbBX4icM9VxG3FA7lnsoqB5HYpicWa9eodMn2VosrwTw5ibG7DeeHNxD3AFRRx2WaPTkdMhBatAl0s9A5g/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKRFIZAykeug9EXaiaicZibAKfibC5Xox2icCkrWW4ErKA0dyAOBtX7T6ibiazlsswiaPfiaFASjbrUkmPqaew/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/SGjg6RWwHTHsKx9VE3yib3X10QuofxLEOSxqcIsWYaHryJicbgIBEcD1OUbgt00qu9bZ10EcH7XIpv7vEIglm6oQ/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/cFpu1nmzNVibW7VFMZMPo2mmxdIS1nJEibV1XxSIJLmeoibHQbAdpfzpiaJaeavb03ohJpx0XdDPtktwicLTibTbwfhw/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/7tasQ8icvIicASx7FCVN4uqZWgltVdR9yozm6Jt9yBXQiagGENIHoQ7AzicEfOFzECESrcnkbF92wXYiciacxXz00fHw/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJVbNavqRZWp0oUwEw2icFzjDgibHqTCxC6veojgHccHiaxiaOpgQOkAIh92SICfp2pKsrXTIBjrV5Jpg/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/ibp87g3ic4LYsicUuBfBZaRDvQHC4qIZnLOicrbMzzLNQZZKHHnyo6tzWqm6aeKwwUEc4kp4qLZ773SzNaujKOsBMA/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/0jyiajvicYicH4NTKaGmfMw12BzDliciajibSnE4l90FFibAaia6p2icgUU5Dwy7gGUrlG18Sy0tPMoM65e4VnibPI49zdSQ/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/h1qy3Qq8Hy3qibOQT5vDeMZoibicG2ZnI5DutiaTeUmXFktFW72fz2hGCn0MZYicqjyqu1MhXmfPM1ZGXT2ABY7rgag/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKj6m6P4xQyHAibqnKSncbmpmbNKHQiaZFEib57D7Gf4bbgxyk0DOnyhiaibqTWgVv2FrTES7K0CKsCURg/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK11KedaicJ8FaAVC3XYrS3hCFdE1SnSnLSYTsZj1wHrAAtZ53ScqicDoOsiaG6TzF5Fs9oibriciaNYAwQ/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/KRCEw5V21YEz7oVIU4QBXIn7PUadet7ROMvJZPntDwXecLGMmlicoibQXeUdBCNNFLx133EH7E4oR2h5sOjCPdEw/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/icT1S8Uy4lYVNmTzGsgibQ4EAoKNcI6icvvsy2ScQpI4IUbPPicw6Gka63qWuprRyiavUH4kseLdvPicx45ZB2kj7eOA/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/OJib9LnpZUakQ4ke04GcdUI7ib9Aevpv8zibJeicTVdMroGAiaaeCR28iab8PiajusojGRMBvvhzNnpeianGiawqML7byag/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJttDg1ib9YUIBulrGZicp9VnwAoWc3C94oSRxP04L3ibtuxC049XYrZOd9vTaeVSNWBEPY7FIKJaQUg/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTInkIjjWxBw5GjbiaY5A4SxmprtpXiarNmXkldymILop6TrJ24Nicw10Lib8O22q5nL9OdP3g8p8Qv9gA/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/STn4IvlkBkk15ojibEiaAnymHCWvjL3Xteicxpic4P3VicoEFiaMTeUG1CGe4fibJUpPs7yVNQsNubk7AibOWVOicgOXPog/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/OEm0SsW3dGHJMTQdGK5yhX5Isiax4seJJKA4s0t6ExWKshHrK4ScatR46FDiaiaHK5N9pbfXOia9PFNULIIvM7XFiaQ/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/uebqNMfFGGt1optQVXfTUDwNapUbx9srzsTFZ2efTUS9ChiavzsB0HP9QRWWINzGndktBSZYMOUj5we0bh4w4Gw/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epdx4NBfDjV3sicxqBF8RYQVgUctzthNKibAicUC6M6cAqNwjGIB6ib1R1iaaVHTQic4bH65za0rOkl9icCQ/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/ICaSMEO6ZOWibeiakgl6pwiaicAyIjs4tWTPsoOWzm9cNodswdX9amx3pJ7JGKlHxnXA4SfcSFUwTQrEEvPpzYd17Q/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/A9WkGiaeicmfflfRNOuzNxRagt5qrlIVZmPumdYSYriaRISyCRiaicVuhbHwrksEqe5VoMTBHaouQrPRtAtuH1KDFUA/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/xiaZibPibepFriahcrWLf0BBQvmm742B43QCxM1XKWQAaiaB1HeaF0aTkibyY4c97x32082Rnk3FtZ8l1aSq5V6gkchQ/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83ep9cDhXSGwsroIVrObozWL1tz5IxSib73Fj1phANdB2ziaFYZRUZ6TjYAUAEVO6co1Oq7jwyjaQO5ag/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/ic9eoyyyicQuicqsEp77RgsDV2obTajvMVvnq6hqE9riawV4Hiav0diaW8spOBSzhg8qPzIia4ZoQcRuoAv1uQxSaznAg/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/uOqs60y6uFicx0G22rcgkNno7CUsvkbDNGIibN2XaX14p9fygCAmQbpia4d9Tib6Cchlaia1kv9LBvbZ20SJsoSdsJA/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/fnoNvibpSbBX4icM9VxG3FA7lnsoqB5HYpicWa9eodMn2VosrwTw5ibG7DeeHNxD3AFRRx2WaPTkdMhBatAl0s9A5g/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKRFIZAykeug9EXaiaicZibAKfibC5Xox2icCkrWW4ErKA0dyAOBtX7T6ibiazlsswiaPfiaFASjbrUkmPqaew/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/SGjg6RWwHTHsKx9VE3yib3X10QuofxLEOSxqcIsWYaHryJicbgIBEcD1OUbgt00qu9bZ10EcH7XIpv7vEIglm6oQ/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/cFpu1nmzNVibW7VFMZMPo2mmxdIS1nJEibV1XxSIJLmeoibHQbAdpfzpiaJaeavb03ohJpx0XdDPtktwicLTibTbwfhw/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/7tasQ8icvIicASx7FCVN4uqZWgltVdR9yozm6Jt9yBXQiagGENIHoQ7AzicEfOFzECESrcnkbF92wXYiciacxXz00fHw/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJVbNavqRZWp0oUwEw2icFzjDgibHqTCxC6veojgHccHiaxiaOpgQOkAIh92SICfp2pKsrXTIBjrV5Jpg/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/0jyiajvicYicH4NTKaGmfMw12BzDliciajibSnE4l90FFibAaia6p2icgUU5Dwy7gGUrlG18Sy0tPMoM65e4VnibPI49zdSQ/132"
          ];
          //昵称数组
          var utf8NameArr1 = [
            " ",
            " ",
            "的",
            "也",
            "为",
            "又",
            "可",
            "家",
            "学",
            "只",
            "以",
            "主",
            "会",
            "样",
            "年",
            "想",
            "能",
            "生",
            "同",
            "老",
            "中",
            "从",
            "自",
            "面",
            "前",
            "头",
            "到",
            "它",
            "后",
            "然",
            "走",
            "很",
            "像",
            "见",
            "两",
            "用",
            "她",
            "国",
            "动",
            "进",
            "成",
            "回",
            "什",
            "边",
            "作",
            "对",
            "开",
            "而",
            "已",
            "总",
            "条",
            "白",
            "话",
            "东",
            "席",
            "次",
            "亲",
            "如",
            "被",
            "花",
            "口",
            "放",
            "儿",
            "常",
            "西",
            "气",
            "五",
            "第",
            "使",
            "写",
            "军",
            "吧",
            "文",
            "运",
            "在",
            "果",
            "怎",
            "定",
            "许",
            "快",
            "明",
            "行",
            "因",
            "别",
            "飞",
            "外",
            "树",
            "物",
            "活",
            "部",
            "门",
            "无",
            "往",
            "船",
            "望",
            "時窥",
            "草莓",
            "忆",
            "勒言",
            "^千",
            "笑厌",
            "蝶",
            "浪够",
            "蒙春",
            "执着",
            "赔伴",
            "福星",
            "萧迢",
            "言己",
            "婪欲",
            "ζ挽",
            "柔侣",
            "噬丶",
            "逆の",
            "小嗲",
            "半死",
            "难拥",
            "孤i",
            "创i",
            "月棠",
            "轻佻",
            "反话",
            "泠渊",
            "雾夕",
            "淤人",
            "死≠",
            "蠕虫"
          ];
          var stringNameArr2 = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
            " ",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
            " "
          ];
          var numNameArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
          var specialNameArr4 = ["*", "/", "-", "@", "！", "~", "#", "$", "￥", "%", "^", "&", "|", ".", "、", " ", " "];
          var nameArr1 = [utf8NameArr1, stringNameArr2, numNameArr3, specialNameArr4];
          // 得到随机头像链接
          var Index = Math.floor(Math.random() * avatorArr.length);
          // 得到昵称
          var someoneName = "";
          for (var j = 0; j < 3; j++) {
            var someoneFont_index = Math.floor(Math.random() * nameArr1.length);
            var someoneFontFrom = nameArr1[someoneFont_index];
            var someoneFont = someoneFontFrom[Math.floor(Math.random() * someoneFontFrom.length)];
            someoneName += someoneFont;
          }
          //push到页面上 因为只是用来展示的，所以不用担心图片不够用的情况
          var p_minutes = Math.ceil(Math.random() * 59);
          var p_price = Math.ceil(Math.random() * 7);
          var dom = `
              <div class='desc'>
                <div class="person">
                  <img class="p-avator" src="${avatorArr[Index]}" alt=""/>
                  <div class="p-name">${someoneName}... ${p_minutes}分钟前提现了${p_price}元邀新奖励
                </div>
              </div></div>`;
          $("#prizeNotice").append(dom);
        }
      };
      window.prizeNotice = prizeNotice;
      prizeNotice.init();
    })();
  }
};

window.setUserId = params => {
  const { userId, token, deviceId } = params;
  window.userId = userId;
  window.token = token;
  window.deviceId = deviceId;
  inviteFriends.init();
};
var ua = window.navigator.userAgent.toLowerCase();
ua.indexOf("taoxiaocheng") !== -1 ? JSB.getUserId({}, "setUserId") : inviteFriends.init();
