# float property

```
float: none | left | right
```

元素浮动之后，脱离常规流，不占据原有空间，其它 box 视它不存在。脱离常规流不稀奇，绝对定位元素等也如此，而浮动独特之处是，浮动元素移动到它所在行的一端，左浮动在左端，右浮动在右端；与浮动元素并排的 line box 变短，为它让出空间，形成文字环绕的效果。

浮动元素不会跟毗邻元素合并边距（marge collapse）。

浮动元素 display 计算值为 block，因此不必对它重复声明 `display: block`。

#### 浮动元素尺寸

floats 的 containing block 是？

margin-* 为 auto 时，其应用值是 0。

对于 replaced elements，width 或 height 为 auto 时，使用其内在值。

对于 non-replaced elements，width 为 auto 时, 为 shift-to-fit width；height 为 auto 时，为后代元素撑起的高度。这里后代元素包含float 创建一个 BFC（Block Formatting Context），BFC 的特点是包含它


#### float 属性被忽略

以下情况元素会忽略 float 属性

- absolutely positioned
- flex item
