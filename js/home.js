
function duplicateLogos(sliderId) {
    const slider = document.getElementById(sliderId);
    const clone = slider.innerHTML; // Duplikat seluruh elemen di dalam slider
    slider.innerHTML += clone; // Tambahkan duplikat ke akhir slider
}

function moveSlider(sliderId, direction, speed) {
    const slider = document.getElementById(sliderId);
    let position = 0;

    function animate() {
        if (direction === 'left') {
            position -= speed; // Geser ke kiri
            if (position <= -slider.scrollWidth / 2) {
                position = 0; // Reset ke awal jika sudah mencapai batas
            }
        } else {
            position += speed; // Geser ke kanan
            if (position >= slider.scrollWidth / 2) {
                position = 0; // Reset ke awal jika sudah mencapai batas
            }
        }
        slider.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate); // Animasi berulang
    }

    animate();
}

// Duplikasi logo dan jalankan animasi
duplicateLogos('slider-left');
duplicateLogos('slider-right');

// Slider pertama bergerak ke kiri
moveSlider('slider-left', 'left', 1); // Kecepatan pergerakan bisa disesuaikan

// Slider kedua bergerak ke kanan
moveSlider('slider-right', 'right', 1); // Kecepatan pergerakan bisa disesuaikan
// JavaScript to handle the menu toggle for smaller screens
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