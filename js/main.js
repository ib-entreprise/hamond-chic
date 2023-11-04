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
const textToType = "je suis la cotach champagne.Dieu donné.la coatch qui a pris le pouvoir sur les resaux sociaux.insiration divine. Kelempe par  ce que pour elle la cest Dieu doné.elle n'est pas dans ohhh ohh. elle n'est pas dans les ahh ahh.elle n'est pas dans les theories. elle est dans la praque.avec elle tu apprends.";

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



// *********** contact form *************
const contactForm = document.querySelector('form');
const nameInput = contactForm.querySelector('#name');
const emailInput = contactForm.querySelector('#email');
const dateInput = contactForm.querySelector('#date-picker');
const timeInput = contactForm.querySelector('#time-picker');
const messageInput = contactForm.querySelector('#message');
const monAlert = document.querySelector('.alert');


contactForm.addEventListener('submit', (event) => {
  // Empêche le formulaire d'être soumis par défaut.
  event.preventDefault();

  // Récupère les valeurs des champs du formulaire.
  const name = nameInput.value;
  const email = emailInput.value;
  const date = dateInput.value;
  const time = timeInput.value;
  const message = messageInput.value;
  


  if (!name || !email || !date || !time || !message) {
    // alert('Tous les champs doivent être remplis.!');
    monAlert.classList.add('alert-danger');
  monAlert.textContent = "Tous les champs doivent être remplis.!";
//   alert(monAlert.textContent);


    // Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'Tous les champs doivent être remplis.!',
    //     footer: '<a href="">Why do I have this issue?</a>'
    //   });
    return;
  }

  // Par exemple :
  monAlert.classList.remove('alert-danger');
  monAlert.classList.add('alert-success');
  monAlert.textContent = "Votre message a été envoyé avec succès";

//   Swal.fire({
//     icon: 'error',
//     title: 'Oops...',
//     text: 'Votre message a été envoyé avec succès.!',
//     // footer: '<a href="">Why do I have this issue?</a>'
//   })

  // Vide les champs du formulaire.
  nameInput.value = '';
  emailInput.value = '';
  dateInput.value = '';
  timeInput.value = '';
  messageInput.value = '';
});
