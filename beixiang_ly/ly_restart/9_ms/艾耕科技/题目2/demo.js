
// 由于是在windows下编写，用\r\n作为换行分隔符
var s = "奴隶社会,非洲,古埃及文明,金字塔\r\n,亚洲,两河流域文明,汉谟拉比法典\r\n,,古印度,种姓制度\r\n,,,佛教的创立\r\n,欧洲,希腊,希腊城邦\r\n,,,雅典民主\r\n,,罗马,城邦\r\n,,,帝国的征服与扩展\r\n,,希腊罗马古典文化,建筑艺术\r\n,,,公历";
 
// main函数
function str2json (str) {
  // 获取每一条规则
  var arr = str.split('\r\n');
 
  return JSON.stringify(parse(arr));
}
 
// 输出解析json字符串
console.log(str2json(s));
 
 
 
/* 辅助方法 */
// 获取s头部,的数量
function getPreNum (s) {
  var reg = /^,*/;
  return reg.exec(s)[0].length;
}
 
// 删除每一条规则第一个,号
function delPreTag (arr) {
  var len = arr.length;
  for (var i in arr) {
    arr[i] = arr[i].substring(1);
  }
}
 
// 执行解析操作
function parse (arr) {
    // 用于记录第二层级数据项(根下一项)的起始位置
    var indexArr = [];
 
    // 输出结果obj
    var obj = {};
  
    // 1. 首先先将根属性取出
    // 如果数组为空，直接返回一个空的数组
    if (arr.length === 0) return obj; 
    // 如果数组中仅包含一项，并且没有','标识，则直接返回该字段
    if (arr.length === 1 && arr[0].indexOf(',') === -1) {
      return arr[0];
    }
    var index =  arr[0].indexOf(',');
    var root = arr[0].substring(0, index);
    obj[root] = [];
    arr[0] = arr[0].substring(index);
  
    // 2. 获取第二层级数据项(根下一层数据)的起始下标
    for (var i = 0; i < arr.length; i++) {
      // 如果头部,数量为1
      if (getPreNum(arr[i]) === 1) {
        indexArr.push(i);
      }
    }
  
    // 临时的一个数组，用于存放每个二级分组
    var tempArr = [];
    // 3. 将每条规则的第一个,号删除
    delPreTag(arr);
 
    // 4. 将每一个二级分组提取到tempArr中
    for (var i = 0; i < indexArr.length; i++) {
      if (i !== indexArr.length - 1) {
        tempArr.push(arr.slice(indexArr[i], indexArr[i + 1]));
      } else {
        tempArr.push(arr.slice(indexArr[i]));
      }
    } 
 
    // 5. 对tempArr进行遍历回调
    for (var i in tempArr) {
      obj[root].push(parse(tempArr[i]));
    } 
  
    return obj;
}