<script setup>
import { certificationsList, workflowSteps } from '../data/vibromineData'
</script>

<template>
  <section id="certificaciones" class="vm-cert-section py-5">
    <div class="container py-lg-4">
      <!-- Encabezado de Certificaciones -->
      <div class="text-center mx-auto mb-5" style="max-width: 740px;">
        <span
          class="badge px-3 py-2 rounded-pill mb-3 font-mono-tech bg-vm-red border border-white text-white"
        >
          <i class="fa-solid fa-certificate me-1"></i>ACREDITACIÓN Y CALIDAD NORMATIVA
        </span>
        <h2 class="display-6 fw-bold text-white mb-3">
          Personal Certificado bajo Estándares Internacionales
        </h2>
        <p class="text-white mb-0">
          La confiabilidad de un diagnóstico depende directamente de la calificación del analista.
          Nuestro equipo técnico cuenta con certificaciones internacionales vigentes para auditar,
          medir y certificar la condición de sus activos críticos.
        </p>
      </div>

      <!-- Tarjetas de las 3 Certificaciones Oficiales (Pág. 3 de la Presentación) -->
      <div class="row g-4 mb-5">
        <div v-for="cert in certificationsList" :key="cert.id" class="col-lg-4">
          <div
            class="vm-cert-card d-flex flex-column"
            :style="{ borderTopColor: cert.accentColor }"
          >
            <div class="d-flex justify-content-between align-items-center mb-4">
              <div
                class="rounded-4 d-flex align-items-center justify-content-center text-white shadow-sm"
                style="width: 60px; height: 60px; background-color: #0018e8;"
              >
                <i :class="[cert.icon, 'fs-3']"></i>
              </div>
              <div class="text-end">
                <span
                  class="badge text-white fw-bold font-mono-tech d-block mb-1"
                  :style="{ backgroundColor: cert.accentColor }"
                >
                  {{ cert.code }}
                </span>
                <span class="small fw-bold" :style="{ color: cert.accentColor }">
                  {{ cert.level }}
                </span>
              </div>
            </div>

            <h3 class="h5 fw-bold text-vm-blue mb-2">{{ cert.title }}</h3>
            <p class="small text-vm-red mb-3 fw-bold">{{ cert.organization }}</p>
            <p class="small text-secondary mb-0 flex-grow-1">
              {{ cert.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Metodología Operacional de 4 Etapas -->
      <div
        class="p-4 p-lg-5 rounded-4"
        style="background-color: #000c8a; border: 2px solid #ffffff; border-top: 5px solid #d91018;"
      >
        <div class="text-center mb-4">
          <h3 class="h4 fw-bold text-white mb-1">
            Protocolo de Trabajo SKM (Symptomatic Keen Maintenance)
          </h3>
          <p class="small text-white mb-0">
            Metodología estructurada para asegurar intervenciones seguras, trazables y sin tiempos muertos
          </p>
        </div>

        <div class="row g-4">
          <div v-for="(step, sIdx) in workflowSteps" :key="step.step" class="col-sm-6 col-lg-3">
            <div
              class="position-relative p-3 rounded-4 h-100 bg-white"
              :style="{ borderTop: sIdx % 2 === 0 ? '4px solid #0018e8' : '4px solid #d91018' }"
            >
              <div class="d-flex align-items-center justify-content-between mb-3">
                <span class="font-mono-tech fw-bold fs-4 text-vm-red">{{ step.step }}</span>
                <i :class="[step.icon, 'text-vm-blue fs-4']"></i>
              </div>
              <h4 class="h6 fw-bold text-vm-blue mb-2">{{ step.title }}</h4>
              <p class="small text-secondary mb-0">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
