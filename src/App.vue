<script setup>
import { ref } from 'vue'
import NavbarHeader from './components/NavbarHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ServiceDetailModal from './components/ServiceDetailModal.vue'
import CertificationsSection from './components/CertificationsSection.vue'
import ClientsSection from './components/ClientsSection.vue'
import ContactQuoteSection from './components/ContactQuoteSection.vue'
import FooterSection from './components/FooterSection.vue'

const activeModalService = ref(null)
const preselectedQuoteService = ref('Análisis de Vibraciones')

function handleOpenServiceModal(service) {
  activeModalService.value = service
}

function handleCloseServiceModal() {
  activeModalService.value = null
}

function handleSelectServiceForQuote(serviceTitle) {
  preselectedQuoteService.value = serviceTitle
  const el = document.getElementById('cotizar')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="min-vh-100 d-flex flex-column">
    <!-- 1. Barra Superior + Navbar Sticky -->
    <NavbarHeader />

    <!-- Contenido Principal -->
    <main class="flex-grow-1">
      <!-- 2. Hero Section + Barra de Métricas Clave -->
      <HeroSection />

      <!-- 3. Sobre Nosotros: Trayectoria, Misión, Visión y Enfoque Minero -->
      <AboutSection />

      <!-- 4. Catálogo de los 8 Servicios + Diagnosticador Interactivo por Síntomas -->
      <ServicesSection
        @open-service-modal="handleOpenServiceModal"
        @select-service-quote="handleSelectServiceForQuote"
      />

      <!-- 5. Certificaciones Internacionales ISO / ASNT / NAS-410 y Protocolo SKM -->
      <CertificationsSection />

      <!-- 6. Portafolio de 26 Clientes Mineros e Industriales -->
      <ClientsSection />

      <!-- 7. Formulario Inteligente de Cotización (Supabase) + Mapa Antofagasta -->
      <ContactQuoteSection :preselected-service="preselectedQuoteService" />
    </main>

    <!-- 8. Footer Corporativo y Botón Flotante WhatsApp -->
    <FooterSection @select-service-quote="handleSelectServiceForQuote" />

    <!-- Modal de Ficha Técnica y Galería Fotográfica por Servicio -->
    <ServiceDetailModal
      :service="activeModalService"
      @close="handleCloseServiceModal"
      @quote-service="handleSelectServiceForQuote"
    />
  </div>
</template>
