export default function Programs() {
  const programs = [
    {
  img: "homepage pegs/programs.png",
      title: "Campus Tournaments",
      desc: "Intra-school competitions that unite student gamers and strengthen community ties.",
      link: "#"
    },
    {
  img: "homepage pegs/news and feature.png",
      title: "Inter-school Tournaments",
      desc: "Nationwide clashes where schools face off and champions rise together.",
      link: "#"
    },
    {
  img: "homepage pegs/hero section.png",
      title: "Trainings and Seminars",
      desc: "Workshops that sharpen leadership, esports skills, and community-building know-how.",
      link: "#"
    },
    {
  img: "homepage pegs/stats after hero section.png",
      title: "Event Sponsorships",
      desc: "Partner-backed opportunities that elevate student-led initiatives across campuses.",
      link: "#"
    },
    {
  img: "homepage pegs/FAQs.png",
      title: "MLBB Campaigns",
      desc: "Creative activations and nationwide drives that celebrate the spirit of Mobile Legends: Bang Bang.",
      link: "#"
    }
  ];

  return `
    <section class="py-20 bg-black" id="programs">
      <div class="max-w-6xl mx-auto px-6">
        <div class="mb-10">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">What We Do</h2>
          <p class="text-lg text-gray-200">Building opportunities for student leaders through events, training, and nationwide esports initiatives.</p>
        </div>
        <div class="grid gap-8"
          style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));">
          ${programs.map(program => `
            <a href="${program.link}" 
              class="group relative flex flex-col justify-end rounded-2xl shadow border border-[#232B3B] overflow-hidden h-[220px] min-h-[220px] min-w-[260px] bg-center bg-cover transition-transform hover:-translate-y-1 focus:-translate-y-1 hover:shadow-lg focus:shadow-lg outline-none"
              style="background-image: url('./public/images/${program.img}');"
            >
              <!-- Overlay for darkening the image (less dark by default, more on hover) -->
              <div class="absolute inset-0 z-0 transition-all duration-300 pointer-events-none
                bg-black/30 group-hover:bg-black/60 group-focus:bg-black/60"></div>
              
              <!-- Gradient dip for title visibility -->
              <div class="absolute inset-x-0 bottom-0 h-1/2 z-10 pointer-events-none"
                   style="background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%);"></div>
              
              <!-- Description (hidden by default, appears on hover) -->
              <div class="absolute left-0 right-0 z-20 pointer-events-none"
                   style="top: calc(50% - 20px); transform: translateY(-50%); display: flex; justify-content: center;">
                <p class="text-white text-center text-base md:text-lg leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 transition-all duration-300 px-2 md:px-4 py-2 md:py-3 rounded-lg max-w-xs md:max-w-sm lg:max-w-md pointer-events-auto">
                  ${program.desc}
                </p>
              </div>
              
              <!-- Title at the bottom -->
              <div class="relative z-20 px-6 pb-6 pt-10 flex flex-col items-start">
                <h3 class="text-xl font-semibold text-[#F2C21A] drop-shadow-lg">${program.title}</h3>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}