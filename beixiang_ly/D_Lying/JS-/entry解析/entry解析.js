


//  doStart: function () {
//     if (this.hasNoTimes) { //activity中初始值为false   -->  this.hasNoTimes==false
//       this.showModal('over'); 
//       //1.调用下面定义的showModal函数 拿到从public.js文件里调用的showErrorModal(errorCode, result)函数 因为'over'所拿到的所有result{/* case 'over': */type:'over', title:'次数已用完', tip:'次数用光了',btnText:'了解'; /*break;*/} 
//       // 2.返回$('.start-tip2').text('今日福利送完咯~').show();
//       self.gameloading.hide();
//       self.showModalAction('showRecommend');
//     } else {
//       if (this.running) return false; //如果没动，running==false ,就不执行
//       this.running = true;
//       $('.changeBtn').attr('disabled'); //$('.changeBtn').attr('disabled',false); 设置disabled属性为false，按钮可用  
//       this.lastResult = null;
//       this.gameloading.show();
//       this.getOrder();
//     }
//   }
  ;(function(win, doc) {
    try {
      var showControl = function() {
        if (window.location.href.indexOf('debug') !== -1) return false;
        window.location.href = window.location.href + '&debug=true';
      }

      var bindControl = function(e) {
        var timer = null;

        // 监测长触摸事件
        var longPress = function(fn, delay) {
          timer = setTimeout(fn, delay);
        }

        // 将Event按位置顺序排序
        if (e.touches.length === 4) {
          var touches = Array.prototype.slice.call(e.touches);
          var bottomTouches = touches
            .sort(function(a, b) {
              return a.clientY - b.clientY
            })
            .splice(2, 2)
            .sort(function(a, b) {
              return a.clientX - b.clientX
            })
          var topTouches = touches.sort(function(a, b) {
            return a.clientX - b.clientX
          })
          if (checkPos(topTouches.concat(bottomTouches))) {
            longPress(function() {
              showControl()
            }, 3000)
          }
        }

        document.addEventListener('touchend', function() {
          try {
            clearTimeout(timer);
          } catch (e) {}
        })
      }

      var checkPos = function(touches) {
        // 检测的误差偏移量
        var OFFSET = 200
        var $h = window.innerHeight;
        var $w = window.innerWidth
        var baseArr = [
          {
            x: 0,
            y: 0
          },
          {
            x: $w,
            y: 0
          },
          {
            x: 0,
            y: $h
          },
          {
            x: $w,
            y: $h
          }
        ]
        return touches.every(function(val, index) {
          return (
            val.clientX > baseArr[index]['x'] - OFFSET &&
            val.clientX < baseArr[index]['x'] + OFFSET &&
            val.clientY > baseArr[index]['y'] - OFFSET &&
            val.clientY < baseArr[index]['y'] + OFFSET
          )
        })
      }
      var delay = setTimeout(function() {
        document.getElementById('db-content').addEventListener('touchstart', function(e) {
          bindControl(e);
        });
        clearTimeout(delay);
      }, 5000);
    } catch (e) {
      console.log(e);
    }
    function showTlog() {
      doc.removeEventListener('touchstart', showTlog);
      var oHead = doc.head;
      var oScript = doc.createElement('script');
      oScript.type = 'text/javascript';
            oScript.src = "//yun.tuisnake.com/h5-mami/optimize/tlog.min.js";
      oHead.appendChild(oScript);
    }
    if (location.href.indexOf('&debug=true') !== -1) {
      showTlog();
    }
  })(window, document)

