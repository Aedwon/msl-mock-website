export default function useFaqAccordion() {
  const faqList = document.getElementById('faq-list');
  if (!faqList) return;

  faqList.querySelectorAll('.faq-item button').forEach(btn => {
    btn.addEventListener('click', function () {
      const parent = btn.closest('.faq-item');
      const answer = parent.querySelector('.faq-answer');
      const expanded = btn.getAttribute('aria-expanded') === 'true';

      // Close all
      faqList.querySelectorAll('.faq-item button').forEach(b => b.setAttribute('aria-expanded', 'false'));
      faqList.querySelectorAll('.faq-answer').forEach(a => {
        a.style.maxHeight = null;
        a.classList.remove('open');
      });

      // Open this one if not already open
      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.classList.add('open');
      }
    });
  });
}