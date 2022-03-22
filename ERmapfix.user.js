// ==UserScript==
// @name         Elden Ring Interactive Map Fixer
// @namespace    https://github.com/GCSkater/ERmapfix/tree/main
// @version      0.3
// @description  Cleans up the CSS for the Interactive Map from the Elden Ring Wiki
// @author       GC
// @include      https://eldenring.wiki.fextralife.com/Interactive+Map*
// @icon         https://eldenring.wiki.fextralife.com/file/Elden-Ring/elden-ring-wiki-guide-favicon-32.png
// @grant        GM_addStyle
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/GCSkater/EldenRing-Userscript/master/ERmapfix.user.js
// @downloadURL  https://raw.githubusercontent.com/GCSkater/EldenRing-Userscript/master/ERmapfix.user.js
// ==/UserScript==

/*Stop The Scroll*/
GM_addStyle('html { overflow-y: hidden; }');

/*Removing Elements*/
GM_addStyle('#sidebar-wrapper, #page-content-header-container, .clearfix, .footer-sticky, .titlearea, .visible-lg, .vault-loder, .glow-corners, .hidden-xs, #wiki-content-block > p, #main-content > div > br, #at4-share  { display: none !important; width: 0px !important; height: 0px !important }');

/*Fixing Whats Left*/
GM_addStyle('#wrapper, #page-content-wrapper, .fex-bg-image, .fex-main, .container-fluid, .page-chunk { padding: 0px !important; margin: 0px !important; }');
GM_addStyle('.interactivemapcontainer { height: 100vh !important; width: 100vw !important; border: 0px !important; }');
