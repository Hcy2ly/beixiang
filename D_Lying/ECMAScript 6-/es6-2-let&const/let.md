1. - example： 浏览器 console：
      {
        let a = 10;
        var b = 1;
      }

a // ReferenceError: a is not defined.
b // 1

这很明显的表明，let 声明的变量只在它所在的 代码块 中有效。

so，for 循环的计数器，就很合适使用 let 命令。

- example：
  for (let i = 0; i < 10; i++) {
    // ...
  }

  console.log(i);
  // ReferenceError: i is not defined

如果下面的代码用 var 声明 i 则

- example：
  var a = [];
  for (var i = 0; i < 10; i++) { //var 定义 i 变量提升。
    a[i] = function () {
      console.log(i);
    };
  }
  a[6](); // 10 [想不到吧!!!居然是 10，因为变量 i 是 var 命令声明的，在全局范围内都有效，所以全局只有一个变量 i。每一次循环，变量 i 的值都会发生改变，而循环内被赋给数组 a 的函数内部的 console.log(i)，里面的 i 指向的就是全局的 i。也就是说，所有数组 a 的成员里面的 i，指向的都是同一个 i，导致运行时输出的是最后一轮的 i 的值，也就是 10。] 闭包产生了++的假象。

- example2：
  var a = [];
  for (let i = 0; i < 10; i++) { //这里的声明用的是 let 声明的变量仅在块级作用域内有效
    a[i] = function () {
      console.log(i);
    };
  }
  a[6](); // 6
  该案例中，变量 i 是 let 声明的，当前的 i 只在本轮循环中有效，so 每一次循环的 i 其实都是一个新的变量，最后输出结果为 6。
  ？： 如果每一轮的循环变量 i 都是重新声明的，那他是怎么知道上一轮循环的值的，从而计算本轮值循环的值？
  。： 这是因为 JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量 i 时，就在上一轮循环的的基础上进行计算。

  for 循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。

  - example：
    for (let i = 0; i < 3; i++) {
      let i = 'abc';
      console.log(i);
    }
    // abc
    // abc
    // abc

2. let 不存在变量提升
   var 命令会发生“变量提升”现象，即变量可以在声明之前使用，值为 undefined。这种现象多多少少是有些奇怪的，按照一般的逻辑，变量应该在声明语句之后才可以使用。
   so，为了纠正这种现象，let 命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。

- example：
  // var 的情况
  console.log(foo); // 输出 undefined
  var foo = 2;

  // let 的情况
  console.log(bar); // 报错 ReferenceError
  let bar = 2;

上面的代码中，
变量 foo 用 var 命令声明，会变量提升，即脚本开始运行时，变量 foo 就已经存在了 其实运行顺序是 【 var foo；console.log(foo)；foo = 2；】，so 虽然没有赋值，但是存在，所以会输出 undefined。
变量 bar 用 let 命令声明，未发生变量提升，console.log(bar)中的变量 bar 并没有被声明，是不存在的，so 会抛出错误。

3. 暂时性死区
   只要块级作用域内存在 let 命令，那么它所声明的变量就只会在该作用域内生效，不受外界影响。

- example：
  var tmp = 123;
  if (true) {
  tmp = 'abc'; // ReferenceError 报错了！全局变量 tmp 不是已经声明了嘛？ 为什么还会报错呢?[answer:1.上面的代码中，虽然存在全局变量 tmp，但是块级作用域内又声明了一个局部变量 tmp。2.ES6 明确规定，如果区块中存在 let 和 const 命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。]
  let tmp;
  }

* 关联到 typeof

  - example：
    typeof x; // ReferenceError [因为变量用 let 声明的原因，但是在声明之前就被 typeof 也会产生暂时性死区的现象，导致报错。]
    let x;

  作为比较，如果一个变量根本没有被声明，使用 typeof 反而不会报错。 typeof undeclared_variable // "undefined"
  这样的设计是为了让大家养成良好的编程习惯，变量一定要在声明之后使用，否则就报错。

  还有一些这样的‘死区’是不太好发现的，

  - example：
    function bar(x = y, y = 2) { //之所以报错是因为参数 x 默认值为参数 y，而此时 y 并没有声明，属于‘死区’
      return [x, y];
    }
    bar(); // 报错

  - example2：
    function bar(x = 2, y = x) {
      return [x, y];
    }
    bar(); // [2, 2]

  - example3：
    // 不报错
    var x = x;
    // 报错
    let x = x; //使用 let 声明变量时，只要变量在还没有声明完成前使用，就会报错。 x 没有声明前就被使用。
    // ReferenceError: x is not defined

ES6 规定，暂时性死区和 let const 语句不出现变量提升，主要是为了减少运行时错误，放置在变量声明前就是用这个变量，从而导致意料之外的行为。这样的错误在 ES5 是很常见的，现在有了这种规定，便面此类错误就很容易了。
so，暂时性死区的本质就是 只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。

4. 不允许重复声明
  let 不允许在相同作用域内，重复声明同一个变量。
    * example：
        // 报错
        function func() {
          let a = 10;
          var a = 1;
        }
        // 报错
        function func() {
          let a = 10;
          let a = 1;
        }
  let 不允许在函数内部重新生声明参数。  
    * example： 
        function func(arg) {
          let arg;
        }
        func() // 报错
    
        function func(arg) {
          {
            let arg = 1;
          }
          console.log(arg); //undefined
        }
        func() // 不报错

