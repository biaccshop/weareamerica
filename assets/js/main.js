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

ScrollReveal().reveal('.hero-img, .portfolio2, .service2', {origin: 'top'});
ScrollReveal().reveal('.hero-content, .question, .portfolio5, .service5', {origin: 'bottom'});
ScrollReveal().reveal('.about-content, .services-title, .portfolio-title, .faq-title, .portfolio1, .portfolio4, .service1, .service4', {origin: 'left'});
ScrollReveal().reveal('.about-img, .portfolio3, .portfolio6, .service3, .service6', {origin: 'right'});