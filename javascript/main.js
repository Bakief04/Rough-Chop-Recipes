//Carousel
function showSlides(n) {
  var i;
  if (n > slideshow.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slideshow.length}
  for (i = 0; i < slideshow.length; i++) {
      slideshow[i].style.display = "none";
  }
  slideshow[slideIndex-1].style.display = "block";
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slideshow = document.getElementsByClassName("slideshow");
  for (i = 0; i < slideshow.length; i++) {
    slideshow[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slideshow.length) {slideIndex = 1}
  slideshow[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000);
}

//Weight Conversions
document.getElementById("output").style.visibility = "hidden";
document.getElementById("input").addEventListener("input", function(e) {
document.getElementById("output").style.visibility = "visible";

let oz = e.target.value;
document.getElementById("ozOutput").innerHTML = oz * 1;
document.getElementById("gramsOutput").innerHTML = oz * 128;
document.getElementById("cupsOutput").innerHTML = oz / 8;
});

// Hamburger Menu
function toggleClass() {
    let menu = document.querySelector(".main-nav");
    menu.classList.toggle("toggleCls");
}

let hamburger = document.querySelector(".hamIcon");
hamburger.addEventListener("click", toggleClass);