import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import About, { runAboutCountUp } from './components/About.js';
import Programs from './components/Programs.js';
import Footer from './components/Footer.js';

document.getElementById('app').innerHTML = `
        ${Navbar()}
        ${Hero()}
        ${About()}
        ${Programs()}
        <section id="contact" class="py-16 bg-white text-center">
                <div class="container mx-auto px-4">
                        <h2 class="text-3xl font-bold mb-4 text-brand">Contact Us</h2>
                        <p class="mb-6 text-black">You can add a contact form or details here.</p>
                </div>
        </section>
        ${Footer()}
`;

// --- Desktop Dropdowns ---
const dropdowns = [
    {
        btn: document.getElementById('about-dropdown-btn'),
        menu: document.getElementById('about-dropdown'),
        arrow: document.getElementById('about-arrow'),
    },
    {
        btn: document.getElementById('programs-dropdown-btn'),
        menu: document.getElementById('programs-dropdown'),
        arrow: document.getElementById('programs-arrow'),
    },
];

dropdowns.forEach((dropdown, idx) => {
    if (!dropdown.btn) return;
    dropdown.btn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdowns.forEach((d, i) => {
            if (i === idx) {
                const isOpen = !d.menu.classList.contains('opacity-0');
                if (isOpen) {
                    // Close it
                    d.menu.classList.add('opacity-0', 'pointer-events-none', 'scale-y-95');
                    d.arrow.classList.remove('rotate-180');
                    d.btn.setAttribute('aria-expanded', 'false');
                } else {
                    // Open it
                    d.menu.classList.remove('opacity-0', 'pointer-events-none', 'scale-y-95');
                    d.arrow.classList.add('rotate-180');
                    d.btn.setAttribute('aria-expanded', 'true');
                }
            } else {
                d.menu.classList.add('opacity-0', 'pointer-events-none', 'scale-y-95');
                d.arrow.classList.remove('rotate-180');
                d.btn.setAttribute('aria-expanded', 'false');
            }
        });
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', () => {
    dropdowns.forEach((d) => {
        d.menu.classList.add('opacity-0', 'pointer-events-none', 'scale-y-95');
        d.arrow.classList.remove('rotate-180');
        d.btn.setAttribute('aria-expanded', 'false');
    });
});

// Prevent closing when clicking inside dropdown
dropdowns.forEach((dropdown) => {
    if (dropdown.menu) {
        dropdown.menu.addEventListener('click', (e) => e.stopPropagation());
    }
});

// --- Mobile Menu Logic ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileDropdowns = [
    {
        btn: document.querySelector('[data-mobile-dropdown="about"]'),
        menu: document.querySelector('[data-mobile-dropdown-menu="about"]'),
        arrow: document.querySelector('[data-mobile-arrow="about"]'),
    },
    {
        btn: document.querySelector('[data-mobile-dropdown="programs"]'),
        menu: document.querySelector('[data-mobile-dropdown-menu="programs"]'),
        arrow: document.querySelector('[data-mobile-arrow="programs"]'),
    },
];

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = !mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', String(!isOpen));
        // Collapse all mobile dropdowns when closing menu
        if (isOpen) {
            mobileDropdowns.forEach((d) => {
                d.menu.classList.add('hidden');
                d.arrow.classList.remove('rotate-180');
                d.btn.setAttribute('aria-expanded', 'false');
            });
        }
    });
}

mobileDropdowns.forEach((dropdown, idx) => {
    if (!dropdown.btn) return;
    dropdown.btn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileDropdowns.forEach((d, i) => {
            if (i === idx) {
                const isOpen = !d.menu.classList.contains('hidden');
                if (isOpen) {
                    // Close it
                    d.menu.classList.add('hidden');
                    d.arrow.classList.remove('rotate-180');
                    d.btn.setAttribute('aria-expanded', 'false');
                } else {
                    // Open it
                    d.menu.classList.remove('hidden');
                    d.arrow.classList.add('rotate-180');
                    d.btn.setAttribute('aria-expanded', 'true');
                }
            } else {
                d.menu.classList.add('hidden');
                d.arrow.classList.remove('rotate-180');
                d.btn.setAttribute('aria-expanded', 'false');
            }
        });
    });
});

// Close mobile dropdowns when clicking outside mobile menu
document.addEventListener('click', (e) => {
    if (
        mobileMenu &&
        !mobileMenu.classList.contains('hidden') &&
        !mobileMenu.contains(e.target) &&
        e.target !== mobileMenuBtn
    ) {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileDropdowns.forEach((d) => {
            d.menu.classList.add('hidden');
            d.arrow.classList.remove('rotate-180');
            d.btn.setAttribute('aria-expanded', 'false');
        });
    }
});

// --- Remove underline on hover for navbar parent links ---
const style = document.createElement('style');
style.innerHTML = `
  .navbar-parent-link:hover,
  .mobile-navbar-parent-link:hover {
    text-decoration: none !important;
  }
`;
document.head.appendChild(style);

runAboutCountUp();