export default function Navbar() {
  return `
    <nav class="bg-white shadow sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <span class="font-bold text-xl text-brand">MSL Philippines</span>
        <div>
          <a href="#hero" class="mx-2 text-black hover:text-brand">Home</a>
          <a href="#about" class="mx-2 text-black hover:text-brand">About</a>
          <a href="#services" class="mx-2 text-black hover:text-brand">Services</a>
          <a href="#contact" class="mx-2 text-black hover:text-brand">Contact</a>
        </div>
      </div>
    </nav>
  `;
}
