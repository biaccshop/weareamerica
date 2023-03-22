// Navbar anchor + hiding # in URL
$('a[href^="#"]').on('click', function (event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 300);
  }
});



// Black Bar toggle
$(document).ready(function () {
  var menuOpen = false;

  $("#btn-blackbar, .nav-blackbar-item").click(function () {
    if (!menuOpen) {
      $("body").css("overflow", "hidden");
      $("#black-bar").slideDown();
      $("#btn-blackbar").addClass("active");
      $("#blackbarbutton-icon").removeClass("fa-bars").addClass("fa-xmark");
      menuOpen = true;
    } else {
      $("body").css("overflow", "auto");
      $("#black-bar").slideUp();
      $("#btn-blackbar").removeClass("active");
      $("#blackbarbutton-icon").removeClass("fa-xmark").addClass("fa-bars");
      menuOpen = false;
    }
  });
});



// FAQ section
const faqQuestions = document.querySelectorAll(".faq-container .question");

faqQuestions.forEach((faqQuestion) => {
  faqQuestion.addEventListener("click", () => {
    faqQuestions.forEach((otherQuestion) => {
      if (otherQuestion !== faqQuestion && otherQuestion.classList.contains("active")) {
        const otherAnswer = otherQuestion.nextElementSibling;
        otherAnswer.classList.remove("active");
        otherQuestion.classList.remove("active");
      }
    });

    const answer = faqQuestion.nextElementSibling;
    answer.classList.toggle("active");
    faqQuestion.classList.toggle("active");
  });
});



// Scroll Reveal
ScrollReveal({
  reset: false,
  distance: '200px',
  duration: 1500,
  delay: 150
});

ScrollReveal().reveal('.hero-content', { origin: 'bottom' });
ScrollReveal().reveal('.hero-img', { origin: 'top' });

ScrollReveal().reveal('.about-content h2, .about-content h3', { origin: 'left' });
ScrollReveal().reveal('.about-img', { origin: 'right' });
ScrollReveal().reveal('.about-content .d1', { origin: 'bottom', delay: 700 });
ScrollReveal().reveal('.about-content .d2', { origin: 'bottom', delay: 800 });
ScrollReveal().reveal('.about-content .d3', { origin: 'bottom', delay: 900 });

ScrollReveal().reveal('.services-title', { origin: 'left' });
ScrollReveal().reveal('.services-payments', { origin: 'bottom' });

ScrollReveal().reveal('.portfolio-title', { origin: 'top' });

ScrollReveal().reveal('.faq-title', { origin: 'top' });
ScrollReveal().reveal('.question', { origin: 'bottom', delay: 700 });



// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());
function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

// Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
document.onkeydown = (e) => {
    if (
        event.keyCode === 123 ||
        ctrlShiftKey(e, 'I') ||
        ctrlShiftKey(e, 'J') ||
        ctrlShiftKey(e, 'C') ||
        (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
    )
        return false;
};