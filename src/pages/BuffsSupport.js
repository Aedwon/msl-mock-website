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
        <h2 class="text-3xl font-bold mb-8 flex items-center gap-2">
          Event Types Supported
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="flex items-start gap-4">
            <i data-lucide="trophy" class="w-8 h-8 text-[#F2C21A]"></i>
            <div>
              <h3 class="text-lg font-semibold">Tournaments</h3>
              <p class="text-sm text-gray-400">Competitive events for MLBB, held onsite or online, with or without livestream. Open to all skill levels.</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <i data-lucide="users" class="w-8 h-8 text-[#F2C21A]"></i>
            <div>
              <h3 class="text-lg font-semibold">Non-tournament Activities</h3>
              <p class="text-sm text-gray-400">Includes Quiz Bees, General Assemblies, and Org Fair Booths.</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <i data-lucide="school" class="w-8 h-8 text-[#F2C21A]"></i>
            <div>
              <h3 class="text-lg font-semibold">Inter-school Activities</h3>
              <p class="text-sm text-gray-400">Events that bring together multiple schools or organizations for collaboration, competition, or networking.</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <i data-lucide="heart-handshake" class="w-8 h-8 text-[#F2C21A]"></i>
            <div>
              <h3 class="text-lg font-semibold">Events for a Cause</h3>
              <p class="text-sm text-gray-400">Charity or advocacy events that use MLBB or org activities to support a cause or community.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="mb-8">
        <h2 class="text-3xl font-extrabold mb-2">Calculation</h2>
        <p class="text-lg text-gray-300 mb-8">See how much we can sponsor your event!</p>
      </section>
      <section>
        <!-- Diamonds Support Calculator -->
        <section class="bg-zinc-900/80 rounded-2xl p-8 ring-1 ring-zinc-800 mb-8" x-data="diamondsMSL()">
          <h3 class="text-2xl font-bold mb-6 flex items-center gap-2"><i data-lucide="gem" class="w-7 h-7 text-[#F2C21A]"></i> Diamonds Support</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div>
              <label class="block text-sm mb-1">Type of Event</label>
              <select x-model="type" class="w-full p-2 rounded bg-black border border-zinc-700">
                <option value="tournament">Tournament</option>
                <option value="non">Non-Tournament</option>
              </select>
            </div>
            <div>
              <label class="block text-sm mb-1">Scope</label>
              <select x-model="scope" class="w-full p-2 rounded bg-black border border-zinc-700">
                <option value="department">Department-wide</option>
                <option value="college">College-wide</option>
                <option value="university">University-wide</option>
                <option value="system">System-wide</option>
                <option value="nationwide">Nationwide</option>
              </select>
            </div>
            <div>
              <label class="block text-sm mb-1">Tier</label>
              <select x-model="tier" class="w-full p-2 rounded bg-black border border-zinc-700">
                <option value="I">Level I</option>
                <option value="II">Level II</option>
                <option value="III">Level III</option>
                <option value="super">Super School</option>
              </select>
            </div>
          </div>
          <div class="mt-6 p-4 bg-black rounded-xl border border-zinc-700">
            <p class="text-sm text-gray-400">Max Allowable Budget</p>
            <p class="text-2xl font-bold text-[#F2C21A]" x-text="formatDiamonds(maxDiamonds)"></p>
          </div>
        </section>

        <!-- SHS Events Calculator -->
        <section class="bg-zinc-900/80 rounded-2xl p-8 ring-1 ring-zinc-800 mb-8" x-data="shsEvents()">
          <h3 class="text-2xl font-bold mb-6 flex items-center gap-2"><i data-lucide="school" class="w-7 h-7 text-[#F2C21A]"></i> Senior High School Events</h3>
          <label class="inline-flex items-center gap-3 mb-6">
            <input type="checkbox" x-model="intramurals" class="w-5 h-5 accent-[#F2C21A]">
            <span>High School Intramurals</span>
          </label>
          <div class="grid md:grid-cols-3 gap-6" :class="intramurals ? 'opacity-50 pointer-events-none' : ''">
            <div>
              <label class="block text-sm mb-1">Type of Event</label>
              <select x-model="type" class="w-full p-2 rounded bg-black border border-zinc-700">
                <option value="tournament">Tournament</option>
                <option value="non">Non-Tournament</option>
              </select>
            </div>
            <div>
              <label class="block text-sm mb-1">Setup</label>
              <select x-model="setup" :disabled="type!=='tournament'" class="w-full p-2 rounded bg-black border border-zinc-700 disabled:opacity-50">
                <option value="on-ground">Onsite</option>
                <option value="online">Online</option>
              </select>
            </div>
            <div>
              <label class="block text-sm mb-1">Livestream</label>
              <select x-model="livestream" :disabled="type!=='tournament'" class="w-full p-2 rounded bg-black border border-zinc-700 disabled:opacity-50">
                <option value="with">With</option>
                <option value="without">Without</option>
              </select>
            </div>
          </div>
          <div class="mt-6 p-4 bg-black rounded-xl border border-zinc-700">
            <p class="text-sm text-gray-400">Max Allowable Budget</p>
            <p class="text-2xl font-bold text-[#F2C21A]" x-text="intramurals ? formatDiamonds(25000) : formatDiamonds(maxDiamonds)"></p>
          </div>
        </section>

        <!-- Events for a Cause Calculator -->
        <section class="bg-zinc-900/80 rounded-2xl p-8 ring-1 ring-zinc-800 mb-8" x-data="eventsForCause()">
          <h3 class="text-2xl font-bold mb-6 flex items-center gap-2"><i data-lucide="heart-handshake" class="w-7 h-7 text-[#F2C21A]"></i> Events for a Cause</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm mb-1">Setup</label>
              <select x-model="setup" class="w-full p-2 rounded bg-black border border-zinc-700">
                <option value="on-ground">Onsite</option>
                <option value="online">Online</option>
                <option value="other">Others</option>
              </select>
            </div>
            <div>
              <label class="block text-sm mb-1">Number of Teams</label>
              <input type="range" min="1" max="3" step="1" x-model.number="teamsIdx" class="w-full">
              <div class="flex justify-between text-xs text-gray-400 mt-1">
                <span>4–7</span><span>8–15</span><span>&gt;16</span>
              </div>
            </div>
          </div>
          <div class="mt-6 p-4 bg-black rounded-xl border border-zinc-700">
            <p class="text-sm text-gray-400">Max Allowable Budget</p>
            <p class="text-2xl font-bold text-[#F2C21A]" x-text="formatDiamonds(maxDiamonds)"></p>
          </div>
        </section>

        <!-- Monetary Grants Calculator -->
        <section class="bg-zinc-900/80 rounded-2xl p-8 ring-1 ring-zinc-800" x-data="monetaryGrants()">
          <h3 class="text-2xl font-bold mb-6 flex items-center gap-2"><i data-lucide="banknote" class="w-7 h-7 text-[#F2C21A]"></i> Monetary Grants</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div>
              <label class="block text-sm mb-1">Scope</label>
              <select x-model="scope" class="w-full p-2 rounded bg-black border border-zinc-700">
                <option value="college">College-wide</option>
                <option value="university">University-wide</option>
                <option value="system">System-wide</option>
                <option value="nationwide">Nationwide</option>
              </select>
            </div>
            <div>
              <label class="block text-sm mb-1">Type</label>
              <select x-model="type" class="w-full p-2 rounded bg-black border border-zinc-700">
                <option value="tournament">Tournament</option>
                <option value="non">Non-Tournament</option>
              </select>
            </div>
            <div>
              <label class="block text-sm mb-1">Setup</label>
              <select x-model="setup" :disabled="type!=='tournament' || scope==='nationwide'" class="w-full p-2 rounded bg-black border border-zinc-700 disabled:opacity-50">
                <option value="on-ground">Onsite</option>
                <option value="online">Online</option>
              </select>
            </div>
          </div>
          <div class="mt-6 p-4 bg-black rounded-xl border border-zinc-700">
            <p class="text-sm text-gray-400">Max Allowable Budget</p>
            <p class="text-2xl font-bold text-[#F2C21A]" x-text="displayBudget()"></p>
          </div>
        </section>
      </section>
      <!-- Tournament Lobby Section -->
      <section class="bg-zinc-900/80 rounded-2xl p-8 ring-1 ring-zinc-800">
        <h2 class="text-3xl font-bold mb-4 flex items-center gap-2"><i data-lucide="trophy" class="w-7 h-7 text-[#F2C21A]"></i> Tournament Lobby</h2>
        <p class="text-gray-300 mb-6">Unlock the Ultimate Competitive Experience</p>
        <ul class="grid md:grid-cols-2 gap-3 text-gray-200 mb-6">
          <li class="flex items-center gap-2"><i data-lucide="check-circle" class="w-5 h-5 text-[#F2C21A]"></i> All Heroes Unlocked</li>
          <li class="flex items-center gap-2"><i data-lucide="check-circle" class="w-5 h-5 text-[#F2C21A]"></i> All Emblems Unlocked</li>
          <li class="flex items-center gap-2"><i data-lucide="check-circle" class="w-5 h-5 text-[#F2C21A]"></i> All Skins Unlocked</li>
          <li class="flex items-center gap-2"><i data-lucide="check-circle" class="w-5 h-5 text-[#F2C21A]"></i> Cross-Server Battles</li>
          <li class="flex items-center gap-2"><i data-lucide="check-circle" class="w-5 h-5 text-[#F2C21A]"></i> 6-Ban or 10-Ban Options</li>
        </ul>
        <div class="flex gap-4">
          <a href="#" class="px-6 py-3 bg-[#F2C21A] text-black rounded-xl font-bold">Request Access</a>
          <a href="#" class="px-6 py-3 border border-[#F2C21A] text-[#F2C21A] rounded-xl">View Guidelines →</a>
        </div>
      </section>
      <!-- Implementation Framework Section -->
      <section>
        <h3 class="text-2xl font-bold mb-8 flex items-center gap-2">
          <i data-lucide="workflow" class="w-6 h-6 text-[#F2C21A]"></i> Implementation Framework
        </h3>
        <div class="grid md:grid-cols-5 gap-6 items-start">
          <div class="flex flex-col items-start text-left">
            <div class="w-12 h-12 bg-[#F2C21A] text-black rounded-full flex items-center justify-center mb-4 font-bold text-lg">
              1
            </div>
            <h4 class="text-lg font-semibold mb-2">Application Process</h4>
            <p class="text-sm text-gray-400">
              Submit proposals and pitch decks (2–3 weeks before for diamonds, 45 days for monetary, 1 month for Tournament Lobby).
            </p>
          </div>
          <div class="flex flex-col items-start text-left">
            <div class="w-12 h-12 bg-[#F2C21A] text-black rounded-full flex items-center justify-center mb-4 font-bold text-lg">
              2
            </div>
            <h4 class="text-lg font-semibold mb-2">Registration</h4>
            <p class="text-sm text-gray-400">Participants must pre-register on the MSL website.</p>
          </div>
          <div class="flex flex-col items-start text-left">
            <div class="w-12 h-12 bg-[#F2C21A] text-black rounded-full flex items-center justify-center mb-4 font-bold text-lg">
              3
            </div>
            <h4 class="text-lg font-semibold mb-2">Acknowledgement</h4>
            <p class="text-sm text-gray-400">Official confirmation of approved budget.</p>
          </div>
          <div class="flex flex-col items-start text-left">
            <div class="w-12 h-12 bg-[#F2C21A] text-black rounded-full flex items-center justify-center mb-4 font-bold text-lg">
              4
            </div>
            <h4 class="text-lg font-semibold mb-2">Post-Event</h4>
            <p class="text-sm text-gray-400">Winner lists, event reports, media.</p>
          </div>
          <div class="flex flex-col items-start text-left">
            <div class="w-12 h-12 bg-[#F2C21A] text-black rounded-full flex items-center justify-center mb-4 font-bold text-lg">
              5
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