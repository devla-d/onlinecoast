(function ($) {
  "use strict";

  // Close any open menu accordions when window is resized below 768px
  $(window).on("resize", function () {
    if ($(window).width() < 768) {
      $(".sidebar .collapse").collapse("hide");
    }
  });

  $("#closebtn").on("click", function (e) {
    e.preventDefault();
    $(".editor").removeClass("active");
  });
})(jQuery); // End of use strict
