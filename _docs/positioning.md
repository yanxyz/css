---
permalink: /positioning/
---

# CSS positioning

## position

```
position: static | relative | absolute | fixed | sticky
```

- positioned elements，position 为 relative, absolute, fixed 或 sticky。
- relatively positioned elements，position 为 relative。
- absolutely positioned elements，position 为 absolute, fixed。
- stickily positioned elements，position 为 sticky。

positioned elements 可以使用 offsets: left, right, top, bottom。

```
value: auto | <length> | <percentage>
```

- [position property](https://ynotes.github.io/css2/visuren.html#choose-position)

### relative

仍然在文档流中。它的 containg block，跟 normal boxes 一样，是 block container 的 content edge。

offsets 是相对于自身。其它 boxes 忽略它的 offsets。

### absolute

脱离文档流，其它 boxes 当它不存在，不能撑起 containing block 的高度。

containg block 是最近定位祖先的 **padding edge**。

尺寸计算，即怎么处理 width, height, offsets，margin 为 auto 的情况。

- [10 Visual formatting model details](https://ynotes.github.io/css2/visudet.html)
- [demo](https://yanxyz.github.io/css-tests/position/absolute/a.html)



### fixed

同 absolute，只是 containing block 为 viewport。

### sticky




## z-index

```
z-index: auto | <integer>
```

只应用于 positioned elements。

auto 意思是在 local stacking context 中 stack level 为 0，不创建新的 stacking context；

integer N 意思是在 local stacking context 中 stack level 为 N，同时创建新的 stacking context。N 可以是负值。

stack level 在同一 stacking context 内比较，不然要看祖先元素的情况。stack level 大的在上面；一样的，文档位置靠后的在上面。

- [z-index property](https://ynotes.github.io/css2/visuren.html#z-index)

