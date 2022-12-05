// ==UserScript==
// @name         grayClear
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_log
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';
  GM_addStyle("html {filter: none !important;}");

  GM_log("gray clear!!")
  // Your code here...
})();