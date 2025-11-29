// DOM Elements
const themeToggle = document.querySelector('.theme-toggle');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('.header');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');
const certCards = document.querySelectorAll('.certificate-card');
const downloadResumeBtn = document.getElementById('downloadResume');

// Theme Toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    // Update icon
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '20px 0';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Certificate Lightbox
certCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Prevent triggering when clicking on text
        if (e.target.tagName !== 'H3' && e.target.tagName !== 'P') {
            const imgSrc = card.querySelector('.cert-img').innerHTML;
            lightboxImg.src = ''; // Placeholder since we're using icons
            document.querySelector('.lightbox-caption').textContent = card.querySelector('h3').textContent;
            lightbox.style.display = 'block';
        }
    });
});

// Close Lightbox
closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Download Resume functionality
downloadResumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Option 1: Link to the resume file we created
    window.open('resume.txt', '_blank');
    
    // Option 2: Alert with instructions (alternative implementation)
    // alert('To download my resume, please contact me at cpr4kash18@gmail.com and I\'ll send it to you.\n\nAlternatively, you can create a resume file and place it in the root directory of this portfolio, then update the download link in the script.js file.');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-card, .certificate-card, .project-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
document.querySelectorAll('.skill-card, .certificate-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Trigger animations on scroll
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Form Validation
const validateForm = () => {
    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.value.trim() === '') {
                input.style.borderColor = '#ff6584';
            } else {
                input.style.borderColor = '';
            }
        });
    });
};

validateForm();

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Add slight delay to hero content animation
    setTimeout(() => {
        document.querySelector('.hero-content').style.animation = 'fadeInUp 1s ease forwards';
    }, 300);
});