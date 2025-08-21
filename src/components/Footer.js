export default function Footer() {
  return `
    <footer class="bg-[#1A1A1A] border-t border-[#232B3B] pt-16 pb-8 px-4 md:px-0">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          <!-- About -->
          <div>
            <h3 class="text-white font-semibold mb-4">About</h3>
            <ul class="space-y-2">
              <li><a href="#core-team" class="text-gray-400 hover:text-[#F2C21A] transition">The Core Team</a></li>
              <li><a href="#campus-dept" class="text-gray-400 hover:text-[#F2C21A] transition">Campus Dept</a></li>
              <li><a href="#partnerships-dept" class="text-gray-400 hover:text-[#F2C21A] transition">Partnerships Dept</a></li>
              <li><a href="#contents-social" class="text-gray-400 hover:text-[#F2C21A] transition">Contents and Social Media Dept</a></li>
            </ul>
          </div>
          <!-- Programs -->
          <div>
            <h3 class="text-white font-semibold mb-4">Programs</h3>
            <ul class="space-y-2">
              <li><a href="#msl-network" class="text-gray-400 hover:text-[#F2C21A] transition">The MSL Network</a></li>
              <li><a href="#buffs-support" class="text-gray-400 hover:text-[#F2C21A] transition">Buffs and Support</a></li>
              <li><a href="#msl-communities" class="text-gray-400 hover:text-[#F2C21A] transition">MSL Communities</a></li>
              <li><a href="#referral-program" class="text-gray-400 hover:text-[#F2C21A] transition">Referral</a></li>
              <li><a href="#rise" class="text-gray-400 hover:text-[#F2C21A] transition">R.I.S.E.</a></li>
            </ul>
          </div>
          <!-- Events -->
          <div>
            <h3 class="text-white font-semibold mb-4">Events</h3>
            <ul class="space-y-2 mb-4">
              <li><a href="#mpl-battle-trips" class="text-gray-400 hover:text-[#F2C21A] transition">MPL Smart Battle Trips</a></li>
              <li><a href="#msl-collegiate-cup" class="text-gray-400 hover:text-[#F2C21A] transition">MSL Collegiate Cup <span class="text-xs text-[#F2C21A] font-bold ml-1">MCC</span></a></li>
            </ul>
          </div>
          <!-- Resources -->
          <div>
            <h3 class="text-white font-semibold mb-4">Resources</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-[#F2C21A] transition">MSL Logos</a></li>
              <li><a href="#" class="text-gray-400 hover:text-[#F2C21A] transition">MLBB Logos</a></li>
              <li><a href="#" class="text-gray-400 hover:text-[#F2C21A] transition">MCC Logos</a></li>
              <li><a href="#" class="text-gray-400 hover:text-[#F2C21A] transition">E-Project Logos</a></li>
            </ul>
          </div>
          <!-- Contact & Social -->
          <div>
            <h3 class="text-white font-semibold mb-4">Contact</h3>
            <ul class="space-y-2 mb-4">
              <li>
                <a href="mailto:contact@moontonslph.org" class="text-gray-400 hover:text-[#F2C21A] transition">contact@moontonslph.org</a>
              </li>
            </ul>
            <div class="flex gap-4 items-center mb-4">
              <!-- Facebook -->
              <a href="https://www.facebook.com/MSLPhilippines" target="_blank" aria-label="Facebook" class="footer-social group">
                <!-- Heroicons outline Facebook (open source) -->
                <svg class="w-6 h-6" fill="none" stroke="#F2C21A" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M17 2.1A9.9 9.9 0 1 0 22 12c0-5.5-4.5-9.9-10-9.9z" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15.5 8.5H14c-.7 0-1 .3-1 1v2h2.5l-.5 2H13v6h-2v-6H9v-2h2v-1.5C11 7.1 12.1 6 13.5 6h2v2.5z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <!-- Facebook MCC -->
              <a href="https://www.facebook.com/MSLCollegiateCup" target="_blank" aria-label="Facebook MCC" class="footer-social group relative">
                <svg class="w-6 h-6" fill="none" stroke="#F2C21A" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M17 2.1A9.9 9.9 0 1 0 22 12c0-5.5-4.5-9.9-10-9.9z" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15.5 8.5H14c-.7 0-1 .3-1 1v2h2.5l-.5 2H13v6h-2v-6H9v-2h2v-1.5C11 7.1 12.1 6 13.5 6h2v2.5z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="absolute -bottom-3 left-1/2 -translate-x-1/2 text-xs text-[#F2C21A] font-bold">MCC</span>
              </a>
              <!-- Youtube -->
              <a href="https://www.youtube.com/@MSLPhilippines" target="_blank" aria-label="YouTube" class="footer-social group">
                <!-- Lucide Youtube outline (open source) -->
                <svg class="w-6 h-6" fill="none" stroke="#F2C21A" stroke-width="2" viewBox="0 0 24 24">
                  <rect x="2" y="6" width="20" height="12" rx="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10 9.5v5l5-2.5-5-2.5z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <!-- TikTok -->
              <a href="https://www.tiktok.com/@moontonstudentleaders.ph" target="_blank" aria-label="TikTok" class="footer-social group">
                <!-- Simple Icons TikTok outline (open source) -->
                <svg class="w-6 h-6" fill="none" stroke="#F2C21A" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M16.5 3v10.38a4.38 4.38 0 1 1-4.38-4.38" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16.5 7.5c1.38 0 2.5 1.12 2.5 2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="border-t border-[#232B3B] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
          <div class="text-gray-400 text-sm">&copy; ${new Date().getFullYear()} MSL Philippines. All rights reserved.</div>
          <div class="flex gap-4 text-xs text-gray-500">
            <a href="#" class="hover:text-[#F2C21A] transition">Privacy Policy</a>
            <a href="#" class="hover:text-[#F2C21A] transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
    <style>
      .footer-social svg {
        stroke: #F2C21A;
        fill: none;
        transition: fill 0.2s, stroke 0.2s;
      }
      .footer-social:hover svg {
        fill: #F2C21A;
        stroke: #F2C21A;
      }
    </style>
  `;
}