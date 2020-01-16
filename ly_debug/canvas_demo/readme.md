<!--
 * @Author: your name
 * @Date: 2019-10-23 08:54:23
 * @LastEditTime: 2020-01-14 00:08:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\ly_debug\xc\readme.md
 -->
landscape 风景画 => 横屏 
portrait 肖像 => 竖屏

- js 模块化 
  一个类就是一个模块，有利于代码功能的分离。
  Round_item类 就是一个封装类
  其余的代码是业务代码
  在写业务代码的时候，要注意抽离模块， 有利于代码的维护和复用

- canvas 的基本API 
  context.beginPath() 开始一段绘制轨迹
  context.closePath() 结束
  context.fill()/stroke()

- getContext() 方法
返回一个用于在画布上绘图的环境。

- SS3 mix-blend-mode
首先，要知道”blend-mode”就是混合模式的意思。那mix, 恩，我也不知道为什么命名为mix, 可能是该属性不仅可以作用于HTML，还可以作用于SVG，干脆叫mix一起捋过来。该CSS属性作用是让元素内容和这个元素的背景以及下面的元素发生“混合”。
https://www.zhangxinxu.com/wordpress/2015/05/css3-mix-blend-mode-background-blend-mode/