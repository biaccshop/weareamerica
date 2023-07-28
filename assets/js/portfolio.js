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



// Scroll Reveal
ScrollReveal({
  reset: false,
  distance: '200px',
  duration: 1500,
  delay: 200
});

ScrollReveal().reveal('#announcement', { origin: 'top', distance: '50px', delay: 200 });

ScrollReveal().reveal('.header', { origin: 'top', distance: '0px', delay: 200, duration: 2000 });

ScrollReveal().reveal('.contact .card', { origin: 'bottom', distance: '50px', delay: 500 });

ScrollReveal().reveal('.portfolio-title', { origin: 'bottom', distance: '50px', delay: 200 });
ScrollReveal().reveal('.portfolio .category-filter', { origin: 'bottom', distance: '0px', delay: 500 });
ScrollReveal().reveal('.portfolio .portfolio-content', { origin: 'bottom', distance: '0px', delay: 900 });



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



// Modal section
$(document).ready(function () {
  var modal = $(".modal");
  // Function to add a flag value to localStorage when the modal is closed.
  function setModalClosed() {
    localStorage.setItem("modalClosed", "true");
  }
  // Check the flag value in localStorage when the page loads to display the modal if needed.
  var modalClosedFlag = localStorage.getItem("modalClosed");
  if (modalClosedFlag === null) {
    modal.css("display", "block");
  }
  modal.on("click", ".close", function () {
    modal.css("display", "none");
    setModalClosed(); // Add the flag value to localStorage when the modal is closed.
  });
  modal.on("click", "a", function () {
    modal.css("display", "none");
    setModalClosed(); // Add the flag value to localStorage when the modal is closed.
  });
  $(document).on("click", function (event) {
    if ($(event.target).is(modal)) {
      modal.css("display", "none");
      setModalClosed(); // Add the flag value to localStorage when the modal is closed.
    }
  });
});



// Announcement
const announcementClose = document.querySelector(".announcement-close");
const announcementSection = document.querySelector("#announcement");

announcementClose.addEventListener("click", () => {
  announcementSection.classList.add("hidden");
  sessionStorage.setItem("announcementHidden", "true");
});

// Checking of refresh
window.addEventListener("load", () => {
  const isAnnouncementHidden = sessionStorage.getItem("announcementHidden");
  if (isAnnouncementHidden === "true") {
    announcementSection.classList.add("hidden");
  }
});