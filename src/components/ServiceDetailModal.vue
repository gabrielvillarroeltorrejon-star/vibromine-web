<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  service: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close', 'quote-service'])

const selectedImgIndex = ref(0)

watch(
  () => props.service,
  () => {
    selectedImgIndex.value = 0
  }
)

function handleQuoteAndClose() {
  if (props.service) {
    emit('quote-service', props.service.title)
    emit('close')
  }
}
</script>

<template>
  <div
    v-if="service"
    class="modal fade show d-block"
    tabindex="-1"
    role="dialog"
    aria-modal="true"
    style="background-color: rgba(0, 12, 138, 0.82); backdrop-filter: blur(6px);"
    @click.self="emit('close')"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content border-0 rounded-4 overflow-hidden shadow-lg">
        <!-- Encabezado del Modal -->
        <div
          class="modal-header text-white border-0 p-4"
          style="background-color: #0012b8; border-bottom: 4px solid #d91018 !important;"
        >
          <div class="d-flex align-items-center gap-3">
            <div
              class="rounded-3 d-flex align-items-center justify-content-center"
              style="width: 52px; height: 52px; background-color: #d91018; color: #ffffff; border: 2px solid #ffffff;"
            >
              <i :class="[service.iconClass || service.icon, 'fs-4']"></i>
            </div>
            <div>
              <div class="d-flex align-items-center gap-2 mb-1">
                <span class="badge bg-vm-red border border-white">{{ service.categoryLabel }}</span>
                <span class="badge bg-white text-vm-blue fw-bold">
                  {{ service.badge }}
                </span>
              </div>
              <h3 class="modal-title h4 fw-bold mb-0">{{ service.title }}</h3>
            </div>
          </div>
          <button
            type="button"
            class="btn-close btn-close-white"
            aria-label="Cerrar"
            @click="emit('close')"
          ></button>
        </div>

        <!-- Cuerpo del Modal -->
        <div class="modal-body p-4">
          <div class="row g-4">
            <!-- Galería Fotográfica de Terreno en Proporción 4:3 HD (1200x900) -->
            <div class="col-md-6">
              <div class="rounded-4 overflow-hidden shadow-sm mb-2 bg-vm-blue" style="border: 2px solid #0018e8;">
                <img
                  :src="service.images[selectedImgIndex]"
                  :alt="`${service.title} - Imagen ${selectedImgIndex + 1}`"
                  class="vm-modal-img-4x3"
                />
              </div>
              <div class="d-flex gap-2">
                <button
                  v-for="(imgUrl, i) in service.images"
                  :key="i"
                  type="button"
                  class="p-0 border rounded-3 overflow-hidden flex-fill"
                  :class="selectedImgIndex === i ? 'border-danger border-2 shadow-sm' : 'opacity-50'"
                  @click="selectedImgIndex = i"
                >
                  <img
                    :src="imgUrl"
                    :alt="`Miniatura ${i + 1}`"
                    class="w-100 object-fit-cover"
                    style="aspect-ratio: 4 / 3;"
                  />
                </button>
              </div>
              <div class="small text-muted mt-2 text-center">
                <i class="fa-solid fa-camera text-vm-blue me-1"></i>
                Fotografías ejecutadas por VIBROMINE en faena
              </div>
            </div>

            <!-- Alcance Técnico y Detección -->
            <div class="col-md-6">
              <h4 class="h6 fw-bold text-uppercase text-vm-blue mb-2">
                Descripción Técnica del Servicio
              </h4>
              <p class="small text-secondary mb-3">
                {{ service.detailedDescription }}
              </p>

              <h4 class="h6 fw-bold text-dark mb-2">
                <i class="fa-solid fa-list-check text-vm-red me-1"></i>
                {{ service.detectionsTitle }}
              </h4>
              <ul class="vm-detection-list mb-3">
                <li v-for="(det, idx) in service.detections" :key="idx">
                  {{ det }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Beneficios Operacionales -->
          <div class="mt-3 p-3 rounded-4" style="background: var(--vm-slate-50); border: 1px solid var(--vm-slate-200);">
            <h4 class="h6 fw-bold text-dark mb-2">
              <i class="fa-solid fa-shield-heart text-vm-red me-2"></i>
              Beneficios Directos para su Planta o Faena:
            </h4>
            <div class="row g-2">
              <div v-for="(benefit, bIdx) in service.benefits" :key="bIdx" class="col-md-4">
                <div class="p-2 bg-white rounded-3 border h-100 small d-flex align-items-start gap-2">
                  <i class="fa-solid fa-bolt text-vm-blue mt-1"></i>
                  <span>{{ benefit }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pie del Modal -->
        <div class="modal-footer bg-light border-top px-4 py-3 d-flex justify-content-between">
          <button type="button" class="btn btn-outline-secondary" @click="emit('close')">
            Cerrar ventana
          </button>
          <button type="button" class="btn btn-vm-red" @click="handleQuoteAndClose">
            <i class="fa-solid fa-file-signature me-2"></i>
            Solicitar Cotización para {{ service.shortTitle }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
