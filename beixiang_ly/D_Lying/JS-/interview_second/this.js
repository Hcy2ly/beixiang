//再次强调一点，this的指向在函数创建的时候是决定不了的，在调用的时候才能决定，谁调用的就指向谁，
function a(){
  var user = "追梦子";
  console.log(this.user); //undefined
  console.log(user); //追梦子
  console.log(this); //Window
}
a();

// 按照我们上面说的 this最终指向的是调用它的对象
// 这里的函数a实际是被Window对象所点出来的
function a(){
    var user = "追梦子";
    console.log(this.user); //undefined
    console.log(this);　　//Window
}
window.a();
//this的指向在函数创建的时候是决定不了的，在调用的时候才能决定，谁调用的就指向谁
//这里的this指向的是对象o
var o = {
  user:"追梦子",
  fn:function(){
    console.log(this.user);  //追梦子
  }
}
o.fn();



// 总结：
// 1. 如果一个函数中有this，但是它没有被上一级的对象所调用，那么this指向的就是window
// 2. 如果一个函数中有this，这个函数有被上一级的对象所调用，那么this指向的就是上一级的对象
// 3. 如果一个函数中有this，这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象
var o = {
  a:10,
  b:{
    // a:12,
    fn:function(){
      console.log(this.a); //undefined this一定指向对象b 对象b的a没有定义所以undefined
    }
  }
}
o.b.fn();

var Oo = {
  a:10,
  b:{
    a:12,
    fn:function(){
      console.log(this.a); //12
    }
  }
}
Oo.b.fn();
// 4. this永远指向的是最后调用它的对象
var o = {
  a:10,
  b:{
      a:12,
      fn:function(){
          console.log(this.a); //undefined
          console.log(this); //window
      }
  }
}
var j = o.b.fn; //这里并没有执行 只是把这个函数fn赋值给j
j(); //这里才执行了调用 所以this指向j 也就是window

// 5. 构造函数版this：*****************************
function Fn(){
  console.log(this);//Fn {}user: "追梦子"__proto__: Objectconstructor: ƒ Fn()__proto__: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
  // 该this 指向fn这个函数本身
  this.user = "追梦子"; //一个属性为...
}
var a = new Fn(); // new关键字 创建一个对象实例=>相当于复制了一份Fn到对象a里面
console.log(a.user); //追梦子 a调用,this->a

//error  Cannot read property 'user' of undefined
function Fn(){
  this.user = "追梦子";
}
var a = Fn(); //没有用new
console.log(a.user); //追梦子 

// 6. 当this遇上return  如果返回值是一个对象，那么this指向的就是那个返回的对象，如果返回值不是一个对象那么this还是指向函数的实例。
    // - 返回空对象
    function fn()  
    {  
      this.user = '追梦子';  
      return {};  
    }
    var a = new fn;  
    console.log(a.user); //undefined

    // - 返回函数对象
      return function(){}; //undefined

    // - 返回值数值1 数据类型为number
      return 1; //追梦子

    // - 返回 数据类型为undefined
      return undefined;//追梦子

    // - 还有一点就是虽然null也是对象，但是在这里this还是指向那个函数的实例，因为null比较特殊。
      return null;//追梦子



      // this知识点 补充
// 1.在严格版中的默认的this不再是window，而是undefined。

// 2.new操作符会改变函数this的指向问题 => 因为new关键字会创建一个空的对象，将this指向这个空对象，这样的话函数内部的this就会被这个空的对象替代。

// 3. bind，apply， call