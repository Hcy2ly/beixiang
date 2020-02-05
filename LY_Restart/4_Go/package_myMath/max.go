/*
 * @Author: ly
 * @Date: 2020-02-05 23:05:56
 * @LastEditTime : 2020-02-05 23:06:29
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang\LY_Restart\4_Go\package_myMath\max.go
 */
package math

/* 函数返回两个数的最大值 */
func max(num1, num2 int) int {
	/* 声明局部变量 */
	var result int

	if num1 > num2 {
		result = num1
	} else {
		result = num2
	}
	return result
}
