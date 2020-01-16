javascript是一门弱类型语言, 所谓弱类型, 就是一个变量既可以被赋值字符串, 数字, 又可以被赋值数组, 对象, 弱类型的好处很多, 但也有缺点, 比如:

跳过了编译过程, 导致代码中的错误只能在运行时才能显现出来
由于变量的类型灵活多变, 导致代码可读性降低, 不容易排错
由于变量形式灵活多变, 导致IDE的智能提示不够准确

Facebook开发了一个名为Flow的框架, 为javascript添加了编译的过程, 可以让我们用类似java的强类型风格, 编写js语言, 使用方法非常简单, 以下是flow的一些使用实例

// 新建一个文件夹
mkdir learn-flow
// 进入文件夹
cd learn-flow
// 初始化项目
npm init -y
//安装
npm install flow-bin

使用方法
原js代码:
var userName = "zhaoolee";
var userAge = 22;

非破坏式的写法(通过注释)

在项目learn-flow中新建一个user.js文件

//@flow
var userName /*: string*/ = "zhaoolee";
var userAge /*: number*/ = 18;


注意点: 需要在文件首部添加 //@flow标记, 否则无法进行类型检测

进行类型检测
npm run flow

flow中支持检测的类型有哪些呢?
number: 数字, NaN, Infinity, 写法如下
//@flow
var num1 /*: number*/ = 100;
var num2 /*: number*/ = NaN;
var num3 /*: number*/ = Infinity;

string: 字符串, ,写法如下
//@flow
var name /*: string*/ = "zhaoolee";

null: 就是null, ,写法如下
//@flow
var likePython /*: null*/ = null;

boolean: 就是布尔类型, 写法如下
// @flow
var likePython /*: boolean*/ = true;

void: 在flow中, undefined属于void, 写法如下
//@flow
var isUndefined /*: void*/ = undefined;

any: 表面可以使用任何类型, 这个相当于js原生的类型(动态),写法如下
//@flow
var nameOrAge /*: any*/ = "zhaoolee";
nameOrAge = 123;

Array: 数组类型, 定义时,需要指定数组内元素的类型, 写法如下
//@flow
var names /*: Array<string>*/ = ["zhaoolee", "Alan", "Amy", "Alice"];
var ages /*: Array<number>*/ = [18, 22, 16, 21];
var nameOrAge /*: Array<any>*/ = ["zhaoolee", 22, "Amy", 21];

Object: 对象类型, 写法如下

对object的每个属性进行检查

//@flow
var dog = {
    name: "wang",
    age: 14,
}

function sayNameAndAge(animal /*:{name: string, age: number}*/ ) {
    console.log("name==>", animal.name, " | ", "age==>", animal.age);
}

sayNameAndAge(dog);

Function: 函数类型, 写法如下
//@flow
function cal(num1 /*: number*/ , signs /*: string*/ , num2 /*: number*/ ) /*: number*/ {
    var result /*: number*/ = 0;
    switch (signs) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }
    return result;
}

var num1 /*: number*/ = 100;
var num2 /*: number*/ = 50;

console.log(num1 + "与" + num2 + "之和为:", cal(num1, "+", num2));
console.log(num1 + "与" + num2 + "差值为:", cal(num1, "-", num2));
console.log(num1 + "与" + num2 + "乘积为:", cal(num1, "*", num2));
console.log(num1 + "与" + num2 + "相除为:", cal(num1, "/", num2));

Maybe: null和void类型的组合, 写法如下:
//@flow
function add(num1 /*: number*/ , num2 /*: ?number*/ ) /*: number*/ {
    var num1 = num1 | 0;
    var num2 = num2 | 0;
    return num1 + num2;
}

console.log(add(1));

或操作: 类型1 | 类型2, 写法如下

如果需要某变量只能接受 string和number类型, 就需要用到或操作, 写法如下

//@flow
var nameOrAge /*: string|number*/ = "zhaoolee";
nameOrAge = 12;

小结:

对于弱类型(动态类型)的语言, 好处很多,博主也非常喜欢弱类型,在《黑客与画家》中有一段很有意思的话, 充分说明了动态语言的优势

作者：木子昭
链接：https://www.jianshu.com/p/d21d4524a134
