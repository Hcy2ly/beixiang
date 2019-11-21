function  Person(name) {
    this.name = name;
}
let p = new Person('xiaoming');
console.log(typeof Person); //function
console.log(typeof p);//object
console.log(Person.prototype);//prototype只属于构造函数上才有-> Person{}就是原型链对象
console.log(p.prototype);//对象上没有这个属性。
console.log(Person.prototype.constructor === Person);
console.log(Person.__proto__);
console.log(p.__proto__);