function Parent(name){
    this.name = name; //必须传
    this.colors = ['red','blue','green'];
}
Parent.prototype.getName = function() {
    console.log(this.name);
}
function Child(name,age) {
    Parent.call(this,name);  //super()继承
    this.age = age;
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;//设置一下。把child构造函数赋值给constructors属性/
Child.prototype.sayHello = function() {
    console.log(`hi ,i am ${this.name},i am ${this.age} years old`);
}
var child1 = new Child('ly',18);
child1.colors.push('black');

// child1.getName();
// child1.sayHello();
// console.log(child1);
console.log(Child.prototype.constructor);
