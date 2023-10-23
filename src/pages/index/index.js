const IndexPage = () => {
  console.log("首页");

  document.querySelector('#switchTinyManager').click()

  document.querySelector('#home_tml').remove()
  document.querySelector('#columnHomeB').remove()
  document.querySelector('#prgManagerHeader').remove()
  document.querySelector('#prgManagerMain > div.cloumnSubjects.column').remove()
  
  // 删除所有的prgCheckIn textTip元素
  document.querySelectorAll('.prgCheckIn.textTip').forEach(el => el.remove())
  
  document.querySelectorAll('.infoWrapper span.avatarNeue').forEach((el) => {
      el.parentNode.style.border = '1px solid #eee'
      const img = document.createElement('img')
      const src = el.style.backgroundImage.match(/url\("(.*)"\)/)[1]
      img.src = src.replace('/m/','/l/')
      img.style.width = '90px'
      img.style.height = 'auto'
      img.loading = 'lazy'
      el.parentNode.replaceChild(img, el)
  })
  
  const style = `
  #prgManager {
      border: none;
      box-shadow: unset;
  }
  
  #columnHomeA {
      margin: 0;
      width: 100%;
  }
  .infoWrapper_tv {
      display: flex;
      flex-wrap: wrap;
  }
  #cloumnSubjectInfo .tinyMode {
      margin: 0;
      width: 50%;
      border-radius: 0;
      border: 1px solid #eee;
      box-sizing: border-box;
  }
  
  .infoWrapper_tv > div {
      display: flex;
  }
  
  #cloumnSubjectInfo .tinyMode a.tinyCover {
      display: flex;
      align-items: center;
  }
  #cloumnSubjectInfo .tinyMode div.epGird{
      margin-left: 15px;
      line-height: unset;
  }
  `
  
  const styleElement = document.createElement('style')
  styleElement.innerHTML = style
  document.head.appendChild(styleElement)

  // 转成中文
  const titles = document.querySelectorAll('.epGird > .tinyHeader > .textTip')
  titles.forEach(e => {
    if (e.getAttribute('data-subject-name-cn')) e.innerHTML = e.getAttribute('data-subject-name-cn')
  })

  const cluetip = document.querySelector('#cluetip');

const a = document.querySelectorAll('.load-epinfo[title]');

a.forEach((link) => {
    link.addEventListener('mouseout', () => {
        cluetip.style.display = 'none';
    });
})
};

export default IndexPage;
