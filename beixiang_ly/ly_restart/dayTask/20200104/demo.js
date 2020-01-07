/*
 * @Author: your name
 * @Date: 2020-01-07 10:16:53
 * @LastEditTime : 2020-01-07 13:49:46
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\LY_Restart\dayTask\20200104\demo.js
 */
var a = 3;
setTimeout(() => {
  console.log('a:'+ a);
});

//错误 陷入循环
// for(var i = 1; i++; i<100) { //这种情况是语句2默认为true,所以for循环没结束循环
//   console.log(i);
// }

//正确
for(var i = 1; i<100; i++) { 
  console.log(i);
}

// for循环 for(语句1， 语句2， 语句3) 解释
    // 1. 语句1，在循环（代码块）开始之前执行。 * 可选
    // 2. 语句2，定义运行循环（代码块）的条件。 * 可选
    // 3. 会在循环（代码块）每次被执行后执行。


// for循环的表达方式有很多种：
  // - 针对语句一：通常，您会使用语句 1 来初始化循环中所使用的的变量（i = 0）。但情况并不总是这样，JavaScript 不会在意。语句 1 是可选的。
    // 1. 可以在语句1中初始化多值 ：
					var  cars = [1,2,3];
					var i, text, len; 
					for (i = 0, len = cars.length, text = ""; i < len; i++) { 
						text += cars[i] + "<br>";
					}


    // 2. 或者隐藏语句1：
					var cars = [1,2,3,4];
					var i = 2;
					var len = cars.length;
					var text = "";
					for (; i < len; i++) { 
						text += cars[i] + "<br>";
					}

	// 针对语句2： 通常语句 2 用于计算初始变量的条件。但情况并不总是这样，JavaScript 不会在意。语句 2 也是可选的。
		// 1. 如果语句 2 返回 true，那么循环会重新开始，如果返回 false，则循环将结束。
					for(var i = 1; i<100; i++) { 
						console.log(i);
					}
		// 2. 如果省略语句 2，那么必须在循环中提供一个 break。否则循环永远不会结束。
					for(var i = 1; i<100; i++) { //这种情况是语句2默认为true,所以陷入死循环
						console.log(i);
					}

	// 针对语句3：通常语句 3 会递增初始变量的值。但情况并不总是这样，JavaScript 不会在意。语句 3 也是可选的。 
		// 1. 语句 3 可做任何事情，比如负递增（i--），正递增（i = i + 15），或者任何其他事情。
					for(var i = 1; i<100; i+=15) { //这种情况是语句2默认为true,所以陷入死循环  （这样写不会报错但是确实时错误的。）
						console.log(i);
					}

		// 2. 语句 3 也可被省略（比如当您在循环内递增值时）：
					var i = 0;
					var len = cars.length;
					for (; i < len; ) { 
						text += cars[i] + "<br>";
						i++;
					}

	// * for循环的3个条件都是可以省略的，如果没有退出循环的判断条件，就必须使用break语句退出循环，否则就是死循环：
					var x = 0;
					for (;;) { // 将无限循环下去
							if (x > 100) {
									break; // 通过if判断来退出循环
							}
							x ++;
					}



// JavaScript 支持不同类型的循环：
	// for - 多次遍历代码块
	// for/in - 遍历对象属性
	// while - 当指定条件为 true 时循环一段代码块
	// do/while - 当指定条件为 true 时循环一段代码块
