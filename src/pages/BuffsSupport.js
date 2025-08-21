// --- Buffs & Support Page Content with Alpine.js logic ---

function BuffsSupportPage() {
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
            <li class="flex items-center gap-3"><i data-lucide="handshake" class="w-5 h-5 text-[#F2C21A]"></i> Access to Brand Sponsorships</li>
            <li class="flex items-center gap-3"><i data-lucide="shirt" class="w-5 h-5 text-[#F2C21A]"></i> Merchandise Support</li>
            <li class="flex items-center gap-3"><i data-lucide="book-open" class="w-5 h-5 text-[#F2C21A]"></i> Access to MLBB resources</li>
          </ul>
        </div>
      </div>
    </header>
    <main class="max-w-6xl mx-auto px-6 py-16 space-y-16">
      <section>
        <h3 class="text-2xl font-bold mb-8 flex items-center gap-2"><i data-lucide="workflow" class="w-6 h-6 text-[#F2C21A]"></i> Implementation Framework</h3>
        <div class="grid md:grid-cols-5 gap-6 items-center">
          <div class="flex flex-col items-center text-center">
            <div class="w-12 h-12 bg-[#F2C21A] text-black rounded-full flex items-center justify-center mb-4">
              <i data-lucide="file-text" class="w-6 h-6"></i>
            </div>
            <h4 class="text-lg font-semibold mb-2">Application Process</h4>
            <p class="text-sm text-gray-400">Submit proposals and pitch decks (2–3 weeks before for diamonds, 45 days for monetary, 1 month for Tournament Lobby).</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <div class="w-12 h-12 bg-[#F2C21A] text-black rounded-full flex items-center justify-center mb-4">
              <i data-lucide="user-check" class="w-6 h-6"></i>
            </div>
            <h4 class="text-lg font-semibold mb-2">Registration</h4>
            <p class="text-sm text-gray-400">Participants must pre-register on the MSL website.</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <div class="w-12 h-12 bg-[#F2C21A] text-black rounded-full flex items-center justify-center mb-4">
              <i data-lucide="check-circle" class="w-6 h-6"></i>
            </div>
            <h4 class="text-lg font-semibold mb-2">Acknowledgement Receipt</h4>
            <p class="text-sm text-gray-400">Official confirmation of approved budget.</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <div class="w-12 h-12 bg-[#F2C21A] text-black rounded-full flex items-center justify-center mb-4">
              <i data-lucide="clipboard-list" class="w-6 h-6"></i>
            </div>
            <h4 class="text-lg font-semibold mb-2">Post-Event Requirements</h4>
            <p class="text-sm text-gray-400">Winner lists, event reports, media.</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <div class="w-12 h-12 bg-[#F2C21A] text-black rounded-full flex items-center justify-center mb-4">
              <i data-lucide="gift" class="w-6 h-6"></i>
            </div>
            <h4 class="text-lg font-semibold mb-2">Release of Rewards</h4>
            <p class="text-sm text-gray-400">Diamonds (3–4 weeks after reports) or funds (45 days after approval).</p>
          </div>
        </div>
      </section>
    </main>
  `;
}

export default BuffsSupportPage;