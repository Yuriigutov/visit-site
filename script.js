// const photos = document.querySelectorAll(".photo, .userpic");

// photos.forEach((photo) => {
//   photo.addEventListener("mouseover", function () {
//     this.style.transform = "scale(1.1)";
//     this.style.transition = "transform 0.5s";
//   });

//   photo.addEventListener("mouseout", function () {
//     this.style.transform = "scale(1)";
//   });
// });

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
