
#解释一下
1. 其实，就w3c标准来说,并没有0级dom的标准。只不过，事实上的适用总会成慢慢成为约定成俗的规则。
2. 所谓的0级ｄｏｍ与２级ｄｏｍ事件就是不同版本间的差异，具体的说就是，对于不同的ｄｏｍ级别，如何定义事件处理，以及使用时有什么不同。 
3. 我们对于事物的认识过程，总是要先知道它叫什么名字，然后了解它是干什么的，接着学习如何使用，最后，去搞明白实现原理。首先，我们要谈的是ｄｏｍ事件，它是用来处理ｈｔｍｌ中的事件。接下来，演示用法。 

  * 0级DOM
  <input id="myButton" type="button" value="Press Me">
    1）<input id="myButton" type="button" value="Press Me" οnclick="alert('thanks');" >  //一是在标签内写onclick事件
    2）document.getElementById("myButton").onclick = function () { alert('thanks'); }  //二是在JS写onlicke=function（）{}函数

  * 2级DOM
  只有一个：监听方法，原生有两个方法用来添加和移除事件处理程序：
    * addEventListener()和removeEventListener()。
      * 它们都有三个参数：
        - 第一个参数是事件名（如click）；
        - 第二个参数是事件处理程序函数；
        - 第三个参数如果是true则表示在捕获阶段调用，为false表示在冒泡阶
      * addEventListener():可以为元素添加多个事件处理程序，触发时会按照添加顺序依次调用。
      * removeEventListener():不能移除匿名添加的函数。

#dom0 dom2最大区别
  - dom0的只能元素添加[一个事件]处理程序，比如click;
  - dom2的ddEventListener():可以为元素添加[多个事件]处理程序，触发时会按照添加顺序依次调用。
  - 如果定义了两个dom0级事件，dom0级事件会覆盖，也就是后定义的事件处理会覆盖前面的。
  - dom2不会覆盖，会依次执行，会依次执行两个事件。
  - dom0和dom2可以共存，不互相覆盖，但是dom0之间依然会覆盖
# 事件冒泡 & 捕获
      <script type="text/javascript">
          var $El = document.querySelector(".ulclass");
          var $El1 = document.querySelector(".li1class");
          $El.addEventListener("click",function(){
              alert("ul");
          },true);//捕获 在冒泡事件和捕获事件同时存在的情况下，捕获事件优先级高一点。
          $El1.addEventListener("click",function(){
              alert("li");
          },false);//冒泡 如果两个都为冒泡的情况下，点击后应从最里面的元素往外冒
        </script>
  * ps: 在同一个元素的绑定事件中，冒泡和捕获没有次序之分，遵循Javascript的执行顺序。在元素上同时绑定捕获事件和冒泡事件，如果通过此元素的子级元素触发，则优先触发捕获事件，若不通过此元素的子级元素触发，则按照Javascript执行顺序触发。

