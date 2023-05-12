const SubjectPage = () => {
  console.log("详情页");

  const cover = document.querySelector(
    "#bangumiInfo > div > div:nth-child(1) > a > img"
  );
  if (cover) {
    cover.style.width = "100%";
    cover.setAttribute(
      "src",
      cover.getAttribute("src").replace(/\/c\//, "/l/")
    );
  }

  const title = document.querySelector("#headerSubject > h1 > a");
  if (title) {
    if (title.innerHTML !== title.title) {
      title.innerHTML = `${title.title}<br />${title.innerHTML}`;
    }
  }

  // 吐槽箱
  if (!location.pathname.endsWith("/comments")) {
    document.querySelector("#comment_box")?.parentElement?.remove?.();
  }

  // 分享区
  document.querySelector(".shareBtn")?.remove?.();
};

export default SubjectPage;
