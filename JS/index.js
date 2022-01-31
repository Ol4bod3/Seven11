var prevPos = window.pageXOffset;
window.onscroll = function () {
  var currentPos = window.pageYOffset;
  if (prevPos > currentPos) {
    document.querySelector(".navBar").style.top = "0";
    document.querySelector(".navBar").style.background = "#191921";
    console.log(currentPos);
    if (currentPos == 0) {
      document.querySelector(".navBar").style.background = "transparent";
    }
  } else {
    document.querySelector(".navBar").style.top = "-600px";
  }

  prevPos = currentPos;
};
