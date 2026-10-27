<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const props = defineProps({
  value: { type: Number, required: true },
  decimals: { type: Number, default: 0 },
  prefix: { type: String, default: "" },
  suffix: { type: String, default: "" },
  pad: { type: Number, default: 0 },
  duration: { type: Number, default: 1500 },
});

const el = ref(null);
const display = ref(format(0));
const finalText = format(props.value);
let frame = 0;
let observer = null;

function format(raw) {
  if (props.pad) return String(Math.round(raw)).padStart(props.pad, "0");
  return new Intl.NumberFormat("id-ID", {
    minimumFractionDigits: props.decimals,
    maximumFractionDigits: props.decimals,
  }).format(raw);
}

function run() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    display.value = finalText;
    return;
  }

  const start = performance.now();
  const tick = (now) => {
    const t = Math.min(1, (now - start) / props.duration);
    const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    display.value = format(props.value * eased);
    if (t < 1) frame = requestAnimationFrame(tick);
  };
  frame = requestAnimationFrame(tick);
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        run();
        observer.disconnect();
      }
    },
    { threshold: 0.35 },
  );
  if (el.value) observer.observe(el.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
  cancelAnimationFrame(frame);
});
</script>

<template>
  <span ref="el" class="animated-number">
    <span aria-hidden="true">
      <span v-if="prefix" class="affix">{{ prefix }}</span>{{ display }}<span
        v-if="suffix"
        class="affix"
        >{{ suffix }}</span
      >
    </span>
    <span class="sr-only">{{ prefix }} {{ finalText }} {{ suffix }}</span>
  </span>
</template>

<style scoped>
.animated-number {
  font-variant-numeric: tabular-nums;
}

.affix {
  font-size: 0.62em;
  letter-spacing: 0.04em;
  color: var(--brass);
  margin: 0 0.12em;
  vertical-align: 0.28em;
}
</style>
