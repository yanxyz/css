---
permalink: /z-index/
---

# z-index

每个 element box 都有一个 stacking context，决定 box 的上下叠放顺序。

下面 elements 创建 stacking context，可以使用 z-index

- root element
- postion: !static
- opacity
- flex item

## z-index property

```
Value: auto | integer
```

auto, 指定 box 在当前 stacking context 的层级为 0，不创建新的 stacking context

integer, 指定 box 在当前 stacking context 的层级，并创建新的 stacking context。
