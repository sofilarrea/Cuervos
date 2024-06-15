document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById('navbar');
    var logo = document.querySelector('.home img');
    var hero = document.querySelector('.hero');
    var heroHeight = hero.offsetHeight;

    window.addEventListener('scroll', function() {
        if (window.scrollY > heroHeight) {
            navbar.classList.add('fixed');
            logo.style.display = 'block'; // Show the logo when scrolled past hero section
        } else {
            navbar.classList.remove('fixed');
            logo.style.display = 'none'; // Hide the logo when in the hero section
        }
    });
});