Spread / Rest 操作符指的是 【...】

# Spread

1. 当被用于 迭代器 中时，它是一个 Spread(展开) [操作符]

- 即 参数为数组
  function foo(x,y,z) {
  console.log(x,y,z);
  }
  let arr = [1,2,3];
  foo(...arr); // 1 2 3

  - Spread 主要用来数组
    构造 和 解构 和 在调用时将数组填入函数参数：
    let cold = ['autumn', 'winter'];
    let warm = ['spring', 'summer'];
    1. (1) // 构造一个数组
       [...cold, ...warm] // 真正数组值是 ['autumn', 'winter', 'spring', 'summer']
    2. (2) // 解构一个数组
       let otherSeasons, autumn;
       [autumn, ...otherSeasons] = cold;
       otherSeasons // 值是 ['winter']
    3. (3) // 代表一个数组的函数参数
       cold.push(...warm);
       cold // 值是 ['autumn', 'winter', 'spring', 'summer']

2. spread 参数

- spread 操作符能够用一个数组配置构造器参数：
  class King {
  //King 的构造器参数是 name 和 country，用...操作符就可以将...details 替代成 name, country 两个参数。
  　 constructor(name, country) {
  　　 this.name = name;
  　　 this.country = country;  
   　}
  　 getDescription() {
  　　 return `${this.name} leads ${this.country}`; //es6：``云括号。
  }
  }
  var details = ['Alexander the Great', 'Greece'];
  var Alexander = new King(...details);
  Alexander.getDescription();

- 此外 spread 操作符能够使用遍历协议接口对一个其中元素进行遍历然后收集结果。
  function iterator() {
  　　 var index = 0;
  　　 return {
  　　　　 next: () => ({ // 遵循遍历协议 Iterator protocol
  　　　　 done : index >= this.length,
  　　　　 value: this[index++]
  　　})
  };
  }
  var arrayLike = {
  　　 0: 'Cat',
  　　 1: 'Bird',
  　　 length: 2
  };
  arrayLike[Symbol.iterator] = iterator; //遵循可被遍历协议
  var array = [...arrayLike];
  console.log(array); // => ['Cat', 'Bird']

arrayLike[Symbol.iterator]会在包含遍历函数 iterator()对象中创建一个属性，使得这个对象遵循可被遍历协议（itarable protocol. iterator()），返回的是一个带有 next 属性作为函数的对象（遵循 iteration protocol）。
因此 arrayLike 现在变得可遍历了，spread 操作符用于释放 arrayLike 中元素到一个数组中，也就是释放到数组[...arrayLike]，这就是三个点语法 spread 参数可作为一个枚举元素的结果列表。

# Rest

1. 当被用于函数传参时，是一个 Rest（复数） [操作符]

- 即 参数转化为数组
  function foo(...args) {
  console.log(args);
  }
  foo( 1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

* rest 操作符主要用于获得传递给函数的参数列表，案例代码：
  function countArguments(...args) {
  　 return args.length;
  }
  // 获得参数的数量
  countArguments('welcome', 'to', 'Earth'); // => 3

2. Rest 参数
   　　如果不使用这种三个点的数组参数新语法，过去我们是使用一个对象作为函数参数，但是会遭遇函数外和函数内访问不一致情况，如下面 filterNumbers()是一个内部函数，它要访问外部的函数 sumOnlyNumbers()的 arguments 对象：

function sumOnlyNumbers() {
　var args = arguments;
　var numbers = filterNumbers();
　return numbers.reduce((sum, element) => sum + element);
  function filterNumbers() {
  　return Array.prototype.filter.call(
      rgs,element => typeof element === 'number'
  　);
  }
}
sumOnlyNumbers(1, 'Hello', 5, false); // => 6

首先我们要将 arguments 分配给给一个临时新变量 args，这样才能在内部函数 filterNumbers 中可以访问 args 新变量，因为 filterNumbers()定义了它自己的 arguments 会覆盖外部的 arguments 。这种做法太冗余了。

使用 rest 操作符可以灵活解决这个问题，允许在函数中定义一个 rest 参数 ...args：

function sumOnlyNumbers(...args) {
　　 var numbers = filterNumbers();
　　 return numbers.reduce((sum, element) => sum + element);
　　 function filterNumbers() {
　　　　 return args.filter(element => typeof element === 'number');
　　}
}
sumOnlyNumbers(1, 'Hello', 5, false); // => 6

function sumOnlyNumbers(...args) 函数定义了 args 接受以一个数组作为参数，因为名称冲突解决了，因此 args 可以使用在 filterNumbers()内部。而且引入 args 后，可以直接使用 args.filter()方法，这也是 rest 参数独特之处。

如果不是所有值都包括在 rest 参数中，你能在开始定义一个逗号，明确定义这些参数是不包括在 rest 参数中：

function filter(type, ...items) {
　　 return items.filter(item => typeof item === type);
}
filter('boolean', true, 0, false); // => [true, false]  
filter('number', false, 4, 'Welcome', 7); // => [4, 7]

而 arguments 对象则没有这种可选择的属性，而是包涵了所有值。

下面再看看在箭头函数的情况，一个箭头函数并不能在其内容体内定义 arguments 对象，而是只能访问其闭包作用域下的那个 arguments，如果你想获得所有的参数只能使用 rest 参数：

(function() {
　　 let outerArguments = arguments;
　　 const concat = (...items) => {
　　　　 console.log(arguments === outerArguments); // => true
　　　　 return items.reduce((result, item) => result + item, '');
　　};
　　 concat(1, 5, 'nine'); // => '15nine'
})();

items rest 参数包含了函数所有参数在一个数组中，而 arguments 对象是来自闭包 enclosing 作用域获得的，因此肯定等于 outerArguments ，也就没有多大意义。
