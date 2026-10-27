<script setup>
import { profile } from "../data/profile";

defineEmits(["open-cv"]);
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <span class="footer-mark mono" aria-hidden="true">AR</span>
          <div>
            <p class="footer-name">{{ profile.fullName }}</p>
            <p class="footer-role mono">Quantity Surveyor / CSCEC</p>
          </div>
        </div>

        <div class="footer-actions">
          <a
            class="link-line"
            :href="profile.linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <svg viewBox="0 0 14 14" aria-hidden="true">
              <path d="M3 11 11 3M5 3h6v6" fill="none" stroke="currentColor" stroke-width="1.2" />
            </svg>
          </a>
          <button class="link-line" type="button" @click="$emit('open-cv')">
            CV
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
      </div>

      <div class="titleblock">
        <div class="tb">
          <span class="mono">Project</span>
          <span>Serang–Panimbang Seksi 3</span>
        </div>
        <div class="tb">
          <span class="mono">Sheet</span>
          <span>01 of 01</span>
        </div>
        <div class="tb">
          <span class="mono">Revision</span>
          <span>2026 / A</span>
        </div>
        <div class="tb">
          <span class="mono">Status</span>
          <span class="tb-open">Aktif di CSCEC</span>
        </div>
      </div>

      <div class="footer-bottom">
        <span class="mono">© 2026 Aldi Rifaldi, S.T.</span>
        <span class="footer-note mono">
          Profil: LinkedIn · Proyek: CSCEC / KPPIP
        </span>
        <a class="back-top mono" href="#top">
          Kembali ke atas
          <svg viewBox="0 0 14 14" aria-hidden="true">
            <path d="M7 12V2m0 0L3 6m4-4 4 4" fill="none" stroke="currentColor" stroke-width="1.2" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  padding: clamp(3rem, 6vw, 4.5rem) 0 1.5rem;
  border-top: 1px solid var(--line-2);
  background: #0d0f10;
}

.footer-top {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  padding-bottom: clamp(2rem, 4vw, 3rem);
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.footer-mark {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border: 1px solid var(--brass);
  background: var(--brass-faint);
  color: var(--brass);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
}

.footer-name {
  color: var(--text);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.footer-role {
  margin-top: 0.2rem;
  color: var(--muted);
  font-size: 0.48rem;
  letter-spacing: 0.16em;
}

.footer-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-top: 0.5rem;
}

.footer-actions .link-line {
  font-size: 0.55rem;
}

.titleblock {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 1px solid var(--line-2);
  border-bottom: 1px solid var(--line);
}

.tb {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 1.2rem;
  border-right: 1px solid var(--line);
}

.tb:first-child {
  padding-left: 0;
}

.tb:last-child {
  border-right: none;
}

.tb .mono {
  color: var(--muted);
  font-size: 0.46rem;
}

.tb > span:last-child {
  color: var(--text-2);
  font-size: 0.74rem;
  line-height: 1.4;
}

.tb-open {
  color: var(--brass) !important;
}

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem 1.5rem;
  padding-top: 1.5rem;
  color: var(--muted);
  font-size: 0.46rem;
}

.footer-note {
  color: var(--muted);
  font-size: 0.46rem;
  letter-spacing: 0.08em;
}

.back-top {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--text-2);
  font-size: 0.48rem;
  transition: color 0.3s var(--ease);
}

.back-top svg {
  width: 11px;
  height: 11px;
  transition: transform 0.3s var(--ease);
}

.back-top:hover {
  color: var(--brass);
}

.back-top:hover svg {
  transform: translateY(-2px);
}

@media (max-width: 760px) {
  .titleblock {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .tb {
    padding: 0.85rem 0.9rem;
  }

  .tb:first-child {
    padding-left: 0;
  }

  .tb:nth-child(2) {
    border-right: none;
  }

  .tb:nth-child(3) {
    border-top: 1px solid var(--line);
  }

  .tb:nth-child(4) {
    border-top: 1px solid var(--line);
  }
}

@media (max-width: 520px) {
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-note {
    order: 3;
  }
}
</style>
