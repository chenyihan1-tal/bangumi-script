import IndexPage from "./pages/index";
import SubjectPage from "./pages/subject";

(async () => {
  const path = location.pathname

  await new Promise(resolve => setTimeout(resolve, 1500))

  // 首页
  if (path === '/') {
    IndexPage()
  }

  // 详情页
  if (path.search('/subject/') === 0) {
    SubjectPage()
  }
})()