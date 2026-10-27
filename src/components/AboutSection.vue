<script setup>
import { pillars, profile } from "../data/profile";
import CornerMarks from "./CornerMarks.vue";

const scope = [
  { code: "01", label: "Earthwork" },
  { code: "02", label: "Pavement" },
  { code: "03", label: "Drainage" },
  { code: "04", label: "Structures" },
];
</script>

<template>
  <section id="profil" class="section about">
    <div class="container">
      <header class="section-head" v-reveal>
        <div class="section-marker">
          <span class="num">01</span>
          <span class="mono">// Profil</span>
        </div>
        <h2>Dari volume ke <em>keputusan.</em></h2>
        <p class="section-lead">
          Latar Teknik Sipil, pekerjaan lapangan, dan dokumen biaya dibaca sebagai satu sistem.
          Setiap volume harus punya jejak: gambar, metode kerja, dan konsekuensi biaya.
        </p>
      </header>

      <div class="about-grid">
        <div class="about-copy" v-reveal="80">
          <p class="about-lead">{{ profile.summary }}</p>
          <p class="about-second">
            Minat profesional mencakup project management, analisis data, pengawasan pekerjaan,
            dan perencanaan. Kombinasi ini dipakai untuk membaca progres, volume, dan biaya
            secara bersamaan — bukan sebagai laporan yang terpisah.
          </p>

          <div class="about-signature">
            <span class="signature-line" aria-hidden="true"></span>
            <p class="serif">
              “Presisi bukan detail kecil. Presisi adalah struktur dari keputusan biaya.”
            </p>
            <span class="mono signature-by">Aldi Rifaldi, S.T.</span>
          </div>
        </div>

        <aside class="profile-card" v-reveal="180">
          <CornerMarks />
          <div class="pc-head">
            <span class="mono">Profile / AR—CV</span>
            <span class="mono pc-cred">S.T.</span>
          </div>

          <dl class="pc-list">
            <div>
              <dt>Disiplin</dt>
              <dd>Teknik Sipil</dd>
            </div>
            <div>
              <dt>Peran</dt>
              <dd>Quantity Surveyor</dd>
            </div>
            <div>
              <dt>Perusahaan</dt>
              <dd>CSCEC</dd>
            </div>
            <div>
              <dt>Proyek</dt>
              <dd>Serang–Panimbang Seksi 3</dd>
            </div>
            <div>
              <dt>Lokasi</dt>
              <dd>Banten, Indonesia</dd>
            </div>
            <div>
              <dt>Mulai</dt>
              <dd>Oktober 2023</dd>
            </div>
          </dl>

          <div class="lifecycle">
            <span class="mono lifecycle-label">Project scope</span>
            <ol>
              <li v-for="step in scope" :key="step.code">
                <span class="lc-code mono">{{ step.code }}</span>
                <span class="lc-label">{{ step.label }}</span>
              </li>
            </ol>
          </div>

          <a
            class="pc-link link-line"
            :href="profile.linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Profil LinkedIn
            <svg viewBox="0 0 14 14" aria-hidden="true">
              <path d="M3 11 11 3M5 3h6v6" fill="none" stroke="currentColor" stroke-width="1.2" />
            </svg>
          </a>
        </aside>
      </div>

      <div class="pillars">
        <article
          v-for="(pillar, index) in pillars"
          :key="pillar.index"
          class="pillar"
          v-reveal="index * 90"
        >
          <span class="pillar-index serif">{{ pillar.index }}</span>
          <h3>{{ pillar.title }}</h3>
          <p>{{ pillar.text }}</p>
          <ul class="pillar-tags">
            <li v-for="tag in pillar.tags" :key="tag" class="mono">{{ tag }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: clamp(2rem, 4vw, 4rem);
  align-items: start;
}

.about-copy {
  grid-column: 1 / span 7;
  min-width: 0;
}

.about-lead {
  font-size: clamp(1.15rem, 1.85vw, 1.55rem);
  line-height: 1.6;
  letter-spacing: -0.012em;
  color: var(--text);
  max-width: 40ch;
}

.about-second {
  max-width: 58ch;
  margin-top: 1.5rem;
  color: var(--text-2);
  font-size: 0.95rem;
  line-height: 1.8;
}

.about-signature {
  margin-top: clamp(2rem, 4vw, 3rem);
  padding-top: 1.5rem;
  border-top: 1px solid var(--line);
  max-width: 42ch;
}

.signature-line {
  display: block;
  width: 34px;
  height: 1px;
  margin-bottom: 1rem;
  background: var(--brass);
}

.about-signature p {
  font-size: clamp(1.2rem, 1.8vw, 1.5rem);
  line-height: 1.45;
  color: var(--text-2);
}

.signature-by {
  display: block;
  margin-top: 1rem;
  color: var(--muted);
  font-size: 0.55rem;
}

.profile-card {
  position: relative;
  grid-column: 8 / span 5;
  border: 1px solid var(--line-2);
  background: linear-gradient(160deg, rgba(36, 40, 46, 0.7), rgba(26, 29, 33, 0.4));
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 1.4rem 1.5rem 1.5rem;
}

.pc-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--line-2);
  color: var(--muted);
  font-size: 0.55rem;
}

.pc-cred {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid var(--brass);
  color: var(--brass);
  letter-spacing: 0.1em;
}

.pc-list {
  margin: 0;
}

.pc-list > div {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.78rem 0;
  border-bottom: 1px solid var(--line);
}

.pc-list dt {
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 0.52rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.pc-list dd {
  margin: 0;
  text-align: right;
  color: var(--text);
  font-size: 0.78rem;
  font-weight: 500;
}

.lifecycle {
  padding-top: 1.2rem;
}

.lifecycle-label {
  display: block;
  color: var(--muted);
  font-size: 0.5rem;
  margin-bottom: 0.85rem;
}

.lifecycle ol {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.4rem;
}

.lifecycle li {
  position: relative;
  padding-top: 0.75rem;
}

.lifecycle li::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--line-2);
}

.lifecycle li::after {
  content: "";
  position: absolute;
  top: -2px;
  left: 0;
  width: 5px;
  height: 5px;
  background: var(--brass);
}

.lc-code {
  display: block;
  color: var(--brass);
  font-size: 0.5rem;
  letter-spacing: 0.1em;
}

.lc-label {
  display: block;
  margin-top: 0.18rem;
  color: var(--text-2);
  font-size: 0.66rem;
  letter-spacing: 0.02em;
}

.pc-link {
  margin-top: 1.35rem;
}

.pillars {
  margin-top: clamp(3rem, 6vw, 5rem);
  border-top: 1px solid var(--line-2);
}

.pillar {
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: clamp(1rem, 2.2vw, 2.5rem);
  align-items: start;
  padding: clamp(1.5rem, 3vw, 2.2rem) 0;
  border-bottom: 1px solid var(--line);
  transition: background-color 0.4s var(--ease);
}

.pillar::before {
  content: "";
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--brass);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s var(--ease);
}

.pillar:hover {
  background: var(--brass-faint);
}

.pillar:hover::before {
  transform: scaleX(1);
}

.pillar-index {
  grid-column: 1 / span 1;
  font-size: clamp(1.6rem, 2.4vw, 2.2rem);
  line-height: 0.9;
  color: var(--brass);
}

.pillar h3 {
  grid-column: 2 / span 3;
  font-size: clamp(1rem, 1.35vw, 1.2rem);
  line-height: 1.25;
  padding-top: 0.15rem;
  transition: color 0.35s var(--ease);
}

.pillar:hover h3 {
  color: var(--brass);
}

.pillar p {
  grid-column: 5 / span 5;
  color: var(--text-2);
  font-size: 0.88rem;
  line-height: 1.75;
  max-width: 52ch;
}

.pillar-tags {
  grid-column: 10 / span 3;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.8rem;
  justify-content: flex-end;
}

.pillar-tags li {
  color: var(--muted);
  font-size: 0.5rem;
  letter-spacing: 0.12em;
  padding: 0.28rem 0.45rem;
  border: 1px solid var(--line);
}

@media (max-width: 1024px) {
  .about-copy {
    grid-column: 1 / span 12;
  }

  .profile-card {
    grid-column: 1 / span 8;
  }
}

@media (max-width: 780px) {
  .profile-card {
    grid-column: 1 / -1;
  }

  .pillar {
    grid-template-columns: 2.5rem 1fr;
  }

  .pillar-index {
    grid-column: 1;
    grid-row: 1 / span 3;
  }

  .pillar h3,
  .pillar p,
  .pillar-tags {
    grid-column: 2;
  }

  .pillar h3 {
    grid-row: 1;
  }

  .pillar p {
    grid-row: 2;
  }

  .pillar-tags {
    grid-row: 3;
    justify-content: flex-start;
    margin-top: 0.5rem;
  }
}

@media (max-width: 520px) {
  .profile-card {
    padding: 1.15rem;
  }

  .lifecycle ol {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 0.9rem;
  }
}
</style>
