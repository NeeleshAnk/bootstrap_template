var header = document.getElementById('mainnav');

function myFunction() {
    if (window.pageYOffset > 80) {
        header.classList.add("navbar-shrink");
    } else {
        header.classList.remove("navbar-shrink");
    }
}
window.onscroll = function() {myFunction()};

$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function() {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    $('.page-section').each(function(i) {
        $('.navbar-nav .nav-link').eq(i).removeClass('active');
        if ($(this).position().top <= scrollDistance) {
            $('.navbar-nav .nav-link.active').removeClass('active');
            $('.navbar-nav .nav-link').eq(i).addClass('active');
        }
    });
}).scroll();
