<script setup>
import { ref, computed } from 'vue'
import { clientsList } from '../data/vibromineData'

const activeSector = ref('all')

const sectors = [
  { id: 'all', label: 'Todos los Clientes (26)', icon: 'fa-solid fa-building-shield' },
  { id: 'mineria', label: 'Gran Minería Metálica', icon: 'fa-solid fa-helmet-safety' },
  { id: 'litio', label: 'Litio y Minería No Metálica', icon: 'fa-solid fa-gem' },
  { id: 'industria', label: 'Ingeniería y Proveedores Mineros', icon: 'fa-solid fa-gears' },
  { id: 'energia', label: 'Energía y Sanitaria', icon: 'fa-solid fa-bolt' },
  { id: 'logistica', label: 'Transporte Ferroviario', icon: 'fa-solid fa-train' }
]

const filteredClients = computed(() => {
  if (activeSector.value === 'all') return clientsList
  return clientsList.filter((c) => c.sector === activeSector.value)
})

function getSectorIcon(sector) {
  const map = {
    mineria: 'fa-solid fa-mountain-sun text-vm-red',
    litio: 'fa-solid fa-flask text-vm-blue',
    energia: 'fa-solid fa-bolt-lightning text-vm-red',
    industria: 'fa-solid fa-industry text-vm-blue',
    logistica: 'fa-solid fa-train-subway text-vm-red'
  }
  return map[sector] || 'fa-solid fa-building text-vm-blue'
}
</script>

<template>
  <section id="clientes" class="py-5 bg-white">
    <div class="container py-lg-4">
      <!-- Encabezado de Clientes -->
      <div class="text-center mx-auto mb-5" style="max-width: 760px;">
        <span class="vm-section-eyebrow">
          <i class="fa-solid fa-handshake me-1"></i>Respaldo y Confianza Industrial
        </span>
        <h2 class="vm-section-title mb-3">
          Principales Compañías que Confían en VIBROMINE
        </h2>
        <p class="text-secondary mb-0">
          Las principales operaciones mineras de cobre, litio, oro, generación eléctrica e ingeniería del país
          avalan nuestra trayectoria de más de 24 años de servicio continuo.
        </p>
      </div>

      <!-- Filtros por Sector Industrial -->
      <div class="d-flex flex-wrap justify-content-center gap-2 mb-4">
        <button
          v-for="sec in sectors"
          :key="sec.id"
          type="button"
          class="btn btn-sm rounded-pill px-3 py-2 fw-semibold"
          :class="activeSector === sec.id ? 'btn-vm-primary' : 'bg-light text-dark border'"
          @click="activeSector = sec.id"
        >
          <i :class="[sec.icon, 'me-1', activeSector === sec.id ? 'text-white' : 'text-vm-blue']"></i>
          {{ sec.label }}
        </button>
      </div>

      <!-- Grid de los 26 Clientes Oficiales (Pág. 12 de la Presentación) -->
      <div class="row g-3">
        <div
          v-for="(client, idx) in filteredClients"
          :key="idx"
          class="col-sm-6 col-md-4 col-lg-3"
        >
          <div class="vm-client-card" :class="{ 'client-featured': client.highlight }">
            <div
              class="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
              style="width: 42px; height: 42px; background: var(--vm-slate-50);"
            >
              <i :class="[getSectorIcon(client.sector), 'fs-5']"></i>
            </div>
            <div>
              <h3 class="h6 fw-bold text-dark mb-1 lh-sm" style="font-size: 0.92rem;">
                {{ client.name }}
              </h3>
              <span class="badge bg-light text-secondary border" style="font-size: 0.68rem;">
                {{ client.tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Banner CTA de Confianza -->
      <div
        class="mt-5 p-4 p-lg-5 rounded-4 text-white shadow"
        style="background: linear-gradient(135deg, #040a24 0%, #07133e 55%, #0022e8 100%); border-left: 6px solid #d91920;"
      >
        <div class="row align-items-center g-4">
          <div class="col-lg-8">
            <h3 class="h4 fw-bold mb-2">
              ¿Necesita programar una intervención preventiva o resolver una urgencia en planta?
            </h3>
            <p class="text-white-50 mb-0">
              Nuestro equipo técnico en Antofagasta está preparado para asistir en paradas de planta,
              emergencias operacionales y contratos de monitoreo sintomático periódico.
            </p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <a href="#cotizar" class="btn btn-vm-red btn-lg">
              <i class="fa-solid fa-headset me-2"></i>Contactar a Ingeniería
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
