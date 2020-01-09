<!--
 * @Author: your name
 * @Date: 2020-01-09 13:46:39
 * @LastEditTime : 2020-01-09 16:28:18
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\LY_Restart\9_ms\艾耕科技\readme.md
 -->
  艾耕科技：
  1. 静态页面
  2. 数据json 化


  1. 
  // 将字符串转化json对象：
  // var json = JSON.parse(str); //专门针对单引号套双引号的严格格式。
  // var json = eval("(" + str + ")");
  // var json = (new Function("return " + str))();

  function strToJson(str) {
    // var json = (new Function("return " + str))();
    var json = eval("(" + str + ")");
    console.log(json);
  }

  // var str =
  //   "奴隶社会,非洲,古埃及文明,金字塔,亚洲,两河流域文明,汉谟拉比法典,,古印度,种姓制度,,,佛教的创立,欧洲,希腊,希腊城邦,,,雅典民主,,罗马,城邦,,,帝国的征服与扩展,,希腊罗马古典文化,建筑艺术,,,公历";
    
  strToJson('{"name":"小明","age":18}');


# substring()
substring() 方法用于提取字符串中介于两个指定下标之间的字符。

  * 语法
      stringObject.substring(start,stop)
  * 参数	描述
      start	必需。一个非负的整数，规定要提取的子串的第一个字符在 stringObject 中的位置。
      stop	可选。一个非负的整数，比要提取的子串的最后一个字符在 stringObject 中的位置多 1。如果省略该参数，那么返回的子串会一直到字符串的结尾。

  * 返回值
      一个新的字符串，该字符串值包含 stringObject 的一个子字符串，其内容是从 start 处到 stop-1 处的所有字符，其长度为 stop 减 start。

  * 说明
      substring() 方法返回的子串包括 start 处的字符，但不包括 stop 处的字符。