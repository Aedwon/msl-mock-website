export default function Hero() {
  return `
    <section 
      class="relative bg-black bg-center bg-cover bg-no-repeat text-brand py-24 md:py-32 text-center overflow-hidden"
      id="hero"
      style="background-image: url('images/hero-bg.webp'); max-height: 600px; background-position: 10% center;"
    >
      <!-- Overlay for darkness -->
      <div class="absolute inset-0 bg-black/60 z-0"></div>
      <div class="max-w-3xl mx-auto px-6 flex flex-col items-center relative z-10" style="min-height: 400px; justify-content: center;">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-brand drop-shadow-lg">
          Empowering student-gamers to become the next generation leaders
        </h1>
        <p class="mb-10 text-lg md:text-xl max-w-2xl mx-auto text-white">
          Moonton Student Leaders (MSL) Philippines enables campuses, partners, and creators to shape the future of gaming communities nationwide.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4 w-full">
          <a href="#membership" class="bg-brand text-black px-8 py-3 rounded font-semibold shadow hover:bg-black hover:text-brand border-2 border-brand transition w-full sm:w-auto">
            Become A Member
          </a>
          <a href="#partnership" class="text-white px-8 py-3 rounded font-semibold hover:underline w-full sm:w-auto transition">
            Part of an Esports Org? Partner With Us &rarr;
          </a>
        </div>
      </div>
    </section>
  `;
}