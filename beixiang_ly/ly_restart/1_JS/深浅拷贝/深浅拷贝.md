
<!--
 * @Author: Liao Ying
 * @Date: 2019-12-18 20:44:09
 * @LastEditTime : 2020-01-08 23:01:41
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\ly_restart\1_js\1_readme4_深浅拷贝.md
 -->

* 变量引用值，
* 地址存储值。

* 对象的拷贝： 将一个对象赋值给另外一个对象, 我们称之为对象的拷贝

* 浅拷贝： （只需要使用赋值运算符(=)即可）
原因： 浅拷贝只是对对象的引用地址进行了拷贝，并没有开辟新的堆栈，拷贝后，两个对象指向的是同一个引用地址，所以修改其中一个对象的属性，另一个对象的属性也会改变。
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
        obj.parent['father'] = 'YY'; //对象里面的对象修改了。
        console.log(obj);      // obj: { age: '12', parent: { father: 'YY', mother: 'XX' } } 
        console.log(newObj);   // newObj: { age: '11', parent: { father: 'YY', mother: 'XX' } 实现了对obj对象的简单属性的深拷贝 但是对象的对象属性确是浅拷贝。

    总结一下不知道在哪里看到的帅文： 简直就是开玩笑，人家MDN都说了Object.assign方法只会拷贝源对象自身的并且可枚举的属性到目标对象。是用来合并对象的，人家拷贝的是属性值，假如源对象的属性值是一个对象的引用，那么它也指向那个引用(这不是典型的浅拷贝的本质吗,指向同一个引用,即引用被修改了,指向所有该引用的所有属性值都将修改.)

* 【如何实现真正的深拷贝】？
    1. JSON.parse()
        网上流传的一个黑科技，使用var newObj = JSON.parse(JSON.stringify(obj))可以实现对象的深拷贝，但是该方法存在一些问题：
        - 无法作用于函数，RegExp特殊对象，不过对这些进行深拷贝，我觉得并不需要，如果有需要对函数进行深拷贝用途的地方，欢迎...
        - 会抛弃对象的constructor，所有的构造函数都会指向Object。
        - 对象有循环引用，会报错。


详细解析赋值、浅拷贝和深拷贝的区别 （整理一下）
一、赋值（Copy）
赋值是将某一数值或对象赋给某个变量的过程，分为下面 2 部分

基本数据类型：赋值，赋值之后两个变量互不影响
引用数据类型：赋址，两个变量具有相同的引用，指向同一个对象，相互之间有影响
对基本类型进行赋值操作，两个变量互不影响。

// 木易杨
let a = "muyiy";
let b = a;
console.log(b);
// muyiy

a = "change";
console.log(a);
// change
console.log(b);
// muyiy
对引用类型进行赋址操作，两个变量指向同一个对象，改变变量 a 之后会影响变量 b，哪怕改变的只是对象 a 中的基本类型数据。

// 木易杨
let a = {
    name: "muyiy",
    book: {
        title: "You Don't Know JS",
        price: "45"
    }
}
let b = a;
console.log(b);
// {
// 	name: "muyiy",
// 	book: {title: "You Don't Know JS", price: "45"}
// } 

a.name = "change";
a.book.price = "55";
console.log(a);
// {
// 	name: "change",
// 	book: {title: "You Don't Know JS", price: "55"}
// } 

console.log(b);
// {
// 	name: "change",
// 	book: {title: "You Don't Know JS", price: "55"}
// } 
通常在开发中并不希望改变变量 a 之后会影响到变量 b，这时就需要用到浅拷贝和深拷贝。

二、浅拷贝（Shallow Copy）
#1、什么是浅拷贝
创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。



上图中，SourceObject 是原对象，其中包含基本类型属性 field1 和引用类型属性 refObj。浅拷贝之后基本类型数据 field2 和 filed1 是不同属性，互不影响。但引用类型 refObj 仍然是同一个，改变之后会对另一个对象产生影响。

简单来说可以理解为浅拷贝只解决了第一层的问题，拷贝第一层的基本类型值，以及第一层的引用类型地址。

#2、浅拷贝使用场景
Object.assign()
Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

有些文章说Object.assign() 是深拷贝，其实这是不正确的。

// 木易杨
let a = {
    name: "muyiy",
    book: {
        title: "You Don't Know JS",
        price: "45"
    }
}
let b = Object.assign({}, a);
console.log(b);
// {
// 	name: "muyiy",
// 	book: {title: "You Don't Know JS", price: "45"}
// } 

a.name = "change";
a.book.price = "55";
console.log(a);
// {
// 	name: "change",
// 	book: {title: "You Don't Know JS", price: "55"}
// } 

console.log(b);
// {
// 	name: "muyiy",
// 	book: {title: "You Don't Know JS", price: "55"}
// } 
上面代码改变对象 a 之后，对象 b 的基本属性保持不变。但是当改变对象 a 中的对象 book 时，对象 b 相应的位置也发生了变化。

展开语法 Spread
// 木易杨
let a = {
    name: "muyiy",
    book: {
        title: "You Don't Know JS",
        price: "45"
    }
}
let b = {...a};
console.log(b);
// {
// 	name: "muyiy",
// 	book: {title: "You Don't Know JS", price: "45"}
// } 

a.name = "change";
a.book.price = "55";
console.log(a);
// {
// 	name: "change",
// 	book: {title: "You Don't Know JS", price: "55"}
// } 

console.log(b);
// {
// 	name: "muyiy",
// 	book: {title: "You Don't Know JS", price: "55"}
// } 
通过代码可以看出实际效果和 Object.assign() 是一样的。

Array.prototype.slice()
slice() 方法返回一个新的数组对象，这一对象是一个由 begin和 end（不包括end）决定的原数组的浅拷贝。原始数组不会被改变。

// 木易杨
let a = [0, "1", [2, 3]];
let b = a.slice(1);
console.log(b);
// ["1", [2, 3]]

a[1] = "99";
a[2][0] = 4;
console.log(a);
// [0, "99", [4, 3]]

console.log(b);
//  ["1", [4, 3]]
可以看出，改变 a[1] 之后 b[0] 的值并没有发生变化，但改变 a[2][0] 之后，相应的 b[1][0] 的值也发生变化。说明 slice() 方法是浅拷贝，相应的还有concat等，在工作中面对复杂数组结构要额外注意。

三、深拷贝（Deep Copy）
#1、什么是深拷贝
深拷贝会拷贝所有的属性，并拷贝属性指向的动态分配的内存。当对象和它所引用的对象一起拷贝时即发生深拷贝。深拷贝相比于浅拷贝速度较慢并且花销较大。拷贝前后两个对象互不影响。



#2、深拷贝使用场景
JSON.parse(JSON.stringify(object))

// 木易杨
let a = {
    name: "muyiy",
    book: {
        title: "You Don't Know JS",
        price: "45"
    }
}
let b = JSON.parse(JSON.stringify(a));
console.log(b);
// {
// 	name: "muyiy",
// 	book: {title: "You Don't Know JS", price: "45"}
// } 

a.name = "change";
a.book.price = "55";
console.log(a);
// {
// 	name: "change",
// 	book: {title: "You Don't Know JS", price: "55"}
// } 

console.log(b);
// {
// 	name: "muyiy",
// 	book: {title: "You Don't Know JS", price: "45"}
// } 
完全改变变量 a 之后对 b 没有任何影响，这就是深拷贝的魔力。

我们看下对数组深拷贝效果如何。

// 木易杨
let a = [0, "1", [2, 3]];
let b = JSON.parse(JSON.stringify( a.slice(1) ));
console.log(b);
// ["1", [2, 3]]

a[1] = "99";
a[2][0] = 4;
console.log(a);
// [0, "99", [4, 3]]

console.log(b);
//  ["1", [2, 3]]
对数组深拷贝之后，改变原数组不会影响到拷贝之后的数组。

但是该方法有以下几个问题。

1、会忽略 undefined

2、会忽略 symbol

3、不能序列化函数

4、不能解决循环引用的对象

5、不能正确处理new Date()

6、不能处理正则

undefined、symbol 和函数这三种情况，会直接忽略。
// 木易杨
let obj = {
    name: 'muyiy',
    a: undefined,
    b: Symbol('muyiy'),
    c: function() {}
}
console.log(obj);
// {
// 	name: "muyiy", 
// 	a: undefined, 
//  b: Symbol(muyiy), 
//  c: ƒ ()
// }

let b = JSON.parse(JSON.stringify(obj));
console.log(b);
// {name: "muyiy"}
循环引用情况下，会报错。
// 木易杨
let obj = {
    a: 1,
    b: {
        c: 2,
   		d: 3
    }
}
obj.a = obj.b;
obj.b.c = obj.a;

let b = JSON.parse(JSON.stringify(obj));
// Uncaught TypeError: Converting circular structure to JSON
new Date 情况下，转换结果不正确。
// 木易杨
new Date();
// Mon Dec 24 2018 10:59:14 GMT+0800 (China Standard Time)

JSON.stringify(new Date());
// ""2018-12-24T02:59:25.776Z""

JSON.parse(JSON.stringify(new Date()));
// "2018-12-24T02:59:41.523Z"
解决方法转成字符串或者时间戳就好了。

// 木易杨
let date = (new Date()).valueOf();
// 1545620645915

JSON.stringify(date);
// "1545620673267"

JSON.parse(JSON.stringify(date));
// 1545620658688
正则情况下，
// 木易杨
let obj = {
    name: "muyiy",
    a: /'123'/
}
console.log(obj);
// {name: "muyiy", a: /'123'/}

let b = JSON.parse(JSON.stringify(obj));
console.log(b);
// {name: "muyiy", a: {}}

PS：为什么会存在这些问题可以学习一下 JSON。

除了上面介绍的深拷贝方法，常用的还有jQuery.extend() 和 lodash.cloneDeep()，后面文章会详细介绍源码实现，敬请期待！

四、总结
--	和原数据是否指向同一对象	第一层数据为基本数据类型	原数据中包含子对象
赋值	是	改变会使原数据一同改变	改变会使原数据一同改变
浅拷贝	否	改变不会使原数据一同改变	改变会使原数据一同改变
深拷贝	否	改变不会使原数据一同改变	改变不会使原数据一同改变