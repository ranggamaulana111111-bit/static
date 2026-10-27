<script setup>
import { ref } from "vue";
import SiteNav from "./components/SiteNav.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import CompetenciesSection from "./components/CompetenciesSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import BoqSection from "./components/BoqSection.vue";
import TimelineSection from "./components/TimelineSection.vue";
import ContactSection from "./components/ContactSection.vue";
import SiteFooter from "./components/SiteFooter.vue";
import CvOverlay from "./components/CvOverlay.vue";

const cvOpen = ref(false);

function openCv() {
  cvOpen.value = true;
}

function closeCv() {
  cvOpen.value = false;
}
</script>

<template>
  <a class="skip-link" href="#main">Lewati ke konten</a>

  <div class="site-shell">
    <SiteNav @open-cv="openCv" />

    <main id="main" tabindex="-1">
      <HeroSection @open-cv="openCv" />
      <AboutSection />
      <CompetenciesSection />
      <ProjectsSection />
      <BoqSection />
      <TimelineSection @open-cv="openCv" />
      <ContactSection @open-cv="openCv" />
    </main>

    <SiteFooter @open-cv="openCv" />
  </div>

  <CvOverlay v-if="cvOpen" @close="closeCv" />
</template>
