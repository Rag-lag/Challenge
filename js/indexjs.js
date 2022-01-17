var windowlength = window.matchMedia("(max-width:650px)");
// var reloadlen = window.matchMedia("(min-width:651px)"); //window.innerWidth;
var hamburger = document.querySelector(".hamburger");
var navlinks = document.querySelector(".navbar-links");
var close = document.querySelector(".close");

function collapse() {
  navlinks.style.visibility = "collapse";
  close.style.visibility = "collapse";
  hamburger.style.visibility = "visible";
  // window.location.reload();
}

function bigreset() {
  if (!window.location.hash) {
    window.location = window.location + '#loaded';
    window.location.reload();
  }
}
hamburger.addEventListener("click", function() {
  close.style.visibility = "visible";
  navlinks.style.visibility = "visible";
  hamburger.style.visibility = "collapse";

});
close.addEventListener("click", collapse);
window.onresize = function() {
  location.reload();
}
// if(roadlen.matches){
//   bigreset();
//
// }
