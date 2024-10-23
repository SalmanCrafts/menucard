const reviewButton = document.querySelector(".item-review");
const mainContainer = document.getElementById("menu_section");
const commentsDiv = document.getElementById("comments_section");
const backspace = document.getElementById("backspace_icon");
commentsDiv.style.display = "none";

reviewButton.addEventListener("click", function () {
  mainContainer.style.display = "none";
  commentsDiv.style.display = "flex";
});
backspace.addEventListener("click", function () {
  commentsDiv.style.display = "none";
  mainContainer.style.display = "flex";
});

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".container_item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.1 }
  );

  items.forEach((item) => observer.observe(item));
});
