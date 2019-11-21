/**
 * @author 一号美女
 * @date 2019/4/18
 * @param {*} index 
 * @param {*} x 
 * @param {*} y 
 */
function Round_item(index, x , y, context) {
    this.index = index;
    this.x = x;
    this.y = y;
    this.context = context;
    this.r = Math.random() * 2 + 1;
    var alpha =(Math.floor(Math.random() * 10) + 1) /20 ; //用opacity来模拟远近的效果 越近越清晰，越远越模糊
    this.color = `rgba(255, 255, 255, ${alpha})`;
}
Round_item.prototype.draw = function() {
    context.fillStyle = this.color;
    context.shadowBlur = this.r * 2; //越模糊的周围阴影越重
    context.beginPath(); //开始画
    context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    context.closePath();
    context.fill(); //划掉 填充到canvas里面去。
}
Round_item.prototype.move = function() {
    this.y -= 0.15 ;
    // if(this.y <= -10) {
    //     this.y = HEIGHT + 10;
    // }
    this.draw();
}