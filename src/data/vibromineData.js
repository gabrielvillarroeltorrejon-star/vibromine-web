export const companyInfo = {
  name: 'VIBROMINE',
  acronym: 'SKM',
  englishSubtitle: 'Symptomatic Keen Maintenance',
  spanishSubtitle: 'Servicio de Mantenimiento Sintomático de Equipos y Maquinarias en General',
  tagline: 'Continuidad Operativa, Diagnóstico Predictivo y Confiabilidad para la Gran Minería e Industria',
  experienceYears: 24,
  servicesCountLast10Years: 1600,
  miningDirectPercentage: 40,
  miningRelatedPercentage: 45,
  totalMiningFocus: 85,
  mission:
    'Ser una empresa con la mejor asesoría a nuestros clientes a nivel regional, con servicios que respalden sus operaciones y que logren los mejores resultados en producción y confiabilidad de sus procesos.',
  vision:
    'Ser líder en la zona norte respaldando las operaciones de nuestros clientes. Ampliar constantemente nuestras áreas de servicios e investigaciones, teniendo como meta cubrir todos los requerimientos de nuestros clientes.',
  contact: {
    email: 'info.contacto@vibromine.cl',
    phones: [
      { display: '+56 55 2592504', raw: '+56552592504', label: 'Mesa Central 1' },
      { display: '+56 55 2592503', raw: '+56552592503', label: 'Mesa Central 2' }
    ],
    whatsapp: '56552592504',
    address: 'Hermógenes Alfaro 1098',
    city: 'Antofagasta',
    country: 'Chile',
    fullAddress: 'Hermógenes Alfaro 1098, Antofagasta - Chile',
    website: 'www.vibromine.cl',
    googleMapsEmbed:
      'https://www.google.com/maps?q=Herm%C3%B3genes+Alfaro+1098,+Antofagasta,+Chile&output=embed'
  },
  heroPhotos: [
    {
      src: '/images/services/vibromine-real-07.jpg',
      caption: 'Monitoreo y Análisis Vibracional en Planta Minera',
      tag: 'Análisis Predictivo'
    },
    {
      src: '/images/services/vibromine-real-13.jpg',
      caption: 'Alineamiento Láser de Precisión en Trenes de Potencia',
      tag: 'Precisión Láser'
    },
    {
      src: '/images/services/vibromine-real-02.jpg',
      caption: 'Inspección Estructural y Mantenimiento en Molinos',
      tag: 'Trabajo en Faena'
    },
    {
      src: '/images/services/vibromine-real-16.jpg',
      caption: 'Alineamiento Conjunto Piñón-Corona de Gran Envergadura',
      tag: 'Gran Minería'
    }
  ]
}

export const keyStats = [
  {
    value: '+24',
    unit: 'Años',
    label: 'De Trayectoria Comprobada',
    description: 'Aval de calidad técnica y respaldo continuo en el norte de Chile.',
    icon: 'fa-solid fa-calendar-check'
  },
  {
    value: '+1.600',
    unit: 'Servicios',
    label: 'Ejecutados en los últimos 10 años',
    description: 'Intervenciones exitosas en plantas concentradoras, fundiciones y faenas.',
    icon: 'fa-solid fa-screwdriver-wrench'
  },
  {
    value: '85%',
    unit: 'Minería',
    label: 'Foco Minero e Industrial',
    description: '40% en compañías mineras directas y 45% en empresas colaboradoras del sector.',
    icon: 'fa-solid fa-helmet-safety'
  },
  {
    value: '100%',
    unit: 'Certificados',
    label: 'Bajo Normas ISO & ASNT',
    description: 'Especialistas acreditados en Vibraciones Cat. II, Termografía y Ultrasonido.',
    icon: 'fa-solid fa-certificate'
  }
]

export const servicesList = [
  {
    id: 'analisis-vibraciones',
    number: '01',
    title: 'Análisis de Vibraciones',
    shortTitle: 'Análisis Vibracional',
    category: 'predictivo',
    categoryLabel: 'Monitoreo Predictivo',
    icon: 'fa-solid fa-wave-square',
    badge: 'ISO 18436-2 Cat. II',
    summary:
      'Técnica avanzada que permite, a través del análisis del espectro vibracional generado por el equipo en operación, la detección temprana de fallas incipientes sin detener la producción.',
    detailedDescription:
      'Mediante colectores y analizadores espectrales de alta resolución, evaluamos la condición dinámica de sus activos rotatorios en plena operación. Identificamos anomalías mecánicas, estructurales y electromagnéticas mucho antes de que provoquen una detención catastrófica.',
    detectionsTitle: 'Detección temprana de anomalías:',
    detections: [
      'Desalineamiento paralelo y angular en acoplamientos.',
      'Desbalanceo estático, de par y dinámico en rotores.',
      'Fallas prematuras o avanzadas en rodamientos y descansos.',
      'Problemas de desgaste, excentricidad o daño en engranes.',
      'Problemas dinámicos en equipos hidráulicos y neumáticos.',
      'Solturas mecánicas estructurales o de fundación.',
      'Deflexión o curvatura de ejes motrices.'
    ],
    benefits: [
      'Elimina paradas no programadas de alto costo.',
      'Permite planificar mantenciones con repuestos y ventanas acotadas.',
      'Incrementa la disponibilidad y confiabilidad de activos críticos.'
    ],
    images: [
      '/images/services/vibromine-real-07.jpg',
      '/images/services/vibromine-real-08.jpg',
      '/images/services/vibromine-real-09.jpg'
    ]
  },
  {
    id: 'balanceo-dinamico',
    number: '02',
    title: 'Balanceo Dinámico In-Situ (1 o 2 Planos)',
    shortTitle: 'Balanceo In-Situ',
    category: 'correctivo',
    categoryLabel: 'Corrección en Faena',
    icon: 'fa-solid fa-Compact-disc fa-spin-pulse',
    iconClass: 'fa-solid fa-fan',
    badge: '1 y 2 Planos en Terreno',
    summary:
      'Permite corregir el desbalanceo directamente en faena, sin una intervención invasiva o prolongada del equipo, evitando el costoso traslado del componente a taller.',
    detailedDescription:
      'El desbalanceo genera fuerzas centrífugas destructivas que fatigan rodamientos, sellos y estructuras de soporte. Nuestro servicio de Balanceo Dinámico In-Situ corrige la distribución de masa en uno o dos planos sobre el propio equipo montado en planta, reduciendo drásticamente los tiempos de indisponibilidad.',
    detectionsTitle: 'Equipos y componentes aplicables:',
    detections: [
      'Motores eléctricos de media y alta tensión.',
      'Machones de acoplamiento y poleas de transmisión.',
      'Rodetes de ventiladores industriales y sopladores.',
      'Impulsores en general, turbinas y rotores críticos.'
    ],
    benefits: [
      'Ahorro inmediato en desmontaje, grúas y transporte a taller.',
      'Compensación exacta bajo condiciones reales de operación y temperatura.',
      'Reducción inmediata de niveles de vibración y consumo energético.'
    ],
    images: [
      '/images/services/vibromine-real-10.jpg',
      '/images/services/vibromine-real-11.jpg',
      '/images/services/vibromine-real-12.jpg'
    ]
  },
  {
    id: 'alineamiento-laser-ejes',
    number: '03',
    title: 'Alineamiento Láser de Ejes',
    shortTitle: 'Alineamiento Láser',
    category: 'precision',
    categoryLabel: 'Alineación & Geometría',
    icon: 'fa-solid fa-crosshairs',
    badge: 'Tecnología Láser de Precisión',
    summary:
      'Evita que en el equipo se genere vibración destructiva que producirá desgaste acelerado en elementos de transmisión y falla prematura de rodamientos.',
    detailedDescription:
      'Más del 50% de las fallas en maquinaria rotatoria están directamente vinculadas a un mal alineamiento. Utilizamos sistemas de alineación láser de alta exactitud para garantizar la colinealidad de los ejes de transmisión dentro de tolerancias centesimales, protegiendo poleas, cadenas, correas, machones y descansos.',
    detectionsTitle: 'Tipos de alineamientos ejecutados:',
    detections: [
      'Alineamiento en ejes de máquinas horizontales.',
      'Alineamiento en ejes de máquinas verticales.',
      'Alineamiento integral en trenes de máquinas múltiples.',
      'Sistemas motrices de equipos con acople directo.',
      'Sistemas de transmisión por correas o por cadenas.'
    ],
    benefits: [
      'Extiende la vida útil de rodamientos, sellos mecánicos y acoplamientos.',
      'Disminuye las pérdidas por fricción y el consumo de energía eléctrica.',
      'Entrega de protocolo certificado antes y después de la corrección.'
    ],
    images: [
      '/images/services/vibromine-real-13.jpg',
      '/images/services/vibromine-real-14.jpg',
      '/images/services/vibromine-real-15.jpg'
    ]
  },
  {
    id: 'alineamiento-pinon-corona',
    number: '04',
    title: 'Alineamiento Conjunto Piñón-Corona',
    shortTitle: 'Piñón-Corona',
    category: 'precision',
    categoryLabel: 'Alineación & Geometría',
    icon: 'fa-solid fa-gears',
    badge: 'Molinos y Gran Minería',
    summary:
      'Realizado para obtener una adecuada transmisión en engranes abiertos de gran envergadura, manteniendo carga uniforme y diferencial térmico dentro de parámetros.',
    detailedDescription:
      'En molinos de bolas, molinos SAG, hornos rotatorios y tambores aglomeradores, la correcta geometría de engrane entre el piñón y la corona es vital. Ejecutamos el alineamiento integral controlando los parámetros mecánicos, geométricos y dinámicos del sistema de transmisión.',
    detectionsTitle: 'Parámetros y controles incluidos:',
    detections: [
      'Control y ajuste de parámetro Punta-Fondo (Root/Tip Clearance).',
      'Medición y regulación precisa de Backlash (juego entre dientes).',
      'Verificación de huella y porcentaje de Contacto entre flancos.',
      'Control Termográfico para asegurar diferencial térmico uniforme.',
      'Análisis Vibracional complementario del conjunto motriz.'
    ],
    benefits: [
      'Previene picaduras (pitting), desgaste prematuro y fractura de dientes.',
      'Garantiza distribución homogénea de carga a lo largo de todo el ancho del diente.',
      'Servicio integral: Geometría + Termografía + Vibraciones en una sola intervención.'
    ],
    images: [
      '/images/services/vibromine-real-16.jpg',
      '/images/services/vibromine-real-17.jpg',
      '/images/services/vibromine-real-18.jpg'
    ]
  },
  {
    id: 'nivelacion-topografica',
    number: '05',
    title: 'Nivelación Topográfica de Equipos',
    shortTitle: 'Nivelación Topográfica',
    category: 'precision',
    categoryLabel: 'Alineación & Geometría',
    icon: 'fa-solid fa-compass-drafting',
    badge: 'Control Dimensional',
    summary:
      'Técnica de alta precisión que permite realizar el control geométrico y corrección de nivel en equipos mineros e industriales de gran escala.',
    detailedDescription:
      'Las fundaciones y estructuras de grandes equipos mineros sufren asentamientos y deformaciones que alteran su eje de operación. Nuestro equipo realiza levantamientos y correcciones topográficas milimétricas para restituir la horizontalidad, pendiente y alineación estructural.',
    detectionsTitle: 'Aplicaciones en equipos e infraestructura:',
    detections: [
      'Control de nivel en Molinos de molienda.',
      'Secciones inclinadas u horizontales de Correas Transportadoras.',
      'Nivelación de Espesadores y puentes rastras.',
      'Nivel de Filtros de Banda y equipos de desaguado.',
      'Nivel de Tambores Aglomeradores.',
      'Nivel de Harneros vibratorios y Chancadores.',
      'Nivelación de estructuras metálicas y fundaciones en general.'
    ],
    benefits: [
      'Evita sobrecargas asimétricas en descansos y estructuras.',
      'Corrige desviaciones de cintas transportadoras y desgaste de polines.',
      'Asegura el montaje y comisionamiento bajo especificaciones OEM.'
    ],
    images: [
      '/images/services/vibromine-real-19.jpg',
      '/images/services/vibromine-real-20.jpg',
      '/images/services/vibromine-real-21.jpg'
    ]
  },
  {
    id: 'termografia-infrarroja',
    number: '06',
    title: 'Termografía Infrarroja',
    shortTitle: 'Termografía Infrarroja',
    category: 'predictivo',
    categoryLabel: 'Monitoreo Predictivo',
    icon: 'fa-solid fa-temperature-arrow-up',
    badge: 'ASNT SNT-TC-1A Nivel I',
    summary:
      'Herramienta no intrusiva para controles térmicos en equipos, análisis termográficos en sistemas y seguimientos para detectar anomalías mecánicas u operativas.',
    detailedDescription:
      'Toda falla eléctrica o fricción mecánica anómala se manifiesta inicialmente como una variación térmica. Mediante cámaras termográficas calibradas y especialistas certificados bajo norma ASNT SNT-TC-1A, inspeccionamos subestaciones, salas eléctricas y trenes mecánicos a distancia segura y en plena carga.',
    detectionsTitle: 'Fenómenos detectados mediante termografía:',
    detections: [
      'Falta o degradación de lubricación en descansos y reductores.',
      'Roce mecánico en frenos, acoplamientos y sellos.',
      'Problemas de conexiones eléctricas (puntos calientes, sulfatación).',
      'Sobrecarga mecánica o desbalance de fases eléctricas.',
      'Desgaste o daño en aislamiento térmico de contenedores y hornos.',
      'Verificación de nivel de flujos y obstrucciones en tuberías.',
      'Detección de fugas térmicas y filtraciones en líneas de proceso.'
    ],
    benefits: [
      'Previene incendios eléctricos y arcos voltaicos en tableros y CCM.',
      'Inspección 100% sin contacto físico ni interrupción de energía.',
      'Reportes termográficos con termogramas radiométricos y criticidad.'
    ],
    images: [
      '/images/services/vibromine-real-22.jpg',
      '/images/services/vibromine-real-23.jpg',
      '/images/services/vibromine-real-24.jpg'
    ]
  },
  {
    id: 'inspeccion-ultrasonica',
    number: '07',
    title: 'Inspección Ultrasónica de Equipos y Estructuras',
    shortTitle: 'Ultrasonido Estructural',
    category: 'end',
    categoryLabel: 'Ensayos No Destructivos (END)',
    icon: 'fa-solid fa-microscope',
    badge: 'ASNT Nivel II / NAS-410',
    summary:
      'Identificación de fallas o discontinuidades internas de componentes, medición de espesores e inspección de soldaduras para prevenir fallas catastróficas.',
    detailedDescription:
      'Mediante ondas ultrasónicas de alta frecuencia propagadas a través del material, evaluamos la integridad volumétrica de ejes, pernos críticos, estanques y uniones soldadas sin dañar la pieza. Nuestro personal cuenta con acreditación Nivel II bajo normas ASNT SNT-TC-1A y NAS-410.',
    detectionsTitle: 'Alcance técnico y aplicaciones:',
    detections: [
      'Detección de fisuras internas, porosidades o inclusiones en componentes.',
      'Control de continuidad e integridad de pernos en manto y tapas de Molinos.',
      'Medición ultrasónica de espesores en estanques, ductos y chutes.',
      'Identificación e inspección de indicaciones en soldaduras estructurales.',
      'Evaluación preventiva de ejes sometidos a fatiga cíclica.'
    ],
    benefits: [
      'Evita el corte inesperado de pernos de blindaje en molinos.',
      'Detecta grietas internas invisibles a la inspección visual o tintas penetrantes.',
      'Cumplimiento estricto con estándares internacionales de soldadura.'
    ],
    images: [
      '/images/services/vibromine-real-25.jpg',
      '/images/services/vibromine-real-26.jpg',
      '/images/services/vibromine-real-27.jpg'
    ]
  },
  {
    id: 'ultrasonido-aerotransportado',
    number: '08',
    title: 'Ultrasonido Aerotransportado',
    shortTitle: 'Ultrasonido Acústico',
    category: 'end',
    categoryLabel: 'Ensayos No Destructivos (END)',
    icon: 'fa-solid fa-ear-listen',
    badge: 'Eficiencia Energética & Eléctrica',
    summary:
      'Detección acústica de fugas en líneas de alta y baja presión y anomalías en componentes eléctricos para eliminar pérdidas económicas y riesgos.',
    detailedDescription:
      'Las fugas turbulentas de gases y las descargas parciales eléctricas emiten ondas ultrasónicas imperceptibles para el oído humano, aún en ambientes mineros de alto ruido industrial. Nuestros detectores direccionales traducen estas emisiones para localizar el punto exacto de falla.',
    detectionsTitle: 'Aplicaciones de detección ultrasónica:',
    detections: [
      'Detección de fugas en líneas de alta y baja presión.',
      'Inspección de redes de aire comprimido y líneas neumáticas.',
      'Control de estanqueidad en sistemas de aire acondicionado y gas.',
      'Detección de efecto corona, tracking y arco en componentes eléctricos.',
      'Cuantificación y eliminación de pérdidas económicas energéticas.'
    ],
    benefits: [
      'Reducción directa en costos de generación de aire comprimido y gases.',
      'Efectivo incluso en plantas ruidosas gracias al filtrado de frecuencia.',
      'Incrementa la seguridad en instalaciones de gas y tableros de media tensión.'
    ],
    images: [
      '/images/services/vibromine-real-30.jpg',
      '/images/services/vibromine-real-31.jpg',
      '/images/services/vibromine-real-05.jpg'
    ]
  }
]

export const symptomFinderItems = [
  {
    id: 'sym-1',
    symptom: 'Vibración excesiva o ruido en motor / reductor',
    icon: 'fa-solid fa-triangle-exclamation',
    recommendedServices: ['analisis-vibraciones', 'alineamiento-laser-ejes', 'balanceo-dinamico'],
    explanation: 'Evaluamos el espectro vibracional para aislar si el origen es rodamiento, desbalanceo o desalineación y lo corregimos en terreno.'
  },
  {
    id: 'sym-2',
    symptom: 'Desbalanceo de ventilador, rodete o impulsor en planta',
    icon: 'fa-solid fa-fan',
    recommendedServices: ['balanceo-dinamico', 'analisis-vibraciones'],
    explanation: 'Ejecutamos Balanceo Dinámico In-Situ en 1 o 2 planos sin desmontar el rotor ni enviarlo a taller.'
  },
  {
    id: 'sym-3',
    symptom: 'Desgaste o temperatura en transmisión de Molino (Piñón-Corona)',
    icon: 'fa-solid fa-gears',
    recommendedServices: ['alineamiento-pinon-corona', 'inspeccion-ultrasonica', 'termografia-infrarroja'],
    explanation: 'Ajustamos parámetros Punta-Fondo, Backlash y Contacto complementado con termografía, vibraciones y ultrasonido de pernos.'
  },
  {
    id: 'sym-4',
    symptom: 'Calentamiento en tableros eléctricos o descansos mecánicos',
    icon: 'fa-solid fa-fire-flame-curved',
    recommendedServices: ['termografia-infrarroja', 'ultrasonido-aerotransportado'],
    explanation: 'Inspección termográfica infrarroja y ultrasonido aerotransportado para detectar sobrecargas, falsos contactos o falta de lubricación.'
  },
  {
    id: 'sym-5',
    symptom: 'Desnivel en correas transportadoras, espesadores o chancadores',
    icon: 'fa-solid fa-ruler-combined',
    recommendedServices: ['nivelacion-topografica', 'alineamiento-laser-ejes'],
    explanation: 'Control y corrección topográfica de alta precisión para restituir la geometría operativa de equipos y estructuras.'
  },
  {
    id: 'sym-6',
    symptom: 'Sospecha de fisuras en ejes, soldaduras o pernos de molino',
    icon: 'fa-solid fa-magnifying-glass-chart',
    recommendedServices: ['inspeccion-ultrasonica'],
    explanation: 'Ensayo no destructivo (END) ultrasónico Nivel II para detectar discontinuidades internas y medir espesores.'
  }
]

export const certificationsList = [
  {
    id: 'cert-iso',
    code: 'ISO 18436-2',
    level: 'Category II',
    title: 'Certificación Internacional Vibration Analyst',
    organization: 'International Organization for Standardization (ISO)',
    description:
      'Acredita la competencia técnica internacional para configurar mediciones espectrales, diagnosticar fallas complejas en maquinaria rotatoria y definir acciones correctivas de alta precisión.',
    icon: 'fa-solid fa-wave-square',
    accentColor: '#4D6BFE'
  },
  {
    id: 'cert-termografia',
    code: 'ASNT SNT-TC-1A',
    level: 'Nivel I',
    title: 'Certificación en Termografía Infrarroja',
    organization: 'American Society for Nondestructive Testing (ASNT)',
    description:
      'Respalda la ejecución estandarizada de inspecciones térmicas cuantitativas y cualitativas en sistemas eléctricos de potencia y equipos mecánicos industriales.',
    icon: 'fa-solid fa-temperature-high',
    accentColor: '#FF4D54'
  },
  {
    id: 'cert-ultrasonido',
    code: 'ASNT SNT-TC-1A & NAS-410',
    level: 'Nivel II',
    title: 'Inspección Ultrasónica en Soldaduras y Componentes',
    organization: 'ASNT & National Aerospace Standard (NAS-410)',
    description:
      'Calificación de alto estándar para la calibración, evaluación e interpretación de discontinuidades internas en uniones soldadas, pernos de molinos y elementos estructurales.',
    icon: 'fa-solid fa-shield-halved',
    accentColor: '#6EA8FE'
  }
]

export const clientsList = [
  { name: 'Codelco Chile - División Chuquicamata', sector: 'mineria', highlight: true, tag: 'Gran Minería del Cobre', logo: '/images/clients/codelco.png' },
  { name: 'Codelco Chile - División El Salvador', sector: 'mineria', highlight: true, tag: 'Gran Minería del Cobre', logo: '/images/clients/codelco.png' },
  { name: 'Complejo Metalúrgico Altonorte S.A.', sector: 'mineria', highlight: true, tag: 'Fundición Metalúrgica', logo: '/images/clients/altonorte.png' },
  { name: 'SQM Salar S.A.', sector: 'litio', highlight: true, tag: 'Minería No Metálica & Litio', logo: '/images/clients/sqm.png' },
  { name: 'SQM Industrial S.A.', sector: 'litio', highlight: true, tag: 'Minería No Metálica', logo: '/images/clients/sqm.png' },
  { name: 'Albemarle Ltda.', sector: 'litio', highlight: true, tag: 'Líder Mundial en Litio', logo: '/images/clients/albemarle.png' },
  { name: 'Minera Meridian Ltda. (Yamana Gold)', sector: 'mineria', highlight: true, tag: 'Minería de Oro y Plata', logo: '/images/clients/yamana.png' },
  { name: 'Minera Las Cenizas S.A.', sector: 'mineria', highlight: false, tag: 'Mediana Minería', logo: '/images/clients/lascenizas.png' },
  { name: 'Guanaco Compañía Minera S.p.A.', sector: 'mineria', highlight: false, tag: 'Operación Minera', logo: '/images/clients/guanaco.png' },
  { name: 'Molyb Mejillones - Filial Codelco', sector: 'mineria', highlight: true, tag: 'Filial Codelco · Molibdeno', logo: '/images/clients/molyb.png' },
  { name: 'ENGIE Energía Chile S.A.', sector: 'energia', highlight: true, tag: 'Generación Eléctrica', logo: '/images/clients/engie.png' },
  { name: 'Sociedad GNL Mejillones S.A.', sector: 'energia', highlight: true, tag: 'Energía y Gas Natural', logo: '/images/clients/gnlm.png' },
  { name: 'Aguas de Antofagasta S.A.', sector: 'energia', highlight: false, tag: 'Sanitaria y Desalación', logo: '/images/clients/aguasantofagasta.png' },
  { name: 'Siemens S.A.', sector: 'industria', highlight: true, tag: 'Tecnología e Ingeniería', logo: '/images/clients/siemens.png' },
  { name: 'Metso Minerals (Chile) S.A.', sector: 'industria', highlight: true, tag: 'Equipos y Procesos Mineros', logo: '/images/clients/metso.png' },
  { name: 'David Brown Santasalo', sector: 'industria', highlight: false, tag: 'Sistemas de Transmisión', logo: '/images/clients/dbsantasalo.png' },
  { name: 'Moly-Cop Chile S.A.', sector: 'industria', highlight: false, tag: 'Suministros para Molienda', logo: '/images/clients/molycop.png' },
  { name: 'Howden Chile', sector: 'industria', highlight: false, tag: 'Ventilación Industrial', logo: '/images/clients/howden.png' },
  { name: 'BIO BIO Cementos S.A. (INACESA)', sector: 'industria', highlight: false, tag: 'Industria Cementera', logo: '/images/clients/inacesa.png' },
  { name: 'Ferrocarril de Antofagasta a Bolivia (FCAB)', sector: 'logistica', highlight: true, tag: 'Transporte Ferroviario Minero', logo: '/images/clients/fcab.png' },
  { name: 'FCAB Ingeniería y Servicios Ltda.', sector: 'logistica', highlight: false, tag: 'Mantenimiento Ferroviario', logo: '/images/clients/fcab.png' },
  { name: 'Algorta Norte S.A.', sector: 'litio', highlight: false, tag: 'Minería del Yodo', logo: '/images/clients/algorta.png' },
  { name: 'Maestranza Diesel S.A.', sector: 'industria', highlight: false, tag: 'Ingeniería y Fabricación', logo: '/images/clients/maestranzadiesel.png' },
  { name: 'PROMET Servicios S.p.A.', sector: 'industria', highlight: false, tag: 'Infraestructura Modular', logo: '/images/clients/promet.png' },
  { name: 'Sorena S.A.', sector: 'industria', highlight: false, tag: 'Metalurgia y Bronces', logo: '/images/clients/sorena.png' },
  { name: 'Vesol Ltda.', sector: 'industria', highlight: false, tag: 'Servicios Industriales', logo: '/images/clients/vesol.png' }
]

export const workflowSteps = [
  {
    step: '01',
    title: 'Levantamiento en Faena',
    description: 'Despliegue ágil de nuestros especialistas a su planta o yacimiento con instrumentación calibrada.',
    icon: 'fa-solid fa-truck-pickup'
  },
  {
    step: '02',
    title: 'Diagnóstico Sintomático (SKM)',
    description: 'Medición no intrusiva bajo condiciones reales de carga mediante vibraciones, termografía o ultrasonido.',
    icon: 'fa-solid fa-chart-line'
  },
  {
    step: '03',
    title: 'Corrección In-Situ',
    description: 'Ejecución de balanceo dinámico, alineamiento láser, ajuste piñón-corona o nivelación topográfica.',
    icon: 'fa-solid fa-Bullseye fa-crosshairs'
  },
  {
    step: '04',
    title: 'Informe de Confiabilidad',
    description: 'Entrega de reporte técnico trazable con espectros, termogramas, severidad normativa y recomendaciones.',
    icon: 'fa-solid fa-file-shield'
  }
]
