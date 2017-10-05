---
permalink: /sass/
---

# SASS

SASS 是一种 css proprocesser，为 CSS 提供变量、函数、流程控制语句等功能。

## Compiler

SASS 是由 [Ruby](../ruby/index.md) 实现

```sh
gem install sass
sass --help
sass-convert --help
```

Node.js 环境可以使用 node-sass：

```sh
npm install -g node-sass
node-sass -h
```

node-sass 依赖于 native modlue 'libsass'，在安装时可能会遇到问题，[见这里](../nodejs/npm/install.md)

gulp.js 可以使用 [gulp-sass](https://github.com/dlmanning/gulp-sass#readme)


- [SassMeister](http://www.sassmeister.com/) 在线编译，方便尝试
- [Sass Compatibility](http://sass-compatibility.github.io/) 不同 Sass 引擎的区别

## Syntax

<https://yanxyz.github.io/sass-docs>


- [Sass Guidelines](https://sass-guidelin.es/)

bootstrap, foundation 等 CSS frameworks 都使用 SASS。

