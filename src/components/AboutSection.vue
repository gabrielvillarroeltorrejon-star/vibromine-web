<script setup>
import { companyInfo } from '../data/vibromineData'
</script>

<template>
  <section id="nosotros" class="py-5">
    <div class="container py-lg-4">
      <div class="row align-items-center g-5">
        <!-- Columna Izquierda: Historia, Propósito y Distribución Minera -->
        <div class="col-lg-6">
          <span class="vm-section-eyebrow">
            <i class="fa-solid fa-industry me-1"></i>Quiénes Somos · ADN VIBROMINE
          </span>
          <h2 class="vm-section-title mb-3">
            Más de dos décadas garantizando la confiabilidad de activos en el Norte de Chile
          </h2>
          <p class="text-secondary mb-4">
            Con sede estratégica en <strong>Antofagasta</strong>, en <strong>VIBROMINE (SKM Symptomatic Keen Maintenance)</strong>
            somos especialistas en el <em>Servicio de Mantenimiento Sintomático de Equipos y Maquinarias en General</em>.
            Nuestra metodología combina instrumentación de diagnóstico de última generación con más de
            <strong>24 años de experiencia práctica en terreno</strong>, permitiendo anticipar fallas críticas y realizar
            correcciones de precisión directamente en faena.
          </p>

          <!-- Indicador Visual de Participación en Minería (Datos Oficiales Presentación Pág. 3) -->
          <div class="p-4 rounded-4 mb-4" style="background: var(--vm-slate-50); border: 1px solid var(--vm-slate-200);">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="fw-bold text-dark small text-uppercase">
                <i class="fa-solid fa-chart-pie text-info me-2"></i>Distribución Histórica de Nuestros +1.600 Servicios
              </span>
              <span class="badge bg-dark font-mono-tech">Últimos 10 Años</span>
            </div>

            <div class="progress mb-3" style="height: 16px; border-radius: 50px;">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 40%; background-color: #0b192c;"
                title="40% Empresas Mineras Directas"
              >
                40% Mineras
              </div>
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 45%; background-color: #00b4d8;"
                title="45% Empresas Vinculadas a la Minería"
              >
                45% Proveedores Mineros
              </div>
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 15%; background-color: #ff6b35;"
                title="15% Industria General y Energía"
              >
                15%
              </div>
            </div>

            <div class="row g-2 small">
              <div class="col-sm-4 d-flex align-items-center gap-2">
                <span class="d-inline-block rounded-circle" style="width: 10px; height: 10px; background: #0b192c;"></span>
                <span><strong>40%</strong> Mineras Directas</span>
              </div>
              <div class="col-sm-5 d-flex align-items-center gap-2">
                <span class="d-inline-block rounded-circle" style="width: 10px; height: 10px; background: #00b4d8;"></span>
                <span><strong>45%</strong> Vinculadas a Minería</span>
              </div>
              <div class="col-sm-3 d-flex align-items-center gap-2">
                <span class="d-inline-block rounded-circle" style="width: 10px; height: 10px; background: #ff6b35;"></span>
                <span><strong>15%</strong> Otros Rubros</span>
              </div>
            </div>
          </div>

          <!-- Misión y Visión (Datos Oficiales Presentación Pág. 2) -->
          <div class="row g-3">
            <div class="col-md-6">
              <div class="p-4 rounded-4 h-100 border bg-white shadow-sm">
                <div class="d-flex align-items-center gap-2 mb-2">
                  <i class="fa-solid fa-bullseye text-info fs-5"></i>
                  <h3 class="h5 fw-bold mb-0">Nuestra Misión</h3>
                </div>
                <p class="small text-secondary mb-0">
                  {{ companyInfo.mission }}
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-4 rounded-4 h-100 border bg-white shadow-sm">
                <div class="d-flex align-items-center gap-2 mb-2">
                  <i class="fa-solid fa-eye text-warning fs-5"></i>
                  <h3 class="h5 fw-bold mb-0">Nuestra Visión</h3>
                </div>
                <p class="small text-secondary mb-0">
                  {{ companyInfo.vision }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Columna Derecha: Collage de Intervenciones Reales de VIBROMINE -->
        <div class="col-lg-6">
          <div class="row g-3">
            <div class="col-6">
              <div class="rounded-4 overflow-hidden shadow-sm border position-relative">
                <img
                  src="/images/services/vibromine-real-02.jpg"
                  alt="Inspección de molinos VIBROMINE"
                  class="w-100 object-fit-cover"
                  style="height: 220px;"
                />
                <span class="position-absolute bottom-0 start-0 m-2 badge bg-dark bg-opacity-75">
                  Inspección en Molinos
                </span>
              </div>
            </div>
            <div class="col-6">
              <div class="rounded-4 overflow-hidden shadow-sm border position-relative mt-lg-4">
                <img
                  src="/images/services/vibromine-real-03.jpg"
                  alt="Alineamiento de acoplamientos en faena"
                  class="w-100 object-fit-cover"
                  style="height: 220px;"
                />
                <span class="position-absolute bottom-0 start-0 m-2 badge bg-dark bg-opacity-75">
                  Alineamiento en Planta
                </span>
              </div>
            </div>
            <div class="col-6">
              <div class="rounded-4 overflow-hidden shadow-sm border position-relative">
                <img
                  src="/images/services/vibromine-real-21.jpg"
                  alt="Nivelación topográfica en faena minera"
                  class="w-100 object-fit-cover"
                  style="height: 220px;"
                />
                <span class="position-absolute bottom-0 start-0 m-2 badge bg-dark bg-opacity-75">
                  Control Topográfico Minero
                </span>
              </div>
            </div>
            <div class="col-6">
              <div class="rounded-4 overflow-hidden shadow-sm border position-relative">
                <img
                  src="/images/services/vibromine-real-04.jpg"
                  alt="Medición vibracional de motores"
                  class="w-100 object-fit-cover"
                  style="height: 220px;"
                />
                <span class="position-absolute bottom-0 start-0 m-2 badge bg-dark bg-opacity-75">
                  Diagnóstico de Motores
                </span>
              </div>
            </div>
          </div>

          <!-- Banner de Compromiso Regional -->
          <div
            class="mt-3 p-3 rounded-4 d-flex align-items-center justify-content-between flex-wrap gap-3 text-white"
            style="background: linear-gradient(135deg, #0b192c 0%, #1e3a5f 100%);"
          >
            <div class="d-flex align-items-center gap-3">
              <div class="rounded-circle bg-info bg-opacity-25 p-3 text-info">
                <i class="fa-solid fa-map-location-dot fs-4"></i>
              </div>
              <div>
                <div class="fw-bold">Base Operativa en Antofagasta</div>
                <div class="small text-white-50">Despliegue rápido a Chuquicamata, Salar, Mejillones, El Salvador y todo el Norte</div>
              </div>
            </div>
            <a href="#cotizar" class="btn btn-sm btn-vm-primary">
              Agendar Visita Técnica
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
