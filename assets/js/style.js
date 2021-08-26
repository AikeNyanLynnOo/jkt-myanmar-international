var toTopBtn = document.getElementById("toTop");
toTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
$("#toTop").hide();
$(window).scroll(function () {
  if ($(this).scrollTop() > 1500) {
    $("#toTop").fadeIn(1000);
  } else {
    $("#toTop").fadeOut(500);
  }
});
