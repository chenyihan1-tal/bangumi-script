export default () => {
  const styleElement = document.createElement("style");
  styleElement.innerHTML =
    "#columnCrtB .crtCommentList{display:none!important}";
  document.head.appendChild(styleElement);
};
