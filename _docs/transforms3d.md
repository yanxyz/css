---
permalink: /transforms3d/
---

# CSS 3D transforms

[CSS Transform Module Level 2](https://drafts.csswg.org/css-transforms-2/)，是 [CSS Transform Module Level 1](https://drafts.csswg.org/css-transforms/) 的补充，专注 3D transforms。

## 相关属性

## Perspective

perspective property 用在父元素上，为所有子元素创建一个共享的 3D 空间。

perspective() function 为元素创建单独的 3D 空间。

### perspective-origin

<https://css-tricks.com/almanac/properties/p/perspective-origin/>

### transform-style




### transform-origin

transform-origin 的值扩充到 3 个 `transform-origin: x, y, z`，默认值是 `50%, 50%, 0`。

## transform

Spec 提到新增三个属性 translate, rotate, scale，不过似乎还没有浏览器实现。

#### translate

- translate3D(tx, ty, tz)，参数默认值为 0px，即不平移。
- translateZ(tz) 即 translate3D(0, 0, tz)

#### rotate

- rotate3D(x, y, z, a)，前三个参数指定一个坐标点 p1，这个点和原点 p0 构成一个轴，将绕着这个轴旋转。p1 默认为 (0, 0, 1)，即 rotateZ()，2D 平面旋转。
- rotateX(a) 即 rotate3D(1, 0, 0, a)
- rotateY(a) 即 rotate3D(0, 1, 0, a)

#### scale

- scale3D(sx, sy, sz)，参数默认值为 1，即不缩放。
- scaleZ(sz) 即 scale3D(1, 1, sz)

#### perspective function

perspective() function 为元素创建单独的 3D 空间。

#### matrix

matrix3D() 有 16 个参数，指定一个 4x4 矩阵。

