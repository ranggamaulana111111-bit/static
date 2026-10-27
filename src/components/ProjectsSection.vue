<script setup>
import { projects } from "../data/profile";
import CornerMarks from "./CornerMarks.vue";
import ProjectBlueprint from "./ProjectBlueprint.vue";
</script>

<template>
  <section id="proyek" class="section projects">
    <div class="container">
      <header class="section-head" v-reveal>
        <div class="section-marker">
          <span class="num">03</span>
          <span class="mono">// Proyek</span>
        </div>
        <h2>Satu proyek. <em>Satu jejak kerja.</em></h2>
        <p class="section-lead">
          Dossier disusun dari informasi publik: peran, lingkup, dan konteks proyek. Tidak memuat
          dokumen internal, nilai kontrak, atau klaim pencapaian pribadi yang tidak terverifikasi.
        </p>
      </header>

      <div class="project-grid">
        <article
          v-for="(project, index) in projects"
          :key="project.id"
          class="project-card"
          :class="{ 'is-wide': project.featured || projects.length === 1 }"
          :style="{ '--i': index }"
        >
          <CornerMarks />
          <div class="pc-art">
            <div class="pc-art-head">
              <span class="mono">{{ project.code }}</span>
              <span class="mono pc-cat">{{ project.category }}</span>
            </div>
            <div class="pc-art-canvas">
              <ProjectBlueprint :variant="project.variant" />
            </div>
            <span class="pc-art-index serif" aria-hidden="true">
              {{ (index + 1).toString().padStart(2, "0") }}
            </span>
          </div>

          <div class="pc-body">
            <div class="pc-topline mono">
              <span>{{ project.location }}</span>
              <span>Dossier / {{ (index + 1).toString().padStart(2, "0") }}</span>
            </div>

            <h3>{{ project.name }}</h3>
            <p class="pc-subtitle mono">{{ project.subtitle }}</p>
            <p class="pc-role">{{ project.role }}</p>

            <dl class="pc-data">
              <div>
                <dt>{{ project.valueNote }}</dt>
                <dd class="pc-value">{{ project.value }}</dd>
              </div>
              <div>
                <dt>{{ project.areaNote }}</dt>
                <dd>{{ project.area }}</dd>
              </div>
              <div class="pc-data-wide">
                <dt>Lingkup</dt>
                <dd>{{ project.scope }}</dd>
              </div>
            </dl>

            <p class="pc-achievement">{{ project.achievement }}</p>

            <div class="pc-foot">
              <div class="pc-highlight">
                <span class="hl-value mono">{{ project.highlight.value }}</span>
                <span class="hl-label mono">{{ project.highlight.label }}</span>
              </div>
              <div class="pc-sources">
                <a
                  v-for="source in project.sources"
                  :key="source.url"
                  class="link-line"
                  :href="source.url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sumber: {{ source.label }}
                  <svg viewBox="0 0 14 14" aria-hidden="true">
                    <path d="M3 11 11 3M5 3h6v6" fill="none" stroke="currentColor" stroke-width="1.2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>

      <p class="project-note mono" v-reveal>
        * Data proyek bersumber dari profil LinkedIn, publikasi CSCEC, dan KPPIP. Bukan dokumen internal proyek.
      </p>
    </div>
  </section>
</template>

<style scoped>
.projects {
  background:
    radial-gradient(ellipse 45% 35% at 95% 10%, rgba(197, 168, 128, 0.06), transparent 70%);
}

.filter-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  margin-bottom: clamp(1.75rem, 3vw, 2.5rem);
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.62rem 0.9rem;
  border: 1px solid var(--line);
  color: var(--text-2);
  transition:
    color 0.3s var(--ease),
    border-color 0.3s var(--ease),
    background-color 0.3s var(--ease);
}

.filter-btn .mono {
  font-size: 0.56rem;
}

.filter-count {
  color: var(--muted);
  font-size: 0.48rem !important;
  transition: color 0.3s var(--ease);
}

.filter-btn:hover {
  color: var(--text);
  border-color: var(--line-2);
}

.filter-btn.is-active {
  color: var(--brass);
  border-color: var(--brass);
  background: var(--brass-faint);
}

.filter-btn.is-active .filter-count {
  color: var(--brass);
}

.filter-meta {
  color: var(--muted);
  font-size: 0.5rem;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: clamp(1.25rem, 2.2vw, 2rem);
}

.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  grid-column: span 6;
  min-width: 0;
  border: 1px solid var(--line);
  background: var(--bg-2);
  transition:
    border-color 0.45s var(--ease),
    background-color 0.45s var(--ease);
  animation: cardIn 0.7s var(--ease) both;
  animation-delay: calc(var(--i) * 70ms);
}

.project-card.is-wide {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 5fr 7fr;
}

.project-card:hover {
  border-color: var(--brass);
}

.project-card:hover .marks {
  color: var(--brass);
}

.pc-art {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 250px;
  border-bottom: 1px solid var(--line);
  background:
    linear-gradient(to right, rgba(243, 244, 246, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(243, 244, 246, 0.04) 1px, transparent 1px);
  background-size: 30px 30px;
  overflow: hidden;
}

.is-wide .pc-art {
  border-bottom: none;
  border-right: 1px solid var(--line);
  min-height: 420px;
}

.pc-art-head {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.85rem 1rem;
  border-bottom: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.5rem;
}

.pc-cat {
  text-align: right;
}

.pc-art-canvas {
  flex: 1;
  padding: clamp(0.5rem, 2vw, 1.5rem);
  transition: transform 0.7s var(--ease);
}

.project-card:hover .pc-art-canvas {
  transform: scale(1.015);
}

.pc-art-index {
  position: absolute;
  right: 0.8rem;
  bottom: 0.1rem;
  font-size: clamp(3.4rem, 6vw, 6rem);
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px var(--line-2);
  pointer-events: none;
  transition: -webkit-text-stroke-color 0.45s var(--ease);
}

.project-card:hover .pc-art-index {
  -webkit-text-stroke-color: rgba(197, 168, 128, 0.55);
}

.pc-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: clamp(1.3rem, 2.4vw, 2rem);
}

.pc-topline {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: var(--muted);
  font-size: 0.5rem;
}

.pc-body h3 {
  margin-top: 0.7rem;
  font-size: clamp(1.15rem, 1.7vw, 1.5rem);
  line-height: 1.18;
  letter-spacing: -0.025em;
  transition: color 0.35s var(--ease);
}

.is-wide .pc-body h3 {
  font-size: clamp(1.35rem, 2.2vw, 1.9rem);
  max-width: 22ch;
}

.project-card:hover .pc-body h3 {
  color: var(--brass);
}

.pc-subtitle {
  margin-top: 0.35rem;
  color: var(--brass);
  font-size: 0.5rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.pc-role {
  margin-top: 0.55rem;
  color: var(--text-2);
  font-size: 0.78rem;
  line-height: 1.5;
}

.pc-data {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  margin: 1.15rem 0 0;
  border-top: 1px solid var(--line);
}

.pc-data > div {
  padding: 0.7rem 0;
  border-bottom: 1px solid var(--line);
}

.pc-data > div:nth-child(odd) {
  padding-right: 1rem;
}

.pc-data > div:nth-child(even) {
  padding-left: 1rem;
  border-left: 1px solid var(--line);
}

.pc-data-wide {
  grid-column: 1 / -1;
  padding-left: 0 !important;
  border-left: none !important;
}

.pc-data dt {
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 0.48rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.pc-data dd {
  margin: 0.22rem 0 0;
  color: var(--text);
  font-size: 0.82rem;
  line-height: 1.4;
}

.pc-value {
  font-family: var(--font-mono);
  font-size: 0.95rem !important;
  color: var(--brass) !important;
  letter-spacing: 0.02em;
}

.pc-achievement {
  margin-top: 1rem;
  padding-left: 0.85rem;
  border-left: 1px solid var(--brass);
  color: var(--text-2);
  font-size: 0.82rem;
  line-height: 1.65;
  max-width: 58ch;
}

.pc-foot {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1.3rem;
}

.pc-highlight {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.hl-value {
  color: var(--brass);
  font-size: clamp(1.3rem, 2vw, 1.7rem);
  letter-spacing: 0.01em;
  line-height: 1;
  transition: transform 0.4s var(--ease);
}

.project-card:hover .hl-value {
  transform: translateY(-3px);
}

.hl-label {
  color: var(--muted);
  font-size: 0.48rem;
}

.pc-sources {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.45rem;
}

.pc-foot .link-line {
  font-size: 0.55rem;
}

.project-note {
  margin-top: 1.5rem;
  color: var(--muted);
  font-size: 0.48rem;
  letter-spacing: 0.1em;
}

@keyframes cardIn {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .project-card {
    grid-column: 1 / -1;
  }
}

@media (max-width: 760px) {
  .project-card.is-wide {
    display: flex;
  }

  .is-wide .pc-art {
    min-height: 250px;
    border-right: none;
    border-bottom: 1px solid var(--line);
  }

  .is-wide .pc-body h3 {
    max-width: 100%;
  }
}

@media (max-width: 520px) {
  .filter-row {
    align-items: flex-start;
  }

  .filter-meta {
    display: none;
  }

  .filter-btn {
    padding: 0.5rem 0.7rem;
  }
}
</style>
