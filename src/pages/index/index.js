const IndexPage = () => {
  const styleElement = document.createElement("style");
  styleElement.innerHTML =
    "#home_grp_tpc,#home_subject_tpc,#home_tml{display:none!important}#footer{margin-top:0!important}";
  document.head.appendChild(styleElement);

  // 需要等待DOM加载的
  const timer = setTimeout(() => {
    clearTimeout(timer);
    // 转成中文
    const titles = document.querySelectorAll(
      ".epGird > .tinyHeader > .textTip",
    );
    titles.forEach((e) => {
      if (e.getAttribute("data-subject-name-cn"))
        e.innerHTML = e.getAttribute("data-subject-name-cn");
    });
  }, 500);
};

export default IndexPage;
