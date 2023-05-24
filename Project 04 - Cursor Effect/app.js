const mouseCursor = document.querySelector(".cursor");
const navLinks = document.querySelectorAll(".nav-links li");

window.addEventListener("mousemove", (e) => {
  mouseCursor.style.setProperty("display", "block");
  mouseCursor.style.setProperty("top", `${e.pageY}px`);
  mouseCursor.style.setProperty("left", `${e.pageX}px`);
});

navLinks.forEach((link) => {
  link.addEventListener("mouseout", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
});
