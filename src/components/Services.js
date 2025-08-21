export default function Services() {
  return `
    <section class="py-16 bg-gray-50" id="services">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-brand">Our Services</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded shadow border border-brand">
            <h3 class="font-semibold text-xl mb-2 text-black">Consulting</h3>
            <p class="text-black">Expert advice to help your business navigate challenges and seize opportunities.</p>
          </div>
          <div class="bg-white p-6 rounded shadow border border-brand">
            <h3 class="font-semibold text-xl mb-2 text-black">Solutions</h3>
            <p class="text-black">Custom solutions tailored to your unique business needs and goals.</p>
          </div>
          <div class="bg-white p-6 rounded shadow border border-brand">
            <h3 class="font-semibold text-xl mb-2 text-black">Support</h3>
            <p class="text-black">Reliable support to ensure your operations run smoothly and efficiently.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
