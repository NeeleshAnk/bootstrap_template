window.onscroll = function() {myFunction()};

var header = document.getElementById('mainnav');

function myFunction() {
  if (window.pageYOffset > 80) {
    header.classList.add("navbar-shrink");
  } else {
    header.classList.remove("navbar-shrink");
  }
}
