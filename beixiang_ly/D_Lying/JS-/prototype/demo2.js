function Person() {
    this.names = ['kevin','daisy'];
    this.ages = [12,25]
}
// this 永远和函数运行的方式有关
function Child() {
// 要得到person的属性
Person.call(this);//函数借用 this指向Child
}
var child1 = new Child(); //构造函数调用。new表示拿到了所有Person函数的对象属性和方法/
child1.names.push('yayu'); //添加了一个name
console.log(child1.names[2]);
var child2 = new Child();
console.log(child2.names);
console.log(child2);