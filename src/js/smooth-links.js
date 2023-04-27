
window.addEventListener('load', function() {
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');
      if (document.body.style.overflow === "hidden") {
        document.body.removeAttribute("style");
        navigation.style.left = "-100%";
        toggle.classList.add("closed");
        toggle.classList.remove("opened");
      }
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };
});