<!--
 * @Author: your name
 * @Date: 2019-12-18 20:44:09
 * @LastEditTime: 2019-12-20 00:47:37
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\ly_restart\1_js\1_readme4_4_深浅拷贝.md
 -->
<!--
 * @Author: Liao Ying
 * @Date: 2019-12-18 20:44:09
 * @LastEditTime : 2019-12-18 20:45:26
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\ly_restart\1_js\1_readme4_深浅拷贝.md
 -->

* 变量引用值，
* 地址存储值。

* 对象的拷贝： 将一个对象赋值给另外一个对象, 我们称之为对象的拷贝

* 浅拷贝： （只需要使用赋值运算符(=)即可）
原因： 浅拷贝只是对对象的阴引用地址进行了拷贝，并没有开辟新的堆栈，拷贝后，两个对象指向的是同一个引用地址，所以修改其中一个对象的属性，另一个对象的属性也会改变。
    简单来说就是 两个变量 指向同一个 内存地址。所以一旦在 新变量 修改 变量值 ，会影响被拷贝的原变量。因为他们指向同一个内存地址。
    code: 
        var ch = {
            name: "chenhang",
            size: "shou"
        };
        //将原对象直接赋值给新变量
        var ch2 = ch;
        ch2.name = "小基佬";
        console.log(ch, ch2);


* 深拷贝： 
    复制了一份内存的值，同时开辟了一块 新内存 存放这个值，值相同，但是内存地址不相同。如果修改新变量的值，不会对被拷贝的原变量产生影响。
    code:
        var a = {
            name: "zouhaohao",
            age: "22",
            sex: "boy"
        }
        //JSON.stringify 将对象转化成字符串   JSON.parse 将字符串转化成对象 
        var hh = JSON.parse(JSON.stringify(a));
        hh.name  = "聪明的小伙子";
        console.log(a, hh);


* 网上流传Object.assign能够实现对象的深拷贝、slice和concat能够实现数组的深拷贝，经过测试，这些都只是披着深拷贝的外衣的浅拷贝。
    * 如何理解： 【披着深拷贝的外衣的浅拷贝】 ？
        - 如果该对象属性的值并没有引用类型时，这三个方法均能实现深拷贝，实现对值的拷贝。
        - 一旦对象属性的值为引用类型时，只会对该值的引用地址进行拷贝。 这又回到了浅拷贝。
        code： 
        var obj = { age: '11', parent: { father: 'XX', mother: 'XX' } };
        var newObj = Object.assign({}, obj);  //将obj中的参数复制到{}中，故参数顺序不能反
        obj.age = '12';
        obj.parent['father'] = 'YY';
        console.log(obj);      // obj: { age: '12', parent: { father: 'YY', mother: 'XX' } } 
        console.log(newObj);   // newObj: { age: '11', parent: { father: 'YY', mother: 'XX' }

* 【如何实现真正的深拷贝】？
    1. JSON.parse()
        网上流传的一个黑科技，使用var newObj = JSON.parse(JSON.stringify(obj))可以实现对象的深拷贝，但是该方法存在一些问题：
        - 无法作用于函数，RegExp特殊对象，不过对发生进行深拷贝，我觉得并不需要，如果有需要对函数进行深拷贝用途的地方，欢迎...
        - 会抛弃对象的constructor，所有的构造函数都会指向Object。
        - 对象有循环引用，会报错。
