export default function FAQs() {
  const faqs = [
    {
      q: "Who can join MSL?",
      a: "Any student, campus esports organization, or recognized school-based group with a passion for Mobile Legends and esports development can be part of MSL."
    },
    {
      q: "How can I join if I’m just an individual student?",
      a: `You can become a founder or part of your school’s MSL Community or connect with us directly to explore content opportunities. <a href="#" class="text-[#F2C21A] font-semibold">Learn More</a>`
    },
    {
      q: "How do we start an MSL Community in our school?",
      a: "Apply through the Campus Department’s onboarding process. Once recognized, you or your team will receive support, resources, and opportunities to run esports initiatives on campus."
    },
    {
      q: "What benefits do MSL Communities receive?",
      a: "MSL Communities gain official recognition, event support, training, creative resources, and the chance to participate in nationwide campaigns and tournaments."
    },
    {
      q: "How does MSL support esports tournaments?",
      a: "We support both campus-only tournaments and inter-school competitions by providing visibility, resources, and partnership opportunities for recognized communities."
    },
    {
      q: "Can brands and partners collaborate with MSL?",
      a: "Absolutely. The Partnerships Department works with organizations, brands, and sponsors to fuel student-led events, campaigns, and national activations."
    },
    {
      q: "What benefits do partners gain when collaborating with MSL?",
      a: "Partners receive campus exposure, access to student-led events, opportunities for co-branded campaigns, and reporting that tracks engagement and impact."
    },
    {
      q: "Do MSL members receive training or development opportunities?",
      a: "Yes — we offer workshops, seminars, and mentorship programs designed to build leadership, organizational, and esports-related skills."
    },
    {
      q: "Is MSL exclusive to Mobile Legends?",
      a: "Yes — we are powered by Moonton and are focused on growing the Mobile Legends: Bang Bang collegiate esports ecosystem nationwide."
    },
    {
      q: "How can we contact MSL Philippines?",
      a: "You can reach us through our official channels on Facebook, Discord, or via our email contact@moontonslph.org"
    }
  ];

  return `
    <section class="py-20 bg-black" id="faqs">
      <div class="max-w-4xl mx-auto px-6">
        <div class="bg-[#1A1A1A] rounded-2xl border border-[#232B3B] p-8 md:p-12">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-10">Frequently Asked Questions</h2>
          <div class="divide-y divide-[#232B3B]" id="faq-list">
            ${faqs.map((faq, i) => `
              <div class="faq-item py-4">
                <button type="button"
                  class="w-full flex items-center justify-between text-left focus:outline-none group"
                  aria-expanded="false"
                  data-faq-index="${i}"
                >
                  <span class="text-white font-semibold text-base md:text-lg">${faq.q}</span>
                  <span class="ml-4 flex items-center justify-center">
                    <span class="relative w-6 h-6 inline-block">
                      <span class="faq-plus-vert absolute left-1/2 top-1/2 w-1 h-5 bg-[#F2C21A] rounded transition-transform duration-300 -translate-x-1/2 -translate-y-1/2"></span>
                      <span class="faq-plus-horiz absolute left-1/2 top-1/2 h-1 w-5 bg-[#F2C21A] rounded transition-all duration-300 -translate-x-1/2 -translate-y-1/2"></span>
                    </span>
                  </span>
                </button>
                <div class="faq-answer max-h-0 overflow-hidden transition-all duration-500 text-gray-300 text-sm md:text-base mt-2"
                  style="will-change: max-height;">
                  <div class="pb-4">${faq.a}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}