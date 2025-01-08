const photos = document.querySelectorAll(".photo, .userpic");

photos.forEach((photo) => {
  photo.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.1)";
    this.style.transition = "transform 0.5s";
  });

  photo.addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});


// new code 2025
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.querySelector(".lightbox-content");
const closeLightbox = document.querySelector(".lightbox .close");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxContent.src = item.src;
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxContent) {
    lightbox.style.display = "none";
  }
});
