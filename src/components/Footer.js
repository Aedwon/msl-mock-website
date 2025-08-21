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
              <!-- Facebook Outline -->
              <a href="https://www.facebook.com/MSLPhilippines" target="_blank" aria-label="Facebook" class="footer-social group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" class="footer-icon">
                  <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="3.8" d="M36 12.6h-6.013c-1.086 0-1.967.88-1.967 1.967v6.9H36l-1.169 7.597h-6.81V43h-8.776V29.064H12v-7.597h7.151l.094-7.21l-.013-1.31A7.87 7.87 0 0 1 27.099 5H36z"/>
                </svg>
              </a>
              <!-- Facebook MCC Outline -->
              <a href="https://www.facebook.com/MSLCollegiateCup" target="_blank" aria-label="Facebook MCC" class="footer-social group relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" class="footer-icon">
                  <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="3.8" d="M36 12.6h-6.013c-1.086 0-1.967.88-1.967 1.967v6.9H36l-1.169 7.597h-6.81V43h-8.776V29.064H12v-7.597h7.151l.094-7.21l-.013-1.31A7.87 7.87 0 0 1 27.099 5H36z"/>
                </svg>
                <span class="absolute -bottom-3 left-1/2 -translate-x-1/2 text-xs text-[#F2C21A] font-bold">MCC</span>
              </a>
              <!-- Youtube Outline -->
              <a href="https://www.youtube.com/@MSLPhilippines" target="_blank" aria-label="YouTube" class="footer-social group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" class="footer-icon">
                  <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1">
                    <path stroke-width="4" d="M11.064 10.414Q19.378 10 23.998 10t12.939.415a6 6 0 0 1 5.68 5.492q.381 4.55.381 8.017q0 3.508-.39 8.128a6 6 0 0 1-5.587 5.483Q29.91 38 23.998 38q-5.91 0-13.018-.465a6 6 0 0 1-5.587-5.48q-.395-4.655-.395-8.131q0-3.435.385-8.02a6 6 0 0 1 5.68-5.49Z"/>
                    <path stroke-width="3.429" d="M21 19.61v8.796a.857.857 0 0 0 1.33.715l6.597-4.36a.857.857 0 0 0 .006-1.427l-6.598-4.436a.857.857 0 0 0-1.335.711Z"/>
                  </g>
                </svg>
              </a>
              <!-- TikTok Outline -->
              <a href="https://www.tiktok.com/@moontonstudentleaders.ph" target="_blank" aria-label="TikTok" class="footer-social group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" class="footer-icon">
                  <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="3.833" d="M21.358 19.14q-8.833-.426-12.28 6.298c-3.446 6.725-.598 17.729 10.9 17.729c11.5 0 11.832-11.112 11.832-12.276V17.875q3.69 2.336 6.22 2.813q2.533.476 3.22.422v-6.476q-2.342-.282-4.05-1.076c-1.709-.794-5.096-2.997-5.096-6.226q.003.024 0-2.499h-7.118q-.031 23.724 0 26.058c.031 2.334-1.78 5.6-5.45 5.6c-3.672 0-5.483-3.263-5.483-5.367c0-1.288.443-3.155 2.272-4.538c1.085-.82 2.59-1.148 5.033-1.148z"/>
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
      .footer-icon {
        color: #b89e2c;
        stroke: #b89e2c;
        fill: none;
        transition: color 0.2s, stroke 0.2s;
      }
      .footer-social:hover .footer-icon {
        color: #F2C21A;
        stroke: #F2C21A;
      }
    </style>
  `;
}