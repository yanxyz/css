# CSS Media Queries

[Spec](https://drafts.csswg.org/mediaqueries/)


```html
<link rel="stylesheet" media="screen and ()"  href="example.css">
```

```css
@import url(example.css) <media-queries>;

@media <media-queries> {

}
```

一个 media query 组成部分

- 一个可选的 media query modifier
- 一个可选的 media type
- 一个可选的 media condition



多个 media queries 可以组成一个逗号隔开的 media query list。其中一个为 true, 这个 list 为 true; 全部为 false 时，list 才为 false。


## MediaQueryList

[MediaQueryList Interface](https://drafts.csswg.org/cssom-view/#the-mediaquerylist-interface)


