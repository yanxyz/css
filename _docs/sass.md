---
permalink: /sass/
---

# SASS

SASS 是一种 css proprocesser，为 CSS 提供变量、函数、流程控制语句等功能。

## Compiler

SASS 是由 Ruby 实现，[安装 ruby](/note/ruby/install/) 之后

```sh
gem install sass
sass --help
sass-convert --help
```

Node.js 可以使用 node-sass：

```sh
npm install -g node-sass
node-sass -h
```

node-sass 依赖于 native modlue 'libsass'，国内安装使用 [淘宝 NPM 镜像](https://npm.taobao.org/mirrors)。

gulp.js 见 [gulp-sass](https://github.com/dlmanning/gulp-sass#readme)

webpack 见 [sass-loader](https://github.com/webpack-contrib/sass-loader)

- [SassMeister](http://www.sassmeister.com/) 在线编译，方便尝试
- [Sass Compatibility](http://sass-compatibility.github.io/) 不同 Sass 引擎的区别

## Syntax

- [Sass Guidelines](https://sass-guidelin.es/)

bootstrap, foundation 等 CSS frameworks 都使用 SASS。

