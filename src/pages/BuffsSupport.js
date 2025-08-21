import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

// --- Buffs & Support Page Content ---

function BuffsSupportPage() {
  // This function returns the HTML for the Buffs & Support page main content (excluding Navbar/Footer)
  // You can further modularize sections if needed
  return `
    <header class="bg-gradient-to-r from-[#F2C21A] to-yellow-600 text-black">
      <div class="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Buffs & Support Program</h1>
          <p class="text-lg mb-6">Empowering student esports organizations with diamonds, monetary support, and exclusive tools to elevate events across the Philippines.</p>
          <div class="flex gap-4">
            <a href="#" class="px-6 py-3 bg-black text-[#F2C21A] font-bold rounded-xl">Apply Now</a>
            <a href="#" class="px-6 py-3 border border-black text-black font-bold rounded-xl">Learn More →</a>
          </div>
        </div>
        <div class="bg-black/80 text-white rounded-2xl p-6">
          <h2 class="text-xl font-semibold mb-4">Program Benefits</h2>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-center gap-3"><i data-lucide="gem" class="w-5 h-5 text-[#F2C21A]"></i> Diamonds for events</li>
            <li class="flex items-center gap-3"><i data-lucide="coins" class="w-5 h-5 text-[#F2C21A]"></i> Monetary support</li>
            <li class="flex items-center gap-3"><i data-lucide="gamepad-2" class="w-5 h-5 text-[#F2C21A]"></i> Tournament Lobby access</li>
          </ul>
        </div>
      </div>
    </header>
    <main class="max-w-6xl mx-auto px-6 py-16 space-y-16">
      <!-- ...existing Buffs & Support sections from sample2.html... -->
      <section class="grid md:grid-cols-2 gap-10"> ... </section>
      <section class="bg-zinc-900/80 rounded-2xl p-8 ring-1 ring-zinc-800"> ... </section>
      <!-- Add all other sections here, or modularize further if needed -->
    </main>
  `;
}

export default BuffsSupportPage;
