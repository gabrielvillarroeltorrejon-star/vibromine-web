<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { companyInfo, keyStats } from '../data/vibromineData'

const activePhotoIndex = ref(0)
let slideTimer = null

function selectPhoto(idx) {
  activePhotoIndex.value = idx
}

onMounted(() => {
  slideTimer = setInterval(() => {
    activePhotoIndex.value = (activePhotoIndex.value + 1) % companyInfo.heroPhotos.length
  }, 5000)
})

onUnmounted(() => {
  if (slideTimer) clearInterval(slideTimer)
})
</script>

<template>
  <section id="inicio">
    <!-- Hero Principal Inspirado en Treppco -->
    <div class="vm-hero">
      <div class="vm-hero-grid-bg"></div>
      <div class="container position-relative z-1">
        <div class="row align-items-center g-5">
          <!-- Columna Izquierda: Propuesta de Valor Corporativa -->
          <div class="col-lg-7">
            <div class="vm-hero-badge mb-3">
              <i class="fa-solid fa-wave-square"></i>
              <span>Antofagasta · +24 Años Respaldando la Gran Minería e Industria</span>
            </div>

            <h1 class="vm-hero-title">
              Ingeniería en
              <span class="vm-text-gradient">Mantenimiento Sintomático</span>
              y Confiabilidad Operacional
            </h1>

            <p class="lead text-white-50 mb-4" style="max-width: 630px; font-size: 1.12rem;">
              En <strong class="text-white">VIBROMINE (SKM - Symptomatic Keen Maintenance)</strong>
              maximizamos la disponibilidad de sus equipos y maquinarias críticas en faena mediante
              diagnóstico predictivo, alineamiento láser, balanceo in-situ y ensayos no destructivos
              bajo estándares internacionales <strong class="text-info">ISO 18436-2</strong> y <strong class="text-warning">ASNT</strong>.
            </p>

            <!-- Puntos Clave de Confianza -->
            <div class="row g-2 mb-4 text-white-75 small">
              <div class="col-sm-6 d-flex align-items-center gap-2">
                <i class="fa-solid fa-circle-check text-info"></i>
                <span>Atención directa en Faenas del Norte Grande</span>
              </div>
              <div class="col-sm-6 d-flex align-items-center gap-2">
                <i class="fa-solid fa-circle-check text-info"></i>
                <span>Intervenciones In-Situ sin desmontaje invasivo</span>
              </div>
              <div class="col-sm-6 d-flex align-items-center gap-2">
                <i class="fa-solid fa-circle-check text-info"></i>
                <span>Especialistas certificados Categoría II</span>
              </div>
              <div class="col-sm-6 d-flex align-items-center gap-2">
                <i class="fa-solid fa-circle-check text-info"></i>
                <span>+1.600 servicios ejecutados con éxito</span>
              </div>
            </div>

            <!-- Botones de Acción (CTA) -->
            <div class="d-flex flex-wrap gap-3 pt-2">
              <a href="#cotizar" class="btn btn-vm-orange btn-lg d-inline-flex align-items-center gap-2">
                <i class="fa-solid fa-file-signature"></i>
                <span>Cotizar Servicio en Faena</span>
              </a>
              <a href="#servicios" class="btn btn-vm-outline-light btn-lg d-inline-flex align-items-center gap-2">
                <i class="fa-solid fa-layer-group text-info"></i>
                <span>Explorar las 8 Especialidades</span>
              </a>
            </div>
          </div>

          <!-- Columna Derecha: Showcase Fotográfico Real en Faena -->
          <div class="col-lg-5">
            <div class="vm-hero-showcase">
              <div class="position-relative">
                <img
                  :src="companyInfo.heroPhotos[activePhotoIndex].src"
                  :alt="companyInfo.heroPhotos[activePhotoIndex].caption"
                  class="vm-hero-main-img"
                />
                <div
                  class="position-absolute top-0 start-0 m-3 px-3 py-1 rounded-pill fw-bold small"
                  style="background: rgba(5, 12, 23, 0.85); color: #48cae4; border: 1px solid rgba(0, 180, 216, 0.45);"
                >
                  <i class="fa-solid fa-camera me-1"></i>
                  Registro Real en Terreno · {{ companyInfo.heroPhotos[activePhotoIndex].tag }}
                </div>
                <div
                  class="position-absolute bottom-0 inset-x-0 w-100 p-3"
                  style="background: linear-gradient(to top, rgba(5, 12, 23, 0.95) 0%, rgba(5, 12, 23, 0.6) 70%, transparent 100%);"
                >
                  <p class="mb-2 fw-bold text-white small">
                    <i class="fa-solid fa-helmet-safety text-warning me-2"></i>
                    {{ companyInfo.heroPhotos[activePhotoIndex].caption }}
                  </p>
                  <div class="d-flex align-items-center gap-2">
                    <img
                      v-for="(photo, idx) in companyInfo.heroPhotos"
                      :key="idx"
                      :src="photo.src"
                      :alt="photo.caption"
                      class="vm-hero-thumb"
                      :class="{ active: idx === activePhotoIndex }"
                      @click="selectPhoto(idx)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Barra Flotante de Métricas Clave -->
    <div class="container vm-stats-bar mb-5">
      <div class="row g-4">
        <div v-for="(stat, index) in keyStats" :key="index" class="col-sm-6 col-xl-3">
          <div class="vm-stat-card">
            <div class="d-flex justify-content-between align-items-start mb-3">
              <div>
                <span class="vm-stat-number">{{ stat.value }}</span>
                <span class="ms-1 fw-bold text-info text-uppercase small">{{ stat.unit }}</span>
              </div>
              <div
                class="rounded-3 d-flex align-items-center justify-content-center"
                style="width: 44px; height: 44px; background: rgba(0, 180, 216, 0.1); color: #0096c7;"
              >
                <i :class="[stat.icon, 'fs-5']"></i>
              </div>
            </div>
            <h3 class="h6 fw-bold text-dark mb-1">{{ stat.label }}</h3>
            <p class="text-secondary small mb-0">{{ stat.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
