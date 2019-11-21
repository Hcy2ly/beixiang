
1. let const 和 block(块级) 作用域

- let
  let 允许创建块级作用域，es6 推荐在函数中使用 let 定义变量，而非 var  
   ly-： var 定义变量会变量提升。
  例如:
  var a = 4;
  function arr(){
    let a = 3; //允许块级作用域
    console.log(a); //3
  }
  arr();
  console.log(a);//4
- const
  const 同样允许创建块级作用域，它可以声明一个 常量！
  const 声明的常量类似于指针 它指向某个引用 就是说这个「常量」并非一成不变的！
  ly-: 也就是类似于指针，指向某一个数/数组，是可以被添加新成员的
  例如：
  function ARR() {
    const ARR = [5,6];
    ARR.push(7);
    console.log(ARR); // [5,6,7]
    ARR = 10; // TypeError
  }

总结一下：
- let 声明的变量允许创建块级作用域，不具备变量提升特性！！
- let & const 声明只在最靠近的一个块中(该函数{}内部)有效 => 即块级作用域
- const 声明常量时，大写 NUM_AGE
- const 声明的时候必须赋值！！