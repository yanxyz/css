# Specificity

```css
#link:hover > img    /* (1, 1, 1) */

:not(em, #foo)       /* (1, 0, 0) */
:matches(em, #foo)
/* #foo   (1, 0, 0)
   em     (0, 0, 1)
   em#foo (1, 0, 0)
*/

:nth-child(even of li, .item)
/* .item     (0, 2, 0)
   li.item   (0, 2, 0)
*/
```

除了上面的计算，还要考虑优先级。优先级由低到高

1. stylesheets，分为
    - external stylesheets 即 `<link>` 引入的 css file
    - internal stylesheet 即 `<style>`
1. inline styles，即 style attribute
1. !important


