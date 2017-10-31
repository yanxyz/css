/**
 * 外部链接图标
 */

document.getElementById('site-main').querySelectorAll('a').forEach(a => {
  if (a.host !== location.host && !a.querySelector('img')) {
    a.insertAdjacentHTML('afterBegin', '<svg aria-hidden="true" class="octicon octicon-link-external" width="14" height="14"><use xlink:href="#octicon-link-external"></use></svg>')
  }
})

document.addEventListener('keydown', function (event) {
  if (event.ctrlKey || event.shiftKey || event.altKey || event.metaKey) return

  // 't' goto top
  if (event.code === 'keyT') {
    document.documentElement.scrollTop = 0;
  }

  // 'h' go home
  if (event.code === 'keyH') {
    document.getElementById('home-link').click()
  }
})

/**
 * toc
 */

function buildToc(params) {
  const container = document.getElementById('toc')
  if (!container) return

  const article = document.getElementById('article')
  const h1 = article.querySelector('h1')
  article.insertBefore(container, h1 ? h1.nextSibling : article.firstChild)

  const headings = Array.from(article.querySelectorAll('h2, h3'))
  headings.forEach(h => {
    const id = h.id
    if (!id || h.childElementCount) return

    h.innerHTML = `<a href="#${id}" class="anchor" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" width="14" height="14"><use xlink:href="#octicon-link"></use></svg></a>` + h.textContent
  })

  const list = []
  let level
  let nested = false
  headings.forEach(h => {
    const id = h.id
    if (!id) return
    const n = parseInt(h.tagName[1])
    if (!level) level = n // 初始化
    if (n > level) {
      list.push('<ol>')
      nested = true
    } else if (n < level && nested) {
      pushEnding()
      nested = false
    }
    list.push(`<li><a href="#${id}">${escapeHTML(h.textContent)}</a>`)
    level = n
  })
  if (nested) pushEnding()

  list.unshift('<ol>')
  pushEnding()
  container.insertAdjacentHTML('beforeEnd', list.join('\n'))
  container.open = true

  function pushEnding() {
    list.push('</ol>')
  }
}

buildToc()

function escapeHTML(html) {
  return html.replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
}
