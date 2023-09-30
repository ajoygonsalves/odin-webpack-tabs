function loadPage() {
  const content = document.getElementById("content");
  content.classList.add("pink-bg");
  content.classList.remove("blue-bg");

  const a = document.querySelector(".main-cta");
  a.classList.remove("pink-bg");
  a.classList.add("blue-bg");

  const h1 = document.createElement("h1");
  const span = document.createElement("span");
  span.textContent = "🌼";
  span.className = "title flower";
  h1.className = "title";
  h1.textContent = "Poppy";
  h1.insertBefore(span, h1.firstChild);

  // Insert h1 before the a element
  content.insertBefore(h1, a);
}

export default loadPage;
