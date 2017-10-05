---
permalink: /selectors/
---

# CSS selectors

[Selectors spec 笔记](https://ynotes.github.io/selectors/)

## Terminology

simple selector

```css
#id        /* id selector */
.class     /* class selector */
[name]     /* attribute selector */
a          /* type selector，元素标签 */
*          /* universal selector，表示任意的 type */
:checked   /* pseudo-class ，通常表示状态 */
```

compound selector，由 simple selectors 组成，不使用连接符。

```css
a:hover
input[name]
```

complex selector，由 compound selectors 使用连接符组成。连接符有 space(或 >>), >, +, ~。元素匹配后面的 selector, 前面的 selector 是 context。

```css
a img    /* 选中 a 的后代元素 img */
a > img  /* 选中 a 的子元素 img */
a + img  /* 选中 a 之后兄弟元素 img */
a ~ img  /* 选中 a 之后紧邻的兄弟元素 img */
```

selector list，是逗号分隔的 complex selector 列表。元素匹配列表中任意一个 selector。

```css
input[type="button"], button
```

## Selectors

- [Selectors Overview](https://yanxyz.github.io/css-selectors/)

### :nth-child()

`:nth-child(An+B [of S]?)`

- 匹配元素是它的父元素的第几个子元素，而不是匹配元素的第几个子元素。
- 子元素从 1 开始数起，也不管它是否隐藏。
- n, A, B 都是整数，n 从 0 开始。参数可以是 odd(即 2n+1)，even(即 2n)。
- S 是 selector list, 默认是 `*`。目前只有 Safari 实现。

表格斑马条纹

```css
tr {
  background: white;
}

tr:nth-child(even) {
  background: silver;
}
```

```css
li:nth-child(3)            /* 第三个 li */
li:nth-child(-n + 3)       /* 头三个 li */
li:nth-last-child(-n + 3)  /* 后三个 li */
```

### :checked

表示 checked checkboxes, checked radio buttons, selected option

### :empty

表示 element 为空。只考虑 element 和 text 节点，不考虑 comment 等节点。

## Specificity

- [计算 selector 的 specificity](https://ynotes.github.io/selectors/index.html#specificity-rules)

```css
#link:hover > img    /* (1, 1, 1) */

:not(em, #foo)       /* (1, 0, 0) */
:matches(em, #foo)
/* #foo   (1, 0, 0)
   em     (0, 0, 1)
   em#foo (1, 0, 0)
*/

:nth-child(even of li, .item)
/* .item     (0, 2, 0)
   li.item   (0, 2, 0)
*/
```

除了上面的计算，还要考虑优先级。优先级由低到高

1. stylesheets，分为
    - external stylesheets 即 `<link>` 引入的 css file
    - internal stylesheet 即 `<style>`
1. inline styles，即 style attribute
1. !important

