// 对象内部的函数表达式
var o={
  fn:function (){
    console.log(fn);
  }
};
o.fn();//ERROR报错 fn is not defined

//非对象内部的函数表达式
var fn=function (){
  console.log(fn);
};
fn();//function (){console.log(fn);};正确

// - 答:  使用非对象内部的函数表达式，可以访问到存放当前函数的变量；而对象内部的函数表达式就不能访问到。
// - reason => 函数作用域链
//   因为 函数作用域链 的问题，第二个采用var的是在外部创建了一个fn变量，函数内部当然可以在内部寻找不到fn后向上册作用域查找fn，而在创建对象内部时，因为没有在函数作用域内创建fn，所以无法访问。