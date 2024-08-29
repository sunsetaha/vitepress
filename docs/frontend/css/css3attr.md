# CSS3的常用属性

## 1. **边框和形状**

 - `border-radius`：创建圆角边框。
 - `border-image`：使用图片作为边框。
 - `box-shadow`：添加阴影效果。

 ```css
 .border-radius-example {
 border-radius: 15px; /* 创建圆角边框 */
 }
 ```

## 2. **背景和渐变**

 - `background-size`：设置背景图片的大小。
 - `background-origin`：设置背景图片的定位区域。
 - `linear-gradient`：创建线性渐变效果。
 - `radial-gradient`：创建径向渐变效果。
 ```css
 .linear-gradient-example {
     background: linear-gradient(to right, blue, red); /* 线性渐变从蓝色到红色 */
 }
 ```
- 线性渐变
```
语法：
background-image:linear-gradient(direction, color-stop1, color-stop2, ...);

说明：
direction：定义渐变的角度方向。
angle:从0deg到360deg，默认为180deg。
to side-or-corner:由两个关键字组成,第一个为指定水平位置(left或 right)，
第二个为指定垂直位置（top或bottom），顺序是随意的，每个关键字都是可选的。

color-stop1, color-stop2,...
指定渐变的起止颜色，由颜色值、停止位置（可选，使用百分比指定）组成。

注意：角度是指水平线和渐变线之间的角度，逆时针方向计算。
     换句话说，0deg 将创建一个从下到上的渐变，90deg 将创建一个从左到右的渐变。
     但是，请注意很多浏览器(Chrome,Safari,fiefox等)的使用了旧的标准，
     即 0deg将创建一个从左到右的渐变，90deg 将创建一个从下到上的渐变。 
```
- 径向渐变
```
语法：
A:需要处理兼容
background-image: radial-gradient(position, 
                                 shape size,
                                 start-color, ..., 
                                 last-color);

B:高版本不需要处理兼容
background-image: radial-gradient(shape(图形) 
                 size(尺寸) at position(径变起点), 
                 start-color, 
                 ..., 
                 last-color); 
说明：
shape: ellipse (默认)：指定椭圆形的径向渐变。
circle ：指定圆形的径向渐变

size：定义渐变的大小：
farthest-corner (默认) : 指定径向渐变的半径长度为从圆心到离圆心最远的角
farthest-side ：指定径向渐变的半径长度为从圆心到离圆心最远的边
closest-corner ： 指定径向渐变的半径长度为从圆心到离圆心最近的角
closest-side ：指定径向渐变的半径长度为从圆心到离圆心最近的边

position：定义渐变的位置
length：用长度值指定径向渐变圆心的横坐标或纵坐标。可以为负值。
percentage：用百分比指定径向渐变圆心的横坐标或纵坐标。可以为负值。
left：设置左边为径向渐变圆心的横坐标值。
center：设置中间为径向渐变圆心的横坐标值。
right：设置右边为径向渐变圆心的横坐标值。
center（默认）：设置中间为径向渐变圆心的纵坐标值。
top：设置顶部为径向渐变圆心的纵坐标值。
bottom：设置底部为径向渐变圆心的纵坐标值。

start-color, ..., last-color：用于指定渐变的起止颜色 
```
- 重复镜径向渐变
```
语法：
background-image:
    repeating-radial-gradient(
       shape size at position, start-color, ..., last-color
    );
注意：每个颜色后边必须设置%或者px；
```
- 其他
``` 
background-origin: border-box;
规定背景图片的定位区域，规定background-position属性相对于什么位置来定位。
属性值：
 padding-box:背景图像相对于内边距框来定位
 border-box:背景图像相对于边框盒来定位
 content-box:背景图像相对于内容框来定位     

background-clip: border-box;
属性规定背景的绘制区域
属性值:
border-box:背景被裁剪到边框盒。
padding-box:背景被裁剪到内边距框。
content-box:背景被裁剪到内容框。

background-size：cover
规定背景图片的尺寸
属性值：
length:
 设置背景图像的宽度,高度。
 第一个值设置宽度，第二个值设置高度,
 如果只设置一个值，则第二个值会被设置为 "auto"。
percentage:
 以父元素的百分比来设置背景图像的宽度和高度。
 第一个值设置宽度，第二个值设置高度。
 如果只设置一个值，则第二个值会被设置为 "auto"。
cover: 
 会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。
 背景图像的某些部分也许无法显示在背景定位区域中。
contain:
 会保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小，
 背景图像也许无法覆盖背景区域。

简写：
background:url() repeat scroll position/size;

背景新增功能：同一个元素多重背景设置，先写的显示在上面；
例如A：
background-image:url(test1.jpg),url(test2.jpg)...;
background-repeat:no-repeat,no-repeat...;
background-attachment:scroll,scroll...;
background-position:10px 20px,50px 60px...;
B：
background:url(test1.jpg) no-repeat scroll 10px 20px,
url(test2.jpg) no-repeat scroll 50px 60px,
url(test3.jpg) no-repeat scroll 90px 100px;
```

## 3. **文本效果**

- `text-shadow`：为文本添加阴影效果。
- `text-stroke`（非标准）：为文本绘制轮廓。
- `word-wrap`：处理长单词或URL的换行问题。
 ```css
 .text-shadow-example {
     text-shadow: 2px 2px 4px #000000; /* 添加文本阴影 */
 }
 ```

## 4. **WebFonts**

 - `@font-face`：允许网页使用自定义字体。
 ```css
 @font-face {
   font-family: 'MyCustomFont';
   src: url('myfont.woff') format('woff');
 }
 
 .custom-font-example {
   font-family: 'MyCustomFont', sans-serif; /* 使用自定义字体 */
 }
 ```

## 5. **多列布局**

 - `column-count`：设置列的数量。
 - `column-gap`：设置列之间的间隙。
 - `column-rule`：设置列之间规则线的风格。
 ```css
.multi-column-example {
     column-count: 3; /* 创建三列布局 */
     column-gap: 40px; /* 设置列间隙 */
 }
 ```

## 6. **弹性盒模型（Flexbox）**

 - `display: flex`：启用弹性盒布局。
 - `flex-direction`：定义主轴方向。
 - `justify-content`：定义项目在主轴上的对齐方式。
 - `align-items`：定义项目在交叉轴上的对齐方式。
 ```css
.flex-container {
     display: flex;
     justify-content: space-between; /* 主轴上分布空间 */
     align-items: center; /* 交叉轴上居中对齐 */
 }
 ```

## 7. **网格布局**

 - `display: grid`：启用网格布局。
 - `grid-template-columns`：定义网格列的大小。
 - `grid-template-rows`：定义网格行的大小。
 - `grid-gap`：设置网格项之间的间隙。
 ```css
.grid-container {
     display: grid;
     grid-template-columns: repeat(3, 1fr); /* 创建三列等宽网格 */
     grid-gap: 10px; /* 设置网格间隙 */
 }
 ```

## 8. **转换（Transforms）**

 - `transform`：对元素应用2D或3D转换。
 - `rotate`、`scale`、`translate`、`skew`：分别实现旋转、缩放、移动和倾斜效果。
 ```css
.transform-example {
     transform: rotate(10deg) scale(1.5); /* 旋转和缩放元素 */
 }
 ```
- 2D转换
```
1. translate(x,y) 
   元素从其当前位置，根据给定的 x 坐标和 y 坐标位置参数进行移动
   如果第二个参数未提供，则默认为0

   translateX(n)：定义 2D 转换，沿着 X 轴移动元素。 +  右  - 左 
   translateY(n)：定义 2D 转换，沿着 Y 轴移动元素。  + 下   - 上
   说明： 单位为%，参照的自身的大小

2. rotate(n deg)：定义2D旋转，在参数中规定角度;
   正值+： 是顺时针旋转       
   负值-： 为逆时针旋转
   注意：rotate和translate同时使用，当书写顺序不同时，会影响显示效果

3. scale(number,number)
   指定对象的2D缩放，第一个参数对应X轴，第二个参数对应Y轴
   如果第二个参数未提供，则默认取第一个参数的值

   scaleX(number)：指定对象X轴的（水平方向）缩放
   scaleY(number)：指定对象Y轴的（垂直方向）缩放
   0： 缩小不可见   
   <1: 缩小    
   =1: 大小不变
   >1: 放大       
   负值：翻转 再放大或者缩小

4. skew(angle ,angle)
   指定对象skew transformation（斜切扭曲）
   第一个参数对应X轴，第二个参数对应Y轴
   如果第二个参数未提供，则默认值为0

   skewX(angle)：指定对象X轴的（水平方向）扭曲
   skewY(angle)：指定对象Y轴的（垂直方向）扭曲
   注意：rotate和skew同时使用，当书写顺序不同时，会影响显示效果

5. matrix(n,n,n,n,n,n) 函数
   matrix() 方法把所有 2D 转换方法组合在一起。
   matrix() 方法需要六个参数，包含数学函数，允许：旋转、缩放、移动以及倾斜元素。
```
- 3D转换
```
CSS3 的 `transform` 属性提供了一种方式，允许你通过3D转换来改变元素的外观和位置。
以下是 `transform` 属性中3D转换相关的一些关键点总结：

1. transform-style：
   - 指定元素的子元素是应该保留其3D空间的位置还是在平面上平展。
   - 值为 `flat` 或 `preserve-3d`。

2. perspective：
   - 为元素设置透视点，影响3D空间中孩子元素的透视效果。

3. perspective-origin：
   - 指定3D空间中透视点的位置。

4. rotateX()：
   - 围绕X轴旋转元素。

5. rotateY()：
   - 围绕Y轴旋转元素。

6. rotateZ() 或 rotate()：
   - 围绕Z轴旋转元素，`rotate()` 也可以接受3D空间中的旋转角度。

7. translateX()：
   - 沿X轴移动元素。

8. translateY()：
   - 沿Y轴移动元素。

9. translateZ()：
   - 沿Z轴移动元素。

10. translate3d(x, y, z)：
    - 沿X、Y和Z轴移动元素，接受三个参数。

11. scaleX()：
    - 沿X轴缩放元素。

12. scaleY()：
    - 沿Y轴缩放元素。

13. scaleZ()：
    - 沿Z轴缩放元素。

14. scale3d(x, y, z)：
    - 在3D空间中沿X、Y和Z轴缩放元素。

15. skewX()：
    - 沿X轴倾斜元素。

16. skewY()：
    - 沿Y轴倾斜元素。

17. matrix()：
    - 应用2D和3D转换的矩阵。

18. matrix3d()：
    - 应用3D转换的4x4矩阵。

19. transform-origin：
    - 允许你改变被转换元素的参考点。

20. backface-visibility：
    - 控制元素背面的可见性。

21. 3D转换组合：
    - 可以将多个3D转换函数组合在一起，用空格分隔。
```
- 变形原点
```
transform-origin: x-axis  y-axis  z-axis；
属性允许改变被转换元素原点的位置
2D转换元素能够改变元素 x 和 y 轴 3D转换元素还能改变其Z轴

说明：
该属性只有在设置了transform属性的时候起作用；
x：left center right/length/%
y：top center bottom/length/%
z：length 
```

## 9. **过渡（Transitions）**

- `transition`：定义属性变化的过渡效果。
 ```css
.transition-example {
     transition: background-color 0.5s ease; /* 背景颜色变化的过渡效果 */
 }
 ```
- 详细解析
``` 
1. transition-property：规定设置过渡效果的CSS属性的名称
  属性值：
  none：没有属性会获得过渡效果
  all:所有属性都将获得过渡效果
  property：定义应用过渡效果的css属性名称列表，列表以逗号分隔

2. transition-duration : 规定完成过渡效果需要花费的时间（以秒或毫秒计）;

3. transition-timing-function: 规定过渡效果的速度曲线
   属性值：
   ease	规定[快-慢-快]过渡效果（cubic-bezier(0.25,0.1,0.25,1)
   linear	规定[匀速]过渡效果（等于 cubic-bezier(0,0,1,1)）
   ease-in	规定[慢速开始]过渡效果（等于 cubic-bezier(0.42,0,1,1)）
   ease-out	规定[慢速结束]过渡效果（等于 cubic-bezier(0,0,0.58,1)）
   ease-in-out	规定[慢速开始和结束]过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）
   cubic-bezier(n,n,n,n)	在 cubic-bezier 函数中定义自己的值（cubic-bezier）

4. transition-delay：定义过渡效果开始前需要等待时间，以s或ms计，默认值为0。
   作用于所有元素，包括:before和:after伪元素。

5. 简写属性
   transition: property duration timing-function delay; 
   设置多个属性的过渡效果时，中间用逗号分隔；

 注意：transition-delay与 transition-duration的值都是时间，
      所以要区分它们在连写中的位置，一般浏览器会根据先后顺序决定，
      第一个时间为 transition-duration 第二个为transition-delay。
 
 实现过渡效果：
 （1）指定要添加效果的CSS属性;
 （2）指定效果的持续时间；
 注意：如果时长未规定，则不会有过渡效果，因为默认值是 0。
      CSS 属性改变的典型事件是鼠标指针位于元素上时。
 
 在转换概念当中：是没有display这么一说的，通过改变元素的透明度去实现从无到有
```
- 外链：[cubic-bezier](http://cubic-bezier.com/)

## 10. **动画（Animations）**

    - `@keyframes`：定义动画的关键帧。
    - `animation`：应用动画到元素。
    ```css
    @keyframes example-animation {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .animation-example {
        animation: example-animation 2s infinite; /* 应用关键帧动画 */
    }
    ```

## 11. **媒体查询（Media Queries）**

- 用于根据不同的媒体类型和特性来应用不同的样式。
 ```css
 @media (max-width: 600px) {
     .responsive-example {
         background-color: lightblue; /* 当屏幕宽度小于600px时改变背景颜色 */
     }
 }
 ```

## 12. **响应式图片**

- `srcset` 和 `sizes` 属性：允许图片根据视口大小加载不同分辨率的图片。
 ```css
 .responsive-image {
     srcset: "large.jpg" 1024w, "medium.jpg" 640w, "small.jpg" 320w;
     sizes: 100vw; /* 根据视口宽度调整图片大小 */
 }
 ```

## 13. **遮罩和裁剪**

- `mask` 和 `clip-path`：用于遮罩或裁剪元素。
 ```css
 .mask-example {
     mask: url(mask.png); /* 应用遮罩图片 */
 }
 
 .clip-path-example {
     clip-path: circle(50% at center); /* 创建圆形裁剪路径 */
 }
 ```

## 14. **用户界面**

- `resize`：允许用户调整元素的大小。
- `box-sizing`：控制元素盒模型的计算方式。
```css
.ui-element {
    resize: both; /* 允许用户调整元素大小 */
    box-sizing: border-box; /* 边框和内边距包含在元素尺寸内 */
}
```

## 15. **过滤效果**

- `filter`：对元素应用图像过滤效果，如模糊、亮度调整等。
```css
.filter-example {
     filter: blur(5px) brightness(0.8); /* 应用模糊和亮度调整过滤效果 */
 }
```

## 16. **css3新增文本属性**
```
text-shadow：h-shadow v-shadow blur color；
 向文本添加一个或多个阴影，用逗号分隔的阴影列表，
 每个阴影有两个或三个长度值和一个可选的颜色值进行规定，省略的长度是0。
 属性值：
    h-shadow:水平阴影的位置。允许负值
    v-shadow:必需。垂直阴影的位置。允许负值
    blur:可选。模糊的距离。
    color:可选。阴影的颜色。
    
word-wrap:
 属性用来标明是否允许浏览器在单词内进行断句，
 这是为了防止当一个字符串太长而找不到它的自然断句点时产生溢出现象。
 属性值：
	normal:只在允许的断字点换行（浏览器保持默认处理）
	break-word:属性允许长单词或URL地址换行到下一行-会考虑尽量放在一行内，如果不行再换行
	
word-break:属性规定自动换行的处理方法
 属性值：
    normal:浏览器默认处理
	break-all:它断句的方式非常粗暴，它不会尝试把长单词挪到下一行，而是直接进行单词内的断句
	Keep-all:文本不会换行，只能在空格或连字符处换行

@font-face
@font-face是CSS3中的一个模块，主要是把自己定义的Web字体嵌入到你的网页中，随着@font-face模块的出现，
我们在Web的开发中使用字体不怕只能使用Web安全字体（@font-face这个功能早在IE4就支持）

@font-face的语法规则:
    @font-face { 
         font-family: <YourWebFontName>;
         src: <source> [<format>][, []]; 
    }
 .ttf .eot .woff
```

