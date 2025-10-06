// Simple JavaScript file for basic interactivity

// Alert on page load
window.addEventListener('load', function() {
    alert('Welcome to Motion Fitness Gym!');
});

// Handle newsletter form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletter-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        if (emailInput.value) {
            alert('Thank you for subscribing with ' + emailInput.value + '!');
            form.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });
});
