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
// Nav Auto Change Color
// $(document).ready(function() {
//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop();
//         if (scroll < 650) {
//             $(".l1,.l2,.l3").css("background-color", "white");
//         }
//         if (scroll > 650) {
//             $(".l1,.l2,.l3").css("background-color", "black");
//         } else {
//             $(".black").css("background", "#333");
//         }
//     });
// });
// About
$(window).on("load", function() {
    $(".jumbotron h1, .jumbotron p").addClass("muncul");
});
// Control Effect
$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll <= 850) {
            setTimeout(function() {
                $(".about h2 , .about hr, .kanan, .about .div1, .up").addClass("muncul");
            }, 500);
        }
        if (scroll > 1200) {
            setTimeout(function() {
                $(".portofolio h2, .portofolio hr").addClass("muncul");
            }, 200);
        }
    });
});

// Nav



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

// Gallery Image
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

//Button to Top
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $('#home').animate({
        scrollTop: 0
    }, 500);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}