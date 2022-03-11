// ==UserScript==
// @name         Elden Ring Interactive Map Fixer
// @namespace    https://github.com/GCSkater/ERmapfix/tree/main
// @version      0.1
// @description  Cleans up the CSS for the Interactive Map from the Elden Ring Wiki
// @author       GC
// @match        https://eldenring.wiki.fextralife.com/Interactive+Map
// @icon         https://eldenring.wiki.fextralife.com/file/Elden-Ring/elden-ring-wiki-guide-favicon-32.png
// @grant        GM_addStyle
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/GCSkater/EldenRing-Userscript/master/ERmapfix.user.js
// @downloadURL  https://raw.githubusercontent.com/GCSkater/EldenRing-Userscript/master/ERmapfix.user.js
// ==/UserScript==


/*Removing Elements*/
GM_addStyle('#sidebar-wrapper { display: none !important; }');
GM_addStyle('#form-header > .clearfix { display: none !important; }');
GM_addStyle('p:nth-of-type(2) { display: none !important; }');
GM_addStyle('#wiki-content-block > p { display: none !important; }');
GM_addStyle('#main-content > div > .clearfix { display: none !important; }');
GM_addStyle('#page-content-header-container > .clearfix { display: none !important; }');
GM_addStyle('#wiki-content-block > ul > li { display: none !important; }');
GM_addStyle('h3.bonfire:nth-of-type(1) { display: none !important; }');
GM_addStyle('h3.bonfire:nth-of-type(2) { display: none !important; }');
GM_addStyle('.titlearea { display: none !important; }');
GM_addStyle('#page-content-header-container { display: none !important; }');
GM_addStyle('.top-right-vault.vault-loder { display: none !important; }');
GM_addStyle('#discussions-section { display: none !important; }');
GM_addStyle('.footer-sticky { display: none !important; }');
GM_addStyle('.wiki-footer-nav { display: none !important; }');
GM_addStyle('.bottom-corners.glow-corners { display: none !important; }');
GM_addStyle('.top-corners.glow-corners { display: none !important; }');
GM_addStyle('.navbar-collapse.collapse { display: none !important; }');
GM_addStyle('.navbar-fixed-top.navbar-inverse.navbar.visible-lg > .container-fluid { display: none !important; }');
GM_addStyle('.navbar-fixed-top.navbar-inverse.navbar.visible-lg { display: none !important; }');
GM_addStyle('.ios-fix > .hidden-xs { display: none !important; }');
GM_addStyle('#at4-share { display: none !important; }');
GM_addStyle('#wiki-content-block > div:nth-child(13) { display: none !important; }');


/*Fixing Whats Left*/
GM_addStyle('#wrapper { padding-left: 0px !important }');
GM_addStyle('#page-content-wrapper { margin-top: 0px; margin-bottom: 0px; }');
GM_addStyle('.fex-main  { padding-top: 0px !important; padding-bottom: 0px !important; margin-top: 0px !important; min-height: 800px !important; max-width: 100% !important; margin-left: 0px !important; margin-right: 0px !important; max-width: 100% !important }');
GM_addStyle('.fex-bg-image { padding-top: 0px! important; }');
GM_addStyle('.container-fluid { padding-right: 0px; padding-left: 0px; margin-right: 0px; margin-left: 0px; padding-bottom: 0px! important }');
GM_addStyle('.page-chunk { margin-left: 0px; }');
GM_addStyle('html { overflow-y: hidden; }');
GM_addStyle('.interactivemapcontainer { height: 900px !important; }');



