// AUREN WEAR - Shared UI Controller

// Toggle Slide-out Mini-Cart Drawer
function toggleMiniCart() {
  const overlay = document.getElementById('miniCartOverlay');
  const panel = document.getElementById('miniCartPanel');
  if (!overlay || !panel) return;
  
  if (overlay.classList.contains('hidden')) {
    overlay.classList.remove('hidden');
    // Allow thread to register class removal before triggering CSS transition
    setTimeout(() => {
      panel.classList.add('open');
    }, 10);
    // Disable body scroll when drawer is open
    document.body.style.overflow = 'hidden';
  } else {
    panel.classList.remove('open');
    setTimeout(() => {
      overlay.classList.add('hidden');
    }, 400);
    document.body.style.overflow = '';
  }
}

// Toggle Mobile Navigation Drawer
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenuDrawer');
  if (!menu) return;
  
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  } else {
    menu.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// Toggle Search Modal Overlay
function toggleSearchModal() {
  const modal = document.getElementById('searchModal');
  if (!modal) return;
  
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
    const input = modal.querySelector('input');
    if (input) setTimeout(() => input.focus(), 100);
    document.body.style.overflow = 'hidden';
  } else {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// Dynamic Header Scroll Styling
function initHeaderScroll() {
  const nav = document.getElementById('top-nav');
  const navContainer = document.getElementById('nav-container');
  if (!nav) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
      nav.classList.remove('border-outline-variant/0');
      nav.classList.add('border-outline-variant/30');
      if (navContainer) {
        navContainer.classList.remove('py-6');
        navContainer.classList.add('py-4');
      }
    } else {
      nav.classList.remove('scrolled');
      nav.classList.add('border-outline-variant/0');
      nav.classList.remove('border-outline-variant/30');
      if (navContainer) {
        navContainer.classList.add('py-6');
        navContainer.classList.remove('py-4');
      }
    }
  });
}

// Attach listeners for shared events
document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  
  // Attach keypress listener for search close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const searchModal = document.getElementById('searchModal');
      if (searchModal && !searchModal.classList.contains('hidden')) {
        toggleSearchModal();
      }
      const cartOverlay = document.getElementById('miniCartOverlay');
      if (cartOverlay && !cartOverlay.classList.contains('hidden')) {
        toggleMiniCart();
      }
    }
  });
});
