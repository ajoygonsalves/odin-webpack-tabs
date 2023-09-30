import "normalize.css";
import "./styles.css";
import loadPage from "./payLoad";
import seed from "./seed";
import toClear from "./clear";

const WebFont = require("webfontloader");

WebFont.load({
  google: {
    families: ["Young+Serif"],
  },
});

loadPage();

let state = true;
const toggle = document.querySelector("a");
toggle.addEventListener("click", (e) => {
  e.preventDefault();
  if (state) {
    toClear();
    seed();
    state = false;
  } else {
    toClear();
    loadPage();
    state = true;
  }
});
