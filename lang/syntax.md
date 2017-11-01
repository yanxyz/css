# CSS 语法

注释

```css
/* 注释 */
```

### 是否区分大小写？

CSS 属性名字，CSS 关键字不区分大小写。

id, class selector 要和 HTML 一致。

`<custom-indet>` 自定义标识符，区分大小写。

##

CSS 语句有两种：rule, at-rule。

```
stylesheet
    at-rule
    rule
        selector
        declaration block
            declaration
                property:value
```

一些 at-rules，如媒体查询 @media，可以包含其它语句，这些内部语句称为 nested statements。
