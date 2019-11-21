0731任务：0801任务： +css基础原理
1. 完善短信验证
2. 结束向前冲项目
3. 重复看代码 


今天修改css的问题拖延：
  - 依赖之前dom的框架，不好修改，css凌乱 自己对很多dom文档流不够清楚 只能够捕捉absolute绝对定位
  - 应该干脆点直接自己手写一个框架 其实只需要给输入框和几个按钮几个相应的盒子然后让其在自己相应的位置上
    (这里需要理清一下flex，absolute，relative什么时候应该怎么用)
  - 再次遇见position: absolute; z-index: ;却失效问题 因为父级盒子的覆盖失败z-index:11;并没有  [文件z-index]
  - div盒子的重叠问题  [文件div_DIV]



  总结一下z-index:
  * 定义和用法
    - z-index 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。
    - 注释：元素可拥有负的 z-index 属性值。
    - 注释：Z-index 仅能在定位元素上奏效（例如 position:absolute;）！
    - z-index: 
      auto	默认。堆叠顺序与父元素相等。
      number	设置元素的堆叠顺序。
      inherit	规定应该从父元素继承 z-index 属性的值。


  * z-index问题大集合:
    1. Safari 3D变换会忽略z-index问题
    https://www.zhangxinxu.com/study/201608/3d-transform-safari-render-z-index.html   用ios手机打开 会看见 红色的块状条子，从图片中心穿过去了
    原因:浏览器，当我们使用3D transform变换的时候，如果祖先元素没有overflow:hidden/scroll/auto等限制，则会直接忽略自身和其他元素的z-index层叠顺序设置，而直接使用真实世界的3D视角进行渲染。
    即  .bar {
          position: fixed; 
          /* Safari下z-index无效 */
          z-index: 99;
        } 
    按照CSS规范上的说明，红色条子应该在图片上面,所以我们会觉得图片被遮住了,但是Safari就比较任性了,他直接无视了z-index99.
      Safari 3D变换会忽略z-index问题解决:
        - 方法1：父级，任意父级，非body级别，设置overflow:hidden可恢复和其他浏览器一样的渲染。
        - 方法2：以毒攻毒。有时候，页面复杂，我们不能给父级设置overflow:hidden,so 渲染问题是由3D transform变换产生,我们就使用3D transform解决
          .bar {
            position: fixed;
            z-index: 99;
            /* 以毒攻毒 */
            transform: translateZ(120px);//只要把z轴设置够大就行
          }
    2. z-index 使用条件说明
      * 
      问题:第一种z-index无论设置多高都不起作用情况。这种情况发生的条件有三个：
      1、父标签position属性为relative；
      2、问题标签无position属性（不包括static）；
      3、问题标签含有浮动(float)属性。
      解决:
      1、position:relative改为position:absolute；
      2、去除浮动；
      3、浮动元素添加position属性（如relative，absolute等）。  
      * 
      z-index在使用绝对定位 position:absolute/fixed属性条件下使用才能使用。
      * 
      z-index的数字越高越靠前，并且值必须为整数和正数（正数的整数）;
    3. 在有定位的情况下，该元素的z-index没有生效，是因为该元素的子元素后来居上，盖住了该元素，解决方式：将盖住该元素的子元素的z-index设置为负数
    4. 看它们的父标签的z-index谁高谁低。 给有poaition的第一任老爸添加z-index

#css相对定位|绝对定位(五)之z-index篇总结: 不要滥用absolute & z-index
  * 对于这些在“地面”上干活的元素，首先尽量避免绝对定位，就算使用了绝对定位，至少50%的z-index值都是没有必要的,因为position属性中的“后来居上”这个显示规则是没有兼容性问题的，所以，要想一个元素上面显示，直接放后面就可以了，无需z-index。
  * 有时候，面对复杂的交互，我们还是需要z-index值的，此时，如何避免z-index层级的混乱呢？
    1. 归门别类。将z-index分为两派，分为“地面派”和“天空派”。“天空派”就是指遮罩弹框，类似boxy这种，或是其他一些交互组件等；其余的就算是“地面派”了。
    2. 应用1, 2 ,3规则。地面派元素的z-index没有，或为1，或是2，或是3。恕我直言,3可能都不需要用到，因为一个页面交互再怎么复杂，也不可能正好是前面一个元素比后面元素层级高，而且有3~4个元素.