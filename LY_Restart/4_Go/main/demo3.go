/*
 * @Author: ly
 * @Date: 2020-02-06 22:39:17
 * @LastEditTime : 2020-02-06 23:21:20
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang\LY_Restart\4_Go\package_main\demo3.go
 */

// package main

// import "fmt"

// func main() {
// 	fmt.Println("第三个例子：从数组开始。")

// 	var n [10]int //n是一个长度为10的数组
// 	var i, j int

// 	//为数组n初始化元素
// 	for i = 0; i < 10; i++ {
// 		n[i] = i + 100 //设置元素为i+100
// 	}

// 	for j = 0; j < 10; j++ {
// 		fmt.Printf("n[%d] = %d\n", j, n[j]) //n[i]已经给数组n每个赋值。i与j的值相等所以 n[i] = n[j]。
// 	}

// }

/*
// 杨辉三角1
package main

import "fmt"

func GetYangHuiTriangleNextLine(inArr []int) []int {
	var out []int
	var i int
	arrLen := len(inArr)
	out = append(out, 1)
	if 0 == arrLen {
		return out
	}
	for i = 0; i < arrLen-1; i++ {
		out = append(out, inArr[i]+inArr[i+1])
	}
	out = append(out, 1)
	return out
}
func main() {
	nums := []int{}
	var i int
	for i = 0; i < 10; i++ {
		nums = GetYangHuiTriangleNextLine(nums)
		fmt.Println(nums)
	}
}
*/

/*
// 杨辉三角2
package main

import "fmt"

func triangle(n int) {
	var item []int
	for i := 1; i <= n; i++ {
		item_len := len(item)
		if item_len == 0 {
			item = append(item, 1)
		} else {
			temp_s := []int{1}
			for j := 0; j < item_len-1; j++ {
				temp_s = append(temp_s, item[j]+item[j+1])
			}
			temp_s = append(temp_s, 1)
			item = temp_s
		}
		fmt.Println(item)
	}
}

func main() {
	triangle(13)
}
*/

// 杨辉三角3
package main

import "fmt"

func main() {
	yanghuisanjiao(12)
}

func yanghuisanjiao(rows int) {
	for i := 0; i < rows; i++ {
		number := 1
		for k := 0; k < rows-i; k++ {
			fmt.Print("  ")
		}
		for j := 0; j <= i; j++ {
			fmt.Printf("%5d", number)
			number = number * (i - j) / (j + 1)
		}
		fmt.Println()
	}
}

/*
// 遍历二维数组可以用 range：
package main

import (
	"fmt"
)

func main() {
	// 二维数组
	var value = [3][2]int{{1, 2}, {3, 4}, {5, 6}}
	// 遍历二维数组的其他方法，使用 range
	// 其实，这里的 i, j 表示行游标和列游标
	// v2 就是具体的每一个元素
	// v  就是每一行的所有元素
	for i, v := range value {
		for j, v2 := range v {
			fmt.Printf("value[%v][%v]=%v \t ", i, j, v2)
		}
		fmt.Print(v)
		fmt.Println()
	}
}
*/
