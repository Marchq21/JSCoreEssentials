const images = document.querySelectorAll(".img-container img");
const modalContainer = document.querySelector(".modal");
const fullImg = document.querySelector(".full-img");

images.forEach((img) => {
  img.addEventListener("click", () => {
    modalContainer.classList.add("open");
    fullImg.classList.add("open");
    const fullQualityImgIndex = img.getAttribute("alt");
    fullImg.src = `imgs/full/${fullQualityImgIndex}.jpg`;
  });
});

modalContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modalContainer.classList.remove("open");
    fullImg.classList.remove("open");
  }
});
