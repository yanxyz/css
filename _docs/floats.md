---
permalink: /floats/
---

# Floats

- [Visual formatting model 9.5 Floats](https://ynotes.github.io/css2/visuren.html#floats)

浮动可以实现文字环绕的效果，也是常用的布局方法。

## float property

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


## clear property

[clear property](https://ynotes.github.io/css2/visuren.html#flow-control)

clear 取消文字环绕。

只有 block 可以使用 clear。

- 非浮动的 block 元素的 top border 在 float 的 margin box 的下面。
- 浮动的元素的 top margin 在 float 的 margin box 的下面。

## clearfix

元素在浮动之后脱离常规流，也就不能撑起父元素的高度。怎么办？

方法一，父元素创建 BFC（block formating context）

```css
overflow: hidden; /* 不是 visible */
```

方法二，浮动元素之后的元素使用 clear

```html
<div style="clear: both"></div>
```

通常用伪类实现

```css
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```

- <http://cssmojo.com/the-very-latest-clearfix-reloaded/>
- <http://nicolasgallagher.com/micro-clearfix-hack/>

方法三，`display: flow-root`

Chrome 58
