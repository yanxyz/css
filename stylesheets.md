# CSS Stylesheets

## origin

[Spec](https://ynotes.github.io/css2/cascade.html#cascade) 提到样式表有三种来源：

- Author，网页作者写的样式表
- User, 用户写的样式表
- UA，UA 默认样式表

User 这个来源比较陌生，这是浏览器的一个高级功能，很少人使用，而且 Chrome 等浏览器已经不再提供这种功能。

[How to use a custom style sheet (CSS) with Internet Explorer](https://www.itsupportguides.com/knowledge-base/computer-accessibility/how-to-use-a-custom-style-sheet-css-with-internet-explorer/)

Chrome 扩展 Stylish 所说的 user styles 仍然属于 Author，扩展将样式以 `<style>` 标签插入页面。

浏览器一般可以修改默认字体，这算 UA？
