
# W3C标准盒子 & 怪异盒模型
  * W3C盒子模型(标准盒模型)
  根据 W3C 的规范，元素内容占据的空间是由 width 属性设置的，而内容周围的 padding 和 border 值是另外计算的；即在标准模式下的盒模型，盒子实际内容（content）的width/height=我们设置的width/height;盒子总宽度/高度=width/height+padding+border+margin。

  * IE盒子模型(怪异盒模型)
  在该模式下，浏览器的 width 属性不是内容的宽度，而是内容、内边距和边框的宽度的总和；即在怪异模式下的盒模型，盒子的（content）宽度+内边距padding+边框border宽度=我们设置的width(height也是如此)，盒子总宽度/高度=width/height + margin = 内容区宽度/高度 + padding + border + margin。

  * 两种模式下如何解决样式的兼容性问题
  建议不要给元素添加具有指定宽度的内边距，而是尝试将内边距或外边距添加到元素的父元素和子元素。

  * box-sizing属性可以指定盒子模型种类，content-box指定盒子模型为W3C（标准盒模型），border-box为IE盒子模型（怪异盒模型）。

