---
permalink: /svg/
---

# SVG

SVG 的源码是 XML 格式，文件扩展名为 ".svg"。

## 怎么使用 SVG

SVG 是矢量图形，可以像 png 等图片一样使用，需要注意的是指定 SVG 的尺寸。

```html
<img src="home.svg" alt="" width="200">
```

```css
.icon {
  background-image: url(home.svg);
  background-size: 24px;
}
```

SVG 的源码是 XML 格式，可以直接写在 HTML 中（即 inline svg）

- 没有 HTTP 请求，不过也就不能利用 HTTP 缓存
- CSS 可以指定 SVG 内部元素的样式
- JavaScript 可以操作 XML 文档

资料

- [Using SVG](https://css-tricks.com/using-svg/)

## SVG 图标

目前比较流行 SVG 图标。

最简单的做法是直接插入 inline SVG。对于模板而言就是插入一个模板标签。

- [Inline SVG vs Icon Fonts](https://css-tricks.com/icon-fonts-vs-svg/)
- [Github: Delivering Octicons with SVG](https://github.com/blog/2112-delivering-octicons-with-svg)

### SVG sprites

上面的做法，在图标比较多时大大增加了 HTML 的体积。优化方案是 SVG sprites。

定义

```xml
<svg>
  <symbol viewBox="0 0 200 200">
    <g id="icon-home"></g>
  </symbol>
  <symbol viewBox="0 0 200 200">
    <g id="icon-menu"></g>
  </symbol>
</svg>
```

引用

```html
<a href="/">
  <svg width="24" height="24">
    <use xlink:href="#icon-home"></use>
  </svg>
</a>
```

示例

- [CSS-Tricks](https://css-tricks.com/) 查看网页源码，

SVG 图标

- <http://www.iconfont.cn/>
- <https://octicons.github.com/>

工具

- [svgo](https://github.com/svg/svgo)，优化 SVG，删除不必要的标签，较少 SVG 文件体积。

## FAQ

`<use>` 不局限于引用 inline SVG，也可以引用 external SVG。

```svg
<svg>
  <use xlink:href="icons.svg#icon-home"></use>
</svg>
```

问题是：

- IE 不支持。
- Chrome 本地文件（"file:"）因安全限制不能使用。
