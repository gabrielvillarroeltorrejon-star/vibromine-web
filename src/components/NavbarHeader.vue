<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { companyInfo } from '../data/vibromineData'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 30
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="sticky-top">
    <!-- Top Bar Corporativa estilo Treppco -->
    <div class="vm-topbar py-2 d-none d-lg-block">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center gap-4">
          <span>
            <i class="fa-solid fa-location-dot text-info me-1"></i>
            {{ companyInfo.contact.fullAddress }}
          </span>
          <a :href="`mailto:${companyInfo.contact.email}`">
            <i class="fa-solid fa-envelope text-info me-1"></i>
            {{ companyInfo.contact.email }}
          </a>
          <span>
            <i class="fa-solid fa-phone-volume text-warning me-1"></i>
            <a :href="`tel:${companyInfo.contact.phones[0].raw}`" class="me-2">{{ companyInfo.contact.phones[0].display }}</a>
            <span class="text-white-50">|</span>
            <a :href="`tel:${companyInfo.contact.phones[1].raw}`" class="ms-2">{{ companyInfo.contact.phones[1].display }}</a>
          </span>
        </div>
        <div class="d-flex align-items-center gap-3">
          <span class="badge bg-info bg-opacity-10 text-info border border-info border-opacity-25 font-mono-tech">
            <i class="fa-solid fa-award me-1"></i>ISO 18436-2 Cat. II
          </span>
          <span class="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 font-mono-tech">
            <i class="fa-solid fa-shield-halved me-1"></i>ASNT SNT-TC-1A / NAS-410
          </span>
        </div>
      </div>
    </div>

    <!-- Navbar Principal -->
    <nav class="navbar navbar-expand-lg navbar-dark vm-navbar" :class="{ scrolled: isScrolled }">
      <div class="container">
        <!-- Logo Corporativo VIBROMINE -->
        <a class="navbar-brand d-flex align-items-center gap-3 py-0" href="#inicio">
          <div class="d-flex align-items-center justify-content-center rounded-3 p-1" style="background: rgba(0, 180, 216, 0.12); border: 1.5px solid rgba(0, 180, 216, 0.45);">
            <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 36H12L16 16L21 48L25 26L29 36" stroke="#FF6B35" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 14L35 50L48 14" stroke="#00B4D8" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="52" cy="15" r="4" fill="#FF6B35"/>
            </svg>
          </div>
          <div>
            <div class="fw-black text-white fs-4 lh-1 font-heading" style="letter-spacing: 0.04em;">
              VIBRO<span style="color: #00B4D8;">MINE</span>
            </div>
            <div class="text-info fw-semibold" style="font-size: 0.66rem; letter-spacing: 0.05em;">
              SKM · SYMPTOMATIC KEEN MAINTENANCE
            </div>
          </div>
        </a>

        <!-- Botón Hamburguesa Móvil -->
        <button
          class="navbar-toggler border-0 shadow-none"
          type="button"
          @click="mobileMenuOpen = !mobileMenuOpen"
          aria-label="Abrir menú de navegación"
        >
          <i class="fa-solid" :class="mobileMenuOpen ? 'fa-xmark fs-3 text-info' : 'fa-bars fs-3 text-white'"></i>
        </button>

        <!-- Enlaces de Navegación -->
        <div class="collapse navbar-collapse" :class="{ show: mobileMenuOpen }">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-1 mt-3 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link vm-nav-link" href="#inicio" @click="closeMobileMenu">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link vm-nav-link" href="#nosotros" @click="closeMobileMenu">Nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link vm-nav-link" href="#servicios" @click="closeMobileMenu">
                Servicios <span class="badge rounded-pill bg-info text-dark ms-1" style="font-size: 0.68rem;">8</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link vm-nav-link" href="#certificaciones" @click="closeMobileMenu">Certificaciones</a>
            </li>
            <li class="nav-item">
              <a class="nav-link vm-nav-link" href="#clientes" @click="closeMobileMenu">Clientes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link vm-nav-link" href="#contacto" @click="closeMobileMenu">Contacto</a>
            </li>
          </ul>

          <div class="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center gap-2 mt-3 mt-lg-0">
            <a
              :href="companyInfo.contact.brochureUrl"
              target="_blank"
              download="Brochure-Corporativo-VIBROMINE.pdf"
              class="btn btn-sm btn-vm-outline-light d-flex align-items-center justify-content-center gap-2 py-2 px-3"
              title="Descargar Presentación Corporativa Oficial en PDF"
            >
              <i class="fa-solid fa-file-pdf text-danger"></i>
              <span>Brochure PDF</span>
            </a>
            <a
              href="#cotizar"
              class="btn btn-sm btn-vm-orange d-flex align-items-center justify-content-center gap-2 py-2 px-3"
              @click="closeMobileMenu"
            >
              <i class="fa-solid fa-bolt"></i>
              <span>Solicitar Cotización</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
