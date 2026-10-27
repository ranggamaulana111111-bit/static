<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { competencyGroups, profile, projects, timeline, tools } from "../data/profile";

const emit = defineEmits(["close"]);
const closeBtn = ref(null);
let previousOverflow = "";

function onKeydown(event) {
  if (event.key === "Escape") emit("close");
}

function printCv() {
  window.print();
}

onMounted(() => {
  previousOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  document.body.classList.add("cv-open");
  document.getElementById("app")?.setAttribute("inert", "");
  document.addEventListener("keydown", onKeydown);
  closeBtn.value?.focus();
});

onBeforeUnmount(() => {
  document.body.style.overflow = previousOverflow;
  document.body.classList.remove("cv-open");
  document.getElementById("app")?.removeAttribute("inert");
  document.removeEventListener("keydown", onKeydown);
});
</script>

<template>
  <Teleport to="body">
    <div class="cv-overlay" role="dialog" aria-modal="true" aria-labelledby="cv-title" @click.self="$emit('close')">
      <div class="cv-toolbar">
        <span class="cv-toolbar-label mono">CV / Print preview</span>
        <div class="cv-toolbar-actions">
          <button ref="closeBtn" class="cv-btn cv-btn--ghost" type="button" @click="$emit('close')">
            Tutup
          </button>
          <button class="cv-btn cv-btn--solid" type="button" @click="printCv">
            Cetak / Simpan PDF
          </button>
        </div>
      </div>

      <article class="cv-paper" aria-label="Curriculum vitae Aldi Rifaldi">
        <header class="cv-header">
          <div class="cv-id">
            <p class="cv-kicker mono">Curriculum Vitae / 2026</p>
            <h2 id="cv-title" class="cv-name">
              Aldi Rifaldi, <span class="cv-cred">S.T.</span>
            </h2>
            <p class="cv-role">{{ profile.role }}</p>
          </div>
          <div class="cv-contact">
            <span class="cv-contact-label mono">Kontak</span>
            <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer">
              {{ profile.linkedinLabel }}
            </a>
            <span class="cv-contact-note">LinkedIn — kanal utama</span>
          </div>
        </header>

        <section class="cv-section">
          <h3 class="cv-section-title mono"><span>01</span> Profil</h3>
          <p class="cv-summary">{{ profile.summary }}</p>
          <p class="cv-summary cv-summary--second">
            Minat profesional mencakup project management, analisis data, pengawasan pekerjaan,
            dan perencanaan. Kombinasi ini dipakai untuk membaca progres, volume, dan biaya
            secara bersamaan.
          </p>
        </section>

        <section class="cv-section">
          <h3 class="cv-section-title mono"><span>02</span> Keahlian inti</h3>
          <div class="cv-competencies">
            <div v-for="group in competencyGroups" :key="group.code" class="cv-comp">
              <p class="cv-comp-head">
                <span class="cv-comp-code mono">{{ group.code }}</span>
                <span class="cv-comp-phase mono">{{ group.phase }}</span>
                <strong>{{ group.title }}</strong>
              </p>
              <ul>
                <li v-for="item in group.items" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="cv-section">
          <h3 class="cv-section-title mono"><span>03</span> Proyek pilihan</h3>
          <div class="cv-projects">
            <article v-for="project in projects" :key="project.id" class="cv-project">
              <div class="cv-project-head">
                <div>
                  <span class="cv-project-code mono">{{ project.code }} / {{ project.category }}</span>
                  <h4>{{ project.name }}</h4>
                  <p class="cv-project-role">{{ project.role }}</p>
                </div>
                <div class="cv-project-value">
                  <span class="mono">Panjang</span>
                  <strong>{{ project.value }}</strong>
                </div>
              </div>
              <p class="cv-project-scope">
                <span class="mono">Lingkup</span> {{ project.scope }} · {{ project.area }}
              </p>
              <p class="cv-project-achievement">{{ project.achievement }}</p>
            </article>
          </div>
        </section>

        <div class="cv-bottom">
          <section class="cv-section">
            <h3 class="cv-section-title mono"><span>04</span> Pendidikan &amp; kualifikasi</h3>
            <ul class="cv-qual">
              <li>
                <span class="cv-qual-label">Gelar</span>
                <span>Sarjana Teknik (S.T.) — Teknik Sipil</span>
              </li>
              <li>
                <span class="cv-qual-label">Posisi</span>
                <span>Quantity Surveyor — CSCEC</span>
              </li>
              <li>
                <span class="cv-qual-label">Proyek</span>
                <span>Jalan Tol Serang–Panimbang Seksi 3</span>
              </li>
              <li>
                <span class="cv-qual-label">Lokasi</span>
                <span>Banten, Indonesia</span>
              </li>
            </ul>
          </section>

          <section class="cv-section">
            <h3 class="cv-section-title mono"><span>05</span> Deliverables</h3>
            <p class="cv-tools">
              <span v-for="tool in tools" :key="tool.code">{{ tool.name }} <em>({{ tool.detail }})</em></span>
            </p>
            <p class="cv-timeline-note">
              Fokus: {{ timeline.map((item) => item.phase).join(" · ") }}.
            </p>
          </section>
        </div>

        <footer class="cv-footer">
          <span class="mono">AR—CV / Rev 2026</span>
          <span class="mono">Disusun dari profil LinkedIn dan data proyek publik.</span>
        </footer>
      </article>
    </div>
  </Teleport>
</template>

<style scoped>
.cv-overlay {
  position: fixed;
  inset: 0;
  z-index: 300;
  overflow-y: auto;
  padding: 76px clamp(1rem, 4vw, 3rem) 3rem;
  background: rgba(9, 11, 12, 0.86);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  animation: overlayIn 0.35s var(--ease) both;
}

.cv-toolbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.9rem clamp(1rem, 4vw, 3rem);
  background: rgba(17, 19, 21, 0.94);
  border-bottom: 1px solid var(--line);
}

.cv-toolbar-label {
  color: var(--text-2);
  font-size: 0.52rem;
}

.cv-toolbar-actions {
  display: flex;
  gap: 0.6rem;
}

.cv-btn {
  padding: 0.65rem 1rem;
  border: 1px solid var(--line-2);
  font-family: var(--font-mono);
  font-size: 0.55rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition:
    background-color 0.3s var(--ease),
    border-color 0.3s var(--ease),
    color 0.3s var(--ease);
}

.cv-btn--ghost {
  color: var(--text-2);
}

.cv-btn--ghost:hover {
  color: var(--text);
  border-color: var(--brass);
}

.cv-btn--solid {
  background: var(--brass);
  border-color: var(--brass);
  color: var(--ink);
  font-weight: 500;
}

.cv-btn--solid:hover {
  background: var(--brass-bright);
  border-color: var(--brass-bright);
}

.cv-paper {
  --paper: #f4f1ea;
  --paper-ink: #1a1d21;
  --paper-soft: #4b5158;
  --paper-mute: #737a82;
  --paper-line: #d3ccbf;
  --paper-accent: #8a6d3f;

  position: relative;
  width: min(100%, 900px);
  margin: 0 auto;
  padding: clamp(2rem, 5vw, 3.6rem) clamp(1.5rem, 5vw, 3.6rem) 2rem;
  background: var(--paper);
  color: var(--paper-ink);
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.55);
  border-top: 5px solid var(--paper-accent);
  animation: paperIn 0.55s var(--ease) 0.05s both;
}

.cv-header {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: flex-start;
  padding-bottom: 1.4rem;
  border-bottom: 1px solid var(--paper-line);
}

.cv-kicker {
  color: var(--paper-accent);
  font-size: 0.5rem;
  letter-spacing: 0.2em;
}

.cv-name {
  margin-top: 0.4rem;
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4.2vw, 3rem);
  font-weight: 600;
  line-height: 0.98;
  letter-spacing: -0.025em;
  color: var(--paper-ink);
}

.cv-cred {
  color: var(--paper-accent);
  font-style: italic;
}

.cv-role {
  margin-top: 0.5rem;
  max-width: 38ch;
  color: var(--paper-soft);
  font-size: 0.78rem;
  line-height: 1.5;
}

.cv-contact {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  text-align: right;
  flex: none;
}

.cv-contact-label {
  color: var(--paper-mute);
  font-size: 0.46rem;
}

.cv-contact a {
  color: var(--paper-accent);
  font-size: 0.74rem;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.cv-contact-note {
  color: var(--paper-mute);
  font-size: 0.62rem;
}

.cv-section {
  padding-top: 1.3rem;
  break-inside: avoid;
}

.cv-section-title {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid var(--paper-line);
  color: var(--paper-ink);
  font-size: 0.55rem;
  letter-spacing: 0.18em;
}

.cv-section-title span {
  color: var(--paper-accent);
  font-size: 0.48rem;
}

.cv-summary {
  margin-top: 0.75rem;
  color: var(--paper-soft);
  font-size: 0.76rem;
  line-height: 1.65;
}

.cv-summary--second {
  margin-top: 0.45rem;
}

.cv-competencies {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;
  margin-top: 0.8rem;
}

.cv-comp-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.35rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid var(--paper-line);
}

.cv-comp-code {
  color: var(--paper-accent);
  font-size: 0.46rem;
}

.cv-comp-phase {
  color: var(--paper-mute);
  font-size: 0.42rem;
  letter-spacing: 0.12em;
}

.cv-comp-head strong {
  width: 100%;
  margin-top: 0.15rem;
  color: var(--paper-ink);
  font-family: var(--font-sans);
  font-size: 0.74rem;
  font-weight: 600;
  line-height: 1.3;
}

.cv-comp ul {
  margin-top: 0.45rem;
}

.cv-comp li {
  position: relative;
  padding-left: 0.75rem;
  margin-bottom: 0.3rem;
  color: var(--paper-soft);
  font-size: 0.65rem;
  line-height: 1.5;
}

.cv-comp li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.5em;
  width: 4px;
  height: 1px;
  background: var(--paper-accent);
}

.cv-projects {
  margin-top: 0.6rem;
}

.cv-project {
  padding: 0.7rem 0;
  border-bottom: 1px solid var(--paper-line);
  break-inside: avoid;
}

.cv-project:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.cv-project-head {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: flex-start;
}

.cv-project-code {
  color: var(--paper-mute);
  font-size: 0.44rem;
  letter-spacing: 0.12em;
}

.cv-project h4 {
  margin-top: 0.18rem;
  color: var(--paper-ink);
  font-family: var(--font-sans);
  font-size: 0.86rem;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.cv-project-role {
  margin-top: 0.12rem;
  color: var(--paper-accent);
  font-size: 0.65rem;
}

.cv-project-value {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.1rem;
  flex: none;
}

.cv-project-value .mono {
  color: var(--paper-mute);
  font-size: 0.42rem;
}

.cv-project-value strong {
  color: var(--paper-ink);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 500;
}

.cv-project-scope {
  margin-top: 0.35rem;
  color: var(--paper-soft);
  font-size: 0.66rem;
  line-height: 1.5;
}

.cv-project-scope .mono {
  color: var(--paper-mute);
  font-size: 0.44rem;
}

.cv-project-achievement {
  margin-top: 0.3rem;
  color: var(--paper-soft);
  font-size: 0.69rem;
  line-height: 1.6;
  max-width: 70ch;
}

.cv-bottom {
  display: grid;
  grid-template-columns: 1fr 0.85fr;
  gap: 1.6rem;
  align-items: start;
}

.cv-qual {
  margin-top: 0.65rem;
}

.cv-qual li {
  display: grid;
  grid-template-columns: 5.2rem 1fr;
  gap: 0.6rem;
  padding: 0.35rem 0;
  border-bottom: 1px solid var(--paper-line);
  color: var(--paper-soft);
  font-size: 0.68rem;
  line-height: 1.45;
}

.cv-qual-label {
  color: var(--paper-mute);
  font-family: var(--font-mono);
  font-size: 0.44rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.cv-tools {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem 0.8rem;
  margin-top: 0.65rem;
  color: var(--paper-soft);
  font-size: 0.68rem;
  line-height: 1.6;
}

.cv-tools em {
  color: var(--paper-mute);
  font-style: normal;
  font-size: 0.6rem;
}

.cv-timeline-note {
  margin-top: 0.6rem;
  color: var(--paper-mute);
  font-size: 0.64rem;
  line-height: 1.6;
}

.cv-footer {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.6rem;
  padding-top: 0.7rem;
  border-top: 1px solid var(--paper-line);
  color: var(--paper-mute);
  font-size: 0.44rem;
}

@keyframes overlayIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes paperIn {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 760px) {
  .cv-overlay {
    padding-top: 68px;
  }

  .cv-toolbar-label {
    display: none;
  }

  .cv-header {
    flex-direction: column;
    gap: 0.9rem;
  }

  .cv-contact {
    text-align: left;
  }

  .cv-competencies {
    grid-template-columns: 1fr;
    gap: 0.9rem;
  }

  .cv-bottom {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .cv-footer {
    flex-direction: column;
    gap: 0.3rem;
  }
}
</style>

<style>
body.cv-open {
  overflow: hidden;
}

@media print {
  @page {
    size: A4;
    margin: 12mm;
  }

  html,
  body {
    background: #fff !important;
  }

  body::before,
  body::after {
    display: none !important;
  }

  body > #app,
  .site-shell {
    display: none !important;
  }

  .cv-overlay {
    position: static !important;
    inset: auto !important;
    overflow: visible !important;
    padding: 0 !important;
    background: #fff !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    animation: none !important;
  }

  .cv-toolbar {
    display: none !important;
  }

  .cv-paper {
    width: 100% !important;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
    box-shadow: none !important;
    border-top: 4px solid #8a6d3f !important;
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }

  .cv-overlay,
  .cv-paper {
    color: #1a1d21 !important;
  }

  .cv-project,
  .cv-section,
  .cv-comp {
    break-inside: avoid;
  }

  .cv-name {
    font-size: 26pt !important;
  }

  .cv-role,
  .cv-summary,
  .cv-project-achievement,
  .cv-project-scope,
  .cv-qual li,
  .cv-tools {
    font-size: 8.4pt !important;
  }

  .cv-section-title {
    font-size: 7pt !important;
  }

  .cv-comp li {
    font-size: 7.4pt !important;
  }

  .cv-bottom {
    grid-template-columns: 1fr 0.85fr !important;
  }

  .cv-footer {
    margin-top: 10mm !important;
  }
}
</style>
