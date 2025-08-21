export default function Testimonials() {
  // Example testimonials; add/edit as needed
  const testimonials = [
    {
      quote: "Being part of MSL has helped me grow as a leader and a student. The community is inspiring and supportive.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Aedwon Reyes",
      school: "University of the Philippines"
    },
    {
      quote: "MSL gave me the opportunity to connect with fellow gamers and make a real impact on campus.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Jamie Cruz",
      school: "Ateneo de Manila University"
    },
    {
      quote: "The events and trainings are top-notch. I learned so much about leadership and teamwork.",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
      name: "Miguel Santos",
      school: "De La Salle University"
    },
    {
      quote: "I never thought gaming and academics could go hand in hand until I joined MSL.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Patricia Lim",
      school: "Mapúa University"
    },
    {
      quote: "The support from Moonton and the MSL team is unmatched. Proud to be part of this network!",
      img: "https://randomuser.me/api/portraits/men/77.jpg",
      name: "Carlos Tan",
      school: "Far Eastern University"
    },
    {
      quote: "MSL helped me find my voice and lead my school's MLBB community with confidence.",
      img: "https://randomuser.me/api/portraits/women/12.jpg",
      name: "Samantha Uy",
      school: "University of Santo Tomas"
    }
  ];

  return `
    <section class="py-20 bg-black" id="testimonials">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-12">
          <p class="text-brand font-semibold mb-2">Testimonials</p>
          <p class="text-lg text-gray-200 max-w-2xl mx-auto">
            Hear from the student leaders, campus organizers, and partners who are driving the MSL Philippines movement forward.
          </p>
        </div>
        <div class="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
          ${testimonials.map(t => `
            <div class="bg-[#1A1A1A] rounded-2xl p-6 flex flex-col h-full border border-[#232B3B]">
              <p class="text-white text-base mb-6 flex-1 leading-relaxed">“${t.quote}”</p>
              <div class="flex items-center gap-3 mt-auto">
                <img src="${t.img}" alt="${t.name}" class="w-10 h-10 rounded-full object-cover border-2 border-[#F2C21A]" />
                <div>
                  <div class="text-white font-semibold text-sm">${t.name}</div>
                  <div class="text-gray-400 text-xs">${t.school}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}