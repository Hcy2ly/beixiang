<!--
 * @Author: Ly
 * @Date: 2020-01-09 13:46:39
 * @LastEditTime : 2020-01-13 23:55:33
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\LY_Restart\9_ms\艾耕科技\readme.md
 -->
    艾耕科技：
    1. 静态页面 Carousel
    2. 数据json 化  demo1 [demo2]


* 将字符串转化json对象：
  var json = JSON.parse(str); //专门针对单引号套双引号的严格格式。
  var json = eval("(" + str + ")");
  var json = (new Function("return " + str))();

  function strToJson(str) {
    // var json = (new Function("return " + str))();
    var json = eval("(" + str + ")");
    console.log(json);
  }
  
  strToJson('{"name":"小明","age":18}'); // 专门针对单引号套双引号的严格格式。

# Array 对象属性

  * 属性	描述
    constructor	返回对创建此对象的数组函数的引用。
    length	设置或返回数组中元素的数目。
    prototype	使您有能力向对象添加属性和方法。
    Array 对象方法

  * 方法	描述
    concat()	连接两个或更多的数组，并返回结果。 =》 链接数组
    join()	把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。=> 数组转换成字符串。
    pop()	删除并返回数组的最后一个元素
    push()	向数组的末尾添加一个或更多元素，并返回新的长度。
    reverse()	颠倒数组中元素的顺序。
    shift()	删除并返回数组的第一个元素
    slice()	从某个已有的数组返回选定的元素
    sort()	对数组的元素进行排序
    splice()	删除元素，并向数组添加新元素。
    toSource()	返回该对象的源代码。
    toString()	把数组转换为字符串，并返回结果。
    toLocaleString()	把数组转换为本地数组，并返回结果。
    unshift()	向数组的开头添加一个或更多元素，并返回新的长度。
    valueOf()	返回数组对象的原始值

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

# slice() 
slice() 方法可从已有的数组中返回选定的元素。

  * 语法
      arrayObject.slice(start,end)
  * 参数	描述
      start	必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。
      end	可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。

# push()
push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。

  * 语法
      arrayObject.push(newelement1,newelement2,....,newelementX)
  * 参数	描述
      newelement1	必需。要添加到数组的第一个元素。
      newelement2	可选。要添加到数组的第二个元素。
      newelementX	可选。可添加多个元素。
  * 返回值
      把指定的值添加到数组后的新长度。
  * 说明
      push() 方法可把它的参数顺序添加到 arrayObject 的尾部。它直接修改 arrayObject，而不是创建一个新的数组。push() 方法和 pop() 方法使用数组提供的先进后出栈的功能。
  * 提示和注释
      注释：该方法会改变数组的长度。
      提示：要想数组的开头添加一个或多个元素，请使用 unshift() 方法。

# pop()
pop() 方法用于删除并返回数组的最后一个元素。

  * 语法
      arrayObject.pop()
  * 返回值
      arrayObject 的最后一个元素。
  * 说明
      pop() 方法将删除 arrayObject 的最后一个元素，把数组长度减 1，并且返回它删除的元素的值。如果数组已经为空，则 pop() 不改变数组，并返回 undefined 值。

# for（var i in obj）和for（var i=0; i<obj.length; i++）的区别：
  1. 第一个是增强for循环，是不使用下标的一种遍历方式，简单高效，缺点是不能使用下标。
  2. 如果想要循环一个json就用第一个，如果想循环一个数组就用第二个。
  3. 前者循环的是属性，后者循环的才是数组。 

    - 若项目中对数组属性进行了扩展，那切记不能使用前者，否则在循环数组时扩展的函数体也会被当做数据返回。 
    - var data = { p1:1, p2:"b" }; for (var i in data){ console.log(i); alert(eval("data." + i)); } 
      //p1 
      //alert: 1 
      //p2
      //alert: b
    - for(var i in items) 慎用 尤其在需要兼容IE8时。


  * 问题： 我刚开始用的for循环，不能实现，而且浏览器卡住了，对比了一下代码，我改成for in就好了，请问是什么原因呢？
    答案： 因为不能够翻译。for循环是java里面语法，然而for(var i in arr)是属于http页面能够看得懂得相当于是前端的JS或jQuery的语法.
