// ==UserScript==
// @name         Bot for Yandex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @grant        none
// ==/UserScript==
let keywords = ["Как звучит флейта", "Валторна", "Тромбон", "Кларнет", "Фагот", "Гобой", "Саксофон"];
let randomIndex = Math.floor(Math.random() * keywords.length);
let keyword = keywords[randomIndex];
let yandexInput = document.getElementsByClassName('Input_control input_input mini-suggets_input');
let btn = document.getElementsByClassName('button_theme_websearch');
let links = document.links;
if (btn != undefined) {
    let i = 0;
    let timerId = setInterval(() => {
        yandexInput.value += keyword[i++];
        if (i == keyword.length) {
            clearInterval(timerId);
            btn.click();
        }
    }, 300);
} else {
    let nextYandexPage = true;
    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        if (link.href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") != -1) {
            nextYandexPage = false;
            link.click(); // Кликаем по ссылке
            break; // Прерываем цикл
        }
    }
    if (nextYandexPage) document.getElementByclassName("pager_item_kind_next")[0].click();
}