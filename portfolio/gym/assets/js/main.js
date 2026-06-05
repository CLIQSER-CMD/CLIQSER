// IRON PEAK FITNESS - Global Client JS

document.addEventListener('DOMContentLoaded', () => {
    // 1. Highlight Active Nav Link
    const highlightActiveNav = () => {
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === page || (page === 'index.html' && href === '#') || (page === '' && href === 'index.html')) {
                link.classList.add('nav-link-active');
                link.classList.remove('text-on-surface-variant');
            } else {
                link.classList.remove('nav-link-active');
            }
        });
    };

    highlightActiveNav();

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileCloseBtn = document.getElementById('mobile-close-btn');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
            document.body.classList.add('overflow-hidden');
        });
    }

    if (mobileCloseBtn && mobileMenu) {
        mobileCloseBtn.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            document.body.classList.remove('overflow-hidden');
        });
    }

    // 3. Scroll Reveal Animation via IntersectionObserver
    const revealElements = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for older browsers
        const revealOnScroll = () => {
            revealElements.forEach(el => {
                const elementTop = el.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementTop < windowHeight - 100) {
                    el.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll();
    }

    // 4. Stats Counter Animation
    const statsSection = document.getElementById('stats-section');
    const statCounters = document.querySelectorAll('.stat-counter');
    
    if (statsSection && statCounters.length > 0) {
        let animated = false;
        
        const animateStats = () => {
            statCounters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'), 10);
                const suffix = counter.getAttribute('data-suffix') || '';
                let current = 0;
                const step = target / 50; // animate in 50 frames
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.innerText = Math.ceil(current) + suffix;
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target + suffix;
                    }
                };
                
                updateCounter();
            });
        };

        if ('IntersectionObserver' in window) {
            const statsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !animated) {
                        animateStats();
                        animated = true;
                        statsObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });
            statsObserver.observe(statsSection);
        } else {
            // Fallback
            window.addEventListener('scroll', () => {
                if (!animated) {
                    const rect = statsSection.getBoundingClientRect();
                    if (rect.top < window.innerHeight) {
                        animateStats();
                        animated = true;
                    }
                }
            });
        }
    }
});
