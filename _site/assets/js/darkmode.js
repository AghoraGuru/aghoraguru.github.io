const toggle = document.querySelector("#toggle-mode");
const body = document.querySelector("body");

toggle.addEventListener("click", function() {
  body.classList.toggle("light-mode");
  console.log("clicked");
});
