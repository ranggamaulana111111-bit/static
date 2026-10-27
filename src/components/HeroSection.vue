<script setup>
import { ref } from "vue";
import { metrics, profile } from "../data/profile";
import AnimatedNumber from "./AnimatedNumber.vue";
import CornerMarks from "./CornerMarks.vue";

defineEmits(["open-cv"]);

const laneTicks = [120, 158, 196, 224, 262, 300];

const canvas = ref(null);
const active = ref(false);
const cross = ref({ left: "50%", top: "50%" });
const coord = ref({ x: "012.4", y: "006.2" });

function onMove(event) {
  if (event.pointerType === "touch") return;
  const rect = canvas.value.getBoundingClientRect();
  const px = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
  const py = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
  active.value = true;
  cross.value = { left: `${px * 100}%`, top: `${py * 100}%` };
  coord.value = {
    x: (px * 33).toFixed(1).padStart(5, "0"),
    y: ((1 - py) * 120).toFixed(1).padStart(5, "0"),
  };
}
</script>

<template>
  <section id="top" class="hero">
    <div class="container hero-inner">
      <div class="hero-sheet mono" aria-hidden="true">
        <span>Portfolio / 2026</span>
        <span>Sheet 01 — Project Dossier</span>
        <span>Rev. 01</span>
      </div>

      <div class="hero-main">
        <div class="hero-copy">
          <h1 class="hero-name">
            <span class="name-line">Aldi</span>
            <span class="name-line name-line--second">
              Rifaldi
              <span class="credential mono">S.T.</span>
            </span>
          </h1>

          <p class="hero-role mono">
            Quantity Surveyor <span aria-hidden="true">/</span> Earthwork
            <span aria-hidden="true">/</span> Site &amp; Project Control
          </p>

          <p class="hero-headline">
            <span>Precision in every volume.</span>
            <span class="serif">Excellence in every structure.</span>
          </p>

          <p class="hero-summary">{{ profile.subheadline }}</p>

          <div class="hero-actions">
            <a class="btn btn--brass" href="#proyek">
              Lihat Proyek
              <svg viewBox="0 0 14 14" aria-hidden="true">
                <path d="M2 12 12 2M4 2h8v8" fill="none" stroke="currentColor" stroke-width="1.3" />
              </svg>
            </a>
            <button class="btn btn--ghost" type="button" @click="$emit('open-cv')">
              Lihat CV
              <svg viewBox="0 0 14 14" aria-hidden="true">
                <path
                  d="M7 1v8m0 0 3-3M7 9 4 6M2 11v2h10v-2"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.2"
                />
              </svg>
            </button>
          </div>

          <a
            class="link-line hero-linkedin"
            :href="profile.linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ profile.linkedinLabel }}
            <svg viewBox="0 0 14 14" aria-hidden="true">
              <path d="M3 11 11 3M5 3h6v6" fill="none" stroke="currentColor" stroke-width="1.2" />
            </svg>
          </a>
        </div>

        <aside class="drawing" aria-label="Potongan melintang jalan tol dan title block proyek">
          <div class="drawing-head">
            <span class="mono">Drawing no. AR—01</span>
            <span class="mono">Scale 1:2000</span>
          </div>

          <div
            ref="canvas"
            class="drawing-canvas"
            @pointermove="onMove"
            @pointerenter="active = true"
            @pointerleave="active = false"
          >
            <svg
              class="bp"
              viewBox="0 0 420 520"
              role="img"
              aria-label="Potongan melintang jalan tol empat lajur dengan median, lapis perkerasan, timbunan, dan garis dimensi."
            >
              <g class="bp-fade" style="animation-delay: 0.55s">
                <line class="bp-line" pathLength="1" x1="24" y1="430" x2="396" y2="430" />
                <line class="bp-line" pathLength="1" x1="108" y1="492" x2="312" y2="492" />
                <line class="bp-line" pathLength="1" x1="108" y1="514" x2="312" y2="514" />
                <line class="bp-line" pathLength="1" x1="108" y1="470" x2="108" y2="520" />
                <line class="bp-line" pathLength="1" x1="312" y1="470" x2="312" y2="520" />
              </g>

              <g class="bp-fade" style="animation-delay: 0.15s">
                <path class="bp-line" pathLength="1" d="M52 430 L120 300 H300 L368 430" />
                <rect class="bp-line" pathLength="1" x="120" y="300" width="180" height="10" />
                <rect class="bp-line" pathLength="1" x="120" y="310" width="180" height="12" />
                <rect class="bp-line" pathLength="1" x="120" y="322" width="180" height="14" />
                <path class="bp-line" pathLength="1" d="M196 300 V284 H224 V300" />
              </g>

              <g class="bp-floors">
                <line class="bp-floor" x1="158" y1="300" x2="158" y2="326" />
                <line class="bp-floor" x1="262" y1="300" x2="262" y2="326" />
                <line class="bp-floor" x1="110" y1="342" x2="88" y2="382" />
                <line class="bp-floor" x1="98" y1="356" x2="74" y2="400" />
                <line class="bp-floor" x1="86" y1="370" x2="60" y2="418" />
                <line class="bp-floor" x1="310" y1="342" x2="332" y2="382" />
                <line class="bp-floor" x1="322" y1="356" x2="346" y2="400" />
                <line class="bp-floor" x1="334" y1="370" x2="360" y2="418" />
              </g>

              <g class="bp-fade" style="animation-delay: 0.75s">
                <line class="bp-line bp-brass" pathLength="1" x1="120" y1="300" x2="300" y2="300" />
                <line class="bp-line bp-brass" pathLength="1" x1="196" y1="284" x2="224" y2="284" />
                <line class="bp-line bp-brass" pathLength="1" x1="300" y1="300" x2="300" y2="326" />
              </g>

              <g class="bp-fade" style="animation-delay: 0.95s">
                <line class="bp-line bp-dim" pathLength="1" x1="86" y1="300" x2="86" y2="430" />
                <line class="bp-line bp-dim" pathLength="1" x1="79" y1="300" x2="93" y2="300" />
                <line class="bp-line bp-dim" pathLength="1" x1="79" y1="430" x2="93" y2="430" />
                <line class="bp-line bp-dim" pathLength="1" x1="120" y1="268" x2="300" y2="268" />
                <line
                  v-for="tick in laneTicks"
                  :key="`lt-${tick}`"
                  class="bp-line bp-dim"
                  pathLength="1"
                  :x1="tick"
                  y1="262"
                  :x2="tick"
                  y2="274"
                />
                <line class="bp-line bp-dim" pathLength="1" x1="120" y1="440" x2="300" y2="440" />
                <line class="bp-line bp-dim" pathLength="1" x1="120" y1="434" x2="120" y2="446" />
                <line class="bp-line bp-dim" pathLength="1" x1="300" y1="434" x2="300" y2="446" />
              </g>

              <g class="bp-fade" style="animation-delay: 1.15s">
                <text class="bp-label" x="210" y="232" text-anchor="middle">TYPICAL CROSS-SECTION</text>
                <text class="bp-label" x="139" y="262" text-anchor="middle">3,60</text>
                <text class="bp-label" x="177" y="262" text-anchor="middle">3,60</text>
                <text class="bp-label" x="210" y="262" text-anchor="middle">2,00</text>
                <text class="bp-label" x="243" y="262" text-anchor="middle">3,60</text>
                <text class="bp-label" x="281" y="262" text-anchor="middle">3,60</text>
                <text class="bp-label" x="210" y="346" text-anchor="middle">MEDIAN</text>
                <text class="bp-label bp-label--brass" x="306" y="296">+12.40</text>
                <text class="bp-label" x="306" y="434">±0.00</text>
                <text class="bp-label" x="24" y="452">SEKSI 3 / CILES–PANIMBANG</text>
                <text class="bp-label" x="396" y="452" text-anchor="end">STA 12+450</text>
                <text class="bp-label" x="24" y="472">TIMBUNAN 1:2</text>
                <text class="bp-label" x="396" y="472" text-anchor="end">4 × 3,60 M</text>
                <text
                  class="bp-label"
                  x="72"
                  y="365"
                  text-anchor="middle"
                  transform="rotate(-90 72 365)"
                >
                  12.0 M
                </text>
                <text class="bp-label bp-label--brass" x="24" y="48">AR—01</text>
                <text class="bp-label" x="210" y="48" text-anchor="middle">
                  JALAN TOL SERANG–PANIMBANG
                </text>
              </g>

              <g class="bp-fade bp-target" style="animation-delay: 1.35s">
                <circle cx="210" cy="310" r="13" />
                <line x1="193" y1="310" x2="227" y2="310" />
                <line x1="210" y1="293" x2="210" y2="327" />
              </g>
            </svg>

            <div class="drawing-marks">
              <CornerMarks />
            </div>

            <span class="cross-x" :class="{ show: active }" :style="{ top: cross.top }"></span>
            <span class="cross-y" :class="{ show: active }" :style="{ left: cross.left }"></span>
            <span class="coord mono">STA {{ coord.x }} KM / EL {{ coord.y }} M</span>
          </div>

          <dl class="title-block">
            <div class="tb-cell tb-cell--wide">
              <dt>Project</dt>
              <dd>Serang–Panimbang Seksi 3</dd>
            </div>
            <div class="tb-cell">
              <dt>Sheet</dt>
              <dd>Project dossier / 01</dd>
            </div>
            <div class="tb-cell">
              <dt>Role</dt>
              <dd>Quantity Surveyor</dd>
            </div>
            <div class="tb-cell">
              <dt>Section</dt>
              <dd class="tb-value">33 km</dd>
            </div>
            <div class="tb-cell">
              <dt>Rev</dt>
              <dd>2026 / A</dd>
            </div>
          </dl>
        </aside>
      </div>

      <div class="metric-ledger">
        <div v-for="(item, i) in metrics" :key="item.label" class="metric" :style="{ '--i': i }">
          <span class="metric-value">
            <template v-if="item.static">{{ item.display }}</template>
            <AnimatedNumber
              v-else
              :value="item.value"
              :decimals="item.decimals || 0"
              :prefix="item.prefix || ''"
              :suffix="item.suffix || ''"
              :pad="item.pad || 0"
            />
          </span>
          <span class="metric-label mono">{{ item.label }}</span>
          <span class="metric-note">{{ item.note }}</span>
        </div>
      </div>

      <p class="metric-source mono">
        Data proyek: publikasi resmi CSCEC · Profil: LinkedIn
      </p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding-top: var(--nav-h);
  background:
    radial-gradient(ellipse 55% 45% at 8% 18%, rgba(197, 168, 128, 0.08), transparent 70%),
    radial-gradient(ellipse 60% 55% at 92% 80%, rgba(36, 40, 46, 0.55), transparent 70%);
  overflow: clip;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1px;
  background: linear-gradient(to bottom, transparent, var(--line), transparent);
  pointer-events: none;
}

.hero-inner {
  display: flex;
  flex-direction: column;
  min-height: calc(100svh - var(--nav-h));
  padding-top: clamp(1.75rem, 4vh, 3rem);
}

.hero-sheet {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.5625rem;
  letter-spacing: 0.2em;
  animation: fadeIn 1s var(--ease) both;
}

.hero-sheet span:nth-child(2) {
  color: var(--text-2);
}

.hero-main {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: clamp(2rem, 4.5vw, 4.5rem);
  align-items: center;
  flex: 1 1 auto;
  padding-block: clamp(2rem, 4.5vh, 4rem);
}

.hero-copy {
  grid-column: 1 / span 7;
  min-width: 0;
}

.hero-name {
  display: flex;
  flex-direction: column;
  font-size: clamp(3.2rem, 7.3vw, 7.3rem);
  font-weight: 600;
  line-height: 0.82;
  letter-spacing: -0.038em;
  text-transform: uppercase;
  color: var(--text);
  animation: riseIn 1s var(--ease) 0.05s both;
}

.name-line {
  display: block;
}

.name-line--second {
  display: flex;
  align-items: flex-start;
  gap: clamp(0.65rem, 1.4vw, 1.25rem);
}

.credential {
  flex: none;
  margin-top: clamp(0.35rem, 0.9vw, 0.85rem);
  padding: 0.4em 0.5em;
  border: 1px solid var(--brass);
  background: var(--brass-faint);
  color: var(--brass);
  font-size: clamp(0.5rem, 0.72vw, 0.68rem);
  font-weight: 500;
  letter-spacing: 0.16em;
  line-height: 1;
}

.hero-role {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: clamp(1.4rem, 3vh, 2rem);
  color: var(--text-2);
  font-size: 0.625rem;
  letter-spacing: 0.17em;
  animation: riseIn 0.9s var(--ease) 0.16s both;
}

.hero-role span {
  color: var(--brass);
}

.hero-headline {
  display: flex;
  flex-direction: column;
  margin-top: clamp(1.1rem, 2.5vh, 1.6rem);
  font-family: var(--font-serif);
  font-size: clamp(1.55rem, 2.8vw, 2.45rem);
  font-style: italic;
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -0.015em;
  color: var(--text);
  animation: riseIn 1s var(--ease) 0.24s both;
}

.hero-headline .serif {
  color: var(--brass);
}

.hero-summary {
  max-width: 54ch;
  margin-top: clamp(1.1rem, 2.4vh, 1.55rem);
  color: var(--text-2);
  font-size: clamp(0.9rem, 1.02vw, 1rem);
  line-height: 1.75;
  animation: riseIn 1s var(--ease) 0.32s both;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: clamp(1.5rem, 3.4vh, 2.2rem);
  animation: riseIn 1s var(--ease) 0.4s both;
}

.hero-linkedin {
  margin-top: 1.5rem;
  animation: riseIn 1s var(--ease) 0.48s both;
}

.drawing {
  position: relative;
  grid-column: 8 / span 5;
  min-width: 0;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--line-2);
  background:
    linear-gradient(158deg, rgba(43, 48, 55, 0.72), rgba(17, 19, 21, 0.55)),
    var(--bg-2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  animation: sheetIn 1.15s var(--ease) 0.3s both;
}

.drawing-head {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.9rem 1.15rem;
  border-bottom: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.5625rem;
}

.drawing-canvas {
  position: relative;
  flex: 1;
  min-height: 0;
  overflow: hidden;
  cursor: crosshair;
  background:
    linear-gradient(to right, rgba(243, 244, 246, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(243, 244, 246, 0.04) 1px, transparent 1px);
  background-size: 34px 34px;
}

.bp {
  width: 100%;
  height: 100%;
  min-height: 340px;
  padding: 1.15rem 1rem 0.45rem;
  color: rgba(209, 213, 219, 0.62);
  overflow: visible;
}

.bp line,
.bp path,
.bp rect,
.bp circle {
  fill: none;
  stroke: currentColor;
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
}

.bp-line {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: draw 1.5s var(--ease) forwards;
}

.bp-hatch {
  opacity: 0.45;
}

.bp-core {
  stroke-dasharray: 1;
  opacity: 0.9;
}

.bp-floors {
  animation: fadeIn 0.8s var(--ease) both;
}

.bp-floor {
  stroke: currentColor;
  stroke-width: 0.7;
  opacity: 0;
  animation: fadeIn 0.75s var(--ease) forwards;
  vector-effect: non-scaling-stroke;
}

.bp-mullion {
  opacity: 0;
  stroke-dasharray: 3 3;
}

.bp-fade {
  opacity: 0;
  animation: fadeIn 1s var(--ease) forwards;
}

.bp-brass {
  color: var(--brass);
  stroke: var(--brass);
}

.bp-dim {
  color: var(--brass);
  stroke: var(--brass);
  opacity: 0.55;
  stroke-width: 0.8;
}

.bp-label {
  fill: var(--muted);
  stroke: none;
  font-family: var(--font-mono);
  font-size: 7px;
  letter-spacing: 1px;
}

.bp-label--brass {
  fill: var(--brass);
}

.bp-target {
  color: var(--brass);
}

.bp-target circle,
.bp-target line {
  stroke: var(--brass);
  opacity: 0.7;
  stroke-width: 0.8;
}

.drawing-marks {
  position: absolute;
  inset: 14px;
  pointer-events: none;
  color: var(--brass);
  opacity: 0.55;
}

.cross-x,
.cross-y {
  position: absolute;
  pointer-events: none;
  background: var(--brass);
  opacity: 0;
  transition: opacity 0.25s var(--ease);
  z-index: 2;
}

.cross-x {
  left: 0;
  right: 0;
  height: 1px;
}

.cross-y {
  top: 0;
  bottom: 0;
  width: 1px;
}

.cross-x.show,
.cross-y.show {
  opacity: 0.55;
}

.coord {
  position: absolute;
  left: 1.15rem;
  bottom: 0.9rem;
  z-index: 2;
  color: var(--muted);
  font-size: 0.5rem;
  letter-spacing: 0.14em;
  background: rgba(17, 19, 21, 0.7);
  padding: 3px 6px;
}

.title-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid var(--line-2);
  margin: 0;
}

.tb-cell {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.62rem 1.15rem;
  border-bottom: 1px solid var(--line);
}

.tb-cell:nth-child(odd) {
  border-right: 1px solid var(--line);
}

.tb-cell--wide {
  grid-column: 1 / -1;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
}

.tb-cell dt {
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 0.5rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.tb-cell dd {
  margin: 0;
  color: var(--text);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.01em;
}

.tb-cell--wide dd {
  font-size: 0.72rem;
}

.tb-value {
  font-family: var(--font-mono);
  font-size: 0.68rem !important;
  color: var(--brass) !important;
  letter-spacing: 0.06em !important;
}

.metric-ledger {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 1px solid var(--line-2);
  animation: fadeIn 1s var(--ease) 0.7s both;
}

.metric {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 1.25rem 1.4rem 1.35rem;
  transition: background-color 0.4s var(--ease);
}

.metric::before {
  content: "";
  position: absolute;
  top: -1px;
  left: 1.4rem;
  width: 22px;
  height: 1px;
  background: var(--brass);
}

.metric:first-child {
  padding-left: 0;
}

.metric:first-child::before {
  left: 0;
}

.metric + .metric {
  border-left: 1px solid var(--line);
}

.metric:hover {
  background: var(--brass-faint);
}

.metric-value {
  font-family: var(--font-mono);
  font-size: clamp(1.25rem, 1.8vw, 1.7rem);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: 0.01em;
  color: var(--text);
  transition: color 0.35s var(--ease);
}

.metric:hover .metric-value {
  color: var(--brass);
}

.metric-label {
  color: var(--text-2);
  font-size: 0.5rem;
  letter-spacing: 0.16em;
}

.metric-note {
  color: var(--muted);
  font-size: 0.68rem;
  letter-spacing: 0.01em;
}

.metric-source {
  padding-top: 0.75rem;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.5rem;
  letter-spacing: 0.14em;
  text-align: right;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes riseIn {
  from {
    opacity: 0;
    transform: translateY(24px);
    filter: blur(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes sheetIn {
  from {
    opacity: 0;
    clip-path: inset(0 0 100% 0);
  }
  to {
    opacity: 1;
    clip-path: inset(0 0 0 0);
  }
}

@media (max-width: 1100px) {
  .hero-copy {
    grid-column: 1 / span 7;
  }

  .drawing {
    grid-column: 8 / span 5;
  }

  .bp {
    min-height: 300px;
  }

  .metric-note {
    display: none;
  }
}

@media (max-width: 900px) {
  .hero-main {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    align-items: start;
  }

  .hero-copy,
  .drawing {
    grid-column: 1 / -1;
  }

  .drawing {
    width: min(100%, 520px);
    justify-self: center;
  }

  .metric-ledger {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .metric {
    border-top: 1px solid var(--line);
  }

  .metric:nth-child(1),
  .metric:nth-child(2) {
    border-top: none;
  }

  .metric:nth-child(3),
  .metric:nth-child(4) {
    border-left: none;
  }

  .metric:nth-child(even) {
    border-left: 1px solid var(--line);
  }

  .metric:nth-child(3) {
    padding-left: 0;
  }

  .metric:nth-child(3)::before {
    left: 0;
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: calc(var(--nav-h) + 0.5rem);
  }

  .hero-inner {
    min-height: auto;
    padding-top: 1.25rem;
  }

  .hero-sheet span:nth-child(2) {
    display: none;
  }

  .hero-name {
    font-size: clamp(2.9rem, 15vw, 4.4rem);
  }

  .hero-main {
    padding-block: 2.25rem 2.5rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-actions .btn {
    width: 100%;
  }

  .metric {
    padding: 1.1rem 1rem 1.2rem;
  }

  .metric:first-child,
  .metric:nth-child(3) {
    padding-left: 0;
  }

  .metric:first-child::before,
  .metric:nth-child(3)::before {
    left: 0;
  }

  .metric-value {
    font-size: 1.2rem;
  }

  .title-block {
    grid-template-columns: 1fr;
  }

  .tb-cell:nth-child(odd) {
    border-right: none;
  }

  .bp {
    min-height: 280px;
  }
}
</style>
