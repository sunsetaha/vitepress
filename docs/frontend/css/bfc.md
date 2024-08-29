# BFC
> CSS中的BFC（Block Formatting Context，块级格式化上下文）是一个独立的渲染区域，用来布局块级盒子；BFC的创建和特性对于理解CSS的布局和渲染非常重要。

## 触发BFC的条件

1. 根元素(`<html>`)
2. 浮动元素（float不是none）
3. overflow值`不为visible`的块元素
4. 定位元素（元素的position为`absolute`或`fixed`）
5. 行内块元素（元素的display为 `inline-block`）
6. `表格单元格`（元素的display为 table-cell(td th)，HTML表格单元格默认为该值）
7. `表格标题`（元素的display 为 table-caption(caption)，HTML表格标题默认为该值）
8. `表格其他元素`（元素的 display为 table、table-row(tr)、 table-row-group(tbody)、table-header-group(thead)、table-footer-group(tfoot)或 inline-table
9. display 值为`flow-root`、`flex`的元素
10. contain 值为`layout`、`content`或`paint`的元素
11. `弹性元素`（display为flex或inline-flex元素的直接子元素）
12. `网格元素`（display为grid或inline-grid元素的直接子元素）
13. `多列容器`（元素的column-count或column-width不为auto，包括column-count为1）
14. `column-span为all`的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。

## BFC的特性

1. **内部盒子垂直排列**：BFC内的盒子会垂直排列。
2. **垂直边距折叠**：BFC内的相邻块级盒子的垂直边距会发生折叠。
3. **外部边距不会折叠**：BFC之间的垂直边距不会发生折叠。
4. **不与float重叠**：BFC不会与float重叠。
5. **可以包含浮动元素**：BFC可以包含浮动的子元素。
6. **创建隔离的布局环境**：BFC内的布局不会影响外部环境。

## BFC的应用

1. **防止边距折叠**：通过创建BFC来防止相邻块级元素的边距折叠。
2. **清除浮动**：利用BFC的特性来清除浮动，例如在父元素上设置`overflow: auto;`。
3. **自适应多栏布局**：通过创建多个BFC来实现多栏自适应布局。
4. **防止元素被浮动元素覆盖**：通过创建BFC来防止文本流环绕浮动元素。

## 示例代码

```html
    <div class="container">
      <div class="child">浮动元素</div>
      <div class="child">另一个浮动元素</div>
    </div>
    
    <style>
        .container {
            overflow: hidden; /* 创建BFC */
        }
    
        .child {
            float: left; /* 触发BFC */
        }
    </style>
```
在这个示例中，`.container`通过设置`overflow: hidden;`创建了一个BFC，这样它的子元素`.child`即使设置了`float`也不会影响外部布局。

## 注意事项

- BFC是块级格式化上下文，与文档流中的块级盒子相关。
- BFC内的块级盒子会按照正常的文档流进行布局。
- BFC可以防止某些布局问题，但过度使用可能会影响性能。
