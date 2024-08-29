# CSS3 动画
> CSS3 动画是一个强大的功能，它允许你在网页上创建平滑和吸引人的动画效果，无需使用JavaScript。

## 1. **`@keyframes` 规则**
- 这是定义动画效果的地方。你可以指定动画的开始 (`from`)、结束 (`to`) 或者任何中间阶段的样式。

```css
@keyframes example {
 from { opacity: 0; }
 to { opacity: 1; }
}
```

## 2. **`animation` 属性**
- 用于在一个选择器上应用动画。它可以包含多个与 `@keyframes` 相关联的值。

```css
.animation-example {
 animation: example 5s infinite alternate;
}
```
- 详细解析
``` 
1. animation-name：检索或设置对象所应用的动画名称，必须与规则@keyframes配合使用；
   
2. animation-duration：检索或设置对象动画的持续时间（s/ms）
 
3. animation-timing-function：检索或设置对象动画的过渡类型
    属性值：
    linear：线性过渡。等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0)
    ease：平滑过渡。等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0)
    ease-in：由慢到快。等同于贝塞尔曲线(0.42, 0, 1.0, 1.0)
    ease-out：由快到慢。等同于贝塞尔曲线(0, 0, 0.58, 1.0)
    ease-in-out：由慢到快再到慢。等同于贝塞尔曲线(0.42, 0, 0.58, 1.0);
    cubic-bezier(num, num, num, num)：特定的贝塞尔曲线类型，4个数值需在[0, 1]区间内
    以上属性值，效果上，关键帧之间会插入补间动画，
    所以动画效果是连贯性的，是线性动画的效果。
    
    steps()函数/step-start/step-end：实现的动画是没有过渡效果的，而是一帧帧的变化；
    语法：
    steps(次数，start/end)
    第一个参数指定了时间函数中的间隔数量（必须是正整数）;
    第二个参数可选，start和end，指定在每个间隔的起点或是终点发生阶跃变化，默认为 end；
    step-start等同于steps(1,start)，动画分成1步，动画执行时为开始端点的部分为开始；
    step-end等同于steps(1,end)：动画分成1步，动画执行时以结尾端点为开始，默认值为end。
    
4. animation-delay：检索或设置对象动画延迟的时间(s/ms)
      属性值：+ - 
 
5. animation-iteration-count：检索或设置对象动画的循环次数（默认执行1次）
    属性值：
      infinite：无限循环     number: 循环的次数
      
6. animation-direction ：检索或设置对象动画在循环中是否反向运动
     属性值：
      normal：正常方向
      reverse：反方向运行
      alternate：动画先正常运行再反方向运行，并持续交替运行
      alternate-reverse：动画先反运行再正方向运行，并持续交替运行
      
7. animation-fill-mode：规定对象动画时间之外的状态;
     属性值：
     none：
        不改变默认行为。
     forwards：
        当动画完成后，保持最后一个属性值（在最后一个关键帧中定义），固定动画。
     backwards：
        在animation-delay所指定的一段时间内，
        在动画显示之前，应用开始属性值（在第一个关键帧中定义）。
     both：
        向前和向后填充模式都被应用。

8. animation-play-state：检索或设置对象动画的状态
    属性值：
      running:运动 - 默认值
      paused: 暂停

简写：animation 
  (1) 此属性是所有动画属性的简写属性，除了animation-play-state属性 
  (2) 一个动画多个属性值中间空格隔开；想要设置多个动画时，动画之间用逗号分隔；
  (3) 必须定义动画的名称和时长,如果忽略时长,则动画不会执行，因为默认值是 0;
```

## 3. **动画阶段**
- 动画可以有不同的阶段，如开始、结束或指定的百分比阶段。

```css
@keyframes example {
 0% { opacity: 0; }
 50% { opacity: 0.5; }
 100% { opacity: 1; }
}
```

## 4. **动画时长** (`animation-duration`)：
- 指定动画完成一个周期所需的时间。

```css
.example {
 animation-duration: 2s;
}
```

## 5. **动画延迟** (`animation-delay`)：
- 指定动画开始之前的等待时间。

```css
.example {
 animation-delay: 1s;
}
```

## 6. **动画迭代** (`animation-iteration-count`)：
- 指定动画应该播放的次数。`infinite` 表示无限循环。

```css
.example {
 animation-iteration-count: infinite;
}
```

## 7. **动画方向** (`animation-direction`)：
- 指定动画应该正向播放、反向播放或交替播放。

```css
.example {
 animation-direction: alternate;
}
```

## 8. **动画填充模式** (`animation-fill-mode`)：
- 指定动画在开始和结束时应用的样式。

```css
.example {
 animation-fill-mode: forwards;
}
```

## 9. **动画播放状态** (`animation-play-state`)：
- 控制动画的播放和暂停状态。

```css
.example {
 animation-play-state: paused;
}
```

## 10. **复合动画**
- 可以在一个元素上应用多个动画，它们将并行运行。

```css
.combined-example {
  animation: example1 5s infinite, example2 3s infinite alternate;
}
```

## 11. **使用 CSS3 变换**
- 动画可以包含变换，如旋转、缩放、移动和倾斜。

```css
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

## 12. **响应式动画**
- 动画可以根据媒体查询适应不同的屏幕尺寸。

```css
@media (max-width: 600px) {
    .example {
        animation: none;
    }
}
```

## 13. **动画性能**
- CSS3 动画通常由浏览器优化，使用硬件加速，可以提供平滑的动画效果。

## 14. **兼容性和前缀**
- 需要注意浏览器的兼容性和可能需要的厂商前缀，尽管大多数现代浏览器都支持无前缀的CSS3动画属性。

