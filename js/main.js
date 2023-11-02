(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
const textToType = "Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque nulla modi, dolorem est fuga illo nemo voluptatibus ab quo, praesentium eligendi recusandae, sed consequuntur doloremque. Unde minima atque nemo sed!";

// Élément du paragraphe
const autoTypeText = document.getElementById("autoTypeText");

// Vitesse de frappe en millisecondes (ajustez selon vos préférences)
const typingSpeed = 70; // 70 ms (0.07 seconde) par caractère

let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
        autoTypeText.innerHTML += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    }
}

// Commencez à taper le texte après le chargement de la page
window.addEventListener("load", () => {
    setTimeout(typeText, 1000); // Attendre 3 secondes avant de commencer la frappe
});

    
})(jQuery);

