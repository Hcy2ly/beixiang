# Symbol
    Symbol 是一种新的数据类型，它的值是唯一的，不可变的。ES6 中提出 symbol 的目的是为了生成一个唯一的标识符，不过你访问不到这个标识符：

var sym = Symbol( "some optional description" );
console.log(typeof sym); // symbol
注意，这里 Symbol 前面不能使用 new 操作符。

如果它被用作一个对象的属性，那么这个属性会是不可枚举的：

var o = {
  val: 10,
  [ Symbol("random") ]: "I'm a symbol",
};

console.log(Object.getOwnPropertyNames(o)); // val
如果要获取对象 symbol 属性，需要使用 Object.getOwnPropertySymbols(o)。
