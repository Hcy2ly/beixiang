<!--
 * @Author: your name
 * @Date: 2019-12-18 16:13:55
 * @LastEditTime : 2019-12-18 16:19:05
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\ly_restart\1_js\dom&jquery.md
 -->
# jq 与 dom 对象之间的转化

* jq对象和dom对象是不一样的：
    - $("#aijquery"): //这种方式获取得到的就是jquery对象
    - document.getElementById("aijquery")://这种方法获取到的就是dom对象
    
* 对象的方法也是不一样的： 
    - $("#aijquery").html();//这是jquery对象的方法 
    - document.getElementById("aijquery").innerHTML;//这是dom对象的方法

* dom 对象转换成 jquery 对象： 直接使用$()
    - $(document.getElementById('id'));

* jq 对象转 dom 
    - 用jq 的内置函数get ，来获取dom对象： $('#id').get(0); //返回 dom 对象
    - 因为jq对象的属性是一个集合，所以我们可以像数组那样，取出其中一项即可： $('#id)[0]; $("div")[5]; //均返回 dom 对象。

*  总结一下方法： √
    - $("#id").html(); //jq 对象调用 jq 方法
    - $("#id")[0].innerHTML; //jq 转 dom 对象调用 dom 方法
    - $("#id").eq(0)[0].innerHTML;  //jq 转 dom 对象调用 dom 方法
    - $("#id").get(0).innerHTML; //用 jq 内置函数 get 转 dom 对象调用 dom 方法
    - $("#id").eq(2).html(); //jq 对象调用 jq 方法
    - $("#id").get(2).innerHTML; //用 jq 内置函数 get 转 dom 对象调用 dom 方法