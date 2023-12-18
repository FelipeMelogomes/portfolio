/* SELECT ELEMENT */
const selectElement = (element) => document.getElementById(element);

/* SHOW MENU */
const navMenu = selectElement("nav-menu"),
    navToggle = selectElement("nav-toggle"),
    navClose = selectElement("nav-close");

const toggleMenu = () => {
    navMenu.classList.toggle("show-menu");
};

// Adicionar evento de clique para mostrar o menu
if (navToggle) {
    navToggle.addEventListener("click", toggleMenu);
}

// Adicionar evento de clique para esconder o menu
if (navClose) {
    navClose.addEventListener("click", toggleMenu);
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* ADD BLUR TO HEADER */
const blurHeader = () => {
    const header = document.getElementById("header");
    const shouldBlur = window.scrollY >= 50;

    if (shouldBlur) {
        header.classList.add("blur-header");
    } else {
        header.classList.remove("blur-header");
    }
};

window.addEventListener("scroll", blurHeader);

/* EMAIL JS */
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
    e.preventDefault();

    // serviceID - templateID - #form - publicKey
    emailjs
        .sendForm(
            "service_6be3jwr",
            "template_gexsoj5",
            "#contact-form",
            "67CqkqzBExag3iaZ3"
        )
        .then(
            () => {
                // Show sent message
                contactMessage.textContent = "Mensagem enviada com sucesso ✅";

                // Remove message after five seconds
                setTimeout(() => {
                    contactMessage.textContent = "";
                }, 5000);

                // Clear input fields
                contactForm.reset();
            },
            () => {
                // Show error message
                contactMessage.textContent =
                    "Mensagem não enviada (erro de serviço)❌";
            }
        );
};

contactForm.addEventListener("submit", sendEmail);

/* SHOW SCROLL UP */
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 350) {
        scrollUp.classList.add("show-scroll");
    } else {
        scrollUp.classList.remove("show-scroll");
    }
};
window.addEventListener("scroll", scrollUp);

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollPosition = 58;
    const navLinks = document.querySelectorAll(".nav__menu a");

    sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const sectionLink = document.querySelector(
            `.nav__menu a[href*=${sectionId}]`
        );

        if (sectionLink) {
            const { top, bottom } = section.getBoundingClientRect();
            const isSectionInView =
                top <= scrollPosition && bottom >= scrollPosition;

            sectionLink.classList.toggle("active-link", isSectionInView);
        }
    });
};

window.addEventListener("scroll", scrollActive);

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true, // Animations repeat
});

sr.reveal(".home__image", { origin: "bottom" });
sr.reveal(".about__data, .skills__data", { origin: "left" });
sr.reveal(".about__image, .skills__content", {
    origin: "right",
});
sr.reveal(".services__card, .projects__card", { interval: 200 });
