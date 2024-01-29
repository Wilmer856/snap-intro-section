const navMenu = document.querySelector(".nav-menu");

const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".line-1");
const bar2 = document.querySelector(".line-2");
const bar3 = document.querySelector(".line-3");

const featureLink = document.querySelector(".feature-item");
const featureBlock = document.querySelector(".feature-active");
const arrow = document.querySelector(".arrow-icon-1");

const companyLink = document.querySelector(".company-item");
const companyBlock = document.querySelector(".company-active");
const arrow2 = document.querySelector(".arrow-icon-2");

hamburger.addEventListener("click", (e) => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("click");
});

featureLink.addEventListener("click", (e) => {
  e.preventDefault();
  featureBlock.classList.toggle("pressed");
  arrow.classList.toggle("switch");
});

companyLink.addEventListener("click", (e) => {
  e.preventDefault();
  companyBlock.classList.toggle("pressed-2");
  arrow2.classList.toggle("switch");
});
