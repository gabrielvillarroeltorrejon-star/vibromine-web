<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { companyInfo, keyStats } from '../data/vibromineData'

const activePhotoIndex = ref(0)
let slideTimer = null

function selectPhoto(idx) {
  activePhotoIndex.value = idx
}

function prevPhoto() {
  activePhotoIndex.value =
    (activePhotoIndex.value - 1 + companyInfo.heroPhotos.length) % companyInfo.heroPhotos.length
}

function nextPhoto() {
  activePhotoIndex.value = (activePhotoIndex.value + 1) % companyInfo.heroPhotos.length
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
    <!-- Hero Principal con la Identidad Azul Rey y Rojo Sintomático de VIBROMINE -->
    <div class="vm-hero">
      <div class="vm-hero-grid-bg"></div>
      <div class="container position-relative z-1">
        <div class="row align-items-center g-5">
          <!-- Columna Izquierda: Propuesta de Valor Corporativa -->
          <div class="col-lg-7">
            <div class="vm-hero-badge mb-3">
              <i class="fa-solid fa-wave-square"></i>
              <span>SKM · Symptomatic Keen Maintenance · Antofagasta</span>
            </div>

            <h1 class="vm-hero-title">
              <span class="d-block">Servicio de</span>
              <span class="vm-text-gradient">Mantenimiento Sintomático</span>
              <span class="d-block">de Equipos y Maquinarias</span>
            </h1>

            <p class="lead text-white mb-4" style="max-width: 630px; font-size: 1.12rem;">
              En <strong>VIBROMINE</strong> respaldamos la continuidad operativa y confiabilidad
              de la Gran Minería e Industria con más de <strong>24 años de experiencia</strong>.
              Especialistas en análisis de vibraciones, balanceo dinámico in-situ, alineamiento láser y ensayos no
              destructivos bajo normas <span class="badge bg-vm-red fw-bold">ISO 18436-2</span> y
              <span class="badge bg-vm-red fw-bold">ASNT SNT-TC-1A</span>.
            </p>

            <!-- Puntos Clave de Confianza -->
            <div class="row g-2 mb-4 text-white small fw-semibold">
              <div class="col-sm-6 d-flex align-items-center gap-2">
                <i class="fa-solid fa-circle-check text-white"></i>
                <span>Atención directa en Faenas del Norte Grande</span>
              </div>
              <div class="col-sm-6 d-flex align-items-center gap-2">
                <i class="fa-solid fa-circle-check text-white"></i>
                <span>Intervenciones In-Situ sin desmontaje invasivo</span>
              </div>
              <div class="col-sm-6 d-flex align-items-center gap-2">
                <i class="fa-solid fa-circle-check text-white"></i>
                <span>Analistas certificados Categoría II</span>
              </div>
              <div class="col-sm-6 d-flex align-items-center gap-2">
                <i class="fa-solid fa-circle-check text-white"></i>
                <span>+1.600 servicios ejecutados en los últimos 10 años</span>
              </div>
            </div>

            <!-- Botones de Acción (CTA) -->
            <div class="d-flex flex-wrap gap-3 pt-2">
              <a href="#cotizar" class="btn btn-vm-red btn-lg d-inline-flex align-items-center gap-2">
                <i class="fa-solid fa-file-signature"></i>
                <span>Cotizar Servicio en Faena</span>
              </a>
              <a href="#servicios" class="btn btn-vm-outline-light btn-lg d-inline-flex align-items-center gap-2">
                <i class="fa-solid fa-layer-group text-vm-blue"></i>
                <span>Explorar Especialidades</span>
              </a>
            </div>
          </div>

          <!-- Columna Derecha: Showcase Fotográfico Real en Faena (8 Servicios) -->
          <div class="col-lg-5">
            <div class="vm-hero-showcase">
              <div class="position-relative overflow-hidden">
                <img
                  :src="companyInfo.heroPhotos[activePhotoIndex].src"
                  :alt="companyInfo.heroPhotos[activePhotoIndex].caption"
                  class="vm-hero-main-img"
                />
                <!-- Sello superior -->
                <div
                  class="position-absolute top-0 start-0 m-3 px-3 py-1 rounded-pill fw-bold small"
                  style="background-color: #d91018; color: #ffffff; border: 1.5px solid #ffffff;"
                >
                  <i class="fa-solid fa-camera text-white me-1"></i>
                  Registro Real en Terreno · {{ companyInfo.heroPhotos[activePhotoIndex].tag }}
                </div>

                <!-- Contador de fotografías -->
                <div
                  class="position-absolute top-0 end-0 m-3 px-2 py-1 rounded-pill fw-bold small font-mono-tech"
                  style="background-color: #000c8a; color: #ffffff; border: 1.5px solid #ffffff; font-size: 0.75rem;"
                >
                  {{ activePhotoIndex + 1 }} / {{ companyInfo.heroPhotos.length }}
                </div>

                <!-- Botones Anterior / Siguiente -->
                <button
                  type="button"
                  class="vm-hero-nav-btn vm-hero-nav-prev"
                  aria-label="Foto anterior"
                  @click="prevPhoto"
                >
                  <i class="fa-solid fa-chevron-left"></i>
                </button>
                <button
                  type="button"
                  class="vm-hero-nav-btn vm-hero-nav-next"
                  aria-label="Foto siguiente"
                  @click="nextPhoto"
                >
                  <i class="fa-solid fa-chevron-right"></i>
                </button>
              </div>

              <!-- Pie de foto interactivo con las 8 miniaturas (1 por servicio) -->
              <div
                class="w-100 p-3"
                style="background-color: #000c8a; border-top: 3px solid #d91018;"
              >
                <p class="mb-2 fw-bold text-white small d-flex align-items-center">
                  <i class="fa-solid fa-helmet-safety text-white me-2 flex-shrink-0"></i>
                  <span class="text-truncate">{{ companyInfo.heroPhotos[activePhotoIndex].caption }}</span>
                </p>
                <div class="vm-hero-thumb-grid">
                  <img
                    v-for="(photo, idx) in companyInfo.heroPhotos"
                    :key="idx"
                    :src="photo.src"
                    :alt="photo.caption"
                    :title="photo.caption"
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

    <!-- Barra Flotante de Métricas Clave -->
    <div class="container vm-stats-bar mb-5">
      <div class="row g-4">
        <div v-for="(stat, index) in keyStats" :key="index" class="col-sm-6 col-xl-3">
          <div class="vm-stat-card" :class="{ 'stat-red': index % 2 === 1 }">
            <div class="d-flex justify-content-between align-items-start mb-3">
              <div>
                <span class="vm-stat-number" :class="index % 2 === 1 ? 'text-vm-red' : 'text-vm-blue'">
                  {{ stat.value }}
                </span>
                <span
                  class="ms-1 fw-bold text-uppercase small"
                  :class="index % 2 === 1 ? 'text-vm-red' : 'text-vm-blue'"
                >
                  {{ stat.unit }}
                </span>
              </div>
              <div
                class="rounded-3 d-flex align-items-center justify-content-center"
                :class="index % 2 === 1 ? 'bg-vm-red' : 'bg-vm-blue'"
                style="width: 44px; height: 44px;"
              >
                <i :class="[stat.icon, 'fs-5 text-white']"></i>
              </div>
            </div>
            <h3 class="h6 fw-bold mb-1" :class="index % 2 === 1 ? 'text-vm-red' : 'text-vm-blue'">{{ stat.label }}</h3>
            <p class="text-secondary small mb-0">{{ stat.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
