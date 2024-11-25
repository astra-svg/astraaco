renderContent();
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Toggle the navigation menu on click of the hamburger icon
    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Close dropdown menus if clicked outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.nav-menu') && !event.target.closest('.nav-toggle')) {
            navMenu.classList.remove('active');
        }
    });

    // Toggle dropdown submenu on hover
    const dropdown = document.querySelector('li:has(.dropdown-menu)');
    dropdown.addEventListener('mouseover', function () {
        this.querySelector('.dropdown-menu').classList.add('show');
    });
    dropdown.addEventListener('mouseleave', function () {
        this.querySelector('.dropdown-menu').classList.remove('show');
    });
});