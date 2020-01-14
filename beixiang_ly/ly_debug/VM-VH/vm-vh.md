# 视区相关单位vw, vh..简介以及可实际应用场景

 vm: 相对于视窗的宽度:视窗宽度是100vw  //  1%
 vh: 相对于视窗的高度:视窗高度是100vw
 兼容性:vw, vh, vmin(vm)这几个视区相关单位，在2012年9月23号这天的兼容性为：Chrome 20+, IE9+ 以及Safari 6支持！

  * 这里多次出现的“视窗”是纳尼意思？
      是浏览器内部宽度大小(window.innerWidth)？
      是整个浏览器的宽度大小(window.outerWidth)？
      还是显示器的宽度大小(screen.width)？

  实验: 在ie9打开,因为一般情况下，Chrome浏览器浏览器内外宽度是一样的（因为浏览器左右无边框）；加上浏览器大小变小时图片尺寸不渲染的bug，因此，上demo最佳测试浏览器是IE9.

    <p>网页视区宽度为：<span id="innerWidth">0</span>px</p>
    <p>浏览器的宽度为：<span id="outerWidth">0</span>px</p>
    <p>显示器的宽度为：<span id="screenWidth">0</span>px</p>
    <p>目前图片宽度是：<span id="imageWidth">0</span>px</p>
    <p>为下面图片选择一个宽度值：<select id="testWidthSel">
            <option value="10vw" selected="selected">10</option>
            <option value="20vw">20</option>
            <option value="30vw">30</option>
            <option value="40vw">40</option>
        </select> vw
    </p>
    <p id="forAppendImg"></p>

  * 结果:
    网页视区宽度为：1680px
    浏览器的宽度为：1696px  //所以这里说的视窗显然不是浏览器的宽度
    显示器的宽度为：1680px
    目前图片宽度是：168px
    为下面图片选择一个宽度值： 10 vw

  => 然后当我们改变浏览器的高度的时候:

    网页视区宽度为：1092px
    浏览器的宽度为：1108px  
    显示器的宽度为：1680px //显示器的宽度没变
    目前图片宽度是：109px
    为下面图片选择一个宽度值： 10 vw

# 结论:视区 => 视窗所指为浏览器内部的可视区域大小(网页视区),即window.innerWidth/innerHeight大小 

  * vw,vh使用场景: 
    1. vw, vh用在宽度自适应上没有价值——%可以实现之~~
    2. 现在又：vw, vh用在absolute/fixed定位属性元素上没有价值——%可以实现之~~
    3. vw, vh这两个视区相关动态单位似乎应用前景一下子黯淡了很多，潜力似乎也就那样——想来想去，得出一个结论：vw, vh视区大小相关单位只适用于非定位元素的高度相关属性上！ //zxx: 高度相关属性如 – height/min-height/max-height/line-height/padding-top/padding-bottom等
    4. 可用于 元素的尺寸限制(类似于这样的交互：点击下图，弹框查看原始大图；或者一屏内（不能有滚动条）大图幻灯片浏览。这类需求让人头疼的地方之一就是原始大图的尺寸限制问题——因为很有可能图片过大，尼玛一屏显示器区域不够放，我们需要对其进行缩放处理。)
    5. 可用于 既然vw, vh是视区相关单位，我就想到是不是可以利用这个特性实现精确的视区大小覆盖以及视区边界的定位。[vmvh]
    6. 可用于 可以把web页面做得像Office文档那样，一屏正好一页；拖动滚动条，我们可以一直往下看到最后一页。

* 关于浏览器出现滚动条和消失页面不滚动：
  html {
    overflow-y: scroll;
  }
  :root {
    overflow-y: auto;
    overflow-x: hidden;
  }
  :root body {
    position: absolute;
  }
  body {
    width: 100vw;
    overflow: hidden;
  }