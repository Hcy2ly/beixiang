 /*判断obj是否为一个整数*/
 function isInteger(obj){
  return Math.floor(obj) === obj;
}

/**
* 将一个浮点数转换成整数，返回整数和倍数
* 如 3.14 》》314  倍数是100
*
*/
function toInteger(floatNum){
  var ret = {times:1,num:0};

  //是整数
  if(isInteger(floatNum)){
      ret.num = floatNum;
      return ret; 
  }
  var strfi = floatNum + ''; //将float的数值类型转化为字符串型

  //查找小数点的下标
  var dotPos = strfi.indexOf('.');
  console.log('小数点的下标dotPos===='+dotPos);

  //获取小数的位数
  var len = strfi.substr(dotPos+1).length;  //substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。即可以得到从小数点后一位开始的的长度
  console.log('获取小数的位数len===='+len);
  
  //Math.pow(10,len)指定10的len次幂。
  var time = Math.pow(10,len); //Math.pow(x,y) 方法返回 x 的 y 次幂。
  console.log("小数点的后面小数化为整数为：" + time)

  //将浮点数转化为整数
  // var intNum = parseInt(floatNum*time + 0.5,10); //parseInt()函数可解析一个字符串，并返回一个整数。 //为啥加0.5
  var intNum = parseInt(floatNum*time,10); //parseInt()函数可解析一个字符串，并返回一个整数。
  console.log('intNum===='+intNum);
  ret.times = time;
  ret.num = intNum;
  return ret;
}

/**
*进行运算
*三个参数分别是要运算的两个数和运算符
*/
function operation(a,b,op){
  var o1 = toInteger(a); //将a转化成整数并return {times：a变成整数的10的几次幂，num：a的整数值} 赋值给对象o1
  var o2 = toInteger(b);
  var n1 = o1.num; //num：a的整数值
  var n2 = o2.num;
  var t1 = o1.times; //times：a变成整数的10的几次幂
  var t2 = o2.times;
  var max = t1 > t2 ? t1 : t2;
  var result = null;
  switch(op){
      case '+':
          if(t1 === t2){
              result = n1 + n2;
          }else if(t1 > t2){
              result = n1 + n2 * (t1/t2);
          }else{
              result = n1 * (t2/t1) + n2;
          }
          return result / max;
          // break;
      case '-':
          if(t1 === t2){
              result = n1  - n2;
          }else if(t1 > t2){
              result = n1 - n2 * (t1/t2);
          }else{
              result = n1 * (t2/t1) - n2;
          }
          return result / max;
          // break;
      case '*':
          result = (n1 * n2)/(t1 * t2);
          return result;
          // break;
      case '/':
          result = (n1 / n2)/(t2 / t1);
          return result;
          // break;
      default:
          return false;
  }    
}
console.log(operation(12.13,0.33,'+'));
console.log(operation(0.13,0.53,'+'));
console.log(operation(0.3,0.111,'='));

