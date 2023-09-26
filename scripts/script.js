const navElem = document.querySelector(".nav");
const hamburgerElem = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".nav_link");

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

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });

    link.classList.add("active");
  });
});

function handleIntersection(entries) {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");
    if (entry.isIntersecting) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });

      document.querySelector(`a[href="#${id}"]`).classList.add("active");
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
});

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  observer.observe(section);
});
