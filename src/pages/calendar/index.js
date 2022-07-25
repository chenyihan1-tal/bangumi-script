const CalendarPage = () => {
  document.querySelectorAll('.week').forEach(ul => ul.querySelector('dt')?.remove())

  const image = document.createElement("img")
  image.src = 'https://bgm.tv/img/b5/ico_week.png'
  image.style.width = '100%'
  const BgmCalendar = document.querySelector('.BgmCalendar')
  BgmCalendar.style.display = 'flex'
  BgmCalendar.style.flexDirection = 'column'
  BgmCalendar.insertBefore(image, BgmCalendar.firstChild)

  document.querySelectorAll('.coverList').forEach(ul => {
    ul.querySelectorAll('li').forEach(li => {
      li.classList.add('calendarLi')

      const text = li.innerText

      const href = li.querySelector('a').href
      li.onclick = () => window.location.href = href
      li.querySelector('div')?.remove()

      li.innerHTML = `<div class="calendarLiDiv">${text.split(/\n/)[0]}</div>`
      li.style.background = li.style.background.replace(/\/c\//, '/l/')
    })
  })

  const style = document.createElement('style')
  style.innerHTML = `
  #main,.columns {width: 80vw !important}
  .calendarLiDiv {
    background-color: rgba(0,0,0,0.7);
    color: #fff;
    width: 100%;
    text-align:center;
    padding: 10px 0;
  }
  .calendarLi:hover {
    transform: scale(1.02);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .calendarLi{
    background-size: cover !important;
    height: 25vh !important;
    cursor: pointer !important;
    display: flex !important;
    justify-content: center !important;
    align-items: flex-end !important;
    width: unset !important;
    border: unset !important;
    border-bottom: none !important;
    position: unset !important;
  }
  div.BgmCalendar ul.large li.week {
    width: 14.285% !important;
  }
  `
  document.head.append(style)
}

export default CalendarPage