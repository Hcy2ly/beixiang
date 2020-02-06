/*
 * @Author: ly
 * @Date: 2020-02-06 22:39:17
 * @LastEditTime : 2020-02-06 22:49:29
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang\LY_Restart\4_Go\package_main\demo3.go
 */
package main

import "fmt"

func main() {
	fmt.Println("第三个例子：从数组开始。")

	var n [10]int //n是一个长度为10的数组
	var i, j int

	//为数组n初始化元素
	for i = 0; i < 10; i++ {
		n[i] = i + 100 //设置元素为i+100
	}

	for j = 0; j < 10; j++ {
		fmt.Printf("n[%d] = %d\n", j, n[j]) //n[i]已经给数组n每个赋值。i与j的值相等所以 n[i] = n[j]。
	}

}
