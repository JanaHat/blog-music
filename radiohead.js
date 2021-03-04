// Burger menu section
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('nav-active');

        // Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });
        //Burger animaton
        burger.classList.toggle('toggle');

    });

    // Toggle back
    nav.addEventListener('click', () => {
        nav.classList.toggle('nav-notActive');
        burger.classList.toggle('toggle');
        nav.classList.toggle('nav-active');
    });

}

navSlide();