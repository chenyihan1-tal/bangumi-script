// ==UserScript==
// @name         BANGUMI: 高清封面/首页简化
// @namespace    xavierror
// @version      1.0.2
// @description  高清封面图/首页排版简化
// @author       xavierror
// @match        *://*bgm.tv/*
// @match        *://*bangumi.tv/*
// @icon         https://bgm.tv/img/ico/ico_ios.png
// @grant        none
// @run-at       document-end
// ==/UserScript==

import IndexPage from "./pages/index";
import SubjectPage from "./pages/subject";
import CalendarPage from "./pages/calendar";

(async () => {
  const path = location.pathname

  await new Promise(resolve => setTimeout(resolve, 1500))

  // 首页
  if (path === '/') {
    IndexPage()
  }

  // 每日放送
  if (path === '/calendar') {
    CalendarPage()
  }

  // 详情页
  if (path.search('/subject/') === 0) {
    SubjectPage()
  }

})()