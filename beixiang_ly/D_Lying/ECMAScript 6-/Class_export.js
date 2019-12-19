
//class
class Person { // 父类
    // 定义构造方法
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        return `姓名：${this.name} , 年龄： ${this.age}`;
    }
}

let person = new Person("ly", 21);
console.log(person);
console.log(person.getInfo());

// 通过extends继承
class BlackPerson extends Person { // 子类
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    // 重写父类方法
    getInfo() {
        return `姓名：${this.name} , 年龄： ${this.age} , 身高(cm)： ${this.height}`;
    }
}

let xiaohei = new BlackPerson("xiaohei", 24, 190);
console.log(xiaohei);
console.log(xiaohei.getInfo());


// export 在创建JavaScript模块时，export 语句用于从模块中导出函数、对象或原始值，以便其他程序可以通过 import 语句使用它们。
// let name = 'Jack';
// let age = 11;
// let func = function () {
//     return `姓名： ${name} ,年龄：${age}`;
// };
// let myclass = class myClass{
//     static a = "呵呵";
// }

// export {name, age, func, myclass};

// export default {
//     name: name,
//     age: age,
//     getInfo(){
//         return `姓名：${this.name} , 年龄： ${this.age}`;
//     }
// }

// // html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Title</title>
// </head>
// <body>
// <script type="module">
//     //import {name, age, func, myclass};
//     import student from "./js/export.js";
//     console.log(student);
//     console.log(student.getInfo());
// </script>
// </body>
// </html>