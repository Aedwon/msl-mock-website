import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Services from './components/Services.js';
import Footer from './components/Footer.js';

document.getElementById('app').innerHTML = `
    ${Navbar()}
    ${Hero()}
    ${About()}
    ${Services()}
    <section id="contact" class="py-16 bg-white text-center">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-4 text-brand">Contact Us</h2>
            <p class="mb-6 text-black">You can add a contact form or details here.</p>
        </div>
    </section>
    ${Footer()}
`;