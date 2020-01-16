/*!
 * @bundleinfo-赵杨晶
 * -zhaoyangjing@duiba.com.cn
 * -2019-4-16 00:33:52
 */
!function (n) { 
    var o = {}; 
    function c(e) { 
        if (o[e]) return o[e].exports; 
        var t = o[e] = { i: e, l: !1, exports: {} }; 
        return n[e].call(t.exports, t, t.exports, c), t.l = !0, t.exports 
    } 
    c.m = n, c.c = o, c.d = function (e, t, n) {
        c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) 
    }, 
    c.r = function (e) { 
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, 
    c.t = function (t, e) { 
        if (1 & e && (t = c(t)), 8 & e) return t; 
        if (4 & e && "object" == typeof t && t && t.__esModule) return t; 
        var n = Object.create(null); 
        if (c.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) 
        for (var o in t) 
        c.d(n, o, function (e) { 
            return t[e] }.bind(null, o)); 
            return n 
        }, 
        c.n = function (e) { 
            var t = e && e.__esModule ? function () { 
                return e.default 
            } : function () { 
                return e }; 
                return c.d(t, "a", t), t 
                }, 
                c.o = function (e, t) { 
                    return Object.prototype.hasOwnProperty.call(e, t) 
                }, 
                c.p = "//yun.tuisnake.com/newactivity/", 
                c(c.s = 1) 
        }({ 1: function (e, t, n) { e.exports = n("XYwY") }, H2QQ: function (e, t, n) { e.exports = n.p + "assets/lucky.61b436701ccb11f945a58f4555bbcdbd.png" }, MOXH: function (e, t, n) { e.exports = n.p + "assets/hand.c36c4dc34e02529aa2dbfea76c6f6f08.png" }, VUWN: function (e, t, n) { e.exports = n.p + "assets/cut-time.c420a90fb69ab1a285f074413467ac07.png" }, XYwY: function (e, t, n) { "use strict"; n.r(t); n("bRCz"); var o = { "lucky-bg": n("H2QQ"), close: n("dBQb"), light: n("bYg9"), hand: n("MOXH"), button: n("Y3aR"), cuttime: n("VUWN") }, c = []; for (var i in o) c.push(o[i]); 
        CouponModal.prototype[433] = function (e) { 
            var t = ['<section class="'.concat("frequently-use", ' J_modalShowPrize shadow">'), '<section class="pop-win J_coupon-modal-animate">', '<div class="close J_coupon-modal-close" style="background-image: url('.concat(o.close, ')"></div>'), '<div class="light" style="background-image: url('.concat(o.light, ')"></div>'), '<div class="main-contain J_coupon-modal-showPrize-dialog" style="background-image: url('.concat(o["lucky-bg"], ')">'), '<div class="coupon J_gotoDetail logandgo" data-pic="true" style="background-image: url('.concat(e.img, ')"></div>'), '<div class="name">'.concat(e.title, "</div>"), '<div class="btn J_btnCoupon" style="background-image: url('.concat(o.button, ')"></div>\n     <div class="hand" style="background-image: url(').concat(o.hand, ')"></div>\n     <div class="cut-time" style="background-image: url(').concat(o.cuttime, ')">\n     <div class="rest-time rest-time-second">09</div>\n     <div class="rest-time rest-time-ms">25</div>\n     <div class="rest-time-bar"></div>\n     </div>\n     </div>'), "</div></div></section></section>"]; 
 return setTimeout(function () { a() }), setTimeout(r, 1500), t.join("") }; 
    var a = function () { 
        $(".kiss-lip .close").on("click", function () { 
            window.frequentlyTimer && clearInterval(window.frequentlyTimer) 
        }) 
    };
    var r = function () { 
        var o = $(".rest-time-bar").width();
        var c = 1e4; 
        window.frequentlyTimer = setInterval(function () { 
            var e = "0".concat(Math.floor(c / 1e3));
            var t = c % 1e3 / 40;
            var n = c / 1e4 * o; 
            t <= 9 && (t = "0".concat(t)), 
            $(".rest-time-second").text(e), 
            $(".rest-time-ms").text(t), 
            $(".rest-time-bar").css("width", n), 
            c <= 0 && (clearInterval(window.frequentlyTimer), 
            $(".cut-time").hide()), 
            c -= 40 
        }, 40) 
    }; 
            window.preload(c, !1) }, 
            Y3aR: function (e, t, n) { e.exports = n.p + "assets/button.493923f7d03bde19fccc6aa2e92dcee8.png" }, 
            bRCz: function (e, t, n) { }, 
            bYg9: function (e, t, n) { e.exports = n.p + "assets/light.d84c950a0adf2540aebb1f642ebfedb0.png" }, 
            dBQb: function (e, t, n) { e.exports = n.p + "assets/close.2c8e6aeb25ef6cc2892e53fd92ddf414.png" } });