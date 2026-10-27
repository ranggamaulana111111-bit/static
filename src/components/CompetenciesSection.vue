<script setup>
import { competencyGroups, tools } from "../data/profile";
import CornerMarks from "./CornerMarks.vue";
</script>

<template>
  <section id="keahlian" class="section section--alt skills">
    <div class="container">
      <header class="section-head" v-reveal>
        <div class="section-marker">
          <span class="num">02</span>
          <span class="mono">// Keahlian</span>
        </div>
        <h2>Dari pengukuran ke <em>kontrol proyek.</em></h2>
        <p class="section-lead">
          Kompetensi disusun dari tiga sisi pekerjaan: pengukuran dan dokumen biaya, pekerjaan
          tanah dan pengawasan, serta perencanaan dan pelaporan progres.
        </p>
      </header>

      <div class="skills-grid">
        <div class="matrix" v-reveal="60">
          <div class="matrix-bar mono" aria-hidden="true">
            <span>Kode</span>
            <span>Fase / kompetensi</span>
            <span>Cakupan</span>
          </div>

          <article v-for="(group, gi) in competencyGroups" :key="group.code" class="matrix-group">
            <header class="group-head">
              <span class="group-code serif">{{ group.code }}</span>
              <div class="group-title">
                <span class="mono group-phase">{{ group.phase }}</span>
                <h3>{{ group.title }}</h3>
              </div>
              <span class="mono group-count">{{ group.items.length.toString().padStart(2, "0") }} items</span>
            </header>

            <ul class="group-list">
              <li v-for="(item, ii) in group.items" :key="item">
                <span class="mono item-code">{{ group.code }}{{ (ii + 1).toString().padStart(2, "0") }}</span>
                <span class="item-text">{{ item }}</span>
                <span class="item-mark" aria-hidden="true"></span>
              </li>
            </ul>

            <span v-if="gi === 0" class="group-connector" aria-hidden="true"></span>
          </article>
        </div>

        <aside class="tools" v-reveal="160">
          <CornerMarks />
          <div class="tools-head">
            <span class="mono">Deliverables / standards</span>
            <span class="mono tools-count">{{ tools.length.toString().padStart(2, "0") }}</span>
          </div>

          <div class="ruler" aria-hidden="true"></div>

          <ul class="tool-list">
            <li v-for="tool in tools" :key="tool.code">
              <span class="tool-code mono">{{ tool.code }}</span>
              <span class="tool-main">
                <span class="tool-name">{{ tool.name }}</span>
                <span class="tool-detail mono">{{ tool.detail }}</span>
              </span>
              <span class="tool-group mono">{{ tool.group }}</span>
            </li>
          </ul>

          <div class="tools-note">
            <span class="mono">Catatan kerja</span>
            <p>
              Fokus keluaran: pengukuran dari gambar kerja, BoQ/RAB, opname progres, laporan
              biaya, dan laporan progres proyek.
            </p>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: clamp(2rem, 4vw, 4rem);
  align-items: start;
}

.matrix {
  grid-column: 1 / span 8;
  min-width: 0;
  border-top: 1px solid var(--line-2);
}

.matrix-bar {
  display: grid;
  grid-template-columns: 3.2rem 1fr auto;
  gap: 1rem;
  padding: 0.7rem 0;
  color: var(--muted);
  font-size: 0.5rem;
  border-bottom: 1px solid var(--line);
}

.matrix-bar span:last-child {
  text-align: right;
}

.matrix-group {
  position: relative;
  padding: clamp(1.5rem, 2.6vw, 2rem) 0;
  border-bottom: 1px solid var(--line);
}

.group-head {
  display: grid;
  grid-template-columns: 3.2rem 1fr auto;
  gap: 1rem;
  align-items: start;
  margin-bottom: 0.9rem;
}

.group-code {
  font-size: clamp(1.8rem, 2.8vw, 2.4rem);
  line-height: 0.85;
  color: var(--brass);
}

.group-phase {
  display: block;
  color: var(--muted);
  font-size: 0.5rem;
  margin-bottom: 0.3rem;
}

.group-title h3 {
  font-size: clamp(1.05rem, 1.5vw, 1.3rem);
  line-height: 1.25;
}

.group-count {
  color: var(--muted);
  font-size: 0.5rem;
  padding-top: 0.25rem;
}

.group-list li {
  position: relative;
  display: grid;
  grid-template-columns: 3.2rem 1fr 12px;
  gap: 1rem;
  align-items: baseline;
  padding: 0.62rem 0;
  border-top: 1px solid var(--line);
  transition:
    background-color 0.3s var(--ease),
    padding-left 0.3s var(--ease);
}

.group-list li:hover {
  background: var(--brass-faint);
  padding-left: 0.45rem;
}

.item-code {
  color: var(--muted);
  font-size: 0.5rem;
  letter-spacing: 0.1em;
}

.item-text {
  color: var(--text-2);
  font-size: 0.86rem;
  line-height: 1.6;
  max-width: 60ch;
}

.item-mark {
  position: relative;
  width: 8px;
  height: 8px;
  border: 1px solid var(--line-2);
  transition:
    border-color 0.3s var(--ease),
    background-color 0.3s var(--ease);
}

.group-list li:hover .item-mark {
  border-color: var(--brass);
  background: var(--brass);
}

.group-connector {
  position: absolute;
  left: 1.4rem;
  bottom: -1px;
  width: 1px;
  height: 1.6rem;
  background: var(--brass);
}

.tools {
  position: sticky;
  top: calc(var(--nav-h) + 24px);
  grid-column: 9 / span 4;
  min-width: 0;
  border: 1px solid var(--line-2);
  background: linear-gradient(160deg, rgba(36, 40, 46, 0.72), rgba(17, 19, 21, 0.42));
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 1.35rem 1.4rem 1.4rem;
}

.tools-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid var(--line-2);
  color: var(--muted);
  font-size: 0.55rem;
}

.tools-count {
  color: var(--brass);
}

.ruler {
  height: 22px;
  margin: 0.9rem 0 0.35rem;
  background:
    repeating-linear-gradient(to right, var(--line-2) 0 1px, transparent 1px 11px),
    repeating-linear-gradient(to right, var(--line) 0 1px, transparent 1px 4px);
  background-size:
    100% 9px,
    100% 5px;
  background-position:
    left bottom,
    left bottom;
  background-repeat: no-repeat;
  border-bottom: 1px solid var(--line-2);
}

.tool-list li {
  display: grid;
  grid-template-columns: 2.4rem 1fr auto;
  gap: 0.7rem;
  align-items: baseline;
  padding: 0.78rem 0;
  border-bottom: 1px solid var(--line);
  transition: background-color 0.3s var(--ease);
}

.tool-list li:hover {
  background: var(--brass-faint);
}

.tool-code {
  color: var(--brass);
  font-size: 0.5rem;
  letter-spacing: 0.08em;
}

.tool-main {
  display: flex;
  flex-direction: column;
  gap: 0.12rem;
}

.tool-name {
  color: var(--text);
  font-size: 0.78rem;
  font-weight: 500;
}

.tool-detail {
  color: var(--muted);
  font-size: 0.48rem;
  letter-spacing: 0.1em;
}

.tool-group {
  color: var(--muted);
  font-size: 0.46rem;
  letter-spacing: 0.08em;
  text-align: right;
}

.tools-note {
  margin-top: 1.3rem;
  padding-top: 1.1rem;
  border-top: 1px solid var(--line-2);
}

.tools-note .mono {
  color: var(--brass);
  font-size: 0.5rem;
}

.tools-note p {
  margin-top: 0.55rem;
  color: var(--text-2);
  font-size: 0.78rem;
  line-height: 1.7;
}

@media (max-width: 1024px) {
  .matrix,
  .tools {
    grid-column: 1 / -1;
  }

  .tools {
    position: static;
  }

  .tool-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 1.5rem;
  }
}

@media (max-width: 640px) {
  .matrix-bar {
    display: none;
  }

  .group-head {
    grid-template-columns: 2.4rem 1fr;
  }

  .group-count {
    display: none;
  }

  .group-list li {
    grid-template-columns: 2.4rem 1fr 8px;
    gap: 0.7rem;
  }

  .tool-list {
    grid-template-columns: 1fr;
  }
}
</style>
