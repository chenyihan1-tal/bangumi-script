export default () => {
  const styleElement = document.createElement("style");
  styleElement.innerHTML =
    "#columnEpA .singleCommentList{display:none!important}";
  document.head.appendChild(styleElement);
};
