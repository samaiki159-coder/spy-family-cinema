// Scroll to section function
function scrollToSection(sectionId) {
    const element = document.querySelector(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const galleryImages = [
    'https://via.placeholder.com/1200x800?text=The+First+Mission',
    'https://via.placeholder.com/1200x800?text=Waku+Waku',
    'https://via.placeholder.com/1200x800?text=The+Perfect+Interview',
    'https://via.placeholder.com/1200x800?text=Eden+Academy',
    'https://via.placeholder.com/1200x800?text=Peanut+Adventures',
    'https://via.placeholder.com/1200x800?text=The+Family+Dinner',
    'https://via.placeholder.com/1200x800?text=Operation+Strix',
    'https://via.placeholder.com/1200x800?text=Together',
    'https://via.placeholder.com/1200x800?text=Twilight',
    'https://via.placeholder.com/1200x800?text=Thorn+Princess',
    'https://via.placeholder.com/1200x800?text=Anya+Smile',
    'https://via.placeholder.com/1200x800?text=Bond+Anya',
    'https://via.placeholder.com/1200x800?text=Forger+Family',
    'https://via.placeholder.com/1200x800?text=Eden+Academy+2',
    'https://via.placeholder.com/1200x800?text=Anya+Funny',
    'https://via.placeholder.com/1200x800?text=Family+Dinner+2',
    'https://via.placeholder.com/1200x800?text=Action+Scene',
    'https://via.placeholder.com/1200x800?text=Operation+Strix+2',
    'https://via.placeholder.com/1200x800?text=Loid+Yor',
    'https://via.placeholder.com/1200x800?text=Walking+Together'
];

let currentImageIndex = 0;

function openLightbox(index) {
    currentImageIndex = index;
    lightboxImage.src = galleryImages[index];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function nextLightbox(event) {
    event.stopPropagation();
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    lightboxImage.src = galleryImages[currentImageIndex];
}

function prevLightbox(event) {
    event.stopPropagation();
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImage.src = galleryImages[currentImageIndex];
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'ArrowRight') {
            nextLightbox({ stopPropagation: () => {} });
        } else if (e.key === 'ArrowLeft') {
            prevLightbox({ stopPropagation: () => {} });
        } else if (e.key === 'Escape') {
            closeLightbox();
        }
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all slide-up elements
document.querySelectorAll('.slide-up, .slide-up-delay-1, .slide-up-delay-2').forEach(el => {
    observer.observe(el);
});

// Add scroll animations to various elements
window.addEventListener('load', () => {
    const allAnimatedElements = document.querySelectorAll(
        '.mission-text, .mission-image, .character-card, .secret-card, .gallery-item, .theme-card, .gallery-card'
    );
    
    allAnimatedElements.forEach(el => {
        observer.observe(el);
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        const scrollPosition = window.scrollY;
        parallaxBg.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// Animate particles in quote section
function createParticles() {
    const particlesContainer = document.querySelector('.animated-particles');
    if (!particlesContainer) return;

    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(212, 175, 55, 0.6)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.pointerEvents = 'none';
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// Counter animations for section numbers
function animateCounters() {
    const sectionNumbers = document.querySelectorAll('.section-number');
    
    const counterOptions = {
        threshold: 0.5
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'pulse 2s ease-in-out';
            }
        });
    }, counterOptions);
    
    sectionNumbers.forEach(number => {
        counterObserver.observe(number);
    });
}

animateCounters();

// Add subtle glow effect on hover for interactive elements
const interactiveElements = document.querySelectorAll('.hero-btn, .character-card, .secret-card, .theme-card, .gallery-card');

interactiveElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        element.style.setProperty('--mouse-x', x + 'px');
        element.style.setProperty('--mouse-y', y + 'px');
    });
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in class to hero elements
    const heroTitle = document.querySelector('.hero-title');
    const heroTagline = document.querySelector('.hero-tagline');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    if (heroTitle) heroTitle.classList.add('fade-in');
    if (heroTagline) heroTagline.classList.add('fade-in-delay-1');
    if (heroSubtitle) heroSubtitle.classList.add('fade-in-delay-2');
});
