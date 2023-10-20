import EpPage from "./pages/ep";
import IndexPage from "./pages/index";
import SubjectPage from "./pages/subject";
import CharacterPage from "./pages/character";

(() => {
  const path = location.pathname;

  // 首页
  if (path === "/") {
    IndexPage();
  }

  // 详情页
  if (path.search("/subject/") === 0) {
    SubjectPage();
  }

  // 人物页
  if (path.search("/character/") === 0) {
    CharacterPage();
  }

  // 章节页
  if (path.search("/ep/") === 0) {
    EpPage();
  }
})();
