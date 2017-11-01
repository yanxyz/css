# backgrounds


## 背景区域

background painting area，背景绘制区域

- `background-clip: border-box` 绘制区域尺寸

background positioning area，背景图片定位区域

- `background-origin: padding-box` 定位区域尺寸
- `background-position: 0% 0%` 图片在定位区域中的位置。

如果说元素是一面墙，background-origin 和 background-position 决定图片贴在墙上的位置；background-clip 是画框; background-size 决定图片的大小。

### background-position

```
background-position: x y
background-size: a b
background-position-area: A B
offset: (A - a) * x, (B - b) * y,
```

- `0% 0%` 左上角对齐
- `100% 0%` 右上角对齐
- `100% 100%` 右下角对齐
- `0% 100%` 左下角对齐

## 资料

- [Spec 笔记](https://ynotes.github.io/css-backgrounds/)
