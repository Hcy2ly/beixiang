  //渲染文字跑马灯
  function prizeNotice() {
    !(function() {
      let prizeNotice = {
        init: () => {
          prizeNotice.createDom();
          setInterval(() => {
            $(`#prizeNotice`).empty();
            $(`#prizeNotice`).append(`<div class='desc' style="color:#fff;font-size:.1rem;animation:text 2.5s">${prizeNotice.createInfo()}</div>`);
          }, 2300);
        },
        createDom: () => {
          $("head").append(`<style>
          @keyframes text{ 
            0% {
              transform:scale(0.9) translateY(-.15rem) }
            20%{
              transform:scale(1) translateY(0rem) 
            }
            90%{
              transform:scale(1) translateY(0rem) 
            }
            100%{ 
              transform:scale(.9) translateY(.15rem)
            }
          }
        </style>`);
          const dom = `<div id="prizeNotice" style="position:absolute;overflow:hidden;top:0.05rem;left:50%;transform:translateX(-50%);width:2rem;height:0.2rem;line-height:.2rem;text-align:center;background:rgba(0,0,0,0.6);border-radius:0.05rem">
        <div class='desc' style="color:#fff;font-size:.1rem;animation:text 2.5s">${prizeNotice.createInfo()}</div>
        </div>`;
          $(".container").append(dom);
        },
        createInfo: () => {
          let phoneNum = parseInt(Math.random() * 9000 + 1000);
          let description = [`第${parseInt(Math.random() * 6 + 1)}次抽奖就`, `费尽洪荒之力`, `运气爆发`, `鸿运当头`, `小试身手`];
          let prizeText = [`iPad mini4`, `4999元大奖`, `100元礼包`, `绝版信用卡`, `99元现金`, `10元现金`, `1万元免息礼包`, `iPhone一部`];
          return `尾号${phoneNum}用户 ${description[parseInt(Math.random() * 5)]}获得${prizeText[parseInt(Math.random() * 8)]}`;
        }
      };
      window.prizeNotice = prizeNotice;
      prizeNotice.init();
    })();
  }