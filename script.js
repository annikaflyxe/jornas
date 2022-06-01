const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navmenu");
const navLink = document.querySelectorAll(".navlink");
const icons = document.querySelectorAll(".icons");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

document.querySelector(".banner__close").addEventListener("click", function () {
    this.closest(".banner").style.display = "none";
  });

  function changeImg(imgchanger){
    document.getElementById('decorationwire').src = imgchanger;
  }
  





