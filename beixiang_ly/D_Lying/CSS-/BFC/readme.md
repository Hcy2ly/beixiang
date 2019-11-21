# Block Formatting Context，块级格式化上下文
还有：
  IFC(CSS2.1)：Inline Formating Contexts，内联元素格式化上下文
  GFC(CSS3):GridLayout Formating Contexts，网格布局格式化上下文
  FFC(CSS3):Flex Formatting Contexts，自适应格式化上下文

* BFC原理/ BFC渲染规则？
  1、BFC元素垂直方向的边距会发生重叠
  2、BFC的区域不会与浮动元素的box重叠（可用于清除浮动）
  3、BFC为一个独立的元素，外面的元素不会影响里面的元素，里面的元素也不会影响外面的元素。
  4、计算BFC高度的时候，浮动元素也会参与计算

* 如何创建BFC？
  1、float值不为none，即为left, right
  2、position的值不为static(默认值),relative，即为absolute,fixed
  3、display为inline-block, flex, inline-flex, table-cell,table-caption
  4、overflow不为visible，overflow为auto,hidden，scroll ;
  5、使用fieldset元素（可以给表单元素设置环绕边框的html元素）

* BFC的使用场景？
  1、BFC垂直方向边距重叠
  2、BFC不与float重叠
  3、清除浮动：子元素是浮动元素的时候，把外层元素设置成BFC的时候，子元素的浮动元素也会参与到父级元素的高度计算上来。
