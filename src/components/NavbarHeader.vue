<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { companyInfo } from '../data/vibromineData'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

function handleScroll() {
  const y = window.scrollY
  if (!isScrolled.value && y > 60) {
    isScrolled.value = true
  } else if (isScrolled.value && y < 20) {
    isScrolled.value = false
  }
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

function scrollToTop(event) {
  if (event) event.preventDefault()
  closeMobileMenu()
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname)
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
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
    <!-- Top Bar Corporativa con Identidad Azul/Rojo VIBROMINE -->
    <div class="vm-topbar py-2 d-none d-lg-block">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center gap-4">
          <a href="#cotizar" class="vm-topbar-item">
            <i class="fa-solid fa-location-dot me-1"></i>
            {{ companyInfo.contact.fullAddress }}
          </a>
          <span class="d-flex align-items-center gap-2">
            <i class="fa-solid fa-envelope vm-topbar-icon"></i>
            <a :href="`mailto:${companyInfo.contact.email},${companyInfo.contact.secondaryEmail}`" class="vm-topbar-item">
              {{ companyInfo.contact.email }}
            </a>
            <span class="text-white">|</span>
            <a :href="`mailto:${companyInfo.contact.secondaryEmail},${companyInfo.contact.email}`" class="vm-topbar-item">
              {{ companyInfo.contact.secondaryEmail }}
            </a>
          </span>
          <span class="d-flex align-items-center">
            <i class="fa-solid fa-phone-volume vm-topbar-icon me-1"></i>
            <a :href="`tel:${companyInfo.contact.phones[0].raw}`" class="vm-topbar-item">{{ companyInfo.contact.phones[0].display }}</a>
            <span class="text-white mx-1">-</span>
            <a :href="`tel:${companyInfo.contact.phones[1].raw}`" class="vm-topbar-item">{{ companyInfo.contact.phones[1].display }}</a>
            <span class="text-white mx-2">/</span>
            <a :href="`tel:${companyInfo.contact.mobilePhones[0].raw}`" class="vm-topbar-item">{{ companyInfo.contact.mobilePhones[0].display }}</a>
            <span class="text-white mx-1">-</span>
            <a :href="`tel:${companyInfo.contact.mobilePhones[1].raw}`" class="vm-topbar-item">{{ companyInfo.contact.mobilePhones[1].display }}</a>
          </span>
        </div>
      </div>
    </div>

    <!-- Navbar Principal Blanca con el Logo Oficial de VIBROMINE -->
    <nav class="navbar navbar-expand-lg vm-navbar" :class="{ scrolled: isScrolled }">
      <div class="container">
        <!-- Logo Oficial de VIBROMINE Recortado con Precisión -->
        <a class="navbar-brand py-0 d-flex align-items-center" href="#inicio" aria-label="VIBROMINE Inicio" @click="scrollToTop">
          <img
            src="/images/logo-vibromine.png"
            alt="Logo Oficial VIBROMINE - SKM Symptomatic Keen Maintenance - Servicio de Mantenimiento Sintomático"
            class="vm-logo-svg"
          />
        </a>

        <!-- Botón Hamburguesa Móvil -->
        <button
          class="navbar-toggler border-0 shadow-none"
          type="button"
          @click="mobileMenuOpen = !mobileMenuOpen"
          aria-label="Abrir menú de navegación"
        >
          <i class="fa-solid" :class="mobileMenuOpen ? 'fa-xmark fs-3 text-vm-red' : 'fa-bars fs-3 text-vm-blue'"></i>
        </button>

        <!-- Enlaces de Navegación -->
        <div class="collapse navbar-collapse" :class="{ show: mobileMenuOpen }">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-1 mt-3 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link vm-nav-link" href="#inicio" @click="scrollToTop">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link vm-nav-link" href="#nosotros" @click="closeMobileMenu">Nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link vm-nav-link" href="#servicios" @click="closeMobileMenu">Servicios</a>
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
              href="#cotizar"
              class="btn btn-vm-red d-flex align-items-center justify-content-center gap-2 py-2 px-4"
              @click="closeMobileMenu"
            >
              <i class="fa-solid fa-envelope"></i>
              <span>Solicitar Cotización</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
