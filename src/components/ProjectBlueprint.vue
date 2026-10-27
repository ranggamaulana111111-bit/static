<script setup>
defineProps({
  variant: { type: String, default: "tower" },
});

const towerFloors = Array.from({ length: 15 }, (_, i) => 52 + i * 12);
const industrialFrames = [80, 120, 160, 200, 240, 280, 320];
const heritageTrees = [300, 330, 360].map((x, i) => ({ x, y: 192 + (i % 2) * 8 }));
</script>

<template>
  <svg
    class="project-bp"
    viewBox="0 0 400 260"
    aria-hidden="true"
    preserveAspectRatio="xMidYMid meet"
  >
    <template v-if="variant === 'highway'">
      <g class="bp-ground">
        <line x1="20" y1="215" x2="380" y2="215" />
        <line v-for="i in 16" :key="`hg-${i}`" :x1="20 + i * 22" y1="215" :x2="14 + i * 22" y2="222" />
      </g>
      <g class="bp-main">
        <path d="M40 215 L100 135 H300 L360 215" />
        <rect x="100" y="135" width="200" height="8" />
        <rect x="100" y="143" width="200" height="8" />
        <rect x="100" y="151" width="200" height="10" />
        <path d="M190 135 V120 H210 V135" />
        <line x1="100" y1="135" x2="100" y2="161" />
        <line x1="300" y1="135" x2="300" y2="161" />
      </g>
      <g class="bp-floor">
        <line x1="150" y1="135" x2="150" y2="161" />
        <line x1="250" y1="135" x2="250" y2="161" />
        <line x1="88" y1="170" x2="64" y2="208" />
        <line x1="78" y1="185" x2="52" y2="224" />
        <line x1="312" y1="170" x2="336" y2="208" />
        <line x1="322" y1="185" x2="348" y2="224" />
      </g>
      <g class="bp-dim">
        <line x1="100" y1="105" x2="300" y2="105" />
        <line x1="100" y1="99" x2="100" y2="111" />
        <line x1="150" y1="99" x2="150" y2="111" />
        <line x1="190" y1="99" x2="190" y2="111" />
        <line x1="210" y1="99" x2="210" y2="111" />
        <line x1="250" y1="99" x2="250" y2="111" />
        <line x1="300" y1="99" x2="300" y2="111" />
      </g>
      <g class="bp-label">
        <text x="125" y="98" text-anchor="middle">3,60</text>
        <text x="170" y="98" text-anchor="middle">3,60</text>
        <text x="200" y="98" text-anchor="middle">2,00</text>
        <text x="230" y="98" text-anchor="middle">3,60</text>
        <text x="275" y="98" text-anchor="middle">3,60</text>
        <text x="200" y="181" text-anchor="middle">MEDIAN</text>
        <text x="20" y="238">TIMBUNAN 1:2</text>
        <text x="380" y="238" text-anchor="end">+12.40</text>
        <text x="20" y="254">SEKSI 3 / CILES–PANIMBANG</text>
        <text x="380" y="254" text-anchor="end">33 KM</text>
      </g>
      <g class="bp-target">
        <circle cx="200" cy="145" r="10" />
        <line x1="186" y1="145" x2="214" y2="145" />
        <line x1="200" y1="131" x2="200" y2="159" />
      </g>
    </template>

    <template v-if="variant === 'tower'">
      <g class="bp-ground">
        <line x1="30" y1="230" x2="370" y2="230" />
        <line v-for="i in 14" :key="`g-${i}`" :x1="40 + i * 23" y1="230" :x2="34 + i * 23" y2="237" />
      </g>
      <g class="bp-main">
        <path d="M150 230V40H250V230" />
        <line x1="140" y1="40" x2="260" y2="40" />
        <line x1="150" y1="56" x2="250" y2="56" />
        <rect x="212" y="66" width="22" height="164" />
        <line
          v-for="(y, i) in towerFloors"
          :key="`tf-${i}`"
          class="bp-floor"
          x1="150"
          :y1="y"
          x2="250"
          :y2="y"
        />
        <line class="bp-floor" x1="176" y1="56" x2="176" y2="230" />
        <line class="bp-floor" x1="224" y1="56" x2="224" y2="230" />
      </g>
      <g class="bp-dim">
        <line x1="112" y1="40" x2="112" y2="230" />
        <line x1="106" y1="40" x2="118" y2="40" />
        <line x1="106" y1="230" x2="118" y2="230" />
        <line x1="150" y1="22" x2="250" y2="22" />
        <line x1="150" y1="16" x2="150" y2="28" />
        <line x1="250" y1="16" x2="250" y2="28" />
        <line x1="296" y1="56" x2="296" y2="230" />
        <line x1="290" y1="56" x2="302" y2="56" />
        <line x1="290" y1="230" x2="302" y2="230" />
      </g>
      <g class="bp-label">
        <text x="200" y="14" text-anchor="middle">42.500 M²</text>
        <text x="104" y="138" text-anchor="middle" transform="rotate(-90 104 138)">102.40 M</text>
        <text x="308" y="146" text-anchor="middle" transform="rotate(90 308 146)">28 F</text>
        <text x="30" y="248">SECTION / HIGH-RISE</text>
        <text x="370" y="248" text-anchor="end">+102.40</text>
      </g>
      <g class="bp-target">
        <circle cx="200" cy="142" r="10" />
        <line x1="186" y1="142" x2="214" y2="142" />
        <line x1="200" y1="128" x2="200" y2="156" />
      </g>
    </template>

    <template v-if="variant === 'industrial'">
      <g class="bp-ground">
        <line x1="30" y1="220" x2="370" y2="220" />
        <line v-for="i in 14" :key="`ig-${i}`" :x1="40 + i * 23" y1="220" :x2="34 + i * 23" y2="227" />
      </g>
      <g class="bp-main">
        <path d="M60 104 200 68 340 104" />
        <line x1="60" y1="104" x2="340" y2="104" />
        <line x1="60" y1="220" x2="340" y2="220" />
        <line
          v-for="x in industrialFrames"
          :key="`if-${x}`"
          class="bp-floor"
          :x1="x"
          y1="90"
          :x2="x"
          y2="220"
        />
        <line class="bp-floor" x1="80" y1="118" x2="320" y2="118" />
        <line class="bp-floor" x1="80" y1="186" x2="320" y2="186" />
        <rect x="96" y="150" width="36" height="70" />
        <rect x="272" y="150" width="30" height="70" />
        <line class="bp-dash" x1="30" y1="68" x2="370" y2="68" />
      </g>
      <g class="bp-dim">
        <line x1="60" y1="238" x2="340" y2="238" />
        <line x1="60" y1="232" x2="60" y2="244" />
        <line x1="340" y1="232" x2="340" y2="244" />
        <line x1="40" y1="104" x2="40" y2="220" />
        <line x1="34" y1="104" x2="46" y2="104" />
        <line x1="34" y1="220" x2="46" y2="220" />
      </g>
      <g class="bp-label">
        <text x="200" y="254" text-anchor="middle">65.000 M²</text>
        <text x="30" y="86">RIGID PAVEMENT</text>
        <text x="370" y="254" text-anchor="end">18 PAKET</text>
        <text x="200" y="60" text-anchor="middle">STRUKTUR BAJA BERAT</text>
      </g>
      <g class="bp-target">
        <circle cx="200" cy="150" r="10" />
        <line x1="186" y1="150" x2="214" y2="150" />
        <line x1="200" y1="136" x2="200" y2="164" />
      </g>
    </template>

    <template v-if="variant === 'heritage'">
      <g class="bp-ground">
        <line x1="30" y1="220" x2="370" y2="220" />
        <line v-for="i in 14" :key="`hg-${i}`" :x1="40 + i * 23" y1="220" :x2="34 + i * 23" y2="227" />
      </g>
      <g class="bp-main">
        <path d="M56 122 148 78 240 122" />
        <line x1="56" y1="122" x2="240" y2="122" />
        <line x1="56" y1="220" x2="240" y2="220" />
        <line x1="56" y1="122" x2="56" y2="220" />
        <line x1="240" y1="122" x2="240" y2="220" />
        <rect x="106" y="150" width="26" height="70" />
        <rect x="162" y="150" width="26" height="70" />
        <rect x="212" y="162" width="26" height="58" />
        <path d="M240 164H334V220H240" />
        <line x1="240" y1="164" x2="334" y2="164" />
        <line x1="262" y1="164" x2="262" y2="220" />
        <line x1="290" y1="164" x2="290" y2="220" />
        <line x1="318" y1="164" x2="318" y2="220" />
        <line class="bp-floor" x1="56" y1="138" x2="240" y2="138" />
        <line class="bp-floor" x1="146" y1="84" x2="146" y2="122" />
      </g>
      <g class="bp-dim">
        <line x1="56" y1="238" x2="334" y2="238" />
        <line x1="56" y1="232" x2="56" y2="244" />
        <line x1="334" y1="232" x2="334" y2="244" />
        <line x1="40" y1="78" x2="40" y2="220" />
        <line x1="34" y1="78" x2="46" y2="78" />
        <line x1="34" y1="220" x2="46" y2="220" />
        <line x1="348" y1="164" x2="348" y2="220" />
        <line x1="342" y1="164" x2="354" y2="164" />
        <line x1="342" y1="220" x2="354" y2="220" />
      </g>
      <g class="bp-trees">
        <g v-for="(tree, i) in heritageTrees" :key="`tree-${i}`">
          <line :x1="tree.x" :y1="tree.y" :x2="tree.x" y2="220" />
          <circle :cx="tree.x" :cy="tree.y - 8" r="10" />
          <line :x1="tree.x - 7" :y1="tree.y - 8" :x2="tree.x + 7" :y2="tree.y - 8" />
        </g>
      </g>
      <g class="bp-label">
        <text x="200" y="254" text-anchor="middle">FINISHING PREMIUM / LANDSCAPE</text>
        <text x="30" y="66">CLUBHOUSE</text>
        <text x="370" y="140" text-anchor="end">AHSP HIGH-END</text>
        <text x="30" y="248">MARBLE / EXOTIC TIMBER</text>
      </g>
      <g class="bp-target">
        <circle cx="196" cy="150" r="10" />
        <line x1="182" y1="150" x2="210" y2="150" />
        <line x1="196" y1="136" x2="196" y2="164" />
      </g>
    </template>
  </svg>
</template>

<style scoped>
.project-bp {
  width: 100%;
  height: 100%;
  color: rgba(209, 213, 219, 0.55);
}

.project-bp line,
.project-bp path,
.project-bp rect,
.project-bp circle {
  fill: none;
  stroke: currentColor;
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
}

.bp-main {
  color: rgba(243, 244, 246, 0.72);
}

.bp-main line,
.bp-main path,
.bp-main rect {
  stroke: currentColor;
}

.bp-floor {
  opacity: 0.45;
  stroke-width: 0.7;
}

.bp-dash {
  stroke-dasharray: 4 5;
  opacity: 0.5;
}

.bp-dim {
  color: var(--brass);
  opacity: 0.55;
}

.bp-dim line {
  stroke: var(--brass);
  stroke-width: 0.8;
}

.bp-label text {
  fill: var(--muted);
  stroke: none;
  font-family: var(--font-mono);
  font-size: 7px;
  letter-spacing: 1px;
}

.bp-target {
  color: var(--brass);
}

.bp-target circle,
.bp-target line {
  stroke: var(--brass);
  opacity: 0.65;
  stroke-width: 0.8;
}

.bp-trees {
  color: rgba(197, 168, 128, 0.42);
}

.bp-trees line,
.bp-trees circle {
  stroke: currentColor;
  stroke-width: 0.8;
}
</style>
