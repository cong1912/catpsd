window.addEventListener("scroll", function () {
  var image = document.getElementById("logo-image");
  if (window.screenY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
    image.src = "./img/Group1.png";
  } else {
    document.querySelector("#navbar").style.opacity = 1;
    image.src = "./img/logo.png";
  }
});
