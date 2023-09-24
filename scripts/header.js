document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".title");
  const line = document.querySelector(".line");

  function updateHeaderOpacity() {
    const scrollY = window.scrollY;
    const headerHeight = header.clientHeight;
    const opacity = 1 - (scrollY / headerHeight) * 0.22;
    header.style.opacity = opacity > 0 ? opacity : 0;
    const maxWidth = 80;
    var width;
    width = maxWidth - scrollY * 0.15;
    if (maxWidth - scrollY * 0.15 < 0) {
      width = 0;
    }
    line.style.width = width + "%";
  }

  window.addEventListener("scroll", updateHeaderOpacity);
});
