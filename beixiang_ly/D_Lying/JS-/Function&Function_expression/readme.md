# 变量提升
即所有声明变量或声明函数都会被提升到当前函数的顶部。
# 函数表达式
函数表达式最大的问题，在于js会将此代码拆分为两行代码分别执行。
- 例如下代码：
  console.log(x);//输出：function x(){}
  var x=1;
  function x(){}

* 匿名函数：function ( 参数 ) { 函数体 }   匿名函数属于函数表达式。
函数表达式与函数声明的区别是：函数表达式必须等到Javascirtp引擎执行到它所在行时，才会从上而下一行一行地解析函数表达式，所以，调用它的语句不可以放在它之前。
  -  例如：
    express();  //报错，函数调用必须在函数表达式之后
    console.log(express);  //undefined   变量提升
    var express=function () {console.log("hello word!");}
# BUT
实际执行的代码为，先将 var x=1 拆分为  var x; & x = 1;  两行，再将变量声明 var x; 和 函数声明function x(){} 两行提升至最上方变成：
var x;
function x(){}
console.log(x);
x=1;
所以最终函数声明的x覆盖了变量声明的x，console.log输出为x函数。

# 闭包 => 抛出问题
function fun(n,o) {
  console.log(o)
  return {
    fun:function(m){
      return fun(m,n); 
    }
  };
}
var a = fun(0);  a.fun(1);  a.fun(2);  a.fun(3);//undefined,0,0,0
var b = fun(0).fun(1).fun(2).fun(3);//undefined,0,1,2
var c = fun(0).fun(1);  c.fun(2);  c.fun(3);//undefined,0,1,1
  #------函数作用域链------#
  * 其实是函数作用域链问题
    - 在函数表达式内部能不能访问存放当前函数的变量。
    - 最内层的return出去的fun函数不是第二层fun函数，是最外层的fun函数
    - 三个fun函数的关系也理清楚了，第一个等于第三个，他们都不等于第二个

# JS中函数可以分为两种，具名函数（命名函数）和匿名函数。
    /**
    * 在低版本IE上无法获取具名函数的name，会返回undefined
    * 获取指定函数的函数名称（用于兼容IE）
    * @param {Function} fun 任意函数
    */
    function getFunctionName(fun) {
        if (fun.name !== undefined)
            return fun.name;
        var ret = fun.toString();
        ret = ret.substr('function '.length);
        ret = ret.substr(0, ret.indexOf('('));
        return ret;
    }
# 创建函数
1.函数声明：     function  函数名称  （参数：可选）   {   函数体  }

2.函数表达式： var express= function  函数名称：可选  （参数：可选）   {  函数体 }      

3.构造函数：     var fun =new  Function(参数：可选);

  * 声明函数
      function fn1(){}
      函数声明有一个非常重要的特征：函数声明提升，javascript引擎在解析代码时，函数声明将会被提升到当前作用域的顶部（跟变量提升非常类似）。正是因为这个特征，所以可以把函数声明放在调用它的语句后面。
    - 如下例：
      foo("hello");   //输出  hello
      function foo(name){console.log(name);}

  * 创建匿名函数表达式 & 创建具名函数表达式
      var fn1=function (){}; getFunctionName(fn1).length;//3
      var fn1=function xxcanghai(){}; getFunctionName(fn1);//"xxcanghai"
    - 注意：具名函数表达式的函数名只能在创建函数内部使用
    - 注意：在对象内定义函数如var o={ fn : function (){…} }，也属于函数表达式
 
  * 构造函数  给它传一个函数字符串，返回包含这个字符串命令的函数，此种方法创建的是匿名函数。
    - >Function("alert(1)")
      <function anonymous() {
        alert(1)
      }
      >new Function("alert(1)")
      <function anonymous() {
        alert(1)
      }
  * 自执行函数 => 立即执行函数  ---------  自执行函数属于上述的“函数表达式”，规则相同
    - ( function(){…} )()  或  ( function (){…} () ) ; 
    //这里的括弧是消除歧义的，它告诉解析器，里面的内容是表达式

    - 例子：
      1.  var express = function () {
            console.log("hello word!");
          }();    //运行  发现函数直接执行，结果输出了"hello word!"
      2.  function () {
            console.log("hello word!");
          }();   //报错  因为以function开头，认为是函数声明，结果没有函数名，就报错了
      3.  function foo() {
            console.log("hello word!");
          }();   //报错   注意：网上好多文章写的不报错，一看就没有自己验证过）虽然，这个function在语法上没问题，但是依然只是一个语句，加上括号依然报错，是因为语句中的分组操作符要包含表达式。
      4. 综上，我们可以得到，在函数表达式后面紧跟一个小括号（），函数会立即执行，两大要点是：表达式、括号（）

#解决问题：
function fun(n,o) { //标准具名函数声明
  console.log(o)
  return {  //返回值是一个对象字面量表达式，属于一个新的object。
    fun:function(m){  //fun这个属性中存放的是一个新创建匿名函数表达式。
  * 注意：所有声明的匿名函数都是一个新函数。
    }
  };
}
  - so  第一个fun函数与第二个fun函数不相同，均为新创建的函数。
  - 问:  说第三个fun函数之前需要先说下，在函数表达式内部 能不能 访问到存放在当前函数的变量？  eg: ./bug.js
  - 答:  使用非对象内部的函数表达式，可以访问到存放当前函数的变量；而对象内部的函数表达式就不能访问到。
  - reason => 函数作用域链
    因为 函数作用域链 的问题，采用var的是在外部创建了一个fn变量，函数内部当然可以在内部寻找不到fn后向上册作用域查找fn，而在创建对象内部时，因为没有在函数作用域内创建fn，所以无法访问。
  - 最内层的return出去的fun函数不是第二层fun函数，是最外层的fun函数。
    * function fun(n,o) {
        console.log(o)
        return {
          fun:function(m){
            return fun(m,n);
          }
        };
      }
      var a = fun(0);  a.fun(1);  a.fun(2);  a.fun(3);//undefined,?,?,?
      var b = fun(0).fun(1).fun(2).fun(3);//undefined,?,?,?
      var c = fun(0).fun(1);  c.fun(2);  c.fun(3);//undefined,?,?,?
      //问:三行a,b,c的输出分别是什么？
      1. var a = fun(0);  a.fun(1);  a.fun(2);  a.fun(3);
        - 第一个fun(0)是在调用第一层fun函数。第二个fun(1)是在调用前一个fun的返回值的fun函数，所以后面几个fun(1),fun(2),fun(3),函数都是在调用第二层fun函数。
        - 在第一次调用fun(0)时，o为undefined；
        - 第二次调用fun(1)时m为1，此时fun闭包了外层函数的n，也就是第一次调用的n=0，即m=1，n=0，并在内部调用第一层fun函数fun(1,0);所以o为0；  
        - 第三次调用fun(2)时m为2，但依然是调用a.fun，所以还是闭包了第一次调用时的n，所以内部调用第一层的fun(2,0);所以o为0。  
        - 第四次同理；
      2. var b = fun(0).fun(1).fun(2).fun(3);
        - 先从fun(0)开始看，肯定是调用的第一层fun函数；而他的返回值是一个对象，所以第二个fun(1)调用的是第二层fun函数，后面几个也是调用的第二层fun函数。
        - 第一次调用第一层fun(0)时，o为undefined；
        - 第二次调用 .fun(1)时m为1，此时fun闭包了外层函数的n，也就是第一次调用的n=0，即m=1，n=0，并在内部调用第一层fun函数fun(1,0);所以o为0；  
        - 第三次调用 .fun(2)时m为2，此时当前的fun函数不是第一次执行的返回对象，而是第二次执行的返回对象。而在第二次执行第一层fun函数时时(1,0)所以n=1,o=0,返回时闭包了第二次的n，遂在第三次调用第三层fun函数时m=2,n=1，即调用第一层fun函数fun(2,1)，所以o为1；  
        - 第四次调用 .fun(3)时m为3，闭包了第三次调用的n，同理，最终调用第一层fun函数为fun(3,2)；所以o为2；
      3. var c = fun(0).fun(1);  c.fun(2);  c.fun(3);
        - fun(0)为执行第一层fun函数，.fun(1)执行的是fun(0)返回的第二层fun函数，这里语句结束，遂c存放的是fun(1)的返回值，而不是fun(0)的返回值，所以c中闭包的也是fun(1)第二次执行的n的值。c.fun(2)执行的是fun(1)返回的第二层fun函数，c.fun(3)执行的也是fun(1)返回的第二层fun函数。
        - 在第一次调用第一层fun(0)时，o为undefined；
        - 第二次调用 .fun(1)时m为1，此时fun闭包了外层函数的n，也就是第一次调用的n=0，即m=1，n=0，并在内部调用第一层fun函数fun(1,0);所以o为0；
        - 第三次调用 .fun(2)时m为2，此时fun闭包的是第二次调用的n=1，即m=2，n=1，并在内部调用第一层fun函数fun(2,1);所以o为1；
        - 第四次.fun(3)时和第三次调用一样，依然是调用的第二次的返回值，遂最终调用第一层fun函数fun(3,1)，所以o还为1
        总结：广义上的闭包就是指一个变量在他自身作用域外被使用了，就叫发生了闭包。


# thinking...
        问：本人陋见，你这道题不应该单纯用闭包的角度来解答，很复杂。如果结合this的角度来说，第一题，三个调用都是在同一个对象的this下。第二题的this是每调用一次变化一次，而第三题的this变化了一次，所以后两个调用的上下文是在第一个的基础上

        答： 这个其实和this没有什么关系，而是由词法作用域决定的。
        调用fun函数会生成一个词法作用域，这个作用域内会保存参数n和o的值，匿名函数function(m){ return fun(m,n);}在fun函数的作用域内，它就可以保存fun函数的作用域，并且可以访问这个作用域内的任何局部变量，这里的局部变量就是参数n和o。
        所以，本质上来说，当匿名函数执行的时候，它所保存和访问的词法用域决定了匿名函数内fun函数的参数值。
        a.fun,b.fun,c.fun都引用的是匿名函数function(m){ return fun(m,n);}，但是这个匿名函数保存的词法作用域却不相同。a.fun调用了三次，这三次访问的都是同一个词法作用域。c.fun调用了两次，这两次也访问了同一个词法作用域，但是和a.fun访问的不同。b中fun是链式调用，每一次访问的词法作用域都不相同。
        分析下来，fun函数都调用了4次，但a中词法作用域改变了2次，o的值为undefined, 0; 0; 0，b中改变了4次，o的值为undefined,0,1,2，c中改变了3次，o的值为undefined,0,1,1。

        回： 但是this就是指向词法作用域吧，应该是一样的效果的，你第一题里的调用三次的都是同一个对象，当然词法作用域是一样的，第二题的就就每调用一次就改变一次作用域，第三题就改变了一次，后两次调用是基于第一次的上下文。

        
#在函数内部调用函数的方法方法
可用两种方法实现：1、实例化函数为对象；2、闭包返回内部值。
一、实例化函数为对象
/*
* 创建函数--面向对象
*/
var objfn = function() { 
	this.a = function(arg){console.log(arg);} 
	this.b = function(arg){console.log(arg+1);} 
} 
/*创建实例*/
var fn = new objfn; 
fn.a(1);//调用  --->1
fn.b(1);//调用  --->2

二、闭包返回内部值
/*
* 创建函数--闭包
*/
function foo(){ 
    var val1=18; 
    console.log('val1');
    function baz(){ 
      console.log('baz'); 
    } 
    return { //返回值对象实质上是一个 我们模块的公有API 
      baz:baz 
    } 
} 
var m=foo(); //调用外部函数--->val1
m.baz(); //调用函数的内部函数--->baz

