<script setup>
import { computed, nextTick, ref } from "vue";
import { workPackages } from "../data/profile";
import CornerMarks from "./CornerMarks.vue";

const activeId = ref(workPackages[0].id);

const current = computed(() => workPackages.find((item) => item.id === activeId.value));

function select(id) {
  if (id === activeId.value) return;
  activeId.value = id;
}

function onTabKey(event, index) {
  const keys = ["ArrowRight", "ArrowLeft", "Home", "End"];
  if (!keys.includes(event.key)) return;
  event.preventDefault();
  const last = workPackages.length - 1;
  let next = index;
  if (event.key === "ArrowRight") next = index === last ? 0 : index + 1;
  if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
  if (event.key === "Home") next = 0;
  if (event.key === "End") next = last;
  select(workPackages[next].id);
  nextTick(() => document.getElementById(`boq-tab-${workPackages[next].id}`)?.focus());
}
</script>

<template>
  <section id="biaya" class="section section--alt boq">
    <div class="container">
      <header class="section-head" v-reveal>
        <div class="section-marker">
          <span class="num">04</span>
          <span class="mono">// Metode</span>
        </div>
        <h2>Empat paket. <em>Satu logika pengukuran.</em></h2>
        <p class="section-lead">
          Pekerjaan jalan tol dibaca per paket: apa yang diukur, satuan apa yang dipakai, dan titik
          mana yang diverifikasi. Tidak ada nilai biaya pada halaman ini.
        </p>
      </header>

      <div class="boq-shell" v-reveal="60">
        <CornerMarks />

        <div class="boq-top">
          <div class="boq-tabs" role="tablist" aria-label="Pilih paket pekerjaan">
            <button
              v-for="(item, index) in workPackages"
              :id="`boq-tab-${item.id}`"
              :key="item.id"
              type="button"
              role="tab"
              class="boq-tab"
              :class="{ 'is-active': activeId === item.id }"
              :aria-selected="activeId === item.id"
              :tabindex="activeId === item.id ? 0 : -1"
              aria-controls="boq-panel"
              @click="select(item.id)"
              @keydown="onTabKey($event, index)"
            >
              <span class="mono tab-code">{{ item.code }}</span>
              <span class="tab-name">{{ item.short }}</span>
            </button>
          </div>
          <span class="mono boq-mode">Method reference / rev 2026</span>
        </div>

        <div
          id="boq-panel"
          class="boq-panel"
          role="tabpanel"
          :aria-labelledby="`boq-tab-${current.id}`"
        >
          <div class="boq-main">
            <div class="panel-head">
              <span class="mono panel-code">{{ current.code }} / {{ current.short }}</span>
              <h3>{{ current.name }}</h3>
              <p>{{ current.summary }}</p>
            </div>

            <div class="qty-head mono" aria-hidden="true">
              <span>Item pengukuran</span>
              <span>Satuan</span>
              <span>Titik verifikasi</span>
            </div>

            <ul class="qty-list">
              <li v-for="(item, index) in current.items" :key="item.name">
                <span class="qty-index mono">
                  {{ current.code }}.{{ (index + 1).toString().padStart(2, "0") }}
                </span>
                <span class="qty-name">{{ item.name }}</span>
                <span class="qty-unit mono">{{ item.unit }}</span>
                <span class="qty-check">{{ item.check }}</span>
              </li>
            </ul>
          </div>

          <aside class="boq-summary">
            <div class="summary-head">
              <span class="mono">Output QS</span>
              <span class="mono summary-status">Metode</span>
            </div>

            <p class="summary-project">{{ current.name }}</p>

            <ul class="output-list">
              <li v-for="output in current.outputs" :key="output">
                <span class="output-tick" aria-hidden="true"></span>
                <span>{{ output }}</span>
              </li>
            </ul>

            <div class="summary-highlight">
              <span class="mono highlight-label">Prinsip</span>
              <span class="highlight-value mono">Traceable</span>
            </div>

            <p class="summary-note">
              Setiap volume harus bisa ditelusuri ke gambar kerja, spesifikasi, dan dokumen
              kontrak. Nilai biaya tidak ditampilkan karena bukan data publik.
            </p>
          </aside>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.boq-shell {
  position: relative;
  border: 1px solid var(--line-2);
  background: rgba(17, 19, 21, 0.52);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.boq-top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 1px solid var(--line-2);
}

.boq-tabs {
  display: flex;
  flex-wrap: wrap;
}

.boq-tab {
  position: relative;
  display: inline-flex;
  align-items: baseline;
  gap: 0.5rem;
  padding: 1rem 1.25rem;
  border-right: 1px solid var(--line);
  color: var(--text-2);
  transition:
    color 0.3s var(--ease),
    background-color 0.3s var(--ease);
}

.boq-tab::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 1px;
  background: transparent;
}

.boq-tab:hover {
  color: var(--text);
  background: var(--brass-faint);
}

.boq-tab.is-active {
  color: var(--brass);
  background: var(--brass-faint);
}

.boq-tab.is-active::after {
  background: var(--brass);
}

.tab-code {
  font-size: 0.5rem;
  color: var(--muted);
}

.boq-tab.is-active .tab-code {
  color: var(--brass);
}

.tab-name {
  font-size: 0.8rem;
  letter-spacing: -0.01em;
}

.boq-mode {
  padding: 0 1.25rem;
  color: var(--muted);
  font-size: 0.48rem;
  letter-spacing: 0.16em;
}

.boq-panel {
  display: grid;
  grid-template-columns: 7fr 5fr;
}

.boq-main {
  min-width: 0;
  padding: clamp(1.4rem, 2.5vw, 2rem);
  border-right: 1px solid var(--line-2);
}

.panel-code {
  color: var(--brass);
  font-size: 0.5rem;
  letter-spacing: 0.16em;
}

.panel-head h3 {
  margin-top: 0.55rem;
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 500;
  line-height: 1.15;
}

.panel-head p {
  max-width: 46ch;
  margin-top: 0.7rem;
  color: var(--text-2);
  font-size: 0.85rem;
  line-height: 1.7;
}

.qty-head,
.qty-list li {
  display: grid;
  grid-template-columns: 3.4rem minmax(0, 1.2fr) 3.5rem minmax(0, 1fr);
  gap: 0.9rem;
  align-items: baseline;
}

.qty-head {
  margin-top: 1.75rem;
  padding: 0.6rem 0;
  border-top: 1px solid var(--line-2);
  border-bottom: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.48rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.qty-head span:nth-child(2) {
  text-align: center;
}

.qty-list li {
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--line);
  transition: background-color 0.3s var(--ease);
}

.qty-list li:hover {
  background: var(--brass-faint);
}

.qty-index {
  color: var(--muted);
  font-size: 0.48rem;
  letter-spacing: 0.1em;
}

.qty-name {
  color: var(--text);
  font-size: 0.84rem;
  font-weight: 500;
}

.qty-unit {
  color: var(--brass);
  font-size: 0.56rem;
  text-align: center;
}

.qty-check {
  color: var(--text-2);
  font-size: 0.78rem;
  line-height: 1.5;
}

.boq-summary {
  padding: clamp(1.4rem, 2.5vw, 2rem);
  background: linear-gradient(165deg, rgba(197, 168, 128, 0.05), transparent 60%);
}

.summary-head {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid var(--line-2);
  color: var(--muted);
  font-size: 0.5rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.summary-status {
  color: var(--brass);
}

.summary-project {
  margin-top: 1.2rem;
  font-family: var(--font-serif);
  font-size: clamp(1.25rem, 2vw, 1.6rem);
  color: var(--text);
}

.output-list {
  margin-top: 1.2rem;
}

.output-list li {
  display: flex;
  align-items: baseline;
  gap: 0.7rem;
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--line);
  color: var(--text-2);
  font-size: 0.8rem;
}

.output-tick {
  width: 5px;
  height: 5px;
  flex: 0 0 auto;
  background: var(--brass);
  transform: translateY(-2px);
}

.summary-highlight {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.4rem;
  padding-top: 1rem;
  border-top: 1px solid var(--line-2);
}

.highlight-label {
  color: var(--muted);
  font-size: 0.5rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.highlight-value {
  color: var(--brass);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
}

.summary-note {
  margin-top: 1rem;
  color: var(--muted);
  font-size: 0.7rem;
  line-height: 1.7;
}

@media (max-width: 980px) {
  .boq-panel {
    grid-template-columns: 1fr;
  }

  .boq-main {
    border-right: none;
    border-bottom: 1px solid var(--line-2);
  }
}

@media (max-width: 640px) {
  .boq-tabs {
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  .boq-tab {
    flex: 0 0 auto;
    padding: 0.9rem 1rem;
  }

  .boq-mode {
    display: none;
  }

  .qty-head {
    display: none;
  }

  .qty-list li {
    grid-template-columns: 2.8rem minmax(0, 1fr) 3rem;
    row-gap: 0.25rem;
  }

  .qty-check {
    grid-column: 2 / -1;
  }
}
</style>
