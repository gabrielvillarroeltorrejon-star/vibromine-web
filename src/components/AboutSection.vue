<script setup>
import { companyInfo } from '../data/vibromineData'
</script>

<template>
  <section id="nosotros" class="py-5">
    <div class="container py-lg-4">
      <div class="row align-items-center g-5">
        <!-- Columna Izquierda: Identidad Corporativa, Historia y Distribución Minera -->
        <div class="col-lg-6">
          <span class="vm-section-eyebrow">
            <i class="fa-solid fa-wave-square me-1"></i>Quiénes Somos · Identidad VIBROMINE
          </span>
          <h2 class="vm-section-title mb-3">
            Más de 24 años liderando el Mantenimiento Sintomático en el Norte de Chile
          </h2>

          <!-- Tarjeta de Sello Oficial con el Logo VIBROMINE -->
          <div class="p-3 rounded-4 border bg-white shadow-sm mb-4 d-flex align-items-center gap-3 flex-wrap">
            <svg
              style="height: 54px; width: auto;"
              viewBox="95 232 835 238"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Logo VIBROMINE"
            >
              <image href="/images/logo-vibromine.jpg" width="1024" height="764" />
            </svg>
            <div class="border-start ps-3 small text-secondary" style="flex: 1; min-width: 200px;">
              Sede central en <strong class="text-dark">Antofagasta</strong>, comprometidos con la máxima producción y confiabilidad operacional de nuestros clientes.
            </div>
          </div>

          <p class="text-secondary mb-4">
            En <strong class="text-vm-blue">VIBROMINE</strong> (<em class="text-vm-red fw-semibold">Servicio de Mantenimiento Sintomático</em>)
            combinamos instrumentación de diagnóstico no destructivo con más de dos décadas de experiencia en
            terreno, detectando anomalías mecánicas, eléctricas y estructurales antes de que comprometan la
            continuidad de su planta.
          </p>

          <!-- Indicador Visual de Participación en Minería (Datos Oficiales Presentación Pág. 3) -->
          <div class="p-4 rounded-4 mb-4" style="background: var(--vm-slate-50); border: 1px solid var(--vm-slate-200);">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="fw-bold text-dark small text-uppercase">
                <i class="fa-solid fa-chart-pie text-vm-blue me-2"></i>Distribución de Nuestros +1.600 Servicios
              </span>
              <span class="badge bg-vm-red font-mono-tech">Últimos 10 Años</span>
            </div>

            <div class="progress mb-3" style="height: 18px; border-radius: 50px;">
              <div
                class="progress-bar fw-bold"
                role="progressbar"
                style="width: 40%; background-color: #0022e8;"
                title="40% Empresas Mineras Directas"
              >
                40% Mineras
              </div>
              <div
                class="progress-bar fw-bold"
                role="progressbar"
                style="width: 45%; background-color: #d91920;"
                title="45% Empresas Vinculadas a la Minería"
              >
                45% Vinculadas a Minería
              </div>
              <div
                class="progress-bar fw-bold"
                role="progressbar"
                style="width: 15%; background-color: #07133e;"
                title="15% Industria General y Energía"
              >
                15%
              </div>
            </div>

            <div class="row g-2 small">
              <div class="col-sm-4 d-flex align-items-center gap-2">
                <span class="d-inline-block rounded-circle" style="width: 10px; height: 10px; background: #0022e8;"></span>
                <span><strong>40%</strong> Mineras Directas</span>
              </div>
              <div class="col-sm-5 d-flex align-items-center gap-2">
                <span class="d-inline-block rounded-circle" style="width: 10px; height: 10px; background: #d91920;"></span>
                <span><strong>45%</strong> Vinculadas a Minería</span>
              </div>
              <div class="col-sm-3 d-flex align-items-center gap-2">
                <span class="d-inline-block rounded-circle" style="width: 10px; height: 10px; background: #07133e;"></span>
                <span><strong>15%</strong> Otros Rubros</span>
              </div>
            </div>
          </div>

          <!-- Misión y Visión (Datos Oficiales Presentación Pág. 2) -->
          <div class="row g-3">
            <div class="col-md-6">
              <div class="p-4 rounded-4 h-100 border bg-white shadow-sm" style="border-top: 4px solid #0022e8 !important;">
                <div class="d-flex align-items-center gap-2 mb-2">
                  <i class="fa-solid fa-bullseye text-vm-blue fs-5"></i>
                  <h3 class="h5 fw-bold mb-0">Nuestra Misión</h3>
                </div>
                <p class="small text-secondary mb-0">
                  {{ companyInfo.mission }}
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-4 rounded-4 h-100 border bg-white shadow-sm" style="border-top: 4px solid #d91920 !important;">
                <div class="d-flex align-items-center gap-2 mb-2">
                  <i class="fa-solid fa-eye text-vm-red fs-5"></i>
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
                  style="aspect-ratio: 4 / 3;"
                />
                <span class="position-absolute bottom-0 start-0 m-2 badge bg-vm-blue">
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
                  style="aspect-ratio: 4 / 3;"
                />
                <span class="position-absolute bottom-0 start-0 m-2 badge bg-vm-red">
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
                  style="aspect-ratio: 4 / 3;"
                />
                <span class="position-absolute bottom-0 start-0 m-2 badge bg-vm-red">
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
                  style="aspect-ratio: 4 / 3;"
                />
                <span class="position-absolute bottom-0 start-0 m-2 badge bg-vm-blue">
                  Diagnóstico de Motores
                </span>
              </div>
            </div>
          </div>

          <!-- Banner de Compromiso Regional -->
          <div
            class="mt-3 p-3 rounded-4 d-flex align-items-center justify-content-between flex-wrap gap-3 text-white"
            style="background: linear-gradient(135deg, #040a24 0%, #07133e 65%, #0022e8 100%); border-left: 5px solid #d91920;"
          >
            <div class="d-flex align-items-center gap-3">
              <div class="rounded-circle p-3 text-white" style="background: rgba(217, 25, 32, 0.85);">
                <i class="fa-solid fa-map-location-dot fs-4"></i>
              </div>
              <div>
                <div class="fw-bold">Base Operativa en Antofagasta</div>
                <div class="small text-white-50">Despliegue rápido a Chuquicamata, Salar, Mejillones, El Salvador y Zona Norte</div>
              </div>
            </div>
            <a href="#cotizar" class="btn btn-sm btn-vm-red">
              Agendar Visita Técnica
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
