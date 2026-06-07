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

// Download Resume functionality
downloadResumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Create resume content
    const resumeContent = `CHANDRA PRAKASH CHOUBISA
Student - BTech CSE (3rd Year)
Geetanjali Institute of Technical Studies, Udaipur, Rajasthan

Email: cpchoubisa18@gmail.com
Location: Udaipur, Rajasthan
GitHub: https://github.com/pr4kash18
LinkedIn: https://www.linkedin.com/in/chandra-prakash-choubisa-0526653b7
LeetCode: https://leetcode.com/u/chandra-pr4kash

OBJECTIVE:
Aspiring machine learning practitioner with strong Python skills and growing expertise in DSA in Java for logic building. Seeking opportunities to apply machine learning, Python, and algorithmic problem solving to practical projects.

EDUCATION:
Bachelor of Technology in Computer Science and Engineering
Geetanjali Institute of Technical Studies, Udaipur
Expected Graduation: 2028

SKILLS:
• Programming Languages: Python, C, Java, JavaScript
• Data Structures & Algorithms: Java
• Web Technologies: HTML, CSS
• Problem Solving and Analytical Thinking
• Machine Learning & AI

CERTIFICATIONS:
• Digital Productivity with AI - YuWaah & UNICEF
• Basic Python - Simplilearn
• Break Into Data Analytics - Coding Ninjas & KodeInKGP
• Machine Learning using AI - by Grras

PROJECTS:
1. Student Management System
   - Technologies: Java, JDBC, MySQL
   - GitHub: https://github.com/pr4kash18/student-management-system.git
   - Scalable desktop application for managing student records, attendance, and grades

2. Spam Hunter
   - Technologies: Python, Streamlit, Scikit-learn, Pandas, Numpy
   - GitHub: https://github.com/pr4kash18/spam-message-detector.git
   - Live App: https://spam-hunter.streamlit.app/
   - AI/ML-based spam detection system with interactive web interface

INTERESTS:
• Machine Learning
• Algorithmic Problem Solving
• Building Practical Projects
• Continuous Learning
• Data Science

REFERENCES:
Available upon request
`;
    
    // Create a blob from the content
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Chandra_Prakash_Choubisa_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
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