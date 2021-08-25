var toTopBtn = document.getElementById("toTop");
toTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 1000) {
    $("#toTop").fadeIn(1000);
  } else {
    $("#toTop").fadeOut(500);
  }
});
