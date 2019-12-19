function Parent(){
    this.name = 'kevin';
}
// 本没有类，哪来父类，子类，所以js是通过prototype属性构造的原型式继承
// Person 是一个函数 函数运行内部有this指针 -> new？ object
//  js 本没有类，只有对象，object

// 原型链对象{ }  prototype是什么？表示任何函数都可以有的一个属性而已
Parent.prototype.getName = function() {
    console.log(this.name);
}

// 原型链继承
function Child() {
}
Child.prototype = new Parent();
var child1 = new Child();
// child1.names.push('yayu');
// child1.getName();
console.log(child1.name);