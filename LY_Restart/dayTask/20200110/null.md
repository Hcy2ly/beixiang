<!--
 * @Author: your name
 * @Date: 2020-01-11 23:55:45
 * @LastEditTime : 2020-01-12 00:35:55
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\LY_Restart\dayTask\20200110\null.md
 -->

* 问题：对于 null 来说，虽然它是基本类型，但是会显示 object，这是一个存在很久了的 Bug
  typeof null // 'object'

  - 答案： 
  为什么会出现这种情况呢？因为在 JS 的最初版本中，使用的是 32 位系统，为了性能考虑使用低位存储了变量的类型信息，000 开头代表是对象，然而 null 表示为全零，所以将它错误的判断为 object 。虽然现在的内部类型判断代码已经改变了，但是对于这个 Bug 却是一直流传下来。

  * hh答案：
    原理是这样的，不同的对象在底层都表示为二进制，在 JavaScript 中二进制前三位都为 0 的话会被判断为 object 类型， null 的二进制表示是全 0，自然前三位也是 0，所以执行 typeof 时会返回“ object ”。

      00000000: Null
      000xxxxx：对象
      001xxxxx：整型
      010xxxxx：双精度数字，可以理解为小数
      100xxxxx：字符串
      110xxxxx：布尔类型

    * typeof 底层是判断前三位代表啥  就返回啥
    * insanceof 是沿着原型链找 因为基本类型没有所谓的实例，也就没有构造函数，连构造函数都没有，就更不存在原型链了！ 只有函数才有原型 prototype，JS是基于原型设计的语言


* 问题：对。你之前说的只有函数才有prototype原型，其实我有点疑问为啥只有函数才有。
  * hh答案： （要是没看懂的话，就当我没说  然后强记）
    - 因为JS语言设计就是这样的
    - JS是基于原型设计的语言
    - 没有像Java所谓的 类
    - 所以如果要像Java一样实现继承等面向对象语言的特性
    - 就要借助另外一种思想来实现
    - 这种思想就是原型
    - 所以 JS 就在构造函数上做功夫
    - 给构造函数上加了个原型
    - 但其实构造函数就是函数  因为每个函数都可以被 new ，都可以充当构造函数












 
