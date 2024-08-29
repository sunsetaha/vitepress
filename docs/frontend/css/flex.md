# Flex 布局
## 基本概念
- 容器（Container）：使用 `display: flex | inline-flex;` 声明的元素，它会成为Flex容器。
- 项目（Item）：容器内的直接子元素，称为Flex项目。

## 容器属性
1. `flex-direction`
   - 决定主轴的方向（行或列）。
   - 可选值：row（默认） | row-reverse | column | column-reverse;
   ```
   flex-direction: row;
   ```
2. `flex-wrap`
   - 定义Flex项目是否换行。
   - 可选值：nowrap（默认） | wrap | wrap-reverse;
   ```
   flex-direction: wrap;
   ```
3. `flex-flow`
   - flex-direction 和 flex-wrap 的简写形式。
   ```
   flex-flow: row wrap;
   ```
4. `justify-content`
   - 定义项目在主轴上的对齐方式。
   - 可选值：flex-start（默认） | flex-end | center | space-between | space-around;
   ```
   justify-content: space-between;
   ```
5. `align-items`
   - 定义项目在交叉轴上的对齐方式。
   - 可选值：flex-start（默认） | flex-end | center | baseline | stretch;
   ```
   align-items: center;
   ```
6. `align-content`
   - 定义多根轴线的对齐方式。
   - 可选值: flex-start（默认） | flex-end | center | space-between | space-around | space-evenly;
   - 仅当flex-wrap 为 wrap 时有效。
   ```
   align-content: center;
   ```

## 项目属性
1. `flex-grow`
   - 定义项目在分配多余空间时的放大比例。
   - 默认为0，即存在剩余空间也不放大；值为数字，且大于等于0。
   ```
   flex-grow: 1;
   ```
2. `flex-shrink`
   - 定义项目在分配多余空间时的缩小比例。
   - 默认为1，即空间不足时会缩小；值为0，即使空间不足时也不缩小。
   ```
   flex-shrink: 0;
   ```
3. `flex-basis`
   - 定义项目在主轴上的默认大小。
   - 默认为auto，即根据项目本来大小。可取固定的像素值，百分比，或者其他CSS单位。
   ```
   flex-basis: 100px;
   ```
4. `flex`
   - flex-grow, flex-shrink 和 flex-basis 的简写形式。
   - 语法：flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]。
   ```
   /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
   flex: 1;
   ```
5. `align-self`
   - 定义单个项目有与其他项目不一样的交叉轴对齐方式。
   - 可选值：auto（默认，继承父容器的align-items） | flex-start | flex-end | center | baseline | stretch;
   ```
   align-self: flex-start;
   ```
   
## 个人编程习惯

### 定义全局css代码
```css
.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}


/* 元素居中 */
.flex-center {
    justify-content: center;
    align-items: center;
}


/* justify 在主轴上的对齐方式 */
/* 排列方式 间隔平均 两端留空*/
.flex-justify-around {
  justify-content: space-around;
}

/* 排列方式 间隔平均 两端对齐*/
.flex-justify-between {
  justify-content: space-between;
}

/* 排列方式 居中*/
.flex-justify-center {
  justify-content: center;
}

.flex-justify-start {
  justify-content: flex-start;
}

.flex-justify-end {
  justify-content: flex-end;
}


/* align-items 属性定义项目在交叉轴上如何对齐 */
/* 对齐方式 居左/上 */
.flex-start {
  align-items: flex-start;
}

/* 对齐方式 居中 */
.flex-align-center {
  align-items: center;
}

/* 对齐方式 居右/下 */
.flex-end {
  align-items: flex-end;
}



/* 换行 */
.flex-wrap {
    flex-wrap: wrap;
}

/* flex 包裹的item */
/* item不缩放 */
.flex-shrink-0 {
  flex-shrink: 0;
}

```

### 使用例子
1. 水平居中两端对齐
```html
class="flex-row flex-justify-between  flex-align-center"
```
2. 项目不缩放、换行
```html
class="flex-shark-0 flex-wrap"
```
3. 项目垂直居中、水平居中
```html
class="flex-row flex-center"
```
> 可复制代码到项目自由组合查看效果 (ง •_•)ง

### 推荐阅读
[Flex布局教程-阮一峰](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)