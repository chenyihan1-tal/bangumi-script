export default () => {
  console.log("详情页");

  const subjectSection = document.querySelectorAll(".subject_section");
  const length = subjectSection.length;
  for (let i = 0; i < length; i++) {
    const el = subjectSection[i];
    if (i >= length - 3) el.remove();
  }

  const title = document.querySelector("#headerSubject > h1 > a");
  if (title) {
    if (title.innerHTML !== title.title) {
      title.innerHTML = `${title.title}<br />${title.innerHTML}`;
    }
  }
};;
