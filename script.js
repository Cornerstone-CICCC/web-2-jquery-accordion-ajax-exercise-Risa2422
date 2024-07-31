$(function () {
  // your code here

  // exercise1
  const accordion = $(".accordion");
  accordion.find("h3").on("click", function () {
    $(this).next().slideToggle();
    accordion.find("h3").not($(this)).next().slideUp();
  });
});
