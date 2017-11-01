## Selectors 概览

下表来自 [Selectors Specification](https://drafts.csswg.org/selectors/#overview)

<!-- 更新 https://github.com/yanxyz/css-selectors-overview/ -->

{% include selectors-overview.html %}

### Universal selector

`*`，匹配任意 type 元素

获取所有元素

```js
document.getElementsByTagName('*')
document.querySelectorAll('*')
```

### Attribute selectors

`E[foo="bar" i]`, i 表示 ignore case，值不区分大小写

```css
E[foo="bar" i]
E[foo|="bar" i]
```



### `:dir`



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
