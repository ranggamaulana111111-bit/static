<script setup>
import { ref } from "vue";
import { contactInterests, profile } from "../data/profile";
import CornerMarks from "./CornerMarks.vue";

defineEmits(["open-cv"]);

const name = ref("");
const org = ref("");
const interest = ref(contactInterests[0]);
const note = ref("");
const status = ref("");
const copied = ref(false);
const manualBrief = ref("");
let resetTimer = 0;

function buildBrief() {
  return [
    `KEPADA: ${profile.fullName}`,
    `DARI: ${name.value.trim() || "—"}${org.value.trim() ? ` — ${org.value.trim()}` : ""}`,
    `PERIHAL: ${interest.value}`,
    "",
    note.value.trim() || "(Tanpa catatan tambahan)",
    "",
    "— Dikirim melalui portofolio web",
  ].join("\n");
}

function fallbackCopy(text) {
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.top = "-1000px";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  const ok = document.execCommand("copy");
  area.remove();
  if (!ok) throw new Error("copy-failed");
}

async function submitBrief() {
  const brief = buildBrief();
  manualBrief.value = "";
  window.open(profile.linkedin, "_blank", "noopener,noreferrer");

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(brief);
    } else {
      fallbackCopy(brief);
    }
    copied.value = true;
    status.value = "Brief disalin. LinkedIn dibuka di tab baru — tempelkan pada pesan Anda.";
    window.clearTimeout(resetTimer);
    resetTimer = window.setTimeout(() => {
      copied.value = false;
      status.value = "";
    }, 6000);
  } catch {
    manualBrief.value = brief;
    status.value = "LinkedIn dibuka. Penyalinan otomatis gagal — salin brief di bawah secara manual.";
  }
}
</script>

<template>
  <section id="kontak" class="section section--alt contact">
    <div class="container">
      <header class="section-head" v-reveal>
        <div class="section-marker">
          <span class="num">06</span>
          <span class="mono">// Kontak</span>
        </div>
        <h2>Mari bicara <em>angka yang bisa dipertanggungjawabkan.</em></h2>
        <p class="section-lead">
          Kanal utama adalah LinkedIn. Untuk brief awal, susun pesan singkat di samping — isinya
          akan disalin agar dapat langsung Anda kirim.
        </p>
      </header>

      <div class="contact-grid">
        <div class="contact-main" v-reveal="60">
          <div class="availability">
            <span class="status-dot" aria-hidden="true"></span>
            <span class="mono">Quantity Surveyor · CSCEC · Banten</span>
          </div>

          <p class="contact-statement">
            Untuk pekerjaan yang butuh <span class="serif">kepastian volume.</span>
          </p>

          <p class="contact-copy">
            Terbuka untuk diskusi teknis seputar Quantity Surveying, pengukuran, kontrol biaya,
            dan project control melalui LinkedIn.
          </p>

          <ul class="interests">
            <li v-for="item in contactInterests" :key="item">
              <span class="tick" aria-hidden="true"></span>
              <span>{{ item }}</span>
            </li>
          </ul>

          <div class="contact-actions">
            <a
              class="btn btn--brass"
              :href="profile.linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buka LinkedIn
              <svg viewBox="0 0 14 14" aria-hidden="true">
                <path d="M3 11 11 3M5 3h6v6" fill="none" stroke="currentColor" stroke-width="1.2" />
              </svg>
            </a>
            <button class="btn btn--ghost" type="button" @click="$emit('open-cv')">
              Lihat CV
            </button>
          </div>

          <a
            class="channel"
            :href="profile.linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="mono channel-label">Primary channel</span>
            <span class="channel-name">LinkedIn / Aldi Rifaldi</span>
            <span class="mono channel-handle">{{ profile.linkedinLabel }}</span>
          </a>
        </div>

        <aside class="brief" v-reveal="150">
          <CornerMarks />
          <form @submit.prevent="submitBrief">
            <div class="brief-head">
              <span class="mono">Inquiry brief</span>
              <span class="mono brief-ref">AR—INQ</span>
            </div>

            <div class="field">
              <label for="brief-name">Nama</label>
              <input
                id="brief-name"
                v-model="name"
                type="text"
                name="name"
                autocomplete="name"
                placeholder="Nama Anda"
                required
              />
            </div>

            <div class="field">
              <label for="brief-org">Organisasi</label>
              <input
                id="brief-org"
                v-model="org"
                type="text"
                name="organization"
                autocomplete="organization"
                placeholder="Perusahaan / instansi"
              />
            </div>

            <div class="field">
              <label for="brief-interest">Kebutuhan</label>
              <select id="brief-interest" v-model="interest" name="interest">
                <option v-for="item in contactInterests" :key="item" :value="item">{{ item }}</option>
              </select>
            </div>

            <div class="field">
              <label for="brief-note">Catatan</label>
              <textarea
                id="brief-note"
                v-model="note"
                name="note"
                rows="3"
                placeholder="Lingkup, lokasi, atau timeline singkat"
              ></textarea>
            </div>

            <button class="btn btn--brass brief-submit" type="submit">
              {{ copied ? "Brief disalin" : "Salin Brief & Buka LinkedIn" }}
              <svg viewBox="0 0 14 14" aria-hidden="true">
                <path d="M3 11 11 3M5 3h6v6" fill="none" stroke="currentColor" stroke-width="1.2" />
              </svg>
            </button>

            <div v-if="manualBrief" class="manual">
              <label for="brief-manual">Brief untuk disalin manual</label>
              <textarea id="brief-manual" readonly :value="manualBrief" rows="5"></textarea>
            </div>

            <p class="brief-status mono" role="status" aria-live="polite">{{ status }}</p>
            <p class="brief-note">
              Form ini tidak mengirim data ke server. Brief disalin ke clipboard, lalu LinkedIn
              dibuka di tab baru.
            </p>
          </form>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background:
    radial-gradient(ellipse 50% 60% at 90% 100%, rgba(197, 168, 128, 0.09), transparent 70%);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: clamp(2rem, 5vw, 5rem);
  align-items: start;
}

.contact-main {
  grid-column: 1 / span 7;
  min-width: 0;
}

.availability {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--brass);
  font-size: 0.5rem;
}

.status-dot {
  position: relative;
  width: 6px;
  height: 6px;
  background: var(--brass);
  border-radius: 50%;
}

.status-dot::after {
  content: "";
  position: absolute;
  inset: -3px;
  border: 1px solid var(--brass);
  border-radius: 50%;
  opacity: 0.6;
  animation: pulse 2.6s var(--ease-soft) infinite;
}

.contact-statement {
  margin-top: 1.4rem;
  font-size: clamp(2rem, 4.4vw, 3.8rem);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.04em;
  color: var(--text);
  max-width: 18ch;
  text-wrap: balance;
}

.contact-statement .serif {
  color: var(--brass);
  font-weight: 500;
}

.contact-copy {
  margin-top: clamp(1.2rem, 2.4vw, 1.8rem);
  max-width: 50ch;
  color: var(--text-2);
  font-size: 0.95rem;
  line-height: 1.8;
}

.interests {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.55rem 1.5rem;
  margin-top: 1.6rem;
  max-width: 42rem;
}

.interests li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--text-2);
  font-size: 0.8rem;
}

.tick {
  position: relative;
  flex: none;
  width: 9px;
  height: 9px;
  border: 1px solid var(--line-2);
}

.tick::after {
  content: "";
  position: absolute;
  left: 2px;
  top: 2px;
  width: 3px;
  height: 3px;
  background: var(--brass);
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: clamp(1.6rem, 3vw, 2.2rem);
}

.channel {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.5rem 1.25rem;
  align-items: baseline;
  margin-top: 2rem;
  padding: 1rem 0;
  border-top: 1px solid var(--line-2);
  border-bottom: 1px solid var(--line);
  color: var(--text);
  transition: background-color 0.35s var(--ease);
}

.channel:hover {
  background: var(--brass-faint);
}

.channel-label {
  grid-row: 1 / span 2;
  color: var(--muted);
  font-size: 0.48rem;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  letter-spacing: 0.16em;
}

.channel-name {
  font-size: 0.92rem;
  font-weight: 500;
}

.channel-handle {
  grid-column: 2;
  color: var(--brass);
  font-size: 0.55rem;
  letter-spacing: 0.04em;
  text-transform: none;
}

.brief {
  position: relative;
  grid-column: 8 / span 5;
  min-width: 0;
  border: 1px solid var(--line-2);
  background: linear-gradient(160deg, rgba(36, 40, 46, 0.74), rgba(17, 19, 21, 0.42));
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 1.35rem 1.4rem 1.5rem;
}

.brief-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid var(--line-2);
  color: var(--muted);
  font-size: 0.5rem;
}

.brief-ref {
  color: var(--brass);
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 1rem;
}

.field label,
.manual label {
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 0.48rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.field input,
.field select,
.field textarea,
.manual textarea {
  width: 100%;
  padding: 0.7rem 0.8rem;
  border: 1px solid var(--line);
  background: rgba(17, 19, 21, 0.55);
  color: var(--text);
  font-family: var(--font-sans);
  font-size: 0.82rem;
  line-height: 1.5;
  border-radius: 0;
  transition:
    border-color 0.3s var(--ease),
    background-color 0.3s var(--ease);
  appearance: none;
}

.field select {
  background-image:
    linear-gradient(45deg, transparent 50%, var(--brass) 50%),
    linear-gradient(135deg, var(--brass) 50%, transparent 50%);
  background-position:
    calc(100% - 16px) calc(50% - 2px),
    calc(100% - 11px) calc(50% - 2px);
  background-size: 5px 5px;
  background-repeat: no-repeat;
  cursor: pointer;
}

.field textarea,
.manual textarea {
  resize: vertical;
  min-height: 84px;
}

.field input::placeholder,
.field textarea::placeholder {
  color: #5d646e;
}

.field input:hover,
.field select:hover,
.field textarea:hover {
  border-color: var(--line-2);
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--brass);
  background: rgba(17, 19, 21, 0.8);
}

.brief-submit {
  width: 100%;
  margin-top: 1.25rem;
}

.manual {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 1rem;
}

.brief-status {
  min-height: 1.1rem;
  margin-top: 0.8rem;
  color: var(--brass);
  font-size: 0.48rem;
  letter-spacing: 0.06em;
  line-height: 1.6;
}

.brief-note {
  margin-top: 0.35rem;
  color: var(--muted);
  font-size: 0.66rem;
  line-height: 1.6;
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 0.7;
  }
  70% {
    transform: scale(1.7);
    opacity: 0;
  }
  100% {
    transform: scale(1.7);
    opacity: 0;
  }
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .contact-main,
  .brief {
    grid-column: 1 / -1;
  }

  .brief {
    max-width: 560px;
  }
}

@media (max-width: 560px) {
  .contact-statement {
    font-size: clamp(1.85rem, 9vw, 2.6rem);
  }

  .interests {
    grid-template-columns: 1fr;
  }

  .contact-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .contact-actions .btn {
    width: 100%;
  }

  .channel {
    grid-template-columns: 1fr;
    gap: 0.3rem;
  }

  .channel-label {
    grid-row: auto;
    writing-mode: initial;
    transform: none;
  }

  .channel-handle {
    grid-column: 1;
  }
}
</style>
