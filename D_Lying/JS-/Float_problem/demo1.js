function isInteger(shu) {
  return Math.floor(shu) === shu; //floor向下取整 用ceil向上取整 round四舍五入 都行
}
function toInteger(floatNum) {
  var float = {times:1,intnum:0}
  if(isInteger(floatNum)) {
    float.intnum = floatNum //bazhengshugeita 
    return float;
  }

  var xiaoshudianindex = floatNum.toString().indexOf('.');

  var xiaoshulength = String(floatNum).substr(xiaoshudianindex+1).length;
  float.times = Math.pow(10,xiaoshulength)
  float.intnum = floatNum * float.times;
  return float;
}
function count(a,b,operation) {
  var a1 = toInteger(a); //return a1{times:?,ininum:?}
  var b1 = toInteger(b);
  var aa =  a1.intnum;
  var bb =  b1.intnum;
  var at = a1.times;
  var bt = b1.times;
  var max = at > bt ? at : bt;
  var result;
  switch(operation){
    case '+':
        if(at === bt){
            result = aa + bb;
        }else if(at > bt){
            result = aa + bb * (at/bt);
        }else{
            result = aa * (bt/at) + bb;
        }
        return result / max;
        // break;
    case '-':
        if(at === bt){
            result = aa  - bb;
        }else if(at > bt){
            result = aa - bb * (at/bt);
        }else{
            result = aa * (bt/at) - bb;
        }
        return result / max;
        // break;
    case '*':
        result = (aa * bb)/(at * bt);
        return result;
        // break;
    case '/':
        result = (aa / bb)/(bt / at);
        return result;
        // break;
    default:
        return false;
  }    
}
console.log(count(0.13,0.53,'+'));

// 遇见问题和想法：
// 想法： 本打算用一个变量取代"+","-","*","/" 
// 问题： 变量可以为字符串却不能是运算符在这里的符号都是运算符所以不能用变量替代/

// 放出问题： 那如果是三个浮点数甚至更加多数的添加呢？？
