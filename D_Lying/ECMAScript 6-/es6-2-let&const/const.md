# const声明
* const
  - 声明一个常量（1.一旦声明，不可改变。 2. 一旦声明，需立即初始化）
  - 作用域与let相同，只在声明的块级作用域内有效，声明的常量不提升，存在暂时性死区。
  - const声明的常量，也与let一样不可重复声明。

* const 实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。
  - 对于简单数据类型（数值，字符串， 布尔值）：值是保存在变量指向的那个内存地址，因此等同于常量。
  - 对于复合类型的数据（主要是对象和数组）：变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定（即总是指向另一个固定的地址），资源指向的数据结构是不是可变的，就不能控制了。
  * example：
      const foo = {};

      // 为 foo 添加一个属性，可以成功
      foo.prop = 123;
      foo.prop // 123

      // 将 foo 指向另一个对象，就会报错
      foo = {}; // TypeError: "foo" is read-only
上面这个代码，常量foo存储的是一个地址，这个地址指向一个对象。不可变的只是这个地址，即不能把foo指向另一个地址，当对象是可变的。所以依然可以为其添加新属性。

  * example2： 
      const a = [];
      a.push('Hello'); // 可执行
      a.length = 0;    // 可执行
      a = ['Dave'];    // 报错
上面代码中，常量a是一个数组，这个数组本身是可写的，但是如果将另一个数组赋值给a，就会报错。


* ~了解一下：
  - 对象冻结：
    * example： 
        const foo = Object.freeze({});

        // 常规模式时，下面一行不起作用；
        // 严格模式时，该行会报错
        foo.prop = 123;

  - 除了将对象本身冻结，对象的属性也应该冻结。下面是一个将对象彻底冻结的函数：
    * example： 
        var constantize = (obj) => {
          Object.freeze(obj);
          Object.keys(obj).forEach( (key, i) => {
            if ( typeof obj[key] === 'object' ) {
              constantize( obj[key] );
            }
          });
        };


* ES6 声明变量的六种方法：
  - ES5只有两种 var / function
  - ES6有： var / function / let / const / import / require


* 顶层对象属性
  - 顶层对象， 在浏览器环境指的是 window 对象，在 Node 指的是 全局global对象。
  - ES5之中，顶层对象的属性与全局变量是等价的。全局变量可能是顶层对象的属性创造的，而属性的创造是动态的。so这种设计不好
  - ES6为了改变这一点，一方面规定，var 和 function 命令声明的全局变量依旧是顶层对象的属性 / 另一方面规定，let 和 const 和 class 命令声明的全局变量，不属于顶层对象的属性。
    * example：
        var a = 1;
        // 如果在 Node 的 REPL 环境，可以写成 global.a  
        // 或者采用通用方法，写成 this.a
        window.a // 1

        let b = 1;
        window.b // undefined


* globalThis 对象  
可以了解一下。因为顶层对象在各种实现里面是不统一的，没有东西可以代替所有情况下的顶层对象，so引入globalthis的测试。
