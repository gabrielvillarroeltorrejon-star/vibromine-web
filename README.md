# ⚙️ VIBROMINE - Landing Page Corporativa (Vue 3 + Bootstrap 5 + Supabase + Vercel)

Sitio web corporativo de alto impacto para **VIBROMINE (SKM - Symptomatic Keen Maintenance / Servicio de Mantenimiento Sintomático de Equipos y Maquinarias en General)**, con sede en **Hermógenes Alfaro 1098, Antofagasta, Chile**.

Diseñado bajo el estándar visual industrial de [Treppco Chile](https://treppco.com/es-cl/), integrando toda la información técnica, certificaciones, cartera de clientes y fotografías reales de terreno de la presentación oficial de la empresa.

---

## 🛠️ Stack Tecnológico

- **Frontend Framework:** [Vue.js 3](https://vuejs.org/) (Composition API `<script setup>`) + [Vite](https://vitejs.dev/)
- **UI & Grid System:** [Bootstrap 5.3](https://getbootstrap.com/) + Variables CSS industriales personalizadas
- **Iconografía:** [Font Awesome 6](https://fontawesome.com/) (`@fortawesome/fontawesome-free`)
- **Base de Datos & Captura de Leads:** [Supabase](https://supabase.com/) (`@supabase/supabase-js`)
- **Despliegue Cloud:** [Vercel](https://vercel.com/) (`vercel.json` preconfigurado)
- **Control de Versiones:** Git & GitHub

---

## 📂 Estructura del Proyecto

```text
├── public/
│   ├── docs/
│   │   └── Brochure-Corporativo-VIBROMINE.pdf   # Presentación oficial descargable
│   ├── images/
│   │   └── services/                            # 32 fotografías reales extraídas del dossier de VIBROMINE
│   └── favicon.svg                              # Icono vectorial corporativo
├── src/
│   ├── assets/
│   │   └── styles.css                           # Sistema de diseño industrial estilo Treppco
│   ├── components/
│   │   ├── NavbarHeader.vue                     # Topbar informativa + Navbar sticky
│   │   ├── HeroSection.vue                      # Hero principal + Galería interactiva + Barra de métricas
│   │   ├── AboutSection.vue                     # Historia (24+ años), Misión, Visión y gráfico minero
│   │   ├── ServicesSection.vue                  # Los 8 servicios técnicos + Asistente de diagnóstico por síntomas
│   │   ├── ServiceDetailModal.vue               # Modal con galería de 3 fotos reales y alcance por servicio
│   │   ├── CertificationsSection.vue            # Certificaciones ISO 18436-2, ASNT SNT-TC-1A y NAS-410
│   │   ├── ClientsSection.vue                   # Cartera filtrable de 26 clientes mineros e industriales
│   │   ├── ContactQuoteSection.vue              # Formulario conectado a Supabase + Mapa de Antofagasta
│   │   └── FooterSection.vue                    # Pie de página corporativo + Botón flotante WhatsApp
│   ├── data/
│   │   └── vibromineData.js                     # Catálogo estructurado de datos de la empresa
│   ├── lib/
│   │   └── supabase.js                          # Cliente Supabase con modo fallback local automático
│   ├── App.vue                                  # Componente raíz
│   └── main.js                                  # Punto de entrada de la aplicación
├── supabase/
│   └── schema.sql                               # Script SQL para crear la tabla y políticas RLS en Supabase
├── .env.example                                 # Plantilla de variables de entorno
├── vercel.json                                  # Configuración de rutas y caché para Vercel
└── package.json
```

---

## 🚀 Instalación y Ejecución Local

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Compilar para producción:**
   ```bash
   npm run build
   ```

---

## 🗄️ Configuración de Supabase (Captura de Cotizaciones)

1. Crea un proyecto gratuito en [Supabase](https://supabase.com/).
2. Abre el **SQL Editor** en tu panel de Supabase, copia el contenido de [`supabase/schema.sql`](./supabase/schema.sql) y ejecútalo para crear la tabla `vibromine_leads` con seguridad RLS.
3. Copia el archivo `.env.example` a `.env` y agrega tus credenciales:
   ```env
   VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
   VITE_SUPABASE_ANON_KEY=tu-anon-key-publica
   ```
   *(Nota: Si aún no configuras el archivo `.env`, el formulario funciona automáticamente en modo demostración local y permite enviar la cotización directo al WhatsApp oficial de VIBROMINE).*

---

## 🌐 Despliegue en GitHub y Vercel

1. Sube este repositorio a tu cuenta de **GitHub**.
2. Ingresa a [Vercel](https://vercel.com/) e importa el repositorio desde GitHub.
3. En la sección **Environment Variables** de Vercel, añade `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`.
4. Haz clic en **Deploy**.
