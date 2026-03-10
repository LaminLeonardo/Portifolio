/**
 * main.js — Portfolio Leonardo Lamin
 *
 * Módulos:
 *  1. typingEffect  — efeito de digitação no hero
 *  2. scrollReveal  — anima elementos ao entrar na viewport
 */


/* ── 1. EFEITO DE DIGITAÇÃO ───────────────────────────────── */

const TypingEffect = (() => {
  const ROLES = [
    'Auxiliar de Desenvolvimento',
    'Fullstack em Formação',
    'Apaixonado por Código',
    'Construindo o Futuro',
  ];

  const TYPING_SPEED   = 80;   
  const DELETING_SPEED = 50;   
  const PAUSE_AFTER    = 2000; // pausa ao terminar

  let roleIndex  = 0;
  let charIndex  = 0;
  let isDeleting = false;

  /**
   * Retorna o elemento do DOM onde o texto será exibido.
   * @returns {HTMLElement}
   */
  const getDisplayElement = () => document.getElementById('typed-text');

 
  // Atualiza o texto exibido e agenda a próxima chamada.
 
  const tick = () => {
    const currentRole   = ROLES[roleIndex];
    const displayEl     = getDisplayElement();

    if (isDeleting) {
      charIndex--;
      displayEl.textContent = currentRole.slice(0, charIndex);

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex  = (roleIndex + 1) % ROLES.length;
      }
    } else {
      charIndex++;
      displayEl.textContent = currentRole.slice(0, charIndex);

      if (charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(tick, PAUSE_AFTER);
        return;
      }
    }

    const delay = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    setTimeout(tick, delay);
  };

  
  // Inicializa o efeito de digitação.
  
  const init = () => {
    const displayEl = getDisplayElement();
    if (!displayEl) return;
    setTimeout(tick, 800);
  };

  return { init };
})();

 // ScrollReveal ===============================================

const ScrollReveal = (() => {
  const SELECTOR  = '.reveal';
  const THRESHOLD = 0.15;
  const STAGGER   = 150; // ms de atraso entre elementos do mesmo grupo

  /**
   * Adiciona a classe .visible ao elemento, tornando-o visível.
   * O atraso cria um efeito cascata quando há múltiplos elementos.
   *
   * @param {IntersectionObserverEntry} entry
   * @param {number} index
   * @param {IntersectionObserver} observer
   */
  const revealElement = (entry, index, observer) => {
    if (!entry.isIntersecting) return;

    setTimeout(() => {
      entry.target.classList.add('visible');
    }, index * STAGGER);

    observer.unobserve(entry.target);
  };

  /**
   * Inicializa o observer e observa todos os elementos .reveal.
   */
  const init = () => {
    const elements = document.querySelectorAll(SELECTOR);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry, i) => revealElement(entry, i, observer)),
      { threshold: THRESHOLD }
    );

    elements.forEach((el) => observer.observe(el));
  };

  return { init };
})();


// ── INICIALIZAÇÃO ===============================================

document.addEventListener('DOMContentLoaded', () => {
  TypingEffect.init();
  ScrollReveal.init();
});
