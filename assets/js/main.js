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



// Category Buttons Listeners
document.querySelectorAll('.btn-category').forEach(function (button) {
  button.addEventListener('click', function () {
    // Remove active class from all buttons
    document.querySelectorAll('.btn-category').forEach(function (button) {
      button.classList.remove('active');
    });
    // Add active class to clicked button
    this.classList.add('active');

    var category = this.getAttribute('data-category');
    var portfolio = document.querySelectorAll('.portfolio-box');
    if (category == 'all') {
      portfolio.forEach(function (product) {
        product.style.display = 'flex';
        product.style.opacity = '0';
        setTimeout(function () {
          product.style.transition = 'opacity 0.3s, transform 0.3s, box-shadow 0.3s';
          product.style.opacity = '1';
        }, 0);
      });
    } else {
      portfolio.forEach(function (product) {
        if (product.getAttribute('data-category') == category) {
          product.style.display = 'flex';
          product.style.opacity = '0';
          setTimeout(function () {
            product.style.transition = 'opacity 0.3s, transform 0.3s, box-shadow 0.3s';
            product.style.opacity = '1';
          }, 0);
        } else {
          product.style.display = 'none';
        }
      });
    }
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

ScrollReveal().reveal('.about-content h2, .about-content h3', { origin: 'right' });
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content .d1', { origin: 'bottom', delay: 700 });
ScrollReveal().reveal('.about-content .d2', { origin: 'bottom', delay: 800 });
ScrollReveal().reveal('.about-content .d3', { origin: 'bottom', delay: 900 });

ScrollReveal().reveal('.feedbacks-title', { origin: 'top' });

ScrollReveal().reveal('.services-title', { origin: 'top' });

ScrollReveal().reveal('.portfolio-title', { origin: 'top' });

ScrollReveal().reveal('.faq', { origin: 'left' });

ScrollReveal().reveal('.tos', { origin: 'left' });


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