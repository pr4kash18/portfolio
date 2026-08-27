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
const resumeModal = document.getElementById('resumeModal');
const closeResumeModal = document.querySelector('.close-resume-modal');
const skillFilters = document.querySelectorAll('.skill-filter');
const skillCards = document.querySelectorAll('.skill-card');

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

// Header scroll effect and direction-aware visibility
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.classList.add('nav-hidden');
    } else if (currentScrollY < lastScrollY) {
        header.classList.remove('nav-hidden');
    }

    if (currentScrollY > 100) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.classList.remove('nav-hidden');
        header.style.padding = '20px 0';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    lastScrollY = currentScrollY;
});

// Certificate Lightbox
certCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Prevent triggering when clicking on text
        if (e.target.tagName !== 'H3' && e.target.tagName !== 'P') {
            // Get the image source from the certificate card
            const imgElement = card.querySelector('.cert-img img');
            if (imgElement) {
                lightboxImg.src = imgElement.src;
            } else {
                // Fallback if no image is found
                lightboxImg.src = '';
            }
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

// Resume download options
downloadResumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resumeModal.hidden = false;
    closeResumeModal.focus();
});

const hideResumeModal = () => {
    resumeModal.hidden = true;
    downloadResumeBtn.focus();
};

// Filter skills by category
skillFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        const selectedCategory = filter.dataset.filter;

        skillFilters.forEach(item => {
            const isActive = item === filter;
            item.classList.toggle('active', isActive);
            item.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        skillCards.forEach(card => {
            const categories = card.dataset.category.split(' ');
            const shouldShow = selectedCategory === 'all' || categories.includes(selectedCategory);
            card.classList.toggle('skill-card-hidden', !shouldShow);
        });
    });
});

closeResumeModal.addEventListener('click', hideResumeModal);

resumeModal.addEventListener('click', (e) => {
    if (e.target === resumeModal) hideResumeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !resumeModal.hidden) hideResumeModal();
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