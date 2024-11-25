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



function calculateSize() {
    const height = parseInt(document.getElementById('heightInput').value);
    const weight = parseInt(document.getElementById('weightInput').value);
    const headCircumference = parseInt(document.getElementById('headCircumferenceInput').value);

    let togaSize = '-';
    let topiSize = '-';

    // Logic to determine the Toga/Baju size based on height and weight
    if (height >= 142 && height <= 155 && weight >= 40 && weight <= 52) {
        togaSize = 'XS';
    } else if (height >= 156 && height <= 160 && weight >= 50 && weight <= 56) {
        togaSize = 'S';
    } else if (height >= 160 && height <= 168 && weight >= 54 && weight <= 65) {
        togaSize = 'M';
    } else if (height >= 160 && height <= 168 && weight >= 105 && weight <= 120) {
        togaSize = 'M Besar';
    } else if (height >= 166 && height <= 173 && weight >= 65 && weight <= 75) {
        togaSize = 'L';
    } else if (height >= 166 && height <= 173 && weight >= 105 && weight <= 130) {
        togaSize = 'L Besar';
    } else if (height >= 170 && height <= 185 && weight >= 75 && weight <= 95) {
        togaSize = 'XL';
    } else if (height >= 170 && height <= 185 && weight >= 110 && weight <= 150) {
        togaSize = 'XL Besar';
    } else if (height >= 190 && height <= 200 && weight >= 75 && weight <= 110) {
        togaSize = 'XXL';
    }

    // Logika untuk menentukan ukuran Topi berdasarkan lingkar kepala
    if (headCircumference >= 55 && headCircumference <= 57) {
        topiSize = 'S';
    } else if (headCircumference >= 57 && headCircumference <= 59) {
        topiSize = 'M';
    } else if (headCircumference >= 59 && headCircumference <= 61) {
        topiSize = 'L';
    } else if (headCircumference >= 61 && headCircumference <= 64) {
        topiSize = 'XL';
    } else if (headCircumference >= 64 && headCircumference <= 66) {
        topiSize = 'XXL';
    }

    // Display the results
    document.getElementById('resultToga').getElementsByTagName('span')[0].textContent = togaSize;
    document.getElementById('resultTopi').getElementsByTagName('span')[0].textContent = topiSize;
}
