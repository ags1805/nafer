// ======================================
// MENÚ HAMBURGUESA
// ======================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {

    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');

});


// ======================================
// CERRAR MENÚ AL HACER CLICK
// ======================================

document.querySelectorAll('.nav-menu a').forEach(link => {

    link.addEventListener('click', () => {

        navMenu.classList.remove('active');
        hamburger.classList.remove('active');

    });

});


// ======================================
// HEADER SCROLL
// ======================================

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

});


// ======================================
// ANIMACIÓN AL APARECER
// ======================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });

}, {
    threshold: 0.15
});

const hiddenElements = document.querySelectorAll(
    '.service-card, .about-item, .fleet-image, .fleet-content, .gallery-grid img'
);

hiddenElements.forEach(el => observer.observe(el));


// ======================================
// FORMULARIO (TEMPORAL)
// ======================================

const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    alert('¡Gracias por contactarte! Nos comunicaremos a la brevedad.');

    form.reset();

});