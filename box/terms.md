# CSS 术语

### replaced elements

替换元素，比如 img, input

- [Replaced element](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element)

### non-replaced elements

非替换元素，跟替换元素是相对概念。

## Visual formatting model

以下术语来自 [Visual formatting model](https://ynotes.yanxyz.io/css2/visuren.html)

### normal flow

常规流。

### viewport

视口，对于桌面浏览器来说，即浏览器页面浏览区域。移动浏览器不大一样。

### containing block

包含块。

box 的尺寸和位置（比如百分数值，偏移）是根据 containing block 确定。

root element 为 initial containing block。

`position: static | relative` 最近的 block container 的 content edge。

`position: absolute` 最近的 positioned element 的 padding edge。

`position: fixed` viewport。

[Visual formatting model details](https://ynotes.github.io/css2/visudet.html#inline-width)


### block formatting context {#bfc}

block-level boxes 如何排版。

margin collapse, float 都发生在同一 BFC 内。

- 可以阻止 margin collapse
- 可以包住 floats

创建新的 BFC

- overflow 不为 visible
- float 不为 none

- [What is Block Formatting Context (BFC)?](http://lucybain.com/blog/2015/css-block-formatting-context/)

### inline formatting context

inline-level boxes 如何排版。

### line box

line box，顾名思义，是文字排版中的行。它是抽象概念，没有对应 element。

line box 没有 padding, border, margin。

line box height
