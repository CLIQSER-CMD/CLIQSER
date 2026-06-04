/* CLIQSER Shared Interactions Script */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Particles Background (Starfield Effect)
    initParticleCanvas();

    // 2. Intersection Observer for Scroll-Based Section Revealing
    initScrollReveal();

    // 3. Navbar Scroll Behavior
    initNavbarScroll();

    // 4. Smooth Anchor Scrolling
    initSmoothScroll();

    // 5. Mobile Menu Toggle Setup
    initMobileMenu();

    // 6. Initialize Floating WhatsApp Widget
    initFloatingWhatsApp();
});

/**
 * Starfield Particle Canvas Background
 */
function initParticleCanvas() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1.5 + 0.4;
            this.speedX = (Math.random() - 0.5) * 0.2;
            this.speedY = (Math.random() - 0.5) * 0.2;
            this.alpha = Math.random() * 0.8 + 0.2;
            this.flickerSpeed = Math.random() * 0.02 + 0.005;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.alpha += this.flickerSpeed;
            
            if (this.alpha > 1 || this.alpha < 0.2) {
                this.flickerSpeed *= -1;
            }

            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }
        draw() {
            ctx.fillStyle = `rgba(174, 198, 255, ${this.alpha * 0.4})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Initialize 100-150 particles depending on screen size
    const particleCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 8000));
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        animationFrameId = requestAnimationFrame(animateParticles);
    }
    animateParticles();
}

/**
 * Scroll Reveal Intersection Observer
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length === 0) return;

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing after it has revealed
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully in view
    });

    revealElements.forEach(el => revealObserver.observe(el));
}

/**
 * Navbar Stickiness & Transition
 */
function initNavbarScroll() {
    const nav = document.getElementById('main-nav');
    if (!nav) return;

    // Run once on load to catch current position
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    function handleScroll() {
        if (window.scrollY > 40) {
            nav.classList.add('nav-scrolled', 'py-3');
            nav.classList.remove('bg-transparent', 'py-4');
        } else {
            nav.classList.remove('nav-scrolled', 'py-3');
            nav.classList.add('bg-transparent', 'py-4');
        }
    }
}

/**
 * Smooth Anchor Scroll
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Skip default links

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // If mobile menu is open, close it
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('mobile-menu-close');

    if (!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden');
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        });
    }

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        });
    });
}

/**
 * Floating WhatsApp Widget Injector
 */
function initFloatingWhatsApp() {
    if (document.getElementById('whatsapp-floating-widget')) return;

    const widget = document.createElement('div');
    widget.id = 'whatsapp-floating-widget';
    widget.className = 'fixed bottom-6 right-6 z-50 group flex items-center justify-center';
    widget.innerHTML = `
        <!-- Pulsing Background Ring -->
        <span class="absolute inline-flex h-14 w-14 rounded-full bg-[#25D366]/40 animate-ping opacity-75"></span>
        
        <!-- Main Anchor Link -->
        <a href="https://api.whatsapp.com/send?phone=919653202600&text=Hi%20Cliqser%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services." 
           target="_blank" 
           rel="noopener noreferrer" 
           class="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 active:scale-95"
           aria-label="Chat on WhatsApp">
            <svg class="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.62.962 3.21 1.493 4.904 1.495 5.293.003 9.6-4.301 9.603-9.6.002-2.568-1.002-4.98-2.824-6.804-1.821-1.821-4.24-2.825-6.81-2.825-5.3 0-9.605 4.302-9.609 9.602-.001 1.79.48 3.502 1.395 5.016L2.146 22l6.23-1.63a9.626 9.626 0 0 0-.29-.537zm9.646-6.605c.262.13.44.208.494.304.055.096.055.548-.11.998-.165.45-.962.88-1.32.913-.357.033-.769.198-2.31-.41-1.874-.741-3.078-2.658-3.17-2.78-.09-.124-.816-.985-.816-1.88 0-.896.471-1.336.637-1.503.165-.167.357-.208.494-.208.138 0 .275 0 .385.006.115.006.27.003.424.37.165.392.55 1.336.6 1.438.05.1.082.22.016.353-.066.13-.1.21-.2.33-.1.12-.2.202-.286.302-.099.117-.2.242-.088.434.113.193.502.825 1.078 1.34.743.664 1.37.87 1.562.966.192.096.304.08.418-.05.115-.133.5-.58.632-.777.132-.196.264-.162.44-.098z"/>
            </svg>
        </a>
    `;
    document.body.appendChild(widget);
}
