


let允许你声明一个作用域被限制在块级中的变量、语句或者表达式。
与var关键字不同的是， var 声明的变量只能是全局或者整个函数块的。

function() {
  console.log(name); //undefined
  console.log(age);  //referenceError
  var name = 'lydia';
  let age = 21;
}

* ReferenceError（引用错误） 对象代表当一个不存在的变量被引用时发生的错误。
* 如果你先使用的变量，再声明并初始化它，变量的值将是 undefined。