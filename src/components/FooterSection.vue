<script setup>
import { companyInfo, servicesList } from '../data/vibromineData'

const emit = defineEmits(['select-service-quote'])
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="vm-footer pt-5 pb-4">
    <div class="container">
      <div class="row g-4 pb-4 border-bottom border-secondary border-opacity-25">
        <!-- Columna 1: Identidad Corporativa -->
        <div class="col-lg-4">
          <div class="d-flex align-items-center gap-3 mb-3">
            <div class="d-flex align-items-center justify-content-center rounded-3 p-1" style="background: rgba(0, 180, 216, 0.12); border: 1.5px solid rgba(0, 180, 216, 0.45);">
              <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 36H12L16 16L21 48L25 26L29 36" stroke="#FF6B35" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 14L35 50L48 14" stroke="#00B4D8" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="52" cy="15" r="4" fill="#FF6B35"/>
              </svg>
            </div>
            <div>
              <div class="fw-black text-white fs-4 lh-1 font-heading">
                VIBRO<span style="color: #00B4D8;">MINE</span>
              </div>
              <div class="text-info fw-semibold" style="font-size: 0.65rem;">
                SKM · SYMPTOMATIC KEEN MAINTENANCE
              </div>
            </div>
          </div>
          <p class="small text-white-50 mb-3">
            {{ companyInfo.spanishSubtitle }}. Más de 24 años de experiencia y +1.600 servicios ejecutados respaldando la continuidad operativa de la Gran Minería e Industria en Chile.
          </p>
          <div class="d-flex flex-wrap gap-2">
            <span class="badge bg-dark border border-secondary font-mono-tech">ISO 18436-2 Cat. II</span>
            <span class="badge bg-dark border border-secondary font-mono-tech">ASNT SNT-TC-1A</span>
            <span class="badge bg-dark border border-secondary font-mono-tech">NAS-410</span>
          </div>
        </div>

        <!-- Columna 2: Nuestros 8 Servicios -->
        <div class="col-sm-6 col-lg-4">
          <h4 class="h6 fw-bold text-white text-uppercase mb-3">
            Especialidades Técnicas
          </h4>
          <ul class="list-unstyled small d-flex flex-column gap-2 mb-0">
            <li v-for="srv in servicesList" :key="srv.id">
              <a
                href="#cotizar"
                @click="emit('select-service-quote', srv.title)"
              >
                <i class="fa-solid fa-angle-right text-info me-2"></i>{{ srv.title }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Columna 3: Enlaces y Contacto Rápido -->
        <div class="col-sm-6 col-lg-4">
          <h4 class="h6 fw-bold text-white text-uppercase mb-3">
            Contacto Antofagasta
          </h4>
          <ul class="list-unstyled small d-flex flex-column gap-2 mb-4">
            <li>
              <i class="fa-solid fa-location-dot text-info me-2"></i>
              {{ companyInfo.contact.fullAddress }}
            </li>
            <li>
              <i class="fa-solid fa-phone text-warning me-2"></i>
              <a :href="`tel:${companyInfo.contact.phones[0].raw}`">{{ companyInfo.contact.phones[0].display }}</a>
              /
              <a :href="`tel:${companyInfo.contact.phones[1].raw}`">{{ companyInfo.contact.phones[1].display }}</a>
            </li>
            <li>
              <i class="fa-solid fa-envelope text-info me-2"></i>
              <a :href="`mailto:${companyInfo.contact.email}`">{{ companyInfo.contact.email }}</a>
            </li>
          </ul>

          <a
            :href="companyInfo.contact.brochureUrl"
            target="_blank"
            download="Brochure-Corporativo-VIBROMINE.pdf"
            class="btn btn-sm btn-outline-info d-inline-flex align-items-center gap-2"
          >
            <i class="fa-solid fa-file-pdf"></i>
            <span>Descargar Presentación Oficial PDF</span>
          </a>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center small text-white-50 gap-2">
        <div>
          © {{ currentYear }} <strong>VIBROMINE Chile</strong> ({{ companyInfo.contact.website }}). Todos los derechos reservados.
        </div>
        <div>
          Ingeniería en Mantenimiento Sintomático · Antofagasta, Chile
        </div>
      </div>
    </div>

    <!-- Botón Flotante de WhatsApp Directo -->
    <a
      :href="`https://wa.me/${companyInfo.contact.whatsapp}?text=${encodeURIComponent('Hola VIBROMINE, me comunico desde su sitio web para consultar por sus servicios de mantenimiento sintomático.')}`"
      target="_blank"
      rel="noopener"
      class="vm-whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <i class="fa-brands fa-whatsapp fs-4"></i>
      <span class="d-none d-sm-inline">Atención en Faena</span>
    </a>
  </footer>
</template>
