// FAQ section
const faqQuestions = document.querySelectorAll(".faq-container .question");

faqQuestions.forEach((faqQuestion) => {
    faqQuestion.addEventListener("click", () => {
        faqQuestions.forEach((otherQuestion) => {
            if (otherQuestion !== faqQuestion && otherQuestion.classList.contains("active")) {
                otherQuestion.classList.remove("active");
                const otherAnswer = otherQuestion.nextElementSibling;
                otherAnswer.style.maxHeight = null;
                otherQuestion.querySelector(".downarrow-icon").classList.remove("fa-angle-up");
                otherQuestion.querySelector(".downarrow-icon").classList.add("fa-angle-down");
            }
        });

        faqQuestion.classList.toggle("active");
        const answer = faqQuestion.nextElementSibling;
        if (faqQuestion.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
            faqQuestion.querySelector(".downarrow-icon").classList.remove("fa-angle-down");
            faqQuestion.querySelector(".downarrow-icon").classList.add("fa-angle-up");
        } else {
            answer.style.maxHeight = null;
            faqQuestion.querySelector(".downarrow-icon").classList.remove("fa-angle-up");
            faqQuestion.querySelector(".downarrow-icon").classList.add("fa-angle-down");
        }
    });
});


// Scroll Reveal
ScrollReveal({
    reset: true,
    distance: '200px',
    duration: 1500,
    delay: 150
});

ScrollReveal().reveal('.hero-img', {origin: 'top'});
ScrollReveal().reveal('.hero-content, .question', {origin: 'bottom'});
ScrollReveal().reveal('.about-content, .services-title, .portfolio-title, .faq-title', {origin: 'left'});
ScrollReveal().reveal('.about-img', {origin: 'right'});


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