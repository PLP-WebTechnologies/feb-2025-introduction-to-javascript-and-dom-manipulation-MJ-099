// Change text content dynamically
const changeTextBtn = document.getElementById("change-text-btn");
const introText = document.getElementById("intro-text");

changeTextBtn.addEventListener("click", () => {
  introText.textContent = "The text has been changed! 🎉";
});

// Modify CSS styles dynamically
const changeStyleBtn = document.getElementById("change-style-btn");
const styleText = document.getElementById("style-text");

changeStyleBtn.addEventListener("click", () => {
  // Toggle between two colors
  if (styleText.style.color === "blue") {
    styleText.style.color = "green";
    styleText.style.fontWeight = "normal";
  } else {
    styleText.style.color = "blue";
    styleText.style.fontWeight = "bold";
  }
});

// Add or remove elements dynamically
const addElementBtn = document.getElementById("add-element-btn");
const removeElementBtn = document.getElementById("remove-element-btn");
const container = document.getElementById("container");

addElementBtn.addEventListener("click", () => {
  const newElement = document.createElement("p");
  newElement.textContent = "I'm a new paragraph!";
  newElement.classList.add("dynamic-paragraph");
  container.appendChild(newElement);
});

removeElementBtn.addEventListener("click", () => {
  const lastElement = container.querySelector(".dynamic-paragraph:last-child");
  if (lastElement) {
    container.removeChild(lastElement);
  }
});
