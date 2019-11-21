#什么是 RegExp？ RegExp：是正则表达式（regular expression）的简写。
  正则表达式描述了字符的模式对象。
  当您检索某个文本时，可以使用一种模式来描述要检索的内容。RegExp 就是这种模式。
  简单的模式可以是一个单独的字符。
  更复杂的模式包括了更多的字符，并可用于解析、格式检查、替换等等。
  您可以规定字符串中的检索位置，以及要检索的字符类型，等等。

#JavaScript RegExp 对象
* RegExp 对象
  - 正则表达式是描述字符模式的对象。
  - 正则表达式用于对字符串模式匹配及检索替换，是对字符串执行模式匹配的强大工具。
* 语法
 var patt = new RegExp(pattern,modifiers);   或者   var patt=/pattern/modifiers;
  - pattern（模式） 描述了表达式的模式
  - modifiers(修饰符) 用于指定全局匹配、区分大小写的匹配和多行匹配
* 当使用构造函数创造正则对象时，需要常规的字符转义规则 [(在前面加反斜杠\)]。比如，以下是等价的：
  - var re = new RegExp("\\w+");  等价于   var re = /\w+/;
* 修饰符(用于执行不区分大小写和全文的搜索[在实例中用中括号表示]):     i(大小写)      g(全局匹配)      m(执行多行匹配)
    实例1: 在字符串中不区分大小写找"runoob"
      var str = "Visit RUnoob";
      var patt1 = /runoob/i; //[RUnoob]
    实例2: 全文查找 "is"
      var str="Is this all there is?";
      var patt1=/is/g; //Is th[is] all there [is]?
    实例3: 全文查找和不区分大小写搜索 "is"
      var str="Is this all there is?";
      var patt1=/is/gi; //[Is] th[is] all there [is]?
* 方括号(查找某个范围内的字符): 
  - [abc]/[^abc]查找(在/任何不在)方括号之间的任何字符。 
  - [0-9]/[a-z]/[A-Z]/[A-z]查找任何(0至9的数字/【从小a到小z/大A到大Z /大A到小z】的字符)。
* 元字符（拥有特殊含义的字符）
    .	  查找单个字符，除了换行和行结束符。
    \w	查找单词字符; \W 查找非单词字符。
    \d	查找数字;  \D 查找非数字字符。
    \s	查找空白字符; \S	查找非空白字符。
    \b	匹配单词边界。\B	匹配非单词边界。
    \0	查找 NULL 字符。
    \n	查找换行符。
    \f	查找换页符。
    \r	查找回车符。
    \t	查找制表符; \v	查找垂直制表符。
    \xxx	查找以八进制数 xxx 规定的字符。
    \xdd	查找以十六进制数 dd 规定的字符。
    \uxxxx	查找以十六进制数 xxxx 规定的 Unicode 字符
* 量词 （匹配字符串数量）
    n+	(1个或多个n)    
        例如，/a+/ 匹配 "candy" 中的 "a"，"caaaaaaandy" 中所有的 "a"。
    n*	(0个或多个n)
        例如，/bo*/ 匹配 "A ghost booooed" 中的 "boooo"，"A bird warbled" 中的 "b"，但是不匹配 "A goat grunted"。
    n?  (0个或1个n)
        例如，/e?le?/ 匹配 "angel" 中的 "el"，"angle" 中的 "le"。
    n{X}	(X个n)
        例如，/a{2}/ 不匹配 "candy," 中的 "a"，但是匹配 "caandy," 中的两个 "a"，且匹配 "caaandy." 中的前两个 "a"。
    n{X,}	(X个或多个)
        例如，/a{2,}/ 不匹配 "candy" 中的 "a"，但是匹配 "caandy" 和 "caaaaaaandy." 中所有的 "a"。
    n{X,Y} (X-Y个)。
        例如，/a{1,3}/ 不匹配 "cndy"，匹配 "candy," 中的 "a"，"caandy," 中的两个 "a"，匹配 "caaaaaaandy" 中的前面三个 "a"。注意，当匹配 "caaaaaaandy" 时，即使原始字符串拥有更多的 "a"，匹配项也是 "aaa"。
    n$	匹配任何结尾为 n 的字符串。
    ^n	匹配任何开头为 n 的字符串。
    ?=n	匹配任何其后紧接指定字符串 n 的字符串。
    ?!n	匹配任何其后没有紧接指定字符串 n 的字符串。
  * RegExp 对象方法[方法]
    - exec => 检索字符串中指定的值。返回找到的值，并确定其位置。如果没有发现匹配，则返回 null。
      1. 实例: 下面的示例是从字符串中搜索字符 "e" ：
          var patt1=new RegExp("e");
          document.write(patt1.exec("The best things in life are free"));//由于该字符串中存在字母 "e"，以上代码的输出将是：e
    - test => 检索字符串中指定的值。返回 true 或 false。
      1. 实例: 下面的示例是从字符串中搜索字符 "e" ：
          var patt1=new RegExp("e");
          document.write(patt1.test("The best things in life are free")); //由于该字符串中存在字母 "e"，以上代码的输出将是：true
    - toString => 返回正则表达式的字符串。

  * 支持正则表达式的 String 对象的方法
    search	   检索与正则表达式相匹配的值。	
    match	     找到一个或多个正则表达式的匹配。
    replace	   替换与正则表达式匹配的子串。	
    split	     把字符串分割为字符串数组。	