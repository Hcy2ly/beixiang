**强制类型转换——String**
将其她的数据类型转换为String

方法一：

调用被转换的toString（）方法；
该方法不会影响到原来变量，它会将转换的结果返回；
但是注意：null和undefined这两个值没有toString（）方法，如果调用他们的方法，会报错；

var a = 123;

console.log(typeof a); // number

a.toString()

console.log(typeof a); // 该方法不会影响到原变量 // number

var b = a.toString();

console.log(typeof b); //string


方法二：

调用String（）函数，并将被转换的数据作为参数传递给函数；
使用String（）函数做强制类型转换时，对于Number和Boolean实际上就是调用toString（）方法，但是对于null和undefined，就不会调用toString（）方法，它会将null直接转换为“null”，将undefined直接转换为“undefined”

var  a = null;

var b = String(a);

console.log(typeof a); // object

console.log(typeof b); //string

**隐式转换成String** 
任何值和字符串相加都会转换为字符串，并做拼接操作

var a = 123; 

console.log(a, typeof a); // 123 number 

a = 123 + ""; // 任何值和字符串相加都会转换为字符串

console.log(typeof a); // string

console.log(a); // "123"



**隐式转换介绍**

1. 在js中，当运算符在运算时，如果两边数据不统一，CPU就无法计算，这时我们编译器会自动将运算符两边的数据做一个数据类型转换，转成一样的数据类型再计算

2. 这种无需程序员手动转换，而由编译器自动转换的方式就称为隐式转换

3. 例如1 > "0"这行代码在js中并不会报错，编译器在运算符时会先把右边的"0"转成数字0`然后在比较大小

**隐式转换规则**

1. 转成string类型： +（字符串连接符）
2. 转成number类型：
   1. 【++/--(自增自减运算符)】 
   2. 【+ - * / %(算术运算符) 】
   3. 【> < >= <= == != === !=== (关系运算符)】
3. 转成boolean类型：!（逻辑非运算符）
  

参考原文： <https://blog.csdn.net/JEFF_luyiduan/article/details/86975650>

<https://blog.csdn.net/itcast_cn/article/details/82887895>