---
permalink: /data-types/
toc: true
---

# data types

### `<angle>`

一个完整的圆

360deg = 400grad = 2πrad = 1turn


### `<color>`

```css
color: red;
```

有这几种

- 关键字，如 red, transparent, currentColor
- 十六进制标记，如 #fff, #d1d1d1
- 函数，如 rgb()


### `<length>`

```css
width: 100px;
height: 0; /* 0 可以省略单位 */
```

单位有很多，分为两大类。

- 相对长度，比如 em, rem
- 绝对长度，比如 px

0 可以省略单位，注意只有 `<length>` 可以，其它类型不可以省略单位。

### `<string>`

```css
.clearfix::before {
  content: '';
}
```

单引号和双引号没有区别。

### `<time>`

```css
transition: all .3s;
```

单位 s, ms。

### `<url>`

```css
background: url('bar.png');
```

url，单引号，双引号，无引号均可。

相对地址相对于样式表的地址，而不是页面的地址。


