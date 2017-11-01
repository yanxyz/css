# clearfix

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
