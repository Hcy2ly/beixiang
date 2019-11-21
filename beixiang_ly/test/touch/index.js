  //手指接触屏幕
  $canvas.on('touchstart',function(ev){
    ev=ev||event;
    var touchC=ev.changedTouches[0];//拿第一根手指
    //获取手指接触屏幕的坐标
    var x=touchC.pageX-getLeft(canvas);
    var y=touchC.pageY-getTop(canvas);
    console.log(getTop(canvas));
    ctx.save();
    //只留下目标超过源的部分
    ctx.globalCompositeOperation='destination-out'
    ctx.lineWidth=40;
    ctx.lineCap="round";
    ctx.lineJoin="round";
    ctx.beginPath();
    //只能画线，用线模拟圆
    ctx.moveTo(x,y);
    ctx.lineTo(x,y);
    ctx.stroke();
    ctx.restore();
    !isStart && startDraw();  //手指接触屏幕
    $canvas.on('touchstart',function(ev){
      ev=ev||event;
      var touchC=ev.changedTouches[0];//拿第一根手指
      //获取手指接触屏幕的坐标
      var x=touchC.pageX-getLeft(canvas);
      var y=touchC.pageY-getTop(canvas);
      console.log(getTop(canvas));
      ctx.save();
      //只留下目标超过源的部分
      ctx.globalCompositeOperation='destination-out'
      ctx.lineWidth=40;
      ctx.lineCap="round";
      ctx.lineJoin="round";
      ctx.beginPath();
      //只能画线，用线模拟圆
      ctx.moveTo(x,y);
      ctx.lineTo(x,y);
      ctx.stroke();
      ctx.restore();
      !isStart && startDraw();
      isStart = true;
    });
    //手指在屏幕上滑动
    $canvas.on('touchmove',function(ev){
      ev=ev||event;
      ev.preventDefault();
      var touchC=ev.changedTouches[0];//拿第一根手指
      //获取手指接触屏幕的坐标
      var x=touchC.pageX-getLeft(canvas);
      var y=touchC.pageY-getTop(canvas);
      ctx.save();
      ctx.globalCompositeOperation='destination-out'
      ctx.lineWidth=40;
      ctx.lineCap="round";
      ctx.lineJoin="round";
      ctx.lineTo(x,y);
      ctx.stroke();
      ctx.restore();
    });
    //手指离开屏幕
    $canvas.on('touchend',function(){
      var imgdata=ctx.getImageData(0,0,300,168);
      //拿到所有的像素
      var allPx=imgdata.width*imgdata.height;
      for(var i=0;i<allPx;i++){
          if(imgdata.data[4*i+3]==0){
            flag++;
          }
      }
      //如果划开的像素大于整个canvas的指定百分比，就让canvas的透明度为0，让图片显示出来
      if((flag / allPx) * 100 > percent){
        $canvas.css('opacity', 0);
        !isEnd && afterDraw();
        isEnd = true;
      }
      //过渡执行完，透明度为0，就把canvas在页面上删除
      $canvas.on('transitionend',function() {
        this.remove();//删除canvas
      });
      flag = 0;
    });
    isStart = true;
  });
  //手指在屏幕上滑动
  $canvas.on('touchmove',function(ev){
    ev=ev||event;
    ev.preventDefault();
    var touchC=ev.changedTouches[0];//拿第一根手指
    //获取手指接触屏幕的坐标
    var x=touchC.pageX-getLeft(canvas);
    var y=touchC.pageY-getTop(canvas);
    ctx.save();
    ctx.globalCompositeOperation='destination-out'
    ctx.lineWidth=40;
    ctx.lineCap="round";
    ctx.lineJoin="round";
    ctx.lineTo(x,y);
    ctx.stroke();
    ctx.restore();
  });
  //手指离开屏幕
  $canvas.on('touchend',function(){
    var imgdata=ctx.getImageData(0,0,300,168);
    //拿到所有的像素
    var allPx=imgdata.width*imgdata.height;
    for(var i=0;i<allPx;i++){
        if(imgdata.data[4*i+3]==0){
          flag++;
        }
    }
    //如果划开的像素大于整个canvas的指定百分比，就让canvas的透明度为0，让图片显示出来
    if((flag / allPx) * 100 > percent){
      $canvas.css('opacity', 0);
      !isEnd && afterDraw();
      isEnd = true;
    }
    //过渡执行完，透明度为0，就把canvas在页面上删除
    $canvas.on('transitionend',function() {
      this.remove();//删除canvas
    });
    flag = 0;
  });