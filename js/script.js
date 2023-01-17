const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelector("nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navMenu.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.classList !== hamburger) {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  }
});
