---
permalink: /multicol/
---

# CSS Multi-column Layout

[CSS Multi-column Layout Module Level 1](https://drafts.csswg.org/css-multicol/)

## Columns

下面属性声明多列布局

```
columns: <column-width> || <column-count>
column-width: auto | <length>
column-count: auto | <integer>
```

column-width 是理想列宽，实际列宽可能更宽或更窄。

通常不需要同时声明 column-width 和 column-count。

**multicol element**，其 column-width 或 column-count 不为 auto。它创建新的 BFC，它的子元素不会和它 collapse margin。

multicol element 的内容分布在 column boxes 中。同行 column boxes 等宽等高，目前 column boxes 不能设置单独的属性。

## Column gaps and rules

相邻 column boxes 之间可以有一个 column gap，其宽度用 column-gaps 指定

```css
column-gap: normal | <length-percentage>
```

百分数相对于 multicol element 的 content width。

column-gaps 的正中可以有一道 column rule。column rules 不占用空间。

```css
column-rule: <column-rule-width> || <column-rule-style> || <column-rule-color>
column-rule-width: <border-width>
column-rule-style: <border-style>
column-rule-color: <color>
```

column-rule 跟 border 类似。

column-rule-style 为 none 或 hidden 时，column-rule-width 的计算值为 0。

