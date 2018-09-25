import "lazysizes/plugins/object-fit/ls.object-fit";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "lazysizes/plugins/rias/ls.rias";
import "lazysizes/plugins/bgset/ls.bgset";
import "lazysizes";
import "lazysizes/plugins/respimg/ls.respimg";

import "../../styles/theme.scss";
import "../../styles/theme.scss.liquid";

import { focusHash, bindInPageLinks } from "@shopify/theme-a11y";
import { cookiesEnabled } from "@shopify/theme-cart";

// Adds parallax scrolling on window scroll
if (parallaxScroll() != false) {
  window.onscroll = function() {
    parallaxScroll();
  };
}
function parallaxScroll() {
  let hero = document.querySelector(".parallax");
  if (hero == null || hero == undefined) {
    return false;
  } else {
    let scroll = document.documentElement.scrollTop;
    hero.style.backgroundPositionY = -(scroll * 0.0325) + "rem";
    return true;
  }
}
// Common a11y fixes
focusHash();
bindInPageLinks();

// Apply a specific class to the html element for browser support of cookies.
if (cookiesEnabled()) {
  document.documentElement.className = document.documentElement.className.replace(
    "supports-no-cookies",
    "supports-cookies"
  );
}
