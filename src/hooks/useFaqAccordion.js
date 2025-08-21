export default function useFaqAccordion() {
  const faqList = document.getElementById('faq-list');
  if (!faqList) return;

  faqList.querySelectorAll('.faq-item button').forEach(btn => {
    btn.addEventListener('click', function () {
      const parent = btn.closest('.faq-item');
      const answer = parent.querySelector('.faq-answer');
      const vertBar = btn.querySelector('.faq-bar-vert');
      const expanded = btn.getAttribute('aria-expanded') === 'true';

      // Close all others with animation
      faqList.querySelectorAll('.faq-item button[aria-expanded="true"]').forEach(openBtn => {
        if (openBtn !== btn) {
          openBtn.setAttribute('aria-expanded', 'false');
          const openAnswer = openBtn.closest('.faq-item').querySelector('.faq-answer');
          const openVertBar = openBtn.querySelector('.faq-bar-vert');
          // Animate to 180deg
          openVertBar.style.transform = 'translate(-50%, -50%) rotate(180deg)';
          openAnswer.style.maxHeight = null;
          openAnswer.classList.remove('open');
          // After animation, reset to 0deg
          setTimeout(() => {
            openVertBar.style.transition = 'none';
            openVertBar.style.transform = 'translate(-50%, -50%) rotate(0deg)';
            // Force reflow to apply the reset
            void openVertBar.offsetWidth;
            openVertBar.style.transition = '';
          }, 300);
        }
      });

      // Toggle this one
      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.classList.add('open');
        vertBar.style.transform = 'translate(-50%, -50%) rotate(90deg)';
      } else {
        btn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
        answer.classList.remove('open');
        vertBar.style.transform = 'translate(-50%, -50%) rotate(180deg)';
        setTimeout(() => {
          vertBar.style.transition = 'none';
          vertBar.style.transform = 'translate(-50%, -50%) rotate(0deg)';
          void vertBar.offsetWidth;
          vertBar.style.transition = '';
        }, 300);
      }
    });
  });
}