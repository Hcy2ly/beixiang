<!--
 * @Author: Liao Ying
 * @Date: 2020-01-11 23:29:31
 * @LastEditTime : 2020-01-12 00:07:46
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\LY_Restart\dayTask\20200111\String.md
 -->
 
# JavaScript String 对象
  * String 对象
  String 对象用于处理文本（字符串）。

  * 创建 String 对象的语法：
      new String(s);
      String(s);
      
  * 参数
  参数 s 是要存储在 String 对象中或转换成原始字符串的值。

  * 返回值
    - 当 String() 和运算符 new 一起作为构造函数使用时，它返回一个新创建的 String 对象，存放的是字符串 s 或 s 的字符串表示。
    - 当不用 new 运算符调用 String() 时，它只把 s 转换成原始的字符串，并返回转换后的值。

  * String 对象属性
  
    属性	           描述

    constructor	对创建该对象的函数的引用
    length	字符串的长度
    prototype	允许您向对象添加属性和方法
    String 对象方法
    方法	描述
    anchor()	创建 HTML 锚。
    big()	用大号字体显示字符串。
    blink()	显示闪动字符串。
    bold()	使用粗体显示字符串。
    charAt()	返回在指定位置的字符。
    charCodeAt()	返回在指定的位置的字符的 Unicode 编码。
    concat()	连接字符串。
    fixed()	以打字机文本显示字符串。
    fontcolor()	使用指定的颜色来显示字符串。
    fontsize()	使用指定的尺寸来显示字符串。
    fromCharCode()	从字符编码创建一个字符串。
    indexOf()	检索字符串。
    italics()	使用斜体显示字符串。
    lastIndexOf()	从后向前搜索字符串。
    link()	将字符串显示为链接。
    localeCompare()	用本地特定的顺序来比较两个字符串。
    match()	找到一个或多个正则表达式的匹配。
    replace()	替换与正则表达式匹配的子串。
    search()	检索与正则表达式相匹配的值。
    slice()	提取字符串的片断，并在新的字符串中返回被提取的部分。
    small()	使用小字号来显示字符串。
    split()	把字符串分割为字符串数组。
    strike()	使用删除线来显示字符串。
    sub()	把字符串显示为下标。
    substr()	从起始索引号提取字符串中指定数目的字符。
    substring()	提取字符串中两个指定的索引号之间的字符。
    sup()	把字符串显示为上标。
    toLocaleLowerCase()	把字符串转换为小写。
    toLocaleUpperCase()	把字符串转换为大写。
    toLowerCase()	把字符串转换为小写。
    toUpperCase()	把字符串转换为大写。
    toSource()	代表对象的源代码。
    toString()	返回字符串。
    valueOf()	返回某个字符串对象的原始值。

  * String 对象描述
    1. 字符串是 JavaScript 的一种基本的数据类型。
    2. String 对象的 length 属性声明了该字符串中的字符数。
    3. String 类定义了大量操作字符串的方法，例如从字符串中提取字符或子串，或者检索字符或子串。
    4. 需要注意的是，JavaScript 的字符串是不可变的（immutable），String 类定义的方法都不能改变字符串的内容。像 String.toUpperCase() 这样的方法，返回的是全新的字符串，而不是修改原始字符串。
    5. 在较早的 Netscape 代码基的 JavaScript 实现中（例如 Firefox 实现中），字符串的行为就像只读的字符数组。例如，从字符串 s 中提取第三个字符，可以用 s[2] 代替更加标准的 s.charAt(2)。此外，对字符串应用 for/in 循环时，它将枚举字符串中每个字符的数组下标（但要注意，ECMAScript 标准规定，不能枚举 length 属性）。因为字符串的数组行为不标准，所以应该避免使用它。



    JVM为了提升性能和减少内存开销，避免字符串的重复创建，维护了一块特殊的内存空间——字符串实例池。




# String & new String() 的区别：https://www.cnblogs.com/wdfordream/p/9449710.html
JVM为了提升性能和减少内存开销，避免字符串的重复创建，维护了一块特殊的内存空间——字符串实例池。

  * String赋值的两种方式。
    1. String str = "test";
      以这种方式赋值时，JVM会先从字符串实例池中查询是否存在"test"这个对象，
      如果存在，直接把实例池中"test"的地址返回给str。如果不存在，则会在实例池中创建"test"对象，并把该对象的地址返回给str。
      - code:
        var a = String('test');
        var b = String('test');
        a === b; //true
        typeof a; //string js中的基本类型string
        typeof b; //string 
        
      所以通过 === 比较是，a，b指向的是同一地址，所以返回true；

    2. String str = new String("test");
      以这种方式赋值时，JVM会先从字符串实例池中查询是否存在"test"这个对象，
      若不存在则会在实例池中创建"test"对象，同时在堆中创建"test"这个对象，然后将堆中的这个对象的地址返回赋给引用str。
      若实例池存在则直接在堆中创建"test"这个对象，然后将堆中的这个对象的地址返回赋给引用str。
        var str1 = new String('test');  
        var str2 = new String('test');  
        str1 == str2; //false
        typeof str1; //"object"
        typeof str2; //"object"

这时str1和str2分别指向堆中不同的地址，所以返回false； 