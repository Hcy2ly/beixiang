蜜蜂飞动：
animation：
1. 速度 ：animation-timing-function： ease（默认，动画以低速开始，然后加快，结束前变慢） /ease-out动画以低速结束
2. 曲线： 

1. 小蜜蜂行走动效 根据案件决定小蜜蜂的动效
2. 每个页面的动效
 
   // this.bind();
   bind() {
    $(`body`).on("touchstart", function(e) {
      monthlyReport.startX = e.targetTouches[0].pageX;
    });
    $(`body`).on("touchmove", function() {});
    $(`body`).on("touchend", function(e) {
      monthlyReport.endX = e.changedTouches[0].pageX;
      if (parseInt(monthlyReport.endX) - parseInt(monthlyReport.startX) < -10) {
        monthlyReport.i++;
        let add_le = (4480 / 13) * monthlyReport.i;
        console.log(add_le);
        $("#container").scrollLeft(add_le);
      }
      if (parseInt(monthlyReport.endX) - parseInt(monthlyReport.startX) > 10) {
        monthlyReport.i--;
        let decrease_le = (4480 / 13) * monthlyReport.i;
        $("#container").scrollLeft(decrease_le);
      }
    });
  },

  // clickedSlide被点击slide

  https://www.swiper.com.cn/api/properties/270.html  好用