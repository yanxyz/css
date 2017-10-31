---
permalink: /variables/
---

# CSS 变量

CSS 变量，切确的说是自定义属性

```css
:root {
  --main-color: #06c;
}

h1 {
  color: var(--main-color);
}
```

`--main-color` 是一个自定义属性。
`var()` 函数获取自定义属性的值。不要求自定义属性放在 `var()` 前面。

## 自定义属性

自定义属性的名字以 `--` 开始。为什么不以 `$` 开始？
`$` 未来可能用于 CSS macros，[见这](http://www.xanthir.com/blog/b4KT0)。

自定义属性的名字区分大小写，`--main-color` 和 `--Main-Color` 是不同的自定义属性。

自定义属性跟普通属性一样有 cascade rules

```css
:root { --color: blue; }
div { --color: green; }
#alert { --color: red; }
```

自定义属性的值可以来自另一个自定义属性

```css
:root {
  --primary-color: red;
  --logo-text: var(--primary-color);
}
```

## `var()`

```
var(<custom-property-name> [, <declaration-value> ]? )
```

custom-property-name 是自定义属性的名字，
declaration-value 是 fallback value，在找不到自定义属性时，使用这个值。

```css
.component .header {
  color: var(--header-color, blue);
}
```

## 与 CSS preprocessors 变量的区别

CSS 变量是自定义属性，不能用于 selectors。

自定义属性可以在运行时（runtime）修改。 preprocessors 变量只存在于源码中，编译出来的 CSS 没有变量。



自定义属性可以出现在 media queries 内

```css
@media (min-width: 600px) {
  :root {
    --gutter: 16px;
  }
}
```

## 资料

- [CSS Variables: Why Should You Care?](https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care)
