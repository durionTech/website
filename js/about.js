// Form Submission with animation
document.getElementById("businessForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const submitBtn = e.target.querySelector(".submit-btn");
    const originalText = submitBtn.innerHTML;
    
    // Show success state
    submitBtn.innerHTML = '<i class="bi bi-check-circle"></i> Submitted!';
    submitBtn.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
    submitBtn.disabled = true;

    // Reset after 3 seconds
    setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
        
        // Show alert
        showNotification("Thank you! Our team will contact you soon.");
        
        // Reset form with animation
        e.target.reset();
    }, 3000);
});

// Notification Function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #4CAF50, #45a049);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.4s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.4s ease';
        setTimeout(() => notification.remove(), 400);
    }, 3000);
}

// Counter Animation for Stats
function startCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    const statTexts = document.querySelectorAll('.stat-text');
    
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate number counters
                if (entry.target.classList.contains('stat-number')) {
                    const target = parseInt(entry.target.getAttribute('data-target'));
                    animateCounter(entry.target, target);
                }
                
                // Animate text counters
                if (entry.target.classList.contains('stat-text')) {
                    const text = entry.target.getAttribute('data-text');
                    entry.target.textContent = text;
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
    statTexts.forEach(text => observer.observe(text));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 40;
    const duration = 1500; // 1.5 seconds
    let start = Date.now();

    function update() {
        let elapsed = Date.now() - start;
        
        if (elapsed < duration) {
            current += increment;
            element.textContent = Math.floor(current) + '+';
            requestAnimationFrame(update);
        } else {
            element.textContent = target + '+';
        }
    }
    
    update();
}

// Form Input Animation
const formInputs = document.querySelectorAll('.form-box input, .form-box select, .form-box textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.animation = 'inputFocus 0.3s ease';
    });

    input.addEventListener('blur', function() {
        if (this.value.trim() !== '') {
            this.style.borderColor = '#1E88FF';
            this.style.background = 'white';
        } else {
            this.style.borderColor = '';
            this.style.background = '';
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    startCounterAnimation();
    addScrollAnimations();
    initializeParallax();
});

// Scroll Animations for elements
function addScrollAnimations() {
    const elements = document.querySelectorAll('.intro-content, .mission-card, .choose-card, .stat-card');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                entry.target.style.animationDelay = `${index * 0.1}s`;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(element => observer.observe(element));
}

// Parallax effect on scroll
function initializeParallax() {
    window.addEventListener('scroll', () => {
        const aboutBanner = document.querySelector('.about-banner');
        const ctaSection = document.querySelector('.cta-section');
        
        if (aboutBanner) {
            const scrollPos = window.scrollY;
            aboutBanner.style.backgroundPosition = `0 ${scrollPos * 0.5}px`;
        }
        
        if (ctaSection) {
            const scrollPos = window.scrollY;
            const shapes = ctaSection.querySelectorAll('.cta-shape');
            shapes.forEach((shape, index) => {
                shape.style.transform = `translateY(${scrollPos * 0.3 * (index + 1)}px)`;
            });
        }
    });
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }

    @keyframes inputFocus {
        0% {
            transform: scale(0.99);
        }
        50% {
            transform: scale(1.01);
        }
        100% {
            transform: scale(1);
        }
    }

    /* Ripple effect on click */
    .choose-card::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: translate(-50%, -50%);
        pointer-events: none;
    }

    .choose-card:active::after {
        animation: ripple 0.6s ease-out;
    }

    @keyframes ripple {
        to {
            width: 300px;
            height: 300px;
            opacity: 0;
        }
    }

    /* Smooth transitions */
    * {
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    /* Remove transition for specific elements to prevent lag */
    .shape, .cta-shape, input, select, textarea {
        transition: none !important;
    }
`;

document.head.appendChild(style);

// Mouse move effect on cards
document.querySelectorAll('.mission-card, .choose-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0px)';
    });
});

// Image zoom on hover
const introImage = document.querySelector('.intro-image');
if (introImage) {
    introImage.addEventListener('mousemove', (e) => {
        const rect = introImage.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        const offsetX = (x - 0.5) * 20;
        const offsetY = (y - 0.5) * 20;
        
        introImage.style.transform = `scale(1.1) translate(${offsetX}px, ${offsetY}px)`;
    });

    introImage.addEventListener('mouseleave', () => {
        introImage.style.transform = 'scale(1.08) translate(0, 0)';
    });
}

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log('About page animations loaded successfully! ✨');
