export default function index() {

  if (window.location.pathname !== '/') {
    return false;
  }

  // 切换到列表模式
  document.querySelector('#switchNormalManager')?.click()
  document.querySelector('#prgManagerMode')?.remove()

  const style = document.createElement('style')
  style.innerHTML = `
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box; 
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
#cloumnSubjectInfo .blockMode {
  height:100%
}
.pictureFrameGroup {
  margin-right: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 250px;
  width: 160px;
}
`
  document.head.appendChild(style)

  const 首页左边 = document.querySelector('#columnHomeA')
  if (首页左边) {
    首页左边.style.width = '100%'
  }

// 首页下边
  document.querySelector('#home_tml')?.remove()
// 首页右边
  document.querySelector('#columnHomeB')?.remove()

// 获取所有条目
  const lis = document.querySelector('#prgSubjectList')?.children || []
  for (let i = 0; i < lis.length; i++) {
    lis[i].style.padding = '5px'
    lis[i].style.position = 'relative'
    // 默认显示进度
    const progress = lis[i].querySelector('p.listProgress')
    if (progress) {
      progress.style.background = '#eee';
      progress.style.position = 'absolute';
      progress.style.left = '0';
      progress.style.bottom = '6px';
      progress.style.width = '100%';
      const progressSpan = progress.querySelector('span')
      if (progressSpan) {
        progressSpan.style.border = 'none'
        progressSpan.style.background = '#F09199';
      }
    }
  }

// 替换成中文
  const 需要换成中文的 = document.querySelectorAll('a[data-subject-name-cn]')
  需要换成中文的.forEach(i => {
    const 中文 = i.getAttribute('data-subject-name-cn')
    if (中文) {
      const titleEl = i.querySelector('span')
      if (titleEl) {
        titleEl.classList.add('ellipsis')
        titleEl.innerHTML = 中文
      } else {
        i.innerHTML = 中文
      }
    }
  })

// 列表
  const 列表 = document.querySelector('#prgManagerMain')
  if (列表) {
    列表.style.height = '78vh'
    列表.style.display = 'flex'
  }

  const 列表wrap = document.querySelector("#prgManagerMain > div.cloumnSubjects.column")
  if (列表wrap) {
    列表wrap.style.height = '100%'
    列表wrap.style.width = '40%'
    列表wrap.style.minWidth = '40%'
  }

  const 列表ul = document.querySelector('#prgSubjectList')
  if (列表ul) {
    列表ul.style.height = '100%'
    列表ul.style.width = '100%'
    列表ul.style.overflowY = 'scroll'
  }

  const listWrap = document.querySelector('#listWrapper')
  if (listWrap) {
    列表wrap.replaceChild(列表ul, listWrap)
  }

  const 详情 = document.querySelector('#cloumnSubjectInfo')
  if (详情) {
    详情.style.width = '100%'
    详情.querySelector('div').style.height = '100%'
  }

  const main = document.querySelector('#main')
  if (main) {
    main.style.width = '90vw'
  }

  const box = document.querySelector("#main > div.columns.clearit")
  if (box) {
    box.style.width = '90vw'
  }

// 图片换高清
  const 图片 = document.querySelectorAll("div[id*=subjectPanel] > div.header.clearit > a > .pictureFrameGroup")
  图片.forEach(i => {
    const 图片地址 = i.querySelector('img').src
    if (图片地址) {
      i.style.backgroundImage = `url(${图片地址.replace('/s/', '/l/')})`
      i.innerHTML = ''
    }
  })
}