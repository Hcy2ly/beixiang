<!-- 如果不能写在HTML内容的后面，则需要在页面加载完成后再初始化。 -->
<script>
window.onload = function() {
  ...
}
</script>

<!-- 或者这样（Jquery和Zepto）(推荐) -->
<script>
$(document).ready(function () {
 ...
})
</script>


<!-- 如果作为CommonJs 或ES 模块引入 -->

<!-- //CommonJs -->
var Swiper = require('swiper');    
var mySwiper = new Swiper('.swiper-container', { /* ... */ });

<!-- //ES -->
import Swiper from 'swiper';    
var mySwiper = new Swiper('.swiper-container', { /* ... */ });