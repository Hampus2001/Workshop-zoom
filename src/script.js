const homeButton = document.getElementById("homeButton");
const dropdown = document.getElementById("home");

homeButton.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
});
