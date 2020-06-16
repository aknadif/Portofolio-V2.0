// Loader
$(window).on("load", function() {
    $(".loader-wrapper").fadeOut("slow");
});
// End Loader
// parallax
$(window).on('load', function() {
    $('.kiri').addClass('muncul')
    $('.kanan').addClass('muncul')
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
                        scrollTop: target.offset().top - 55,
                    },
                    1000,
                    function(x, t, b, c, d) {
                        return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
                    }
                );
            }
        }
    });