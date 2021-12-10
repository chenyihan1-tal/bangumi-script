// ==UserScript==
// @namespace xavierror
// @name 干净/清爽の条目
// @description 仅PC端适用、换高清图、移除无用模块(含评论、春菜)、首页改版
// @version 1.0.4
// @author xavierror
// @github github.com/xavierror
// @include *://*bgm.tv/*
// @include *://*bangumi.tv/*
// @license MIT
// @run-at document-end
// ==/UserScript==

import index from './index'
import subject from './subject'

index()
subject()

// 脚部
document.querySelector('#footer')?.remove()
// 春菜开关
document.querySelector('#showrobot')?.parentElement?.remove()
// 春菜
document.querySelector('#robot')?.remove()