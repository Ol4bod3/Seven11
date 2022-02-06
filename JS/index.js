document.onreadystatechange = () => {
  if (document.readyState != "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};

const hamBurger = document.querySelector(".hamBurger");
const nav = document.querySelector(".nav");
const navOpen = document.querySelector(".navOpen");
const navLink = document.querySelectorAll("nav a");

hamBurger.addEventListener("click", () => {
  nav.classList.toggle("navOpen");
  for (var i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", () => {
      nav.classList.remove("navOpen");
    });
  }
});

// navLink.addEventListener("click", () => {
//   console.log(navLink.value);
// });

var prevPos = window.pageXOffset;
window.onscroll = function () {
  var currentPos = window.pageYOffset;
  if (prevPos > currentPos) {
    document.querySelector(".navBar").style.top = "0";
    document.querySelector(".navBar").style.background = "#191921";
    if (currentPos == 0) {
      document.querySelector(".navBar").style.background = "transparent";
    }
  } else {
    document.querySelector(".navBar").style.top = "-600px";
  }

  prevPos = currentPos;
};
