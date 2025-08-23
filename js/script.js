// This file is ready for your custom JavaScript.
// For example, you could add:
// - A scroll-to-top button
// - Animations on scroll
// - Client-side form validation

console.log('ITBIT Website JavaScript loaded');

// Handle contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const formSuccess = document.getElementById('form-success');
            const formError = document.getElementById('form-error');
            
            // Hide any existing messages
            formSuccess.style.display = 'none';
            formError.style.display = 'none';
            
            // Formspree will handle the actual form submission
            // This is just for UI feedback after submission
            fetch(contactForm.action, {
                method: contactForm.method,
                body: new FormData(contactForm),
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Show success message
                    contactForm.reset();
                    formSuccess.style.display = 'block';
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        formSuccess.style.display = 'none';
                    }, 5000);
                    return response.json();
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                // Show error message
                formError.style.display = 'block';
                console.error('Error:', error);
            });
        });
    }
    
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Offset for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});
