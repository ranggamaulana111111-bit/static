const pending = new Set();

let listening = false;
let frame = 0;

function revealVisible() {
  frame = 0;
  const viewport = window.innerHeight || document.documentElement.clientHeight;
  for (const el of pending) {
    const rect = el.getBoundingClientRect();
    if (rect.top < viewport * 0.94) {
      el.classList.add("is-in");
      pending.delete(el);
    }
  }
  if (!pending.size) stopListening();
}

function schedule() {
  if (frame) return;
  frame = requestAnimationFrame(revealVisible);
}

function startListening() {
  if (listening) return;
  listening = true;
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
}

function stopListening() {
  if (!listening) return;
  listening = false;
  window.removeEventListener("scroll", schedule);
  window.removeEventListener("resize", schedule);
  if (frame) {
    cancelAnimationFrame(frame);
    frame = 0;
  }
}

export const reveal = {
  mounted(el, binding) {
    el.setAttribute("data-reveal", "");
    const delay = Number(binding.value) || 0;
    if (delay) el.style.setProperty("--reveal-delay", `${delay}ms`);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }

    pending.add(el);
    startListening();
    schedule();
  },
  unmounted(el) {
    pending.delete(el);
    if (!pending.size) stopListening();
  },
};
