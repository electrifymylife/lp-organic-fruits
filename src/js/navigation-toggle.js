const navigation = document.querySelector(".navigation");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", function() {
  if (toggle.classList.contains("closed")) {
    toggle.classList.remove("closed");
    toggle.classList.add("opened");
    navigation.style.left = "0";
    document.body.style.overflow = "hidden";
  } else {
    toggle.classList.add("closed");
    toggle.classList.remove("opened");
    navigation.style.left = "-100%";
    document.body.removeAttribute("style");
  }
});