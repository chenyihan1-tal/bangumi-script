(() => {
  const path = location.pathname;
  const styleElement = document.createElement('style');

  const sleep = ms =>
    new Promise(resolve => {
      const timer = setTimeout(() => resolve(clearTimeout(timer)), ms);
    });

  // 首页
  if (path === '/') {
    styleElement.innerText = '#home_grp_tpc,#home_subject_tpc,#home_tml{display:none!important}#footer{margin-top:0!important}';

    // 转成中文
    sleep(500).then(() => {
      const titles = document.querySelectorAll('.epGird > .tinyHeader > .textTip');
      titles.forEach(e => {
        if (e.getAttribute('data-subject-name-cn')) e.innerText = e.getAttribute('data-subject-name-cn');
      });
    });
  }

  // 详情页
  if (path.search('/subject/') === 0) {
    styleElement.innerText =
      "#ChartWarpper,#columnInSubjectA div.rr,#panelInterestWrapper div[rel='v:rating'],#columnSubjectHomeB .subject_section:nth-last-child(-n+4){display:none!important}";
  }

  // 人物页
  if (path.search('/character/') === 0) {
    styleElement.innerText = '#columnCrtB .crtCommentList{display:none!important}';
  }

  // 章节页
  if (path.search('/ep/') === 0) {
    styleElement.innerText = '#columnEpA .singleCommentList{display:none!important}';
  }

  document.head.appendChild(styleElement);
})();
