export default function Navbar() {
  return `
  <nav class="bg-black shadow sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-2">
  <img src="./images/logo.png" alt="MSL Philippines" class="h-12 w-auto" />
      </div>
      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center"
           style="gap:clamp(2.5rem,6vw,5rem);">
        <div class="relative">
          <button id="about-dropdown-btn" class="font-medium text-white focus:outline-none flex items-center gap-1 transition-all navbar-parent-link" aria-haspopup="true" aria-expanded="false">
            About Us
            <svg id="about-arrow" class="w-4 h-4 inline transform transition-transform duration-200 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div id="about-dropdown" class="absolute left-0 mt-2 bg-black border border-brand rounded shadow-lg opacity-0 scale-y-95 pointer-events-none transition-all duration-200 z-50 min-w-max px-0">
            <div class="py-2">
              <a href="#core-team" class="block px-4 py-2 hover:text-[#F2C21A] text-white">The Core Team</a>
              <a href="#campus-dept" class="block px-4 py-2 hover:text-[#F2C21A] text-white">Campus</a>
              <a href="#partnerships-dept" class="block px-4 py-2 hover:text-[#F2C21A] text-white">Partnerships</a>
              <a href="#general-affairs" class="block px-4 py-2 hover:text-[#F2C21A] text-white">General Affairs</a>
              <a href="#contents-social" class="block px-4 py-2 hover:text-[#F2C21A] text-white">Contents and Social Media</a>
            </div>
          </div>
        </div>
        <div class="relative">
          <button id="programs-dropdown-btn" class="font-medium text-white focus:outline-none flex items-center gap-1 transition-all navbar-parent-link" aria-haspopup="true" aria-expanded="false">
            Programs
            <svg id="programs-arrow" class="w-4 h-4 inline transform transition-transform duration-200 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div id="programs-dropdown" class="absolute left-0 mt-2 bg-black border border-brand rounded shadow-lg opacity-0 scale-y-95 pointer-events-none transition-all duration-200 z-50 min-w-max px-0">
            <div class="py-2">
              <a href="#msl-network" class="block px-4 py-2 hover:text-[#F2C21A] text-white">The MSL Network</a>
              <a href="./buffs-support.html" class="block px-4 py-2 hover:text-[#F2C21A] text-white">Buffs and Support</a>
              <a href="#msl-communities" class="block px-4 py-2 hover:text-[#F2C21A] text-white">MSL Communities</a>
              <a href="#referral-program" class="block px-4 py-2 hover:text-[#F2C21A] text-white">Referral Programs</a>
              <a href="#rise" class="block px-4 py-2 hover:text-[#F2C21A] text-white">R.I.S.E.</a>
            </div>
          </div>
        </div>
        <a href="#news-events" class="font-medium text-white navbar-parent-link">News and Events</a>
      </div>
      <!-- Desktop Auth Buttons -->
      <div class="hidden md:flex items-center gap-2">
        <button class="px-4 py-2 bg-transparent text-white font-semibold hover:underline transition border-0 shadow-none outline-none">Log In</button>
        <button class="px-4 py-2 rounded bg-[#F2C21A] text-black font-semibold hover:bg-black hover:text-[#F2C21A] border border-brand transition">Sign Up</button>
      </div>
      <!-- Mobile Hamburger -->
      <div class="md:hidden flex items-center">
        <button id="mobile-menu-btn" class="focus:outline-none" aria-label="Open menu" aria-controls="mobile-menu" aria-expanded="false">
          <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div id="mobile-menu" class="md:hidden hidden bg-black border-t border-brand shadow-lg">
      <div class="px-4 py-2">
        <div class="relative group">
          <button class="w-full text-left font-medium text-white py-2 flex items-center justify-between mobile-navbar-parent-link" data-mobile-dropdown="about" aria-haspopup="true" aria-expanded="false">
            About Us
            <svg class="w-4 h-4 inline text-white transform transition-transform duration-200" data-mobile-arrow="about" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div class="hidden ml-4" data-mobile-dropdown-menu="about">
            <a href="#core-team" class="block px-2 py-1 hover:text-[#F2C21A] text-white">The Core Team</a>
            <a href="#campus-dept" class="block px-2 py-1 hover:text-[#F2C21A] text-white">Campus</a>
            <a href="#partnerships-dept" class="block px-2 py-1 hover:text-[#F2C21A] text-white">Partnerships</a>
            <a href="#general-affairs" class="block px-2 py-1 hover:text-[#F2C21A] text-white">General Affairs</a>
            <a href="#contents-social" class="block px-2 py-1 hover:text-[#F2C21A] text-white">Contents and Social Media</a>
          </div>
        </div>
        <div class="relative group mt-2">
          <button class="w-full text-left font-medium text-white py-2 flex items-center justify-between mobile-navbar-parent-link" data-mobile-dropdown="programs" aria-haspopup="true" aria-expanded="false">
            Programs
            <svg class="w-4 h-4 inline text-white transform transition-transform duration-200" data-mobile-arrow="programs" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div class="hidden ml-4" data-mobile-dropdown-menu="programs">
            <a href="#msl-network" class="block px-2 py-1 hover:text-[#F2C21A] text-white">The MSL Network</a>
            <a href="./public/buffs-support.html" class="block px-2 py-1 hover:text-[#F2C21A] text-white">Buffs and Support</a>
            <a href="#msl-communities" class="block px-2 py-1 hover:text-[#F2C21A] text-white">MSL Communities</a>
            <a href="#referral-program" class="block px-2 py-1 hover:text-[#F2C21A] text-white">Referral Programs</a>
            <a href="#rise" class="block px-2 py-1 hover:text-[#F2C21A] text-white">R.I.S.E.</a>
          </div>
        </div>
        <a href="#news-events" class="block font-medium text-white py-2 navbar-parent-link">News and Events</a>
        <div class="flex gap-2 mt-2">
          <button class="flex-1 px-4 py-2 bg-transparent text-white font-semibold hover:underline transition border-0 shadow-none outline-none">Log In</button>
          <button class="flex-1 px-4 py-2 rounded bg-[#F2C21A] text-black font-semibold hover:bg-black hover:text-[#F2C21A] border border-brand transition">Sign Up</button>
        </div>
      </div>
    </div>
  </nav>
  `;
}