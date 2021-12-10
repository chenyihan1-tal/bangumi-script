export default function subject() {
  if (window.location.pathname.indexOf('/subject/') === -1) {
    return false;
  }

  const style = document.createElement('style')
  style.innerHTML = `img.cover {
    width: 200px;
  }`
  document.head.appendChild(style)
  // 换图
  document.querySelectorAll("#bangumiInfo .infobox  img.cover")?.forEach(i=>{
    i.src = i?.src?.replace('/c/','/l/')
  })

  // 分享按钮
  document.querySelector("#panelInterestWrapper > div.shareBtn")?.remove()

  // 评分趋势
  document.querySelector("#ChartWarpper")?.remove()

  // 推荐本条目的目录
  document.querySelector("#subjectPanelIndex")?.remove()
  // 谁在看这个？
  document.querySelector("#subjectPanelCollect")?.remove()

  // 评论 讨论版 吐槽箱
  document.querySelectorAll("#columnSubjectHomeB  >.subject_section")?.forEach(i => {
    if (i.querySelector('.subtitle')?.innerHTML !== '关联条目') {
      i.remove()
    }
  })
}