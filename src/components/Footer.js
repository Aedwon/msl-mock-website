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
                <span class="iconify footer-icon" data-icon="mdi:facebook" data-width="24" data-height="24"></span>
              </a>
              <!-- Facebook MCC -->
              <a href="https://www.facebook.com/MSLCollegiateCup" target="_blank" aria-label="Facebook MCC" class="footer-social group relative">
                <span class="iconify footer-icon" data-icon="mdi:facebook" data-width="24" data-height="24"></span>
                <span class="absolute -bottom-3 left-1/2 -translate-x-1/2 text-xs text-[#F2C21A] font-bold">MCC</span>
              </a>
              <!-- Youtube -->
              <a href="https://www.youtube.com/@MSLPhilippines" target="_blank" aria-label="YouTube" class="footer-social group">
                <span class="iconify footer-icon" data-icon="mdi:youtube" data-width="24" data-height="24"></span>
              </a>
              <!-- TikTok -->
              <a href="https://www.tiktok.com/@moontonstudentleaders.ph" target="_blank" aria-label="TikTok" class="footer-social group">
                <span class="iconify footer-icon" data-icon="ic:baseline-tiktok" data-width="24" data-height="24"></span>
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
    <!-- Iconify CDN -->
    <script src="https://code.iconify.design/3/3.1.1/iconify.min.js"></script>
    <style>
      .footer-icon {
        color: #F2C21A;
        transition: color 0.2s, background 0.2s;
        stroke-width: 2;
        stroke: #F2C21A;
        fill: none;
      }
      .footer-social:hover .footer-icon {
        fill: #F2C21A;
        color: #F2C21A;
        background: #F2C21A;
      }
      .footer-social .footer-icon {
        fill: none;
      }
    </style>
  `;
}