<script setup>
import { ref, reactive, watch, onMounted } from 'vue'
import { companyInfo, servicesList } from '../data/vibromineData'
import { submitQuotationLead, getLocalLeads, isSupabaseConfigured } from '../lib/supabase'

const props = defineProps({
  preselectedService: {
    type: String,
    default: ''
  }
})

const form = reactive({
  fullName: '',
  company: '',
  rolePosition: '',
  email: '',
  phone: '',
  serviceInterest: 'Análisis de Vibraciones',
  urgencyLevel: 'Programada / Preventiva',
  locationFaena: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref(null) // 'success' | 'error' | null
const statusMessage = ref('')
const recentSubmissions = ref([])

watch(
  () => props.preselectedService,
  (newService) => {
    if (newService) {
      form.serviceInterest = newService
    }
  },
  { immediate: true }
)

onMounted(() => {
  recentSubmissions.value = getLocalLeads()
})

async function handleSubmit() {
  isSubmitting.value = true
  submitStatus.value = null
  statusMessage.value = ''

  try {
    const result = await submitQuotationLead(form)
    submitStatus.value = 'success'
    statusMessage.value =
      result.mode === 'supabase'
        ? '¡Solicitud registrada exitosamente en nuestra base de datos Supabase! Nuestro equipo de ingeniería en Antofagasta se pondrá en contacto a la brevedad.'
        : '¡Solicitud registrada exitosamente! (Almacenada en registro local de demostración y lista para sincronizar con Supabase). También puede enviarla directo por WhatsApp con un clic abajo.'

    recentSubmissions.value = getLocalLeads()
    form.message = ''
  } catch (err) {
    submitStatus.value = 'error'
    statusMessage.value = err.message || 'Ocurrió un inconveniente al procesar la solicitud.'
  } finally {
    isSubmitting.value = false
  }
}

function openWhatsAppWithQuote() {
  const text = encodeURIComponent(
    `Hola VIBROMINE, solicito cotización técnica:\n` +
      `• Nombre: ${form.fullName || 'Cliente'}\n` +
      `• Empresa/Faena: ${form.company || 'Por definir'} (${form.locationFaena || 'Norte Grande'})\n` +
      `• Servicio: ${form.serviceInterest}\n` +
      `• Prioridad: ${form.urgencyLevel}\n` +
      `• Correo: ${form.email || '-'}\n` +
      `• Detalles: ${form.message || 'Solicito contacto con ingeniería.'}`
  )
  window.open(`https://wa.me/${companyInfo.contact.whatsapp}?text=${text}`, '_blank')
}
</script>

<template>
  <section id="contacto" class="py-5" style="background-color: var(--vm-slate-50);">
    <div id="cotizar" class="container py-lg-4">
      <!-- Encabezado -->
      <div class="text-center mx-auto mb-5" style="max-width: 760px;">
        <span class="vm-section-eyebrow">
          <i class="fa-solid fa-paper-plane me-1"></i>Atención Comercial y Técnica en Antofagasta
        </span>
        <h2 class="vm-section-title mb-3">
          Solicite una Evaluación o Cotización Técnica
        </h2>
        <p class="text-secondary mb-0">
          Complete el formulario para registrar su requerimiento en nuestro sistema o comuníquese directamente
          con nuestra central en <strong>{{ companyInfo.contact.fullAddress }}</strong>.
        </p>
      </div>

      <div class="row g-4 align-items-stretch">
        <!-- Columna Izquierda: Formulario Conectado a Supabase -->
        <div class="col-lg-7">
          <div class="vm-quote-card h-100">
            <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4 pb-3 border-bottom">
              <div>
                <h3 class="h4 fw-bold text-dark mb-1">Formulario de Requerimiento Técnico</h3>
                <p class="small text-secondary mb-0">
                  Respuesta prioritaria para jefes de planta, planificadores y mantenedores
                </p>
              </div>
              <span
                class="badge rounded-pill px-3 py-2 font-mono-tech"
                :class="isSupabaseConfigured ? 'bg-success bg-opacity-10 text-success border border-success' : 'badge-vm-blue'"
              >
                <i class="fa-solid fa-database me-1"></i>
                {{ isSupabaseConfigured ? 'Supabase Cloud Activo' : 'Supabase Ready' }}
              </span>
            </div>

            <!-- Alerta de Confirmación -->
            <div
              v-if="submitStatus === 'success'"
              class="alert alert-success border-success rounded-4 p-3 mb-4"
              role="alert"
            >
              <div class="d-flex align-items-start gap-3">
                <i class="fa-solid fa-circle-check fs-4 text-success mt-1"></i>
                <div>
                  <h4 class="h6 fw-bold mb-1">¡Requerimiento Recibido por VIBROMINE!</h4>
                  <p class="small mb-2">{{ statusMessage }}</p>
                  <button
                    type="button"
                    class="btn btn-sm btn-success fw-bold"
                    @click="openWhatsAppWithQuote"
                  >
                    <i class="fa-brands fa-whatsapp me-1"></i>
                    Enviar copia inmediata por WhatsApp
                  </button>
                </div>
              </div>
            </div>

            <div
              v-if="submitStatus === 'error'"
              class="alert alert-danger rounded-4 p-3 mb-4"
              role="alert"
            >
              <i class="fa-solid fa-triangle-exclamation me-2"></i>{{ statusMessage }}
            </div>

            <form @submit.prevent="handleSubmit">
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label fw-semibold small text-dark">
                    Nombre y Apellido <span class="text-vm-red">*</span>
                  </label>
                  <input
                    v-model="form.fullName"
                    type="text"
                    class="form-control vm-form-control"
                    placeholder="Ej: Carlos Rojas"
                    required
                  />
                </div>

                <div class="col-md-6">
                  <label class="form-label fw-semibold small text-dark">
                    Empresa / Compañía Minera <span class="text-vm-red">*</span>
                  </label>
                  <input
                    v-model="form.company"
                    type="text"
                    class="form-control vm-form-control"
                    placeholder="Ej: Codelco / SQM / Metso"
                    required
                  />
                </div>

                <div class="col-md-6">
                  <label class="form-label fw-semibold small text-dark">
                    Correo Electrónico Corporativo <span class="text-vm-red">*</span>
                  </label>
                  <input
                    v-model="form.email"
                    type="email"
                    class="form-control vm-form-control"
                    placeholder="nombre@empresa.cl"
                    required
                  />
                </div>

                <div class="col-md-6">
                  <label class="form-label fw-semibold small text-dark">
                    Teléfono / Celular de Contacto <span class="text-vm-red">*</span>
                  </label>
                  <input
                    v-model="form.phone"
                    type="tel"
                    class="form-control vm-form-control"
                    placeholder="+56 9 XXXX XXXX"
                    required
                  />
                </div>

                <div class="col-md-7">
                  <label class="form-label fw-semibold small text-dark">
                    Servicio Técnico Requerido <span class="text-vm-red">*</span>
                  </label>
                  <select v-model="form.serviceInterest" class="form-select vm-form-control" required>
                    <option v-for="srv in servicesList" :key="srv.id" :value="srv.title">
                      {{ srv.number }}. {{ srv.title }}
                    </option>
                    <option value="Contrato de Mantenimiento Sintomático Integral">
                      Contrato de Mantenimiento Sintomático Integral (Múltiples Servicios)
                    </option>
                  </select>
                </div>

                <div class="col-md-5">
                  <label class="form-label fw-semibold small text-dark">
                    Nivel de Prioridad en Planta
                  </label>
                  <select v-model="form.urgencyLevel" class="form-select vm-form-control">
                    <option value="Programada / Preventiva">Programada / Preventiva</option>
                    <option value="Parada de Planta Próxima">Parada de Planta Próxima</option>
                    <option value="Urgencia / Equipo Crítico">Urgencia / Equipo Crítico</option>
                  </select>
                </div>

                <div class="col-md-6">
                  <label class="form-label fw-semibold small text-dark">
                    Cargo / Área
                  </label>
                  <input
                    v-model="form.rolePosition"
                    type="text"
                    class="form-control vm-form-control"
                    placeholder="Ej: Ing. Confiabilidad / Jefe Mantención"
                  />
                </div>

                <div class="col-md-6">
                  <label class="form-label fw-semibold small text-dark">
                    Ubicación de Faena o Planta
                  </label>
                  <input
                    v-model="form.locationFaena"
                    type="text"
                    class="form-control vm-form-control"
                    placeholder="Ej: Antofagasta, Calama, Mejillones, Salar"
                  />
                </div>

                <div class="col-12">
                  <label class="form-label fw-semibold small text-dark">
                    Descripción del Equipo o Requerimiento <span class="text-vm-red">*</span>
                  </label>
                  <textarea
                    v-model="form.message"
                    rows="3"
                    class="form-control vm-form-control"
                    placeholder="Indique tipo de equipo (molino, motor, ventilador, reductor, etc.), potencia o alcance requerido..."
                    required
                  ></textarea>
                </div>

                <div class="col-12 pt-2 d-flex flex-wrap gap-2">
                  <button
                    type="submit"
                    class="btn btn-vm-red btn-lg flex-grow-1 d-flex align-items-center justify-content-center gap-2"
                    :disabled="isSubmitting"
                  >
                    <span v-if="isSubmitting" class="spinner-border spinner-border-sm"></span>
                    <i v-else class="fa-solid fa-paper-plane"></i>
                    <span>{{ isSubmitting ? 'Registrando Solicitud...' : 'Enviar Solicitud de Cotización' }}</span>
                  </button>

                  <button
                    type="button"
                    class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-center gap-2"
                    @click="openWhatsAppWithQuote"
                    title="Enviar datos del formulario directo por WhatsApp"
                  >
                    <i class="fa-brands fa-whatsapp fs-5"></i>
                    <span>Cotizar vía WhatsApp</span>
                  </button>
                </div>
              </div>
            </form>

            <!-- Historial Reciente de Cotizaciones Guardadas en Sesión -->
            <div v-if="recentSubmissions.length > 0" class="mt-4 pt-3 border-top">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="small fw-bold text-secondary">
                  <i class="fa-solid fa-clock-rotate-left text-vm-blue me-1"></i>
                  Solicitudes registradas recientemente ({{ recentSubmissions.length }})
                </span>
              </div>
              <div class="d-flex flex-column gap-2">
                <div
                  v-for="item in recentSubmissions.slice(0, 2)"
                  :key="item.id"
                  class="p-2 rounded-3 bg-light border small d-flex justify-content-between align-items-center flex-wrap gap-2"
                >
                  <div>
                    <strong class="text-dark">{{ item.full_name }}</strong> ·
                    <span class="text-secondary">{{ item.company }}</span> —
                    <span class="badge bg-vm-blue">{{ item.service_interest }}</span>
                  </div>
                  <span class="badge bg-success">{{ item.status || 'Recibido' }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Columna Derecha: Datos Oficiales de Contacto (Pág. 13) y Mapa de Antofagasta -->
        <div class="col-lg-5">
          <div class="d-flex flex-column gap-4 h-100">
            <!-- Tarjeta Corporativa de Contacto Directo -->
            <div
              class="p-4 rounded-4 text-white shadow"
              style="background-color: #07133e; border-top: 4px solid #d91920;"
            >
              <div class="d-flex align-items-center gap-2 mb-3">
                <span class="badge bg-vm-red fw-bold">SEDE CENTRAL</span>
                <span class="small text-white-50">Antofagasta, II Región, Chile</span>
              </div>
              <h3 class="h4 fw-bold mb-4">Canales Directos VIBROMINE</h3>

              <div class="d-flex flex-column gap-3">
                <!-- Dirección -->
                <div class="d-flex align-items-start gap-3">
                  <div
                    class="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                    style="width: 44px; height: 44px; background: rgba(0, 34, 232, 0.35); color: #708dff;"
                  >
                    <i class="fa-solid fa-location-dot fs-5"></i>
                  </div>
                  <div>
                    <div class="small text-white-50">Dirección Comercial y Técnica</div>
                    <div class="fw-bold">{{ companyInfo.contact.address }}</div>
                    <div class="small text-vm-blue-light">{{ companyInfo.contact.city }} - {{ companyInfo.contact.country }}</div>
                  </div>
                </div>

                <!-- Teléfonos Oficiales -->
                <div class="d-flex align-items-start gap-3">
                  <div
                    class="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                    style="width: 44px; height: 44px; background: rgba(217, 25, 32, 0.28); color: #ff6b70;"
                  >
                    <i class="fa-solid fa-phone-volume fs-5"></i>
                  </div>
                  <div>
                    <div class="small text-white-50">Teléfonos Red Fija Antofagasta</div>
                    <div class="d-flex flex-wrap gap-3 mt-1">
                      <a
                        :href="`tel:${companyInfo.contact.phones[0].raw}`"
                        class="text-white fw-bold text-decoration-none font-mono-tech"
                      >
                        {{ companyInfo.contact.phones[0].display }}
                      </a>
                      <span class="text-white-50">/</span>
                      <a
                        :href="`tel:${companyInfo.contact.phones[1].raw}`"
                        class="text-white fw-bold text-decoration-none font-mono-tech"
                      >
                        {{ companyInfo.contact.phones[1].display }}
                      </a>
                    </div>
                  </div>
                </div>

                <!-- Email Oficial -->
                <div class="d-flex align-items-start gap-3">
                  <div
                    class="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                    style="width: 44px; height: 44px; background: rgba(0, 34, 232, 0.35); color: #708dff;"
                  >
                    <i class="fa-solid fa-envelope-open-text fs-5"></i>
                  </div>
                  <div>
                    <div class="small text-white-50">Correo Electrónico Corporativo</div>
                    <a
                      :href="`mailto:${companyInfo.contact.email}`"
                      class="text-vm-blue-light fw-bold text-decoration-none"
                    >
                      {{ companyInfo.contact.email }}
                    </a>
                  </div>
                </div>

                <!-- Sitio Web -->
                <div class="d-flex align-items-start gap-3">
                  <div
                    class="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                    style="width: 44px; height: 44px; background: rgba(255, 255, 255, 0.1); color: #ffffff;"
                  >
                    <i class="fa-solid fa-globe fs-5"></i>
                  </div>
                  <div>
                    <div class="small text-white-50">Portal Corporativo</div>
                    <div class="fw-bold font-mono-tech">{{ companyInfo.contact.website }}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mapa Interactivo de Hermógenes Alfaro 1098, Antofagasta -->
            <div class="rounded-4 overflow-hidden border shadow-sm bg-white flex-grow-1 d-flex flex-column">
              <div class="p-3 border-bottom d-flex justify-content-between align-items-center">
                <span class="fw-bold small text-dark">
                  <i class="fa-solid fa-map-pin text-vm-red me-1"></i>
                  Ubicación: Hermógenes Alfaro 1098, Antofagasta
                </span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Herm%C3%B3genes+Alfaro+1098,+Antofagasta,+Chile"
                  target="_blank"
                  rel="noopener"
                  class="btn btn-sm btn-vm-outline-blue py-1 px-2"
                >
                  Abrir en Google Maps
                </a>
              </div>
              <iframe
                :src="companyInfo.contact.googleMapsEmbed"
                width="100%"
                height="250"
                style="border: 0; flex-grow: 1; min-height: 240px;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación VIBROMINE en Hermógenes Alfaro 1098, Antofagasta"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
