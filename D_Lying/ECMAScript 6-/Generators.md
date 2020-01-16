# Generators
Generator 函数是 ES6 的新特性，它允许一个函数返回的可遍历对象生成多个值。

在使用中你会看到 * 语法和一个新的关键词 yield:

function *infiniteNumbers() {
  var n = 1;
  while (true){
    yield n++;
  }
}
 
var numbers = infiniteNumbers(); // returns an iterable object
 
numbers.next(); // { value: 1, done: false }
numbers.next(); // { value: 2, done: false }
numbers.next(); // { value: 3, done: false }
每次执行 yield 时，返回的值变为迭代器的下一个值。