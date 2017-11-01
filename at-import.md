# @import

@import 导入其它样式表的规则。

@import 必须放在其它规则的前面，@charset 除外。@charset 必须是第一个规则。

@import 既不能包含其它规则，也不能用在其它规则内（如 @media）。

```
@import url list-of-media-queries;
```

url 是 string 或 `<url>`

```scss
@import '_reset.css';
```

media queries，若浏览器不支持，不会导入。
