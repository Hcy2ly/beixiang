<!--
 * @Author: your name
 * @Date: 2020-02-05 11:53:35
 * @LastEditTime : 2020-02-05 14:09:49
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang\LY_Restart\4_Go\package.md
 -->
1. 同一文件夹下文件引入的 package 必须相同
2. 文件夹 or 文件 与 package名字无关联
3. 同一文件夹下文件引入的 import "" 格式化包只需要一个 ，而且func main() {} 只有一个

package_main
  demo.go
      package main
      import (
        "fmt"
        math "../package_myMath"
      )
      func main() {
        fmt.Println("Hello World!")
        fmt.Println(math.Add(1, 1))
        fmt.Println(math.Sub(1, 1))
      }
  demo2.go
      package main

package_myMath
  add.go
      package math
      func Add(x, y int) int {
        return x + y
      }
  sub.go
      package math
      func Sub(x, y int) int {
        return x - y
      }


ps: package name可自定义，同一文件下引入package name相同即可。


* 参考实例： 关于包，根据本地测试得出以下几点：

  文件名与包名没有直接关系，不一定要将文件名与包名定成同一个。
  文件夹名与包名没有直接关系，并非需要一致。
  同一个文件夹下的文件只能有一个包名，否则编译报错。
  文件结构:

  Test
  --helloworld.go

  myMath
  --myMath1.go
  --myMath2.go
  测试代码:

  // helloworld.go
  package main

  import (
  "fmt"
  "./myMath"
  )

  func main(){
      fmt.Println("Hello World!")
      fmt.Println(mathClass.Add(1,1))
      fmt.Println(mathClass.Sub(1,1))
  }
  // myMath1.go
  package mathClass
  func Add(x,y int) int {
      return x + y
  }
  // myMath2.go
  package mathClass
  func Sub(x,y int) int {
      return x - y
  }