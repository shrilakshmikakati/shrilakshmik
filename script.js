// Ocean Portfolio - JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    initWaveAnimations();
    initTypingEffect();
    initFormHandling();
    initParallaxEffects();
    initSmoothScrolling();
    createGlobalOceanEffects();
    
    // Remove loading screen after everything loads
    setTimeout(() => {
        const loading = document.querySelector('.loading');
        if (loading) {
            loading.style.opacity = '0';
            setTimeout(() => loading.remove(), 500);
        }
    }, 1000);
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 22, 40, 0.98)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.background = 'rgba(10, 22, 40, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });

    // Mobile menu toggle
    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu?.classList.toggle('active');
        
        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = hamburger.classList.contains('active') ? 
            'rotate(-45deg) translate(-5px, 6px)' : 'none';
        spans[1].style.opacity = hamburger.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = hamburger.classList.contains('active') ? 
            'rotate(45deg) translate(-5px, -6px)' : 'none';
    });

    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
            const spans = hamburger?.querySelectorAll('span');
            if (spans) {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate stats numbers
                if (entry.target.classList.contains('about-stats')) {
                    animateStats();
                }
                
                // Animate skill cards
                if (entry.target.classList.contains('skills-grid')) {
                    animateSkills();
                }
                
                // Animate project items
                if (entry.target.classList.contains('projects-flow')) {
                    animateProjects();
                }
            }
        });
    }, observerOptions);

    // Add fade-in class to elements
    const sections = document.querySelectorAll('.section-title, .about-content, .about-stats, .experience-flow, .skills-flow, .projects-flow, .education-timeline, .achievements-flow, .contact-content');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
}

// Animate statistics numbers
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        const increment = target / 50;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + (stat.textContent.includes('%') ? '%' : '+');
        }, 30);
    });
}

// Animate skill cards
function animateSkills() {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 200);
    });
}

// Animate project items
function animateProjects() {
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(50px)';
            item.style.transition = 'all 0.8s ease';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100);
        }, index * 400);
    });
}

// Wave animations
function initWaveAnimations() {
    // Create floating particles
    createFloatingParticles();
    
    // Create skill bubbles
    createSkillBubbles();
    
    // Create experience ocean effects
    createExperienceEffects();
    
    // Animate wave dividers
    const waveDividers = document.querySelectorAll('.wave-divider');
    waveDividers.forEach(divider => {
        setInterval(() => {
            divider.style.transform = 'scaleX(' + (0.8 + Math.random() * 0.4) + ')';
        }, 2000 + Math.random() * 1000);
    });
}

// Create floating particles effect
function createFloatingParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        hero.appendChild(particle);
    }
    
    // Add CSS for floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { 
                transform: translateY(0px) translateX(0px);
                opacity: 0.3;
            }
            25% { 
                transform: translateY(-20px) translateX(10px);
                opacity: 0.7;
            }
            50% { 
                transform: translateY(-10px) translateX(-5px);
                opacity: 1;
            }
            75% { 
                transform: translateY(-15px) translateX(-10px);
                opacity: 0.5;
            }
        }
    `;
    document.head.appendChild(style);
}

// Create dynamic bubbles for skills section
function createSkillBubbles() {
    const skillsSection = document.querySelector('.floating-bubbles');
    if (!skillsSection) return;
    
    for (let i = 0; i < 8; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'dynamic-bubble';
        bubble.style.cssText = `
            position: absolute;
            width: ${Math.random() * 25 + 15}px;
            height: ${Math.random() * 25 + 15}px;
            background: radial-gradient(circle, rgba(52, 152, 219, 0.2) 0%, transparent 70%);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: skillBubbleFloat ${Math.random() * 6 + 8}s ease-in-out infinite;
            animation-delay: ${Math.random() * 3}s;
        `;
        skillsSection.appendChild(bubble);
    }
    
    // Add CSS for skill bubbles
    const skillStyle = document.createElement('style');
    skillStyle.textContent = `
        @keyframes skillBubbleFloat {
            0%, 100% { 
                transform: translateY(0px) translateX(0px) scale(1);
                opacity: 0.2;
            }
            25% { 
                transform: translateY(-30px) translateX(15px) scale(1.2);
                opacity: 0.6;
            }
            50% { 
                transform: translateY(-15px) translateX(-10px) scale(0.8);
                opacity: 0.8;
            }
            75% { 
                transform: translateY(-35px) translateX(20px) scale(1.1);
                opacity: 0.4;
            }
        }
    `;
    document.head.appendChild(skillStyle);
}

// Create ocean current effects for experience section
function createExperienceEffects() {
    const experienceSection = document.querySelector('.experience-ocean-current');
    if (!experienceSection) return;
    
    // Add additional swimming fish
    for (let i = 0; i < 3; i++) {
        const fish = document.createElement('div');
        fish.className = 'extra-fish';
        fish.style.cssText = `
            position: absolute;
            width: 25px;
            height: 18px;
            left: -40px;
            top: ${30 + (i * 15)}%;
            animation: extraFishSwim ${12 + i * 3}s linear infinite;
            animation-delay: ${i * 5}s;
        `;
        fish.innerHTML = ['🐠', '🐟', '🦈'][i];
        experienceSection.appendChild(fish);
    }
    
    // Add floating particles in experience
    for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        particle.className = 'experience-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 6 + 3}px;
            height: ${Math.random() * 6 + 3}px;
            background: rgba(30, 144, 255, 0.3);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: experienceFloat ${Math.random() * 8 + 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 4}s;
        `;
        experienceSection.appendChild(particle);
    }
    
    // Add CSS for experience effects
    const expStyle = document.createElement('style');
    expStyle.textContent = `
        @keyframes extraFishSwim {
            0% { 
                left: -40px;
                transform: translateY(0px) scaleX(1);
            }
            20% { 
                transform: translateY(-10px) scaleX(1);
            }
            40% { 
                transform: translateY(8px) scaleX(1);
            }
            60% { 
                transform: translateY(-5px) scaleX(1);
            }
            80% { 
                transform: translateY(12px) scaleX(1);
            }
            100% { 
                left: calc(100% + 40px);
                transform: translateY(0px) scaleX(1);
            }
        }
        
        @keyframes experienceFloat {
            0%, 100% { 
                transform: translateY(0px) translateX(0px);
                opacity: 0.3;
            }
            33% { 
                transform: translateY(-25px) translateX(10px);
                opacity: 0.7;
            }
            66% { 
                transform: translateY(-10px) translateX(-8px);
                opacity: 0.5;
            }
        }
        
        .extra-fish {
            font-size: 18px;
            opacity: 0.7;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        }
    `;
    document.head.appendChild(expStyle);
}

// Typing effect for hero subtitle
function initTypingEffect() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (!subtitle) return;
    
    const originalText = subtitle.textContent;
    // Use the global words array defined above
    let charIndex = 0;
    let isDeleting = false;
    
    function typeWords() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            subtitle.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        } else {
            subtitle.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentWord.length) {
                setTimeout(() => {
                    isDeleting = true;
                }, 2000);
            }
        }
        
        const typingSpeed = isDeleting ? 50 : 100;
        setTimeout(typeWords, typingSpeed);
    }
    
    setTimeout(typeWords, 2000);
}

// Form handling
function initFormHandling() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Add wave animation to button
        submitBtn.style.position = 'relative';
        submitBtn.style.overflow = 'hidden';
        
        setTimeout(() => {
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.background = 'var(--seaweed)';
            
            // Reset form
            setTimeout(() => {
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 3000);
        }, 2000);
        
        console.log('Form submitted:', data);
    });
    
    // Add floating label effect
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.transform = 'scale(1.02)';
            input.style.boxShadow = '0 5px 15px rgba(52, 152, 219, 0.2)';
        });
        
        input.addEventListener('blur', () => {
            input.style.transform = 'scale(1)';
            input.style.boxShadow = 'none';
        });
    });
}

// Parallax effects
function initParallaxEffects() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Parallax for hero section
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
        
        // Parallax for floating particles
        const particles = document.querySelectorAll('.floating-particle');
        particles.forEach((particle, index) => {
            const speed = 0.1 + (index % 3) * 0.05;
            particle.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Smooth scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mouse effects
document.addEventListener('mousemove', (e) => {
    // Create ripple effect on mouse move
    if (Math.random() < 0.05) { // Only create ripple occasionally
        createRipple(e.clientX, e.clientY);
    }
});

function createRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 10px;
        height: 10px;
        background: radial-gradient(circle, rgba(52, 152, 219, 0.3) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        animation: rippleAnimation 1s ease-out forwards;
    `;
    
    document.body.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 1000);
}

// Add ripple animation CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes rippleAnimation {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(20);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll-intensive functions
window.addEventListener('scroll', throttle(function() {
    // Your scroll-intensive code here
}, 16)); // ~60fps

// Preload images and optimize performance
function preloadImages() {
    const imageUrls = [
        // Add any background images or icons here
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Wave cursor effect
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(52, 152, 219, 0.5) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease;
        mix-blend-mode: difference;
    `;
    
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Hide default cursor on hover over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .nav-link, .project-card');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.background = 'radial-gradient(circle, rgba(52, 152, 219, 0.8) 0%, transparent 70%)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'radial-gradient(circle, rgba(52, 152, 219, 0.5) 0%, transparent 70%)';
        });
    });
});

// Add loading screen HTML if it doesn't exist
if (!document.querySelector('.loading')) {
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="wave-loader"></div>';
    document.body.insertBefore(loading, document.body.firstChild);
}

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        // Easter egg: Make it rain ocean particles
        createOceanParticleRain();
        konamiCode = [];
    }
});

function createOceanParticleRain() {
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.innerHTML = ['🌊', '🐠', '🐙', '⭐', '🦀'][Math.floor(Math.random() * 5)];
            particle.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}vw;
                top: -50px;
                font-size: ${Math.random() * 20 + 10}px;
                pointer-events: none;
                z-index: 9999;
                animation: fall 3s ease-in forwards;
            `;
            
            document.body.appendChild(particle);
            setTimeout(() => particle.remove(), 3000);
        }, i * 100);
    }
    
    // Add fall animation
    const fallStyle = document.createElement('style');
    fallStyle.textContent = `
        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(fallStyle);
}

// Create global ocean effects throughout the page
function createGlobalOceanEffects() {
    // Create floating bubbles throughout the entire page
    const body = document.body;
    
    // Create multiple layers of bubbles
    for (let layer = 0; layer < 3; layer++) {
        const bubbleContainer = document.createElement('div');
        bubbleContainer.className = `global-bubble-layer-${layer}`;
        bubbleContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: ${-10 + layer};
            overflow: hidden;
        `;
        
        // Add bubbles to each layer
        for (let i = 0; i < 15; i++) {
            const bubble = document.createElement('div');
            bubble.className = `global-bubble`;
            bubble.style.cssText = `
                position: absolute;
                width: ${Math.random() * 30 + 10}px;
                height: ${Math.random() * 30 + 10}px;
                background: radial-gradient(circle, rgba(52, 152, 219, ${0.05 + layer * 0.03}) 0%, transparent 70%);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: globalBubbleFloat${layer} ${Math.random() * 15 + 20}s ease-in-out infinite;
                animation-delay: ${Math.random() * 10}s;
            `;
            bubbleContainer.appendChild(bubble);
        }
        
        body.appendChild(bubbleContainer);
    }
    
    // Create coral decorations in corners
    const corners = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
    corners.forEach((corner, index) => {
        const coral = document.createElement('div');
        coral.className = `global-coral ${corner}`;
        coral.style.cssText = `
            position: fixed;
            width: 150px;
            height: 250px;
            background: linear-gradient(${45 + index * 90}deg, 
                rgba(255, 127, 80, 0.05) 0%, 
                rgba(255, 99, 71, 0.03) 50%, 
                rgba(255, 140, 0, 0.02) 100%);
            border-radius: ${Math.random() * 50 + 20}% ${Math.random() * 50 + 20}% ${Math.random() * 50 + 20}% ${Math.random() * 50 + 20}%;
            pointer-events: none;
            z-index: -15;
            animation: globalCoralSway ${8 + index * 2}s ease-in-out infinite;
            animation-delay: ${index * 2}s;
        `;
        
        // Position in corners
        if (corner.includes('top')) coral.style.top = '-100px';
        if (corner.includes('bottom')) coral.style.bottom = '-100px';
        if (corner.includes('left')) coral.style.left = '-75px';
        if (corner.includes('right')) coral.style.right = '-75px';
        
        body.appendChild(coral);
    });
    
    // Add global CSS animations
    const globalStyle = document.createElement('style');
    globalStyle.textContent = `
        @keyframes globalBubbleFloat0 {
            0%, 100% { 
                transform: translateY(0px) translateX(0px) scale(1);
                opacity: 0.3;
            }
            25% { 
                transform: translateY(-40px) translateX(20px) scale(1.2);
                opacity: 0.6;
            }
            50% { 
                transform: translateY(-20px) translateX(-15px) scale(0.8);
                opacity: 0.8;
            }
            75% { 
                transform: translateY(-50px) translateX(25px) scale(1.1);
                opacity: 0.4;
            }
        }
        
        @keyframes globalBubbleFloat1 {
            0%, 100% { 
                transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
                opacity: 0.2;
            }
            33% { 
                transform: translateY(-30px) translateX(-10px) scale(1.1) rotate(120deg);
                opacity: 0.5;
            }
            66% { 
                transform: translateY(-15px) translateX(20px) scale(0.9) rotate(240deg);
                opacity: 0.7;
            }
        }
        
        @keyframes globalBubbleFloat2 {
            0%, 100% { 
                transform: translateY(0px) translateX(0px) scale(1);
                opacity: 0.1;
            }
            50% { 
                transform: translateY(-60px) translateX(-30px) scale(1.3);
                opacity: 0.4;
            }
        }
        
        @keyframes globalCoralSway {
            0%, 100% { 
                transform: rotate(-3deg) scaleY(1);
                opacity: 0.3;
            }
            33% { 
                transform: rotate(2deg) scaleY(1.05);
                opacity: 0.5;
            }
            66% { 
                transform: rotate(-1deg) scaleY(0.95);
                opacity: 0.4;
            }
        }
    `;
    document.head.appendChild(globalStyle);
}
