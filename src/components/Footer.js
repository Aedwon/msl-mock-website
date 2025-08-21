export default function Footer() {
  return `
    <footer class="bg-black text-white py-6 mt-12">
      <div class="container mx-auto px-4 text-center">
        &copy; ${new Date().getFullYear()} MSL Philippines. All rights reserved.
      </div>
    </footer>
  `;
}
