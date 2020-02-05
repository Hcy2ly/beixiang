// package main

// import (
// 	"fmt"
// )

// func main() {
// 	var a, b = 1, 2
// 	fmt.Printf("最大值是 : %d\n", max(a, b))
// }

// /* 函数返回两个数的最大值 */
// func max(num1, num2 int) int {
// 	/* 声明局部变量 */
// 	var result int

// 	if num1 > num2 {
// 		result = num1
// 	} else {
// 		result = num2
// 	}
// 	return result
// }

// Go 函数可以返回多个值，例如：

package main

import "fmt"

func swap(x, y string) (string, string) {
	return y, x
}

func main() {
	a, b := swap("Google", "Runoob")
	fmt.Println(a, b)
}
