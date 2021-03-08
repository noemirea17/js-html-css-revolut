$(document).ready(function () {
  $(".with-dropdown").mouseenter(function () {
    $(this).find(".dropdown").addClass("active");
  });
  $(".with-dropdown").mouseleave(function () {
    $(this).find(".dropdown").removeClass("active");
  });
});
