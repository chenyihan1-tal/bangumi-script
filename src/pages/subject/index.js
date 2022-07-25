const SubjectPage = () => {
  console.log('详情页');

  const cover = document.querySelector("#bangumiInfo > div > div:nth-child(1) > a > img")
  if (cover) {
    cover.style.width = '100%'
    cover.setAttribute('src', cover.getAttribute('src').replace(/\/c\//, '/l/'))
  }

  const title = document.querySelector("#headerSubject > h1 > a")
  if (title) {
    if (title.innerHTML !== title.title) {
      title.innerHTML = `${title.innerHTML} ${title.title}`
    }
  }
}

export default SubjectPage