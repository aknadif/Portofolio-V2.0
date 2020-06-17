// Loader
$(window).on("load", function() {
    $(".loader-wrapper").fadeOut("slow");
});
// End Loader
// Navbar
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll < 650) {
            $(".l1,.l2,.l3").css("background-color", "white");
        }
        if (scroll > 650) {
            $(".l1,.l2,.l3").css("background-color", "black");
        } else {
            $(".black").css("background", "#333");
        }
    });
});
//About
$(window).on("load", function() {
    $(".jumbotron h1").addClass("muncul");
    $(".jumbotron p").addClass("muncul");
});
$(window).on("load", function() {
    $(".about h2").addClass("muncul");
    $(".about hr").addClass("muncul");
});
$(window).on("load", function() {
    $(".kanan").addClass("muncul");
});
// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $("html, body").animate({
                        scrollTop: target.offset().top,
                    },
                    1000,
                    function(x, t, b, c, d) {
                        return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
                    }
                );
            }
        }
    });

$("[data-paroller-factor]").paroller();

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    // Portofolio
    if (wScroll > $(".portofolio").offset().top - 300) {
        $(".portofolio .img-thumbnail").each(function(i) {
            setTimeout(function() {
                $(".portofolio .img-thumbnail").eq(i).addClass("muncul");
            }, 300 * (i + 1));
        });
        //
    }
});