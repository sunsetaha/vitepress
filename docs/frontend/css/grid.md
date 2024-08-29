# Grid布局

## 基本概念
- 容器（Container）：使用 `display: grid | inline-grid;` 声明的元素，它会成为Grid容器。
- 项目（Item）：容器内的直接子元素，称为Grid项目。
- 轨道（Track）：容器内的行或列，称为Grid轨道。

## 容器属性
1. `grid-template-columns` 和 `grid-template-rows`
    - 定义行和列的大小和数量。
    - 可以是固定的像素值、百分比或使用fr单位表示相对大小。
   ```
    // fr 是fraction 的缩写，意为"片段"，可以与绝对长度的单位结合使用
    grid-template-columns: 100px 1fr 1fr;                
    grid-template-columns: 1fr 1fr 1fr;
   
    // repeat()接受两个参数，第一个参数是重复的次数，第二个参数是要重复的值。
    grid-template-columns: repeat(3, 1fr);     
             
    // minmax()函数产生一个长度范围，表示长度就在这个范围之中。
    // 它接受两个参数，分别为最小值和最大值。 
    grid-template-columns: 1fr 1fr minmax(100px, 1fr);   
   
    // 空白匿名网格 
    grid-template-columns: repeat(auto-fill, 100px);     
   
    // 空白匿名网格折叠合并
    grid-template-columns: repeat(auto-fit, 100px);
   
    // 让尺寸适应于内容，但不超过设定的尺寸,只支持数值和百分比值
    grid-template-columns: fit-content(100px) fit-content(100px) 40px auto; 
   ```
   **grid-template-rows  //  使用方法与列相同**

2. `grid-template-areas`
   - 使用名称定义网格区域，以便在布局中引用。

3. `gap`
   - 定义行和列之间的间隙。
   ``` 
   row-gap: 20px;       // 行间距
   column-gap: 30px;    // 列间距
   gap: 20px;           // 行列间距
   ```
   
4. `grid-auto-rows` 和 `grid-auto-columns`
   - 定义自动创建的行和列的大小。

5. `grid-auto-flow`
   - 控制项目在网格中的放置顺序，默认是row。

6. `justify-items` 和 `align-items`
   - 定义项目在网格内的对齐方式。
   - 值：`start`、`end`、`center`、`stretch`
   ``` 
   /* 单元格内容的水平对齐方式 */
   justify-items: stretch;
   /**
     * stretch：【默认值】拉伸，占满单元格的整个宽度。
     * start：对齐单元格的起始边缘。
     * end：对齐单元格的结束边缘。
     * center：单元格内部居中。
     */
   
   /* 指定单元格内容的垂直对齐方式 */
   align-items: start;
   /**
     * normal：【默认值】会根据使用场景的不同表现为stretch或者start。
     * stretch：拉伸，占满单元格的整个宽度。
     * start：对齐单元格的起始边缘。
     * end：对齐单元格的结束边缘。
     * center：单元格内部居中。
     * baseline：基线对齐（align-items属性特有属性值）
     */
   ```
   
7. `place-items`
   - `justify-items` 和 `align-items` 的简写形式。

## 项目属性

1. `grid-row` 和 `grid-column`
   - 指定项目在网格中的行和列的位置。

2. `grid-area`
   - 使用在grid-template-areas中定义的名称来放置项目。

3. `justify-self` 和 `align-self`
   - 控制单个项目在行和列上的对齐方式，覆盖容器的justify-items和align-items。

4. `place-self`
   - `justify-self` 和 `align-self` 的简写形式。

## 布局线和命名
- grid-line：Grid布局中的行和列由线定义，可以通过数字或名称引用。
- Named grid lines：可以给行和列命名，方便在项目定位时引用。

## 布局模式
- 固定大小：通过指定具体的像素值或百分比来设置行和列的大小。
- 最小最大值：使用minmax()函数定义行和列的最小和最大尺寸。
- 自动大小：使用auto关键字或fr单位来自动分配空间。