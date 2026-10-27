<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { profile } from "../data/profile";

defineEmits(["open-cv"]);

const links = [
  { id: "profil", index: "01", label: "Profil", href: "#profil" },
  { id: "keahlian", index: "02", label: "Keahlian", href: "#keahlian" },
  { id: "proyek", index: "03", label: "Proyek", href: "#proyek" },
  { id: "biaya", index: "04", label: "Metode", href: "#biaya" },
  { id: "jejak", index: "05", label: "Jejak", href: "#jejak" },
  { id: "kontak", index: "06", label: "Kontak", href: "#kontak" },
];

const scrolled = ref(false);
const progress = ref(0);
const active = ref("profil");
const menuOpen = ref(false);

const progressStyle = computed(() => ({
  transform: `scaleX(${progress.value.toFixed(4)})`,
}));

let frame = 0;

function updateActive() {
  let current = "profil";
  for (const link of links) {
    const el = document.getElementById(link.id);
    if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.38) {
      current = link.id;
    }
  }
  active.value = current;
}

function onScroll() {
  if (frame) return;
  frame = requestAnimationFrame(() => {
    const y = window.scrollY;
    scrolled.value = y > 24;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.value = max > 0 ? Math.min(1, y / max) : 0;
    updateActive();
    frame = 0;
  });
}

function closeMenu() {
  menuOpen.value = false;
}

function onKeydown(event) {
  if (event.key === "Escape" && menuOpen.value) closeMenu();
}

function onResize() {
  if (window.innerWidth > 1180) closeMenu();
}

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize, { passive: true });
  window.addEventListener("keydown", onKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onResize);
  window.removeEventListener("keydown", onKeydown);
  cancelAnimationFrame(frame);
  document.body.style.overflow = "";
});
</script>

<template>
  <header class="nav" :class="{ 'is-scrolled': scrolled, 'is-open': menuOpen }">
    <div class="progress-track" aria-hidden="true">
      <div class="progress-fill" :style="progressStyle"></div>
    </div>

    <div class="container nav-inner">
      <a class="brand" href="#top" @click="closeMenu">
        <span class="brand-mark" aria-hidden="true">AR</span>
        <span class="brand-text">
          <span class="brand-name">Aldi Rifaldi, S.T.</span>
          <span class="brand-role mono">Quantity Surveyor · CSCEC</span>
        </span>
      </a>

      <nav class="nav-links" aria-label="Navigasi utama">
        <a
          v-for="link in links"
          :key="link.id"
          :href="link.href"
          class="nav-link"
          :class="{ 'is-active': active === link.id }"
          :aria-current="active === link.id ? 'location' : undefined"
        >
          <span class="idx">{{ link.index }}</span>
          <span>{{ link.label }}</span>
        </a>
      </nav>

      <div class="nav-actions">
        <a
          class="icon-link"
          :href="profile.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Aldi Rifaldi (tab baru)"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M6.94 8.5v8.9H4.05V8.5h2.89Zm.19-2.74a1.67 1.67 0 1 1-3.34 0 1.67 1.67 0 0 1 3.34 0ZM20 12.15v5.25h-2.88v-4.8c0-1.2-.43-2.02-1.5-2.02-.82 0-1.3.55-1.52 1.08-.08.19-.1.46-.1.73v5.01h-2.89s.04-8.13 0-8.9h2.89v1.26c.38-.59 1.07-1.43 2.6-1.43 1.9 0 3.33 1.24 3.33 3.82Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <button class="btn btn--ghost btn--small nav-cv" type="button" @click="$emit('open-cv')">
          Lihat CV
        </button>
        <button
          class="burger"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          :aria-label="menuOpen ? 'Tutup menu' : 'Buka menu'"
          @click="menuOpen = !menuOpen"
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <Teleport to="body">
      <div id="mobile-menu" class="mobile-menu" :class="{ 'is-open': menuOpen }" :inert="!menuOpen">
        <nav class="mobile-links" aria-label="Navigasi seluler">
          <a
            v-for="link in links"
            :key="link.id"
            :href="link.href"
            @click="closeMenu"
          >
            <span class="mono">{{ link.index }}</span>
            <span>{{ link.label }}</span>
          </a>
        </nav>
        <div class="mobile-actions">
          <button class="btn btn--brass" type="button" @click="closeMenu(); $emit('open-cv')">
            Lihat CV
          </button>
          <a
            class="link-line"
            :href="profile.linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <svg viewBox="0 0 14 14" aria-hidden="true">
              <path d="M3 11 11 3M5 3h6v6" fill="none" stroke="currentColor" stroke-width="1.2" />
            </svg>
          </a>
        </div>
        <p class="mobile-meta mono">AR—DOSSIER / REV 2026</p>
      </div>
    </Teleport>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto;
  z-index: 100;
  height: var(--nav-h);
  background: rgba(17, 19, 21, 0.58);
  border-bottom: 1px solid transparent;
  transition:
    background-color 0.4s var(--ease),
    border-color 0.4s var(--ease);
}

.nav.is-scrolled,
.nav.is-open {
  background: rgba(17, 19, 21, 0.92);
  border-bottom-color: var(--line);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.progress-track {
  position: absolute;
  inset: auto 0 0;
  height: 1px;
  background: transparent;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--brass);
  transform-origin: left center;
  will-change: transform;
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  height: 100%;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  flex: none;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--brass);
  background: var(--brass-faint);
  color: var(--brass);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  transition:
    background-color 0.35s var(--ease),
    color 0.35s var(--ease);
}

.brand:hover .brand-mark {
  background: var(--brass);
  color: var(--ink);
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.brand-name {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: var(--text);
  line-height: 1.2;
}

.brand-role {
  font-size: 0.5rem;
  letter-spacing: 0.22em;
  color: var(--muted);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: clamp(0.8rem, 1.6vw, 1.7rem);
}

.nav-link {
  position: relative;
  display: inline-flex;
  align-items: baseline;
  gap: 0.35rem;
  padding: 0.4rem 0;
  font-family: var(--font-mono);
  font-size: 0.625rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: var(--text-2);
  transition: color 0.3s var(--ease);
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: var(--brass);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s var(--ease);
}

.nav-link:hover {
  color: var(--text);
}

.nav-link.is-active {
  color: var(--brass);
}

.nav-link.is-active::after {
  transform: scaleX(1);
}

.nav-link .idx {
  font-size: 0.5rem;
  color: var(--muted);
}

.nav-link.is-active .idx {
  color: var(--brass);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  flex: none;
}

.icon-link {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid var(--line-2);
  color: var(--text-2);
  transition:
    color 0.3s var(--ease),
    border-color 0.3s var(--ease),
    background-color 0.3s var(--ease);
}

.icon-link svg {
  width: 15px;
  height: 15px;
}

.icon-link:hover {
  color: var(--brass);
  border-color: var(--brass);
  background: var(--brass-faint);
}

.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 38px;
  height: 38px;
  border: 1px solid var(--line-2);
  padding: 0 10px;
}

.burger span {
  display: block;
  width: 100%;
  height: 1px;
  background: var(--text);
  transition:
    transform 0.35s var(--ease),
    opacity 0.25s var(--ease);
}

.is-open .burger span:first-child {
  transform: translateY(3px) rotate(45deg);
}

.is-open .burger span:last-child {
  transform: translateY(-3px) rotate(-45deg);
}

.mobile-menu {
  position: fixed;
  inset: var(--nav-h) 0 0;
  z-index: 90;
  display: flex;
  flex-direction: column;
  padding: clamp(1.5rem, 5vw, 3rem) var(--gutter) 2rem;
  background: rgba(13, 15, 16, 0.98);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition:
    opacity 0.35s var(--ease),
    transform 0.35s var(--ease),
    visibility 0.35s;
  overflow-y: auto;
}

.mobile-menu.is-open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.mobile-links {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--line-2);
}

.mobile-links a {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--line);
  font-size: clamp(1.5rem, 7vw, 2.2rem);
  font-weight: 500;
  letter-spacing: -0.03em;
  color: var(--text);
  transition:
    color 0.3s var(--ease),
    padding-left 0.3s var(--ease);
}

.mobile-links a:hover,
.mobile-links a:focus-visible {
  color: var(--brass);
  padding-left: 0.4rem;
}

.mobile-links a .mono {
  color: var(--muted);
  font-size: 0.55rem;
}

.mobile-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.4rem;
  padding-top: 2rem;
}

.mobile-meta {
  margin-top: auto;
  padding-top: 2.5rem;
  color: var(--muted);
  font-size: 0.55rem;
}

@media (max-width: 1180px) {
  .nav-links,
  .nav-cv {
    display: none;
  }

  .burger {
    display: flex;
  }
}

@media (min-width: 561px) and (max-width: 1180px) {
  .mobile-menu {
    padding-block: clamp(1.25rem, 3vw, 2rem) 1.5rem;
  }

  .mobile-links a {
    padding: 0.7rem 0;
    font-size: clamp(1.3rem, 2.8vw, 1.85rem);
  }

  .mobile-actions {
    gap: 0.9rem;
    padding-top: 1.25rem;
  }

  .mobile-meta {
    padding-top: 1.25rem;
  }
}

@media (max-width: 560px) {
  .brand-text {
    display: none;
  }

  .icon-link {
    display: none;
  }
}

@media (min-width: 1181px) {
  .mobile-menu {
    display: none;
  }
}
</style>
