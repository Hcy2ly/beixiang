var a = {
  user:"追梦子",
  fn:function(){
      console.log(this.user);
  }
}
var b = a.fn;
b(); //undefined
//console.log(b) 就可以知道原因  => 打印出来的结果是ƒ (){ console.log(this.user);} b只是拿到一个a对象的fn方法.并没有声明属性user
//当我们不得不将这个对象保存到另外的一个变量中，那么就可以通过以下方法。
// 1. call() 
var a = {
  user:"追梦子",
  fn:function(){
      console.log(this.user); //追梦子
  }
}
var b = a.fn;
b.call(a);//把b添加到a对象环境中去
    // call方法除了第一个参数以外还可以添加多个参数，
    var a = {
      user: "追影子",
      fn: function(aa,bb) {
        console.log(this.user);
        console.log(aa+bb);
      }
    }
    var b = a.fn;
    b.call(a,1,2);

// 2. apply()
b.apply(a);
    // 同样apply也可以有多个参数，但是不同的是，第二个参数必须是一个数组
    var a= {
      user: "追影子的人",
      fn: function(s,ss) {
        console.log(this.user);
        console.log(s*ss);
      }
    }
    var b = a.fn; //a.fn
    b.apply(a,[2,3]); 
    // var arr = [500,20];
    // b.apply(a,arr); 
//*********注意如果call和apply的第一个参数写的是null，那么this指向的是window对象*******
var a = {
  user:"追梦子",
  fn:function(){
      console.log(this); //Window {external: Object, chrome: Object, document: document, a: Object, speechSynthesis: SpeechSynthesis…}
  }
}
var b = a.fn;
b.apply(null);

// 3、bind() 我们发现代码没有被打印，对，这就是bind和call、apply方法的不同，实际上bind方法返回的是一个修改过后的函数。
var a = {
  user:"追梦子",
  fn:function(){
      console.log(this.user);
  }
}
var b = a.fn;
var c = b.bind(a);
console.log(c); //function() { }
//打印
var a = {
  user:"追梦子",
  fn:function(){
    console.log(this.user); //追梦子
  }
}
var b = a.fn;
var c = b.bind(a);
c();
// bind也可以有多个参数，并且参数可以执行的时候再次添加，但是要注意的是，参数是按照形参的顺序进行的
var a = {
  user:"追梦子",
  fn:function(e,d,f){
    console.log(this.user); //追梦子
    console.log(e,d,f); //10 1 2
  }
}
var b = a.fn;
var c = b.bind(a,10);
c(1,2); //此处输出 追梦子 10 1 2

// 总结：
// call和apply都是改变上下文中的this并立即执行这个函数，
// bind方法可以让对应的函数想什么时候调就什么时候调用，并且可以将参数在执行的时候添加，这是它们的区别，