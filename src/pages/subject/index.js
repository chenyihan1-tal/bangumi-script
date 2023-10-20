export default () => {
  const styleElement = document.createElement("style");
  styleElement.innerHTML =
    "#ChartWarpper,#columnInSubjectA div.rr,#panelInterestWrapper div[rel='v:rating'],#columnSubjectHomeB .subject_section:nth-last-child(-n+4){display:none!important}";
  document.head.appendChild(styleElement);

  // const timer = setTimeout(() => {
  //   clearTimeout(timer);
  //   const removeTitles = ["评论", "吐槽箱", "讨论版"];
  //   const elements = document.querySelectorAll(`h2.subtitle`);
  //   for (const element of elements) {
  //     if (removeTitles.includes(element.innerText))
  //       element.parentElement.remove();
  //   }
  // }, 500);
};
