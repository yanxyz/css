# values

property 的最终值，计算步骤

1. specified value
1. computed value
1. used value
1. actual value


## Cascade

样式表有三个来源：author, user, user agent。

- author, 网页作者
- user, 用户样式表，IE
- user agent，一般是 browser。


## inheritance

继承的意思是，元素的属性使用它的父元素的计算值。例如 [line-height](line-height.md)

根据是否默认继承，属性可分为

- inherited properties
- non-inherited properties

每个属性都有一个值：inherit。

- 对于 non-inherited properties，强制它使用 parent 的计算值。
- 对于 root element，它没有 parent, 属性使用它的 initial value。

相关 keywords

- initial, 属性使用它的 initial value。IE 不支持。
- unset, inherited property 使用继承的值，non-inherited property 使用它的 initial value。IE 不支持。
- revert, 属性使用 user 或 user agent 的值。

##

- <https://www.w3.org/TR/CSS22/cascade.html#value-def-inherit>
- [CSS Cascading and Inheritance Level 4](https://drafts.csswg.org/css-cascade/#default)

