// This file is ready for your custom JavaScript.
// For example, you could add:
// - A scroll-to-top button
// - Animations on scroll
// - Client-side form validation

console.log('ITBIT Website JavaScript loaded');

// Handle image loading errors and replace with emojis
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    
    // Map of image alt text keywords to appropriate emojis
    const emojiMap = {
        'automation': '🤖',
        'workflow': '⚙️',
        'cloud': '☁️',
        'infrastructure': '🏗️',
        'service': '🛠️',
        'analytics': '📊',
        'data': '📈',
        'security': '🔒',
        'technology': '💻',
        'client': '👥',
        'team': '👥',
        'person': '👤',
        'contact': '📞',
        'email': '✉️',
        'logo': '🏢'
    };
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Get alt text and convert to lowercase
            const altText = this.alt ? this.alt.toLowerCase() : '';
            
            // Find a matching emoji based on alt text
            let emoji = '📷'; // Default camera emoji
            
            for (const [keyword, value] of Object.entries(emojiMap)) {
                if (altText.includes(keyword)) {
                    emoji = value;
                    break;
                }
            }
            
            // Create a div to replace the image
            const emojiContainer = document.createElement('div');
            emojiContainer.className = 'emoji-fallback d-flex justify-content-center align-items-center bg-light rounded';
            emojiContainer.style.width = '100%';
            emojiContainer.style.height = '200px';
            emojiContainer.style.fontSize = '5rem';
            emojiContainer.innerHTML = emoji;
            
            // Replace the image with the emoji
            this.parentNode.replaceChild(emojiContainer, this);
        });
    });
}

// Handle contact form submission
document.addEventListener('DOMContentLoaded', function() {
    // Initialize image error handling
    handleImageErrors();
    
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
