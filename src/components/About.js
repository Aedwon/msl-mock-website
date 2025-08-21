export default function About() {
  return `
    <section class="py-20 bg-black" id="about">
      <div class="max-w-6xl mx-auto px-6">
        <div class="rounded-2xl bg-[#1A1A1A] p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
          <!-- Mission & Vision -->
          <div class="flex flex-col justify-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-brand">Our Mission</h2>
            <p class="text-lg text-white mb-8">
              Empower student-gamers to lead vibrant MLBB communities in their schools by fostering integrity, time management, friendliness, adaptability, responsiveness, and academic excellence. Guided by Moonton Philippines, the Moonton Student Leaders create inclusive, exciting, and impactful campus initiatives that unite players, boost school pride, and prove that gaming passion can go together with academic success.
            </p>
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-brand">Our Vision</h2>
            <p class="text-lg text-white">
              To be the leading network of student-gamers in the Philippines who embody integrity, leadership, and community spirit—bridging the worlds of gaming and academics, building strong MLBB communities and inspiring the next generation of responsible esports leaders.
            </p>
          </div>
          <!-- Stats -->
          <div class="flex flex-col justify-center gap-10">
            <div>
              <span class="text-4xl md:text-5xl font-bold text-white block" id="stat-gamers">0</span>
              <span class="text-gray-400 text-lg">Student-gamers</span>
            </div>
            <div>
              <span class="text-4xl md:text-5xl font-bold text-white block" id="stat-leaders">0</span>
              <span class="text-gray-400 text-lg">Moonton Student Leaders</span>
            </div>
            <div>
              <span class="text-4xl md:text-5xl font-bold text-white block" id="stat-events">0</span>
              <span class="text-gray-400 text-lg">Events Sponsored</span>
            </div>
            <div>
              <span class="text-4xl md:text-5xl font-bold text-white block" id="stat-campuses">0</span>
              <span class="text-gray-400 text-lg">Campus Communities and Partners</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Count-up animation for stats (place this in main.js after rendering About)
export function runAboutCountUp() {
  function animateCount(id, end, duration = 1500, suffix = '+') {
    const el = document.getElementById(id);
    if (!el) return;
    let start = 0;
    const step = Math.max(1, Math.ceil(end / (duration / 16)));
    function update() {
      start += step;
      if (start < end) {
        el.textContent = start.toLocaleString() + suffix;
        requestAnimationFrame(update);
      } else {
        el.textContent = end.toLocaleString() + suffix;
      }
    }
    update();
  }
  animateCount('stat-gamers', 17000, 1200, '+');
  animateCount('stat-leaders', 240, 1200, '+');
  animateCount('stat-events', 110, 1200, '+');
  animateCount('stat-campuses', 150, 1200, '+');
}