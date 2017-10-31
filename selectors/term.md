# 术语

selector 指的是 simple selector, compound selector, complex selector, 或 selector list。

### simple selector

```css
#id        /* id selector */
.class     /* class selector */
[name]     /* attribute selector */
a          /* type selector，元素标签 */
*          /* universal selector，表示任意的 type */
:checked   /* pseudo-class ，通常表示状态 */
```

### compound selector

由 simple selectors 组成，不使用连接符。

```css
a:hover
input[name]
```

### complex selector

由 compound selectors 使用连接符组成。
连接符有 space(或 >>), >, +, ~。

匹配后面的 selector, 前面的 selector 是 context。

```css
a img    /* 选中 a 的后代元素 img */
a > img  /* 选中 a 的子元素 img */
a + img  /* 选中 a 之后兄弟元素 img */
a ~ img  /* 选中 a 之后紧邻的兄弟元素 img */
```

### selector list

是逗号分隔的 complex selectors 列表。元素匹配列表中任意一个 selector。

```css
input[type="button"], button
```
