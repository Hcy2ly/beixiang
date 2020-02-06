/*
 * @Author: ly
 * @Date: 2020-02-05 11:51:14
 * @LastEditTime : 2020-02-06 22:40:42
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang\LY_Restart\4_Go\package_main\demo1.go
 */

package main

// import "fmt" //需要该包时引入
// import (
// 	"fmt"

// 	math "../math"
// )

/*
// 第一种main()
func main() {
	// fmt.Println("Hello World!")
	// fmt.Println("Google" + "Runoob")
	// fmt.Println(math.Add(1, 1))
	// fmt.Println(math.Sub(1, 1))

	// //单个变量声明
	// var a string = "Runoob"
	// fmt.Println(a)
	// //多个变量声明
	// var b, c int = 1, 2
	// fmt.Println(b, c)

	// // 声明一个变量并初始化
	// var a1 = "RUNOOB"
	// fmt.Println(a1)

	// // 没有初始化就为零值
	// var b1 int
	// fmt.Println(b1)

	// // bool 零值为 false
	// var c1 bool
	// fmt.Println(c1)

	// //指定变量类型，如果没有初始化，则变量默认为零值。
	// var a2 int
	// var b2 float64
	// var c2 bool
	// var d2 string
	// fmt.Printf("%v %v %v %q\n", a2, b2, c2, d2)

	// //根据值自行判定变量类型。
	// var a3 = true
	// fmt.Println(a3)

	// //省略 var, 注意 := 左侧如果没有声明新的变量，就产生编译错误，格式：v_name := value。  := 是一个声明语句
	// b3 := "Runoob" // var b3 string = "Runoob"
	// fmt.Println(b3)

	// // 全局变量声明
	// var x, y int
	// var ( // 这种因式分解关键字的写法一般用于声明全局变量
	// 	x1 int
	// 	y1 bool
	// )
	// fmt.Println(x, x1, y, y1)

	// // 通用声明
	// var m, n int = 1, 2
	// var m1, n1 = 123, "hello"
	// println(m, n, m1, n1)

	// //这种不带声明格式的只能在函数体中出现
	// m2, n2 := 666, "hi"
	// println(m2, n2)

}
*/

/*
//第二种main() 主函数调用别的函数numbers()
func main() {
	_, numb, strs := numbers() //只获取函数返回值的后两个
	fmt.Println(numb, strs)
}

//一个可以返回多个值的函数
func numbers() (int, int, string) {
	a, b, c := 1, 2, "str"
	return a, b, c
}
*/

/*
// 常量
func main() {
	const LENGTH int = 10
	const WIDTH int = 5
	var area int
	const a, b, c = 1, false, "str" //多重赋值

	area = LENGTH * WIDTH
	fmt.Println("面积为 : %d", area)
	println(a, b, c)
}
*/

/*
// 常量可以用len(), cap(), unsafe.Sizeof()函数计算表达式的值。常量表达式中，函数必须是内置函数，否则编译不过：
const (
	a = "abc"
	b = len(a)
	c = unsafe.Sizeof(a)
)
func main() {
	println(a, b, c) // abc 3 16
}
*/

/*
//iota常量还可以用作枚举：
const (
	a = iota
	b
	c
)
func main() {
	fmt.Println(a, b, c)
}
*/

/*
// iota 常量的一个有趣例子
func main() {
	const (
		a = iota //0
		b        //1
		c        //2
		d = "ha" //独立值，iota += 1
		e        //"ha"   iota += 1
		f = 100  //iota +=1
		g        //100  iota +=1
		h = iota //7,恢复计数
		i        //8
	)
	fmt.Println(a, b, c, d, e, f, g, h, i)
}
*/

/*
// 算术运算符
func main() {
	var a int = 21
	var b int = 10
	var c int

	c = a + b
	fmt.Printf("	a+b 的值为 %d\n", c)

	c = a - b
	fmt.Printf("	a-b 的值为 %d\n", c)

	c = a * b
	fmt.Printf("	a*b 的值为 %d\n", c)

	c = a / b
	fmt.Printf("	a/b 的值为 %d\n", c)

	c = a % b
	fmt.Printf("	a对b求余 的值为 %d\n", c)

	a++
	fmt.Printf("	a++ 的值为 %d\n", a)

	fmt.Printf("	现在a的值为 %d\n ", a) // 为了方便测试，a 这里重新赋值为 21

	a--
	fmt.Printf("	a-- 的值为 %d\n", a)
}
*/

/*
// 关系运算符
func main() {
	var a int = 21
	var b int = 10

	if a == b {
		fmt.Printf("第一行 - a 等于 b\n")
	} else {
		fmt.Printf("第一行 - a 不等于 b\n")
	}
	if a < b {
		fmt.Printf("第二行 - a 小于 b\n")
	} else {
		fmt.Printf("第二行 - a 不小于 b\n")
	}

	if a > b {
		fmt.Printf("第三行 - a 大于 b\n")
	} else {
		fmt.Printf("第三行 - a 不大于 b\n")
	}

	// Lets change value of a and b
	a = 5
	b = 20
	if a <= b {
		fmt.Printf("第四行 - a 小于等于 b\n")
	}
	if b >= a {
		fmt.Printf("第五行 - b 大于等于 a\n")
	}
}
*/

/*
// 逻辑运算符
func main() {
	var a bool = true
	var b bool = false
	if a && b {
		fmt.Printf("第一行 - 条件为 true\n")
	}
	if a || b {
		fmt.Printf("第二行 - 条件为 true\n")
	}
	// 修改 a 和 b 的值
	a = false
	b = true
	if a && b {
		fmt.Printf("第三行 - 条件为 true\n")
	} else {
		fmt.Printf("第三行 - 条件为 false\n")
	}
	if !(a && b) {
		fmt.Printf("第四行 - 条件为 true\n")
	}
}
*/

/*
// 位运算
func main() {
	var a uint = 60 // 60 = 0011 1100
	var b uint = 13 // 13 = 0000 1101
	var c uint = 0

	c = a & b // 12 = 0000 1100
	fmt.Printf("第一行 - c 的值为 %d\n", c)

	c = a | b // 61 = 0011 1101
	fmt.Printf("第二行 - c 的值为 %d\n", c)

	c = a ^ b // 49 = 0011 0001
	fmt.Printf("第三行 - c 的值为 %d\n", c)

	c = a << 2 // 240 = 1111 0000
	fmt.Printf("第四行 - c 的值为 %d\n", c)

	c = a >> 2 // 15 = 0000 1111
	fmt.Printf("第五行 - c 的值为 %d\n", c)
}
*/

/*
// 赋值运算符
func main() {
	var a int = 21
	var c int

	c = a
	fmt.Printf("第 1 行 - =  运算符实例，c 值为 = %d\n", c)

	c += a
	fmt.Printf("第 2 行 - += 运算符实例，c 值为 = %d\n", c)

	c -= a
	fmt.Printf("第 3 行 - -= 运算符实例，c 值为 = %d\n", c)

	c *= a
	fmt.Printf("第 4 行 - *= 运算符实例，c 值为 = %d\n", c)

	c /= a
	fmt.Printf("第 5 行 - /= 运算符实例，c 值为 = %d\n", c)

	c = 200 //给c重新赋值

	c <<= 2
	fmt.Printf("第 6行  - <<= 运算符实例，c 值为 = %d\n", c)

	c >>= 2
	fmt.Printf("第 7 行 - >>= 运算符实例，c 值为 = %d\n", c)

	c &= 2
	fmt.Printf("第 8 行 - &= 运算符实例，c 值为 = %d\n", c)

	c ^= 2
	fmt.Printf("第 9 行 - ^= 运算符实例，c 值为 = %d\n", c)

	c |= 2
	fmt.Printf("第 10 行 - |= 运算符实例，c 值为 = %d\n", c)
}
*/

/*
// 其他运算符
func main() {
	var a int = 4
	var b int32
	var c float32
	var ptr *int

	// 运算符实例
	fmt.Printf("第 1 行 - a 变量类型为 = %T\n", a)
	fmt.Printf("第 2 行 - b 变量类型为 = %T\n", b)
	fmt.Printf("第 3 行 - c 变量类型为 = %T\n", c)

	//  & 和 * 运算符实例
	ptr = &a // 'ptr' 包含了 'a' 变量的地址
	fmt.Printf("a 的值为  %d\n", a)
	fmt.Printf("*ptr 为 %d\n", *ptr)
}
*/

/*
//运算符优先级 可以通过使用括号来临时提升某个表达式的整体运算优先级。
func main() {
	var a int = 20
	var b int = 10
	var c int = 15
	var d int = 5
	var e int

	e = (a + b) * c / d // ( 30 * 15 ) / 5
	fmt.Printf("(a + b) * c / d 的值为 : %d\n", e)

	e = ((a + b) * c) / d // (30 * 15 ) / 5
	fmt.Printf("((a + b) * c) / d 的值为  : %d\n", e)

	e = (a + b) * (c / d) // (30) * (15/5)
	fmt.Printf("(a + b) * (c / d) 的值为  : %d\n", e)

	e = a + (b*c)/d //  20 + (150/5)
	fmt.Printf("a + (b * c) / d 的值为  : %d\n", e)
}
*/

//指针变量 * 和地址值 & 的区别：指针变量保存的是一个地址值，会分配独立的内存来存储一个整型数字。当变量前面有 * 标识时，才等同于 & 的用法，否则会直接输出一个整型数字。
// func main() {
// 	var a int = 4
// 	var ptr *int
// 	ptr = &a               //把a的地址赋值给pre *pre可以拿到a的地址值
// 	println("a的值为", a)     // 4
// 	println("*ptr为", *ptr) // 4
// 	println("ptr为", ptr)   // 0xc00002df40
// }

/*
Go 语言的基础组成有以下几个部分：
包声明
引入包
函数ba
变量
语句 & 表达式
注释
*/

/*
接下来让我们来看下简单的代码，该代码输出了"Hello World!":
1. package main //包声明

2. import "fmt" //告诉 Go 编译器这个程序需要使用 fmt 包（的函数，或其他元素），fmt 包实现了格式化 IO（输入/输出）的函数。

3. func main() { //是程序开始执行的函数。main 函数是每一个可执行程序所必须包含的，一般来说都是在启动后第一个执行的函数（如果有 init() 函数则会先执行该函数）。
//第一个demo
		fmt.Println("Hello, World!") //可以将字符串输出到控制台，并在最后自动增加换行字符 \n。 使用 fmt.Print("hello, world\n") 可以得到相同的结果。
	}

ps: 当标识符（包括常量、变量、类型、函数名、结构字段等等）以一个大写字母开头，如：Group1，那么使用这种形式的标识符的对象就可以被外部包的代码所使用（客户端程序需要先导入这个包），这被称为导出（像面向对象语言中的 public）；标识符如果以小写字母开头，则对包外是不可见的，但是他们在整个包的内部是可见并且可用的（像面向对象语言中的 protected ）。

ps2: 需要注意的是 { 不能单独放在一行，所以以下代码在运行时会产生错误：
错误实例：
package main

import "fmt"

func main()
{  // 错误，{ 不能在单独的行上
	fmt.Println("Hello, World!")
}
*/

/*
  1. 数值类型（包括complex64/128）为 0

  2. 布尔类型为 false

  3. 字符串为 ""（空字符串）

  4. 以下几种类型为 nil：
    var a *int
    var a []int
    var a map[string] int
    var a chan int
    var a func(string) int
    var a error // error 是接口
*/

/*
多变量声明:
//类型相同多个变量, 非全局变量
var vname1, vname2, vname3 type
vname1, vname2, vname3 = v1, v2, v3

var vname1, vname2, vname3 = v1, v2, v3 // 和 python 很像,不需要显示声明类型，自动推断

vname1, vname2, vname3 := v1, v2, v3 // 出现在 := 左侧的变量不应该是已经被声明过的，否则会导致编译错误

// 这种因式分解关键字的写法一般用于声明全局变量
var (
    vname1 v_type1
    vname2 v_type2
)
*/
