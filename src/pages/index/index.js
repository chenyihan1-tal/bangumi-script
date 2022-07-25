const IndexPage = () => {
  console.log('首页');

  document.querySelector("#home_tml")?.remove()
  document.querySelector("#columnHomeB > div.sideInner")?.remove()
  document.querySelector("#columnHomeB > div:nth-child(2)")?.remove()
  document.querySelector("#listWrapper > div > div.jspVerticalBar")?.remove()

  document.querySelector("#prgManagerMain").style.height = '80vh'
  document.querySelector("#prgManagerMain").style.display = 'flex '
  document.querySelector("#listWrapper > div").style.height = '80vh'
  document.querySelector("#listWrapper").style.height = '80vh'

  const prgSubjectList = document.querySelector("#prgSubjectList")
  if (prgSubjectList) {
    prgSubjectList.style.height = '80vh'
    prgSubjectList.style.width = '350px'
    prgSubjectList.style.overflow = 'scroll'
    prgSubjectList.style.display = 'flex'
    prgSubjectList.style.flexDirection = 'column'
  }

  const prgManagerMain = document.querySelector("#prgManagerMain > div.cloumnSubjects.column")
  if (prgManagerMain) {
    prgManagerMain.style.width = 'fit-content'
    prgManagerMain.replaceChildren(document.querySelector("#prgSubjectList"))
  }

  document.querySelector("#main").style.width = '90vw'
  document.querySelector("#main > div.columns.clearit").style.width = '90vw'
  document.querySelector("#columnHomeA").style.width = '90vw'

  // SidePanel
  const columnHomeB = document.querySelector("#columnHomeB")
  if (columnHomeB) {
    columnHomeB.style.position = 'fixed'
    columnHomeB.style.right = '0'
    columnHomeB.style.top = '0'
    columnHomeB.style.opacity = '0.5'
  }

  document.querySelector("#cloumnSubjectInfo").style.width = '76%'
  document.querySelectorAll('#cloumnSubjectInfo .blockMode').forEach(i => i.style.height = '80vh')

  document.querySelectorAll("#prgSubjectList li").forEach(i => {
    const name_e = i.querySelector('a[data-subject-name-cn]')
    if (name_e) {
      const cn_name = name_e.getAttribute('data-subject-name-cn')
      cn_name && (name_e.querySelector('span').innerText = cn_name)
    }

    const percent = i.querySelector('.listProgress span')
    percent.style.background = '#e4959a'

    i.style.order = String(1 - Math.floor(Number(percent.style.width.replace('%', ''))))
  })

  document.querySelectorAll("#cloumnSubjectInfo > div .overlay").forEach(i => i.remove())
  document.querySelectorAll("#cloumnSubjectInfo > div .image").forEach(i => i.style.height = '120px')
  document.querySelectorAll("#cloumnSubjectInfo > div .pictureFrameGroup").forEach(i => i.style.height = '120px')
  document.querySelectorAll("#cloumnSubjectInfo > div img").forEach(i => i.setAttribute('src', i.getAttribute('src').replace(/\/c\//, '/l/')))

  document.querySelectorAll(".pictureFrameGroup").forEach(i => {
    const img = i.querySelector('img')
    if (img) {
      img.style.width = '100px'
      img.style.height = 'auto'
      img.style.float = 'left'
      i.replaceWith(img)
    }
  })

  document.querySelectorAll(".headerInner").forEach(i => i.style.marginLeft = '130px')
}

export default IndexPage