function toClear() {
  const content = document.querySelector("#content");
  const h1 = document.querySelector("h1");

  content.removeChild(h1);
}

export default toClear;
