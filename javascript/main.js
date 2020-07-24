//Weight Conversions

document.getElementById("output").style.visibility = "hidden";
document.getElementById("lbsInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let oz = e.target.value;
  document.getElementById("ozOutput").innerHTML = oz * 1;
  document.getElementById("gramsOutput").innerHTML = oz * 128;
  document.getElementById("cupsOutput").innerHTML = oz / 8;
});

// Hamburger Menu

// function toggleClass() {
//     let menu = document.querySelector(".main-nav");
//     menu.classList.toggle("toggleCls");
// }

// let hamburger = document.querySelector(".hamIcon");
// hamburger.addEventListener("click", toggleClass);