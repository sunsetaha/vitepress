# HTML 图像映射（也称为图像热点链接）
> 是一种通过在图片上定义可点击区域来实现不同链接的功能。

## 实现流程

1. **定义图片**：首先，需要一张图片，并通过 `<img>` 标签将其插入到 HTML 文档中。使用 `usemap` 属性来引用定义热点的 `<map>` 元素。

```html
<img src="image.jpg" alt="描述" usemap="#mapName">
```

2. **创建映射**：使用 `<map>` 标签定义图像映射，并通过 `name` 属性为其命名，该名称应与 `usemap` 属性的值相对应。

```html
<map name="mapName">
  <!-- 热点区域将在这里定义 -->
</map>
```

3. **添加热点区域**：在 `<map>` 标签内部使用 `<area>` 标签来定义热点区域。`<area>` 标签有几个关键属性：
    - `shape`：定义热点区域的形状，可以是 `rect`（矩形）、`circle`（圆形）或 `poly`（多边形）。
    - `coords`：根据热点区域的形状，提供相应的坐标值。矩形需要四个值（左上角和右下角的 x,y 坐标），圆形需要三个值（中心点的 x,y 坐标和半径），多边形需要一系列 x,y 坐标点。
    - `href`：定义热点区域的链接地址。
    - `alt`：提供热点区域的替代文本，用于图像不可用时显示。

```html
<area shape="rect" coords="x1,y1,x2,y2" href="link.html" alt="热点区域描述">
```

4. **获取坐标值**：可以使用图像编辑软件或在线工具来获取图片上特定区域的坐标值。一些工具如 Dreamweaver 提供了热点工具来帮助定义和获取坐标 。

5. **样式和行为**：可以通过 CSS 和 JavaScript 来增强热点链接的样式和交互行为，例如改变鼠标悬停时的样式或添加点击效果。

6. **可访问性**：确保为图像和热点区域提供适当的 `alt` 文本，以提高可访问性。

## 简单示例

```html
<img src="solar_system.jpg" alt="太阳系" usemap="#solarMap">
<map name="solarMap">
  <area shape="circle" coords="50,50,10" href="sun.html" alt="太阳">
  <area shape="rect" coords="30,80,60,110" href="mercury.html" alt="水星">
  <area shape="circle" coords="85,50,15" href="venus.html" alt="金星">
</map>
```

在这个示例中，太阳系的图片被定义了三个热点区域，分别链接到太阳、水星和金星的页面。每个热点区域都配有描述性的替代文本，以提高可访问性。
