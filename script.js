const toggleSwitch = document.querySelector('input[type = "checkbox"]');
const pricePro = document.getElementById("pricePro");
const priceBasic = document.getElementById("priceBasic");
const priceBusiness = document.getElementById("priceBusiness");
const timeline = document.querySelectorAll(".plans__date");

const mobileNav = document.getElementById("mobileNav");
const mobileNavOverlay = document.getElementById("mobileNavOverlay");
const navbarOne = document.getElementById("navbarOne");
const navbarTwo = document.getElementById("navbarTwo");
let screenWidth = window.innerWidth;

if (screenWidth < 600) {
  mobileNav.classList.remove("hide");
} else {
  mobileNav.classList.add("hide");
}

function changeText() {
  if (toggleSwitch.checked) {
    pricePro.textContent = "$390.00";
    priceBasic.textContent = "$190.00";
    priceBusiness.textContent = "$990.00";

    timeline.forEach(function (date) {
      date.textContent = "per year";
    });
  } else {
    pricePro.textContent = "$39.00";
    priceBasic.textContent = "$19.00";
    priceBusiness.textContent = "$99.00";
    timeline.forEach(function (date) {
      date.textContent = "per month";
    });
  }
}

function toggleNavOverlay() {
  console.log("Hello world");
  mobileNavOverlay.classList.toggle("hide");
  navbarOne.classList.toggle("navbar-1-rotated");
  navbarTwo.classList.toggle("navbar-2-rotated");
}

mobileNav.addEventListener("click", toggleNavOverlay);

if (toggleSwitch) {
  toggleSwitch.addEventListener("change", changeText);
}
