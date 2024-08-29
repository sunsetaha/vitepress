# 重绘和回流

## 概念
**`重绘`**：当 DOM 元素的样式属性（例如颜色、背景）发生改变时，浏览器重新绘制元素的过程，但并不影响元素的几何属性和布局；相比于回流，重绘的性能开销较小。

**`回流`**：也叫重排，是指当 DOM 元素的几何属性（例如位置、大小）发生改变时，浏览器重新计算并更新元素的几何属性，并重新构建页面布局树的过程；回流会导致其他元素的几何属性和布局发生变化。回流是一种相对较慢的操作，会消耗大量的CPU资源。

回流一定会导致重绘，但是重绘不一定会导致回流。回流相对较慢，会重新计算文档中元素的位置和几何属性。而重绘是根据元素的新样式重新绘制页面，不需要重新计算元素的位置和几何属性


## 导致重绘的操作
- 颜色属性：color、background-color、border-color等。
- 文字属性：font-weight、font-style、text-decoration等。
- 文本属性：text-align、text-transform、line-height等。
- 背景属性：background-image、background-position、background-size等。
- 盒子模型属性：box-shadow、outline-color、outline-style等。
- 渐变属性：linear-gradient、radial-gradient等。
- 变形属性：transform、transform-origin等。
- 过渡属性：transition、transition-property、transition-duration等。


## 导致回流的操作
- 盒模型属性：width、height、padding、margin、border等。
- 定位属性：position、top、left、bottom、right等。
- 布局属性：display、float、clear、flex等。
- 字体属性：font-size、line-height、text-align等。
- 背景属性：background、background-color、background-image等。
- 盒子模型属性：box-sizing、border-box、outline等。
- 可见性属性：visibility、opacity等。
- 修改浏览器窗口大小。
- 页面初始加载。
- 页面的渲染树发生改变，如添加或删除元素等。
- 获取元素的一些布局属性，如offsetWidth、offsetHeight、clientWidth、clientHeight、getComputedStyle()、scrollIntoView()、scrollTo()、getBoundingClientRect()、scrollIntoViewIfNeeded()等。
