export default function Services() {
  return `
    <section class="py-16 bg-brand text-black" id="services">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">Our Services</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-black text-brand p-6 rounded shadow border-2 border-brand">
            <h3 class="font-semibold text-xl mb-2">Consulting</h3>
            <p class="text-white">Expert advice to help your business navigate challenges and seize opportunities.</p>
          </div>
          <div class="bg-black text-brand p-6 rounded shadow border-2 border-brand">
            <h3 class="font-semibold text-xl mb-2">Solutions</h3>
            <p class="text-white">Custom solutions tailored to your unique business needs and goals.</p>
          </div>
          <div class="bg-black text-brand p-6 rounded shadow border-2 border-brand">
            <h3 class="font-semibold text-xl mb-2">Support</h3>
            <p class="text-white">Reliable support to ensure your operations run smoothly and efficiently.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
