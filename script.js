// Variables (elementos del DOM)
const navbar = document.querySelector('.navbar');
const burgerMenu = document.querySelector('.burger-menu');
const burgerLine = document.querySelector('.burger-line');
const mobileNavLinks = document.querySelector('.mobile-nav-links');
const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');

// NAVBAR (adaptable según HTML)
function updateNavbar() {
    if (window.pageYOffset > 0) {
        navbar.classList.add('sticky', 'scrolled');
        document.body.style.paddingTop = `${navbar.offsetHeight}px`;
    } else {
        navbar.classList.remove('sticky', 'scrolled');
        document.body.style.paddingTop = '0';
    }
}

function makeNavbarFixed() {
    navbar.classList.add('fixed-top', 'bg-solid');
    document.body.style.paddingTop = `${navbar.offsetHeight}px`;
}

// Menu Hamburguesa
burgerMenu.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('show');
    burgerLine.classList.toggle('burger-line--active');
    burgerMenu.classList.toggle('open');
});

// Desplazamiento "smooth" a otras secciones de la página u otros archivos HTML
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        smoothScrollTo(targetId);
    });
});

// Función para el desplazamiento suave
function smoothScrollTo(targetId) {
    if (targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = navbar.offsetHeight;
            const scrollPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    } else {
        window.location.href = targetId;
    }
}

// Evento de scroll
window.addEventListener('scroll', updateNavbar);


// Evento para el teclado del menu amburguesa
burgerMenu.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        burgerMenu.click();
    }
});