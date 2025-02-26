const colorBtn = document.getElementById("colorBtn");
const dropDown = document.getElementById("dropDown");
const colorContainer = document.getElementById("colorContainer");
const navbar = document.querySelector(".navbar");
const heroSection = document.getElementById("heroSection");
const footer = document.getElementById("footer");

let selectedTarget = "navbar";

colorBtn.addEventListener("click", function () {
  dropDown.style.display = dropDown.style.display === "none" ? "block" : "none";
  colorContainer.style.display = "none";
});

dropDown.addEventListener("click", function (event) {
  const target = event.target.getAttribute("data-target");
  console.log(target);
  if (target) {
    selectedTarget = target;
    dropDown.style.display = "none";
    colorContainer.style.display = "grid";
  }
});

function createColors() {
  const colors = ["black", "red", "white", "blue", "orange", "yellow"];

  colors.forEach((color) => {
    const colorDiv = document.createElement("div");
    colorDiv.style.cssText = `background-color: ${color};
      width: 40px;
      height: 40px;
      cursor: pointer;
      border: 1px solid black`;
    colorContainer.appendChild(colorDiv);
  });
}

createColors();

colorContainer.addEventListener("click", function (event) {
  const clickedElement = event.target;
  const background = window.getComputedStyle(clickedElement).backgroundColor;
  console.log(background);

  if (background) {
    if (selectedTarget === "navbar") {
      navbar.style.backgroundColor = background;
    } else if (selectedTarget === "body") {
      heroSection.style.backgroundColor = background;
    } else if (selectedTarget === "footer") {
      footer.style.backgroundColor = background;
    }
  }
});
