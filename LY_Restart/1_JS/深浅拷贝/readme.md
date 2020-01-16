<!--
 * @Author: your name
 * @Date: 2019-12-15 13:36:34
 * @LastEditTime : 2020-01-14 00:33:48
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\ly_restart\1_js\readme.md
 -->
<!--
 * @Author: liaoying
 * @Date: 2019-12-15 13:36:34
 * @LastEditTime : 2019-12-20 01:36:46
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\ly_restart\1_js\readme.md
 -->


# 深浅拷贝的总结：
    浅拷贝： 赋值（=）即可

    赋值： 是将某一数值或对象赋给某个变量的过程。

    基本数据类型：赋值，赋值之后两个变量互不影响。
    
    引用数据类型：赋址，两个变量具有相同的引用，指向同一个对象，相互之间有影响。(产生深浅拷贝)

* 所以浅拷贝重新说：
    1. 如果属性是基本类型，拷贝的就是基本类型的值；（每一次的赋值都是创建一个新的内存空间去存放拷贝的值，这些个变量的值虽然相同，但是占据不同的内存地址，所以不会互相影响。这就是基本类型的特征，基本类型保存的变量和值直接保存在栈内存(Stack)中,且空间相互独立,通过值来访问。例如： var person = 'Messi'; var person1 = person; // 虽然 person === persion1; 但是两个变量并没有指向同一个值,而是person1自己单独建立一个内存空间,虽然两个变量的值和类型相等,但却是相互独立的存在。）
    2. 如果属性是引用类型，拷贝的就是内存地址 ，（即给同一个内存地址取n个变量名来指向它，任何一个变量都可以改变原内存地址的值，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。）

* e.g :
    * ch说： 对象的属性只存在于这个对象的内存，简单说就是一个对象生成时会在内存开辟一块属于自己的内存，这块内存存放了自己所有属性，除非操作这个对象，否则外部的任何操作都无法影响这个对象里面的东西。

    * ==  两边值类型相同时，等同于===；不同的时候，要先进行类型转换，再比较。
        1. 如果两个值类型相同，进行 === 比较。 
        2. 如果两个值类型不同，他们可能相等。根据下面规则进行类型转换再比较：
            a、如果一个是null、一个是undefined，那么[相等]，其他如”（空字符串），false，0都不等。 
            b、如果一个是字符串，一个是数值，把字符串转换成数值再进行比较。 
            c、如果任一值是 true，把它转换成 1 再比较；如果任一值是 false，把它转换成 0 再比较。 
            d、如果一个是对象，另一个基本类型，把对象转换成基础类型的值再比较。对象转换成基础类型，利用它的toString或者valueOf方法。js核心内置类，会尝试valueOf先于toString；例外的是Date，Date利用的是toString转换。非js核心的对象，令说（比较麻烦，我也不大懂）
        3. code： 
            var p1=p2={}; //浅拷贝  ( 这是浅拷贝：var p1=p2={}) != (这是变量声明定义： var p1={},p2={})
            console.log(p1==p2,p1===p2); //true true
            var p2={}; //声明变量，重新分配一个内存地址。
            console.log(p1==p2,p1===p2); //false false

    * === 不做类型转换，类型不同的一定不等。
        - 针对基础类型：
            1. 如果类型不同，就[不相等] 
            2. 如果两个都是数值，并且是同一个值，那么[相等]；(！例外)的是，如果其中至少一个是NaN，那么[不相等]。（判断一个值是否是NaN，只能用isNaN()来判断） 
            3. 如果两个都是字符串，每个位置的字符都一样，那么[相等]；否则[不相等]。 
            4. 如果两个值都是true，或者都是false，那么[相等]。 
            5. 如果两个值都是null，或者都是undefined，那么[相等]。
        - 针对引用类型：
            * 引用类型比较，进行“指针地址”比较，如果两个值都引用同一个对象或函数，那么[相等]；否则[不相等]。
                - code：
                    var a = {name:"liaoying"}; 
                    var b = JSON.parse(JSON.stringify(a));  //深拷贝 值相同，内存地址不同
                    a === b //false  因为内存地址不同
                    typeof a  //"object"
                    typeof b  //"object"
                    console.log(a)  //{name: "liaoying"}
                    console.log(b)  //{name: "liaoying"}
