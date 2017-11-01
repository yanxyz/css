# CSS Gradients

[CSS Images Module：Gradients](https://drafts.csswg.org/css-images/#gradients)

渐变 `<image>` 值。

- linear-gradient() | repeating-linear-gradient()
- radial-gradient() | repeating-radial-gradient()
- conic-gradient()  | repeating-conic-gradient()

渐变没有内在尺寸，使用渐变的 box 有尺寸。

渐变，首先指定渐变线的起点和终点。根据渐变的类型，渐变线是直线，放射线或圆锥曲线。然后指定颜色驻点（color-stops）。

## 线性渐变 {#linear-gradients}

```
linear-gradient([<angle> | to <side-or-corner>]? , <color-stop-list>)
<color-stop> = <color> <length-percentage>?
```

keywords，'to top', 'to right', 'to bottom', 'to left' 分别是 0deg, 90deg, 180deg, 270deg。也可以指向某个角，比如 'to top left'。默认值是 'to bottom'。

color-stop-list 至少两个 color-stop（起点和终点）。

```css
background: linear-gradient(45deg, white, black);
```

![](https://drafts.csswg.org/css-images/images/gradient-diagram.png)

注意图中起点和终点在 box 外面。


```css
background: linear-gradient(to top right, red, white, blue);
```

<div id="example"></div>
<style>
  #example {
    width: 200px;
    height: 100px;
    background: linear-gradient(to top right, red, white, blue);
  }
</style>

## 径向渐变 {#radial-gradients}



## 圆锥渐变 {#conic-gradients}

[Conic Gradients](https://drafts.csswg.org/css-images-4/#conic-gradients)
