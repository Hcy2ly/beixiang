let A = {name:'a'};//JSON object
let B = {age:180};
let C = {hobby:'coding'};

A.__proto__ = B;//原型对象
B.__proto__ = C;//可以用来设置对象的原型链上的对象是什么
// C.__proto__ = A; //辈分乱了

console.log(A.name,A.age,A.hobby);
console.log(B.name,B.age,B.hobby);
console.log(C.name,C.age,C.hobby);
