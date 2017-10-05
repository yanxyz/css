---
permalink: /box/
---

# CSS box

## 定义

box: content, padding, border, margin

## 尺寸

width, height, margin, offsets(left, right, top, bottom) 属性计算值为 auto 时，如何确定应用值？

#### inline, non-replaced elements

忽略 width, height。

margin 为 auto 时，应用值是 0。

#### block-level, non-replaced elements

水平方向上满足一个等式

```
'left' + 'margin-left' + 'border-left-width' + 'padding-left' + 'width' + 'padding-right' + 'border-right-width' + 'margin-right' + 'right' = width of containing block
```

width 为 auto 时，其它 auto 都为 0。即块级元素的宽默认是父元素的宽。

margin-left 和 margin-right 都为 auto 时，它们的应用值相等。即块级元素水平居中（width 不为 auto）。

##### 垂直方向上

margin-top 或 margin-bottom 为 auto 时，其应用值为 0。

height 为 auto 时，如果没有内容则为 0（不考虑不在常规流中的内容）。



#### replaced elements

width 或 height 为 auto 时，使用内在 width 或 height。

#### inline-block elements

跟 replaced elements 比较类似。

## line box

