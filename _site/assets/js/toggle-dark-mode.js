const toggleBtn = document.getElementById("toggle-dark-mode");
const body = document.body;

toggleBtn.addEventListener("click", function() {
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    toggleBtn.innerHTML = "Toggle Light Mode";
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    toggleBtn.innerHTML = "Toggle Dark Mode";
  }
});
