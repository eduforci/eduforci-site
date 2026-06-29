/* ===================================
   EDUFORCI V4 - SCRIPT.JS
=================================== */

// Menu mobile
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Header au défilement
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
/* ===================================
   FAQ
=================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    if(question){

        question.addEventListener("click", () => {

            faqItems.forEach(faq => {

                if(faq !== item){
                    faq.classList.remove("active");
                }

            });

            item.classList.toggle("active");

        });

    }

});


/* ===================================
   ANIMATION AU DÉFILEMENT
=================================== */

const revealElements = document.querySelectorAll(
".card,.service-card,.step-card,.testimonial-card,.why-item,.faq-item"
);

const revealOnScroll = () => {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            el.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
/* ===================================
   COMPTEURS ANIMÉS
=================================== */

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        const updateCounter = () => {

            const current = +counter.innerText;

            const increment = Math.ceil(target / 100);

            if (current < target) {

                counter.innerText = Math.min(current + increment, target);

                setTimeout(updateCounter, 20);

            }

        };

        updateCounter();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (stats && !counterStarted) {

        const top = stats.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            counterStarted = true;

            startCounters();

        }

    }

});


/* ===================================
   BOUTON RETOUR EN HAUT
=================================== */

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop?.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

