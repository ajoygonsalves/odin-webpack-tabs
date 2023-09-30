function seed() {
  const content = document.getElementById("content");
  content.classList.remove("pink-bg");
  content.classList.add("blue-bg");

  const a = document.querySelector(".main-cta");
  a.classList.remove("blue-bg");
  a.classList.add("pink-bg");

  const h1 = document.createElement("h1");
  const span = document.createElement("span");
  span.textContent = "🌼";
  span.className = "title flower";
  h1.className = "title";
  h1.textContent = "Seed";
  h1.insertBefore(span, h1.firstChild);

  content.insertBefore(h1, a);
}

export default seed;
