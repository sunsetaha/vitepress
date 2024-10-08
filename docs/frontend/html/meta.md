# 常用的 HTML `<meta>` 标签
> HTML中的`<meta>`标签用于在HTML文档的`<head>`部分定义元数据（metadata），这些元数据不显示在页面上，但对浏览器、搜索引擎和其他Web服务有重要作用。

以下是一些常用的`<meta>`标签及其用途：

## 1. 字符集(Character Set)
 ```html
 <meta charset="UTF-8">
 ```
这个标签用于指定字符集，以便正确显示文本字符。
## 2. 视口(Viewport)
 ```html
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 ```
 这个标签用于设置视口，以适应不同的设备。
## 3. 关键词(Keywords)
```html
 <meta name="keywords" content="前端,开发,教程">
```
尽管搜索引擎已经不重视此标签，但它仍然用于指定页面的主题关键词。
## 4. 描述(Description)
```html
   <meta name="description" content="这是一个关于前端开发的教程网站">
```
描述元标签提供页面的简短描述，对SEO非常重要，经常出现在搜索引擎的结果摘要中。
## 5. 作者(Author)
```html
   <meta name="author" content="张三">
```
指定页面的作者，但对SEO影响不大。
## 6. 刷新(Refresh)
```html
    <meta http-equiv="refresh" content="5; url=http://example.com/newpage">
```
可以让页面在一定时间后自动刷新或重定向到另一个URL。
## 7. 机器人(Robots)
```html
      <meta name="robots" content="noindex, nofollow">
```
控制搜索引擎的爬虫行为，如禁止索引页面或跟随链接。

等等，这些<meta>标签帮助开发者控制页面的多种特性，从SEO到用户体验，再到跨平台和设备的兼容性。