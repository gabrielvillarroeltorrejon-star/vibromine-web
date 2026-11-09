<script setup>
import { ref, reactive, computed } from 'vue'
import { servicesList, symptomFinderItems } from '../data/vibromineData'

const emit = defineEmits(['open-service-modal', 'select-service-quote'])

const activeCategory = ref('all')
const activeSymptom = ref(null)

// Estado reactivo para permitir alternar las 3 fotos 4:3 HD directamente en cada tarjeta
const activeCardImageIdx = reactive({})

function getCardImageIndex(serviceId) {
  return activeCardImageIdx[serviceId] || 0
}

function setCardImageIndex(serviceId, idx) {
  activeCardImageIdx[serviceId] = idx
}

const categories = [
  { id: 'all', label: 'Todos los Servicios (8)', icon: 'fa-solid fa-layer-group' },
  { id: 'predictivo', label: 'Monitoreo Predictivo', icon: 'fa-solid fa-wave-square' },
  { id: 'precision', label: 'Alineación & Geometría', icon: 'fa-solid fa-crosshairs' },
  { id: 'correctivo', label: 'Corrección In-Situ', icon: 'fa-solid fa-fan' },
  { id: 'end', label: 'Ensayos No Destructivos (END)', icon: 'fa-solid fa-microscope' }
]

const filteredServices = computed(() => {
  if (activeCategory.value === 'all') return servicesList
  return servicesList.filter((s) => s.category === activeCategory.value)
})

function toggleSymptom(item) {
  if (activeSymptom.value && activeSymptom.value.id === item.id) {
    activeSymptom.value = null
  } else {
    activeSymptom.value = item
    activeCategory.value = 'all'
  }
}

function isServiceHighlighted(serviceId) {
  if (!activeSymptom.value) return false
  return activeSymptom.value.recommendedServices.includes(serviceId)
}
</script>

<template>
  <section id="servicios" class="py-5" style="background-color: var(--vm-slate-50);">
    <div class="container py-lg-4">
      <!-- Encabezado de Sección -->
      <div class="text-center mx-auto mb-5" style="max-width: 760px;">
        <span class="vm-section-eyebrow">
          <i class="fa-solid fa-gears me-1"></i>Catálogo de Ingeniería Especializada
        </span>
        <h2 class="vm-section-title mb-3">
          Servicio de Mantenimiento Sintomático
        </h2>
        <p class="text-secondary mb-0">
          Ejecutamos diagnósticos de alta precisión y correcciones mecánicas en terreno para maximizar la vida útil
          y confiabilidad de sus equipos rotatorios, sistemas de transmisión y estructuras críticas.
        </p>
      </div>

      <!-- Diagnosticador Interactivo por Síntomas en Planta -->
      <div class="vm-symptom-box mb-5 shadow">
        <div class="row align-items-center g-4">
          <div class="col-lg-4">
            <span class="badge bg-vm-red fw-bold mb-2 px-3 py-1">
              <i class="fa-solid fa-stethoscope me-1"></i>Asistente Técnico SKM
            </span>
            <h3 class="h5 fw-bold text-white mb-2">
              ¿Qué síntoma o requerimiento presenta su equipo?
            </h3>
            <p class="small text-white-50 mb-0">
              Seleccione una condición operativa para filtrar e iluminar automáticamente los servicios de
              <strong>VIBROMINE</strong> recomendados para su caso.
            </p>
          </div>
          <div class="col-lg-8">
            <div class="row g-2">
              <div v-for="item in symptomFinderItems" :key="item.id" class="col-md-6">
                <button
                  type="button"
                  class="vm-symptom-pill"
                  :class="{ active: activeSymptom && activeSymptom.id === item.id }"
                  @click="toggleSymptom(item)"
                >
                  <i :class="[item.icon, 'text-vm-red-light flex-shrink-0']"></i>
                  <span>{{ item.symptom }}</span>
                </button>
              </div>
            </div>

            <!-- Respuesta de Recomendación Activa -->
            <div
              v-if="activeSymptom"
              class="mt-3 p-3 rounded-3 d-flex align-items-center justify-content-between flex-wrap gap-2"
              style="background: rgba(0, 34, 232, 0.28); border: 1px solid rgba(112, 141, 255, 0.55);"
            >
              <div class="small text-white">
                <strong class="text-vm-red-light"><i class="fa-solid fa-lightbulb me-1"></i>Diagnóstico Recomendado:</strong>
                {{ activeSymptom.explanation }}
              </div>
              <button
                type="button"
                class="btn btn-sm btn-outline-light py-1 px-2"
                @click="activeSymptom = null"
              >
                Limpiar filtro
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Filtros por Categoría Técnica -->
      <div class="d-flex flex-wrap justify-content-center gap-2 mb-4">
        <button
          v-for="cat in categories"
          :key="cat.id"
          type="button"
          class="btn rounded-pill px-3 py-2 fw-semibold small transition-all"
          :class="activeCategory === cat.id ? 'btn-vm-primary' : 'bg-white text-dark border'"
          @click="activeCategory = cat.id"
        >
          <i :class="[cat.icon, 'me-1', activeCategory === cat.id ? 'text-white' : 'text-vm-blue']"></i>
          {{ cat.label }}
        </button>
      </div>

      <!-- Grilla de 2 Columnas con Tarjetas Horizontales y Proporción 4:3 HD -->
      <div class="row g-4">
        <div
          v-for="service in filteredServices"
          :key="service.id"
          class="col-lg-6"
        >
          <article
            class="vm-service-card"
            :class="{ 'highlighted-symptom': isServiceHighlighted(service.id) }"
          >
            <div class="row g-0 h-100">
              <!-- Columna Multimedia Izquierda: Imagen Principal 4:3 HD + Selector de 3 Fotos 4:3 -->
              <div class="col-md-5 vm-service-media-col">
                <div>
                  <div
                    class="vm-service-img-wrapper cursor-pointer"
                    @click="emit('open-service-modal', service)"
                    title="Clic para ampliar ficha técnica y galería"
                  >
                    <img
                      :src="service.images[getCardImageIndex(service.id)]"
                      :alt="service.title"
                      class="vm-service-img"
                      loading="lazy"
                    />
                    <span class="vm-service-num">SERVICIO {{ service.number }}</span>
                    <span class="vm-service-badge">
                      <i class="fa-solid fa-check-double text-vm-red-light me-1"></i>{{ service.badge }}
                    </span>
                    <div
                      v-if="isServiceHighlighted(service.id)"
                      class="position-absolute top-0 end-0 m-2 badge bg-vm-red fw-bold shadow"
                    >
                      <i class="fa-solid fa-star me-1"></i>Recomendado
                    </div>
                  </div>

                  <!-- Tira Interactiva de 3 Miniaturas 4:3 en Terreno -->
                  <div class="vm-service-thumb-strip">
                    <button
                      v-for="(imgUrl, idx) in service.images"
                      :key="idx"
                      type="button"
                      class="vm-service-thumb-btn"
                      :class="{ active: getCardImageIndex(service.id) === idx }"
                      @click="setCardImageIndex(service.id, idx)"
                      :title="`Ver fotografía ${idx + 1} de ${service.shortTitle}`"
                    >
                      <img :src="imgUrl" :alt="`${service.shortTitle} foto ${idx + 1}`" loading="lazy" />
                    </button>
                  </div>
                </div>

                <div class="d-flex justify-content-between align-items-center mt-2 pt-1 text-white-50" style="font-size: 0.72rem;">
                  <span><i class="fa-solid fa-camera text-vm-blue-light me-1"></i>Registro en Faena</span>
                  <span class="font-mono-tech text-white-50">4:3 HD</span>
                </div>
              </div>

              <!-- Columna de Contenido Técnico Derecha -->
              <div class="col-md-7 p-4 d-flex flex-column">
                <div class="d-flex align-items-start gap-3 mb-2">
                  <div class="vm-service-icon-box">
                    <i :class="service.iconClass || service.icon"></i>
                  </div>
                  <div>
                    <span class="text-uppercase fw-bold text-vm-red d-block" style="font-size: 0.72rem; letter-spacing: 0.05em;">
                      {{ service.categoryLabel }}
                    </span>
                    <h3 class="h5 fw-bold text-dark mb-0 lh-sm">{{ service.title }}</h3>
                  </div>
                </div>

                <p class="small text-secondary mb-3">
                  {{ service.summary }}
                </p>

                <div class="fw-bold text-dark small mb-2">
                  <i class="fa-solid fa-crosshairs text-vm-blue me-1"></i>{{ service.detectionsTitle }}
                </div>
                <ul class="vm-detection-list flex-grow-1 mb-3">
                  <li v-for="(item, idx) in service.detections.slice(0, 4)" :key="idx">
                    {{ item }}
                  </li>
                  <li v-if="service.detections.length > 4" class="text-vm-blue fw-semibold">
                    + {{ service.detections.length - 4 }} parámetros técnicos adicionales...
                  </li>
                </ul>

                <!-- Botones de Acción Horizontales -->
                <div class="d-flex flex-wrap gap-2 pt-3 border-top mt-auto">
                  <button
                    type="button"
                    class="btn btn-sm btn-vm-outline-blue flex-fill py-2"
                    @click="emit('open-service-modal', service)"
                  >
                    <i class="fa-solid fa-magnifying-glass-plus text-vm-red me-1"></i>
                    Ficha Técnica
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-vm-red flex-fill py-2"
                    @click="emit('select-service-quote', service.title)"
                  >
                    <i class="fa-solid fa-paper-plane me-1"></i>
                    Cotizar Servicio
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
