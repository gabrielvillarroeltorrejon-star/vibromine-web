<script setup>
import { companyInfo, servicesList } from '../data/vibromineData'

const emit = defineEmits(['select-service-quote'])
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="vm-footer pt-5 pb-4">
    <div class="container">
      <div class="row g-4 pb-4 border-bottom border-secondary border-opacity-25">
        <!-- Columna 1: Identidad Corporativa con Logo Oficial -->
        <div class="col-lg-4">
          <div class="d-inline-block bg-white p-2 px-3 rounded-3 mb-3 shadow-sm">
            <svg
              style="height: 52px; width: auto; display: block;"
              viewBox="95 232 835 238"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Logo Oficial VIBROMINE"
            >
              <image href="/images/logo-vibromine.jpg" width="1024" height="764" />
            </svg>
          </div>
          <p class="small text-white-50 mb-3">
            {{ companyInfo.spanishSubtitle }}. Más de 24 años de experiencia y +1.600 servicios ejecutados respaldando la continuidad operativa de la Gran Minería e Industria en Chile.
          </p>
          <div class="d-flex flex-wrap gap-2">
            <span class="badge bg-vm-blue font-mono-tech">ISO 18436-2 Cat. II</span>
            <span class="badge bg-vm-red font-mono-tech">ASNT SNT-TC-1A</span>
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
                <i class="fa-solid fa-angle-right text-vm-red-light me-2"></i>{{ srv.title }}
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
              <i class="fa-solid fa-location-dot text-vm-red-light me-2"></i>
              {{ companyInfo.contact.fullAddress }}
            </li>
            <li>
              <i class="fa-solid fa-phone text-vm-blue-light me-2"></i>
              <a :href="`tel:${companyInfo.contact.phones[0].raw}`">{{ companyInfo.contact.phones[0].display }}</a>
              /
              <a :href="`tel:${companyInfo.contact.phones[1].raw}`">{{ companyInfo.contact.phones[1].display }}</a>
            </li>
            <li>
              <i class="fa-solid fa-envelope text-vm-red-light me-2"></i>
              <a :href="`mailto:${companyInfo.contact.email}`">{{ companyInfo.contact.email }}</a>
            </li>
          </ul>

          <a
            href="#cotizar"
            class="btn btn-sm btn-vm-red d-inline-flex align-items-center gap-2"
          >
            <i class="fa-solid fa-file-signature"></i>
            <span>Solicitar Cotización en Línea</span>
          </a>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center small text-white-50 gap-2">
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
      <span class="d-none d-sm-inline">Atención en Faena</span>
    </a>
  </footer>
</template>
