const navElem = document.querySelector(".nav");
const hamburgerElem = document.querySelector(".hamburger");

hamburgerElem.addEventListener("click", () => {
  navElem.classList.toggle("nav--open");
  hamburgerElem.classList.toggle("hamburger--open");
});

navElem.addEventListener("click", () => {
  navElem.classList.remove("nav--open");
  hamburgerElem.classList.remove("hamburger--open");
});

document.querySelector("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.elements.name.value = "";
  e.target.elements.email.value = "";
  e.target.elements.message.value = "";
});
