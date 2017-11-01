# CSS transitions

[Spec 笔记](https://ynotes.github.io/css-transitions/)

## 属性

transition-* 属性的值可以是一个逗号列表，以 transition-property 的值为基准截长补短。

```css
transition-property: opacity, left, top, width;
transition-duration: 2s, 1s;
/* transition-duration: 2s, 1s, 2s, 1s; */
```

transition 是简写属性，若包含两个时间，第一个时间是 transition-duration，第二个时间是 transition-delay。

```css
transition: all .7s .4s ease-in-out;
/*
transition-property: all;
transition-duration: .7s;
transition-timing-function: ease-in-out;
transition-delay: .4s;
*/
```

## 事件

transitionend 在 transition 完成时触发。如果在 transition 完成之前，更改了 transition-property 或元素 `display: none`，则不会触发此事件。
