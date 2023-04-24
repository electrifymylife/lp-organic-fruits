const navigation = document.querySelector(".navigation__links");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", function() {
  if (toggle.classList.contains("closed")) {
    toggle.classList.remove("closed");
    toggle.classList.add("opened");
    navigation.style.display = "flex";
  } else {
    toggle.classList.add("closed");
    toggle.classList.remove("opened");
    navigation.style.display = "none";
  }
});