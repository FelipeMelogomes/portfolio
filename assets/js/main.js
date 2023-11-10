/* SHOW MENU */
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/* MENU SHOW */
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

/* MENU HIDDEN */
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
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

    this.scrollY >= 350
        ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        const sectionsClass = document.querySelector(
            `.nav__menu a[href*=${sectionId}]`
        );

        if (sectionsClass) {
            const sectionRect = current.getBoundingClientRect();
            const isSectionInView =
                sectionRect.top <= 58 && sectionRect.bottom >= 58;

            if (isSectionInView) {
                sectionsClass.classList.add("active-link");
            } else {
                sectionsClass.classList.remove("active-link");
            }
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

sr.reveal(
    ".home__data, .home__social, .contact__container, .footer__container"
);
sr.reveal(".home__image", { origin: "bottom" });
sr.reveal(".about__data, .skills__data", { origin: "left" });
sr.reveal(".about__image, .skills__content", {
    origin: "right",
});
sr.reveal(".services__card, .projects__card", { interval: 200 });

/* ANIMATION DIGITATION */
document.addEventListener("DOMContentLoaded", () => {
    new TypeIt(".home__education", {
        speed: 200,
        loop: true,
    })
        .type("Desenvolvedor Front-end", { delay: 900 })
        .go();
});

