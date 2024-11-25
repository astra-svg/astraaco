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

document.getElementById('signupForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    // Get the form and response elements
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    const responseMessage = document.getElementById('responseMessage');

    // Disable form and show loading state
    form.classList.add('form-disabled');
    submitButton.innerHTML = '<span class="loading"></span>Mengirim...';

    try {
        // Create FormData object
        const formData = new FormData(form);

        // Send data to Web3Forms API
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        // Remove any existing classes
        responseMessage.classList.remove('show', 'success', 'error');

        if (response.status === 200) {
            // Show success message with animation
            responseMessage.textContent = 'Terima kasih! Pesan Anda telah berhasil terkirim.';
            responseMessage.classList.add('success');
            form.reset();
        } else {
            // Show error message with animation
            responseMessage.textContent = data.message || 'Terjadi kesalahan saat mengirim pesan.';
            responseMessage.classList.add('error');
        }

        // Trigger animation
        responseMessage.offsetHeight; // Force reflow
        responseMessage.classList.add('show');

        // Auto hide message after 5 seconds
        setTimeout(() => {
            responseMessage.classList.remove('show');
        }, 5000);

    } catch (error) {
        console.error('Error:', error);
        responseMessage.textContent = 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti.';
        responseMessage.classList.remove('show', 'success');
        responseMessage.classList.add('error', 'show');
    } finally {
        // Re-enable form and restore button state
        form.classList.remove('form-disabled');
        submitButton.textContent = originalButtonText;
    }
});