// Simple interaction logic for the portfolio

document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-btn');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // Find the contact section and scroll smoothly to it
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});