<script setup>
import { companyInfo, servicesList } from '../data/vibromineData'

const emit = defineEmits(['select-service-quote'])
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="vm-footer pt-5 pb-4">
    <div class="container">
      <div class="row g-4 pb-4 border-bottom border-white border-opacity-25">
        <!-- Columna 1: Identidad Corporativa con Logo Oficial -->
        <div class="col-lg-4">
          <div class="d-inline-block bg-white p-2 rounded-3 mb-3 shadow-sm">
            <img
              src="/images/logo-vibromine.png"
              alt="Logo Oficial VIBROMINE"
              style="height: 56px; width: auto; display: block;"
            />
          </div>
          <p class="small text-white mb-3">
            {{ companyInfo.spanishSubtitle }}. Más de 24 años de experiencia y +1.600 servicios ejecutados respaldando la continuidad operativa de la Gran Minería e Industria en Chile.
          </p>
          <div class="d-flex flex-wrap gap-2">
            <span class="badge bg-white text-vm-red fw-bold font-mono-tech">ISO 18436-2 Cat. II</span>
            <span class="badge bg-white text-vm-red fw-bold font-mono-tech">ASNT SNT-TC-1A</span>
            <span class="badge bg-white text-vm-red fw-bold font-mono-tech">NAS-410</span>
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
                <i class="fa-solid fa-angle-right me-2"></i>{{ srv.title }}
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
              <i class="fa-solid fa-location-dot text-white me-2"></i>
              {{ companyInfo.contact.fullAddress }}
            </li>
            <li class="d-flex align-items-start">
              <i class="fa-solid fa-phone text-white me-2 mt-1"></i>
              <div>
                <div>
                  <a :href="`tel:${companyInfo.contact.phones[0].raw}`">{{ companyInfo.contact.phones[0].display }}</a>
                  -
                  <a :href="`tel:${companyInfo.contact.phones[1].raw}`">{{ companyInfo.contact.phones[1].display }}</a>
                </div>
                <div>
                  <a :href="`tel:${companyInfo.contact.mobilePhones[0].raw}`">{{ companyInfo.contact.mobilePhones[0].display }}</a>
                  -
                  <a :href="`tel:${companyInfo.contact.mobilePhones[1].raw}`">{{ companyInfo.contact.mobilePhones[1].display }}</a>
                </div>
              </div>
            </li>
            <li class="d-flex align-items-start">
              <i class="fa-solid fa-envelope text-white me-2 mt-1"></i>
              <div class="d-flex flex-column gap-1">
                <a :href="`mailto:${companyInfo.contact.email},${companyInfo.contact.secondaryEmail}`">
                  {{ companyInfo.contact.email }}
                </a>
                <a :href="`mailto:${companyInfo.contact.secondaryEmail},${companyInfo.contact.email}`">
                  {{ companyInfo.contact.secondaryEmail }}
                </a>
              </div>
            </li>
          </ul>

          <a
            href="#cotizar"
            class="btn btn-sm btn-vm-red border border-white d-inline-flex align-items-center gap-2"
          >
            <i class="fa-solid fa-file-signature"></i>
            <span>Solicitar Cotización en Línea</span>
          </a>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center small text-white gap-2">
        <div>
          © {{ currentYear }} <strong>VIBROMINE Chile</strong> ({{ companyInfo.contact.website }}). Todos los derechos reservados.
        </div>
        <div>
          SKM · Symptomatic Keen Maintenance · Antofagasta, Chile
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
      <span class="d-none d-sm-inline">Atención Directa WhatsApp</span>
    </a>
  </footer>
</template>
