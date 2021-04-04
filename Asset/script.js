// Loader
$(window).on("load", function () {
  $(".navbar").addClass("navbar-on");
  $(".loader-wrapper").fadeOut("slow");
});
// End Loader

// Navbar Scroll Hide
var lastScrollTop = 0;
$(window).scroll(function () {
  var st = $(this).scrollTop();
  var navbar = $(".navbar");
  setTimeout(function () {
    if (st > lastScrollTop) {
      navbar.addClass("navbar-hide navbar-on");
    } else {
      navbar.removeClass("navbar-hide ");
    }
    lastScrollTop = st;
  }, 100);
});
// End Navbar Scroll Hide

// Typwriting Effect
var Typed = new Typed(".type", {
  strings: ["Colleger", "Website Developer", "Colleger | Website Developer"],
  typeSpeed: 60,
  backSpeed: 60,
  loop: false,
});
// End Typwriting Effect

// Parallax Effect
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 5 + "%)",
  });
  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });
  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 1.2 + "%)",
  });
});
// End Parallax Effect

// Control Effect
$(document).ready(function () {
  $(window).on("load", function () {
    $(".jumbotron .img").addClass("muncul");
    $(".jumbotron .h1").fadeOut("muncul");
  });
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll <= 400) {
      setTimeout(function () {
        $(".kanan, .kiri, .tb").addClass("muncul");
      }, 400);
    }
    if (scroll > $("#projects").offset().top - 200) {
      $("#projects h2, #projects ul").addClass("muncul");
    }
    if (scroll > $("#contact").offset().top - 400) {
      $("#contact h2, #contact .row").addClass("muncul");
    }
  });
});
// End Control Effect

// Filter Gallery
$(document).ready(function () {
  $(".list-group-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "ALL") {
      $(".itembox").show("1000");
    } else {
      $(".itembox")
        .not("." + value)
        .hide("1000");
      $(".itembox")
        .filter("." + value)
        .show("1000");
    }
    $(".list-group-item").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
  });
});
// End Filter Gallery

// Animate Gallery Image
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  if (wScroll > $("#projects").offset().top - 250) {
    $(".itembox").each(function (i) {
      setTimeout(function () {
        $(".itembox").eq(i).addClass("muncul");
      }, 300 * (i + 1));
    });
  }
});

// End Animate Gallery Image
