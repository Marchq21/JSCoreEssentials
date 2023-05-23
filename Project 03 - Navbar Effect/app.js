const sections = document.querySelectorAll("section");
const trans = document.querySelector(".trans");
const navbarLinks = document.querySelectorAll("nav li a");

const options = {
  root: null,
  rootMargin: "10px",
  threshold: 0.6,
};

const navScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const targetSection = entry.target.classList.value;
      navbarLinks.forEach((link) => {
        if (link.dataset.page === targetSection) {
          link.parentElement.classList.add("active");
        } else {
          link.parentElement.classList.remove("active");
        }
      });
    }
  });
};

const observer = new IntersectionObserver(navScroll, options);

sections.forEach((section) => {
  observer.observe(section);
});
