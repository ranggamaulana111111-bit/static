<script setup>
import { timeline } from "../data/profile";
import CornerMarks from "./CornerMarks.vue";

defineEmits(["open-cv"]);
</script>

<template>
  <section id="jejak" class="section timeline-section">
    <div class="container">
      <header class="section-head" v-reveal>
        <div class="section-marker">
          <span class="num">05</span>
          <span class="mono">// Jejak</span>
        </div>
        <h2>Rekam jejak yang <em>dapat diverifikasi.</em></h2>
        <p class="section-lead">
          Urutan peran dan fokus kerja berdasarkan profil publik dan lingkup proyek. Tidak ada
          sertifikasi, institusi, atau pencapaian yang tidak tercantum di sumber.
        </p>
      </header>

      <div class="timeline-grid">
        <ol class="timeline" v-reveal="60">
          <li v-for="item in timeline" :key="item.code" class="tl-item">
            <div class="tl-rail" aria-hidden="true">
              <span class="tl-node mono">{{ item.code }}</span>
            </div>
            <div class="tl-content">
              <span class="mono tl-phase">{{ item.phase }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </div>
          </li>
        </ol>

        <aside class="credential" v-reveal="150">
          <CornerMarks />
          <div class="cred-head">
            <span class="mono">Credential / AR—CV</span>
            <span class="mono cred-rev">Rev 01</span>
          </div>

          <div class="seal">
            <span class="seal-mark serif">S.T.</span>
            <span class="mono seal-label">Sarjana Teknik</span>
          </div>

          <dl class="cred-list">
            <div>
              <dt>Gelar</dt>
              <dd>Sarjana Teknik (S.T.) — Teknik Sipil</dd>
            </div>
            <div>
              <dt>Posisi</dt>
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

          <p class="cred-note">
            Detail profil tersedia di LinkedIn. CV ini hanya memuat informasi yang dapat
            diverifikasi.
          </p>

          <button class="btn btn--ghost btn--small" type="button" @click="$emit('open-cv')">
            Buka CV
          </button>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: clamp(2rem, 4vw, 4rem);
  align-items: start;
}

.timeline {
  grid-column: 1 / span 8;
  min-width: 0;
}

.tl-item {
  display: grid;
  grid-template-columns: 4.2rem 1fr;
  gap: clamp(1rem, 2vw, 1.75rem);
  align-items: start;
}

.tl-rail {
  position: relative;
  display: flex;
  justify-content: center;
  padding-bottom: 0.5rem;
}

.tl-rail::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: -0.5rem;
  left: 50%;
  width: 1px;
  background: var(--line-2);
}

.tl-item:first-child .tl-rail::before {
  top: 2.2rem;
}

.tl-item:last-child .tl-rail::before {
  bottom: 50%;
}

.tl-node {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 2.9rem;
  height: 2.9rem;
  border: 1px solid var(--line-2);
  background: var(--bg);
  color: var(--muted);
  font-size: 0.55rem;
  letter-spacing: 0.1em;
  transition:
    color 0.35s var(--ease),
    border-color 0.35s var(--ease),
    background-color 0.35s var(--ease);
}

.tl-item:hover .tl-node {
  border-color: var(--brass);
  background: var(--brass);
  color: var(--ink);
}

.tl-content {
  padding-bottom: clamp(1.8rem, 3.6vw, 2.9rem);
  border-bottom: 1px solid var(--line);
  transition: padding-left 0.35s var(--ease);
}

.tl-item:hover .tl-content {
  padding-left: 0.5rem;
}

.tl-item:last-child .tl-content {
  border-bottom: none;
}

.tl-phase {
  color: var(--brass);
  font-size: 0.5rem;
}

.tl-content h3 {
  margin-top: 0.4rem;
  font-size: clamp(1.05rem, 1.5vw, 1.3rem);
  line-height: 1.25;
  transition: color 0.3s var(--ease);
}

.tl-item:hover .tl-content h3 {
  color: var(--brass);
}

.tl-content p {
  margin-top: 0.5rem;
  max-width: 56ch;
  color: var(--text-2);
  font-size: 0.86rem;
  line-height: 1.75;
}

.credential {
  position: sticky;
  top: calc(var(--nav-h) + 24px);
  grid-column: 9 / span 4;
  min-width: 0;
  border: 1px solid var(--line-2);
  background: linear-gradient(160deg, rgba(36, 40, 46, 0.72), rgba(17, 19, 21, 0.42));
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 1.35rem 1.4rem 1.5rem;
}

.cred-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid var(--line-2);
  color: var(--muted);
  font-size: 0.5rem;
}

.cred-rev {
  color: var(--brass);
}

.seal {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.4rem 0 1.3rem;
}

.seal-mark {
  display: grid;
  place-items: center;
  width: 4.2rem;
  height: 4.2rem;
  border: 1px solid var(--brass);
  background: var(--brass-faint);
  color: var(--brass);
  font-size: 1.7rem;
  font-style: normal;
  letter-spacing: -0.02em;
}

.seal-label {
  color: var(--text-2);
  font-size: 0.5rem;
  letter-spacing: 0.18em;
  line-height: 1.6;
  max-width: 10ch;
}

.cred-list {
  margin: 0;
  border-top: 1px solid var(--line);
}

.cred-list > div {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.72rem 0;
  border-bottom: 1px solid var(--line);
}

.cred-list dt {
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 0.48rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  flex: none;
}

.cred-list dd {
  margin: 0;
  text-align: right;
  color: var(--text);
  font-size: 0.74rem;
  line-height: 1.4;
}

.cred-note {
  margin: 1.15rem 0 1.25rem;
  color: var(--muted);
  font-size: 0.7rem;
  line-height: 1.65;
}

.credential .btn {
  width: 100%;
}

@media (max-width: 1024px) {
  .timeline,
  .credential {
    grid-column: 1 / -1;
  }

  .credential {
    position: static;
  }
}

@media (max-width: 560px) {
  .tl-item {
    grid-template-columns: 3rem 1fr;
    gap: 0.9rem;
  }

  .tl-node {
    width: 2.4rem;
    height: 2.4rem;
    font-size: 0.5rem;
  }

  .tl-item:first-child .tl-rail::before {
    top: 1.9rem;
  }
}
</style>
