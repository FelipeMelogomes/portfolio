/* SELECT ELEMENT */
const selectElement = (element) => document.getElementById(element);

/* SHOW MENU */
const navMenu = selectElement("nav-menu"),
    navToggle = selectElement("nav-toggle"),
    navClose = selectElement("nav-close");

const toggleMenu = () => {
    navMenu.classList.toggle("show-menu");
};

if (navToggle) {
    navToggle.addEventListener("click", toggleMenu);
}

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
    reset: false, // Animations repeat
});

sr.reveal(".home__image", { origin: "bottom" });
sr.reveal(".about__data, .skills__data", { origin: "left" });
sr.reveal(".about__image, .skills__content", {
    origin: "right",
});
sr.reveal(".services__card, .projects__card", { interval: 200 });
