// Archivo de Contenido para el Webinar: Rentabilidad de Inversiones Digitales para PyMEs

const slideContent = [
  // Diapositiva 1: Portada
  {
    layout: 'layout-center-focus',
    title: 'Rentabilidad de nversiones Digitales',
    content: '<h3>Juntos construimos tu ruta digital en acción.</h3>',
    image: 'assets/images/slide-1.png',
    background: '#FFFFFF'
  },

  // Diapositiva 2: Nuestra Esencia
  {
    layout: 'layout-default h1-centered',
    title: 'Mi Empresa Crece: Nuestra Esencia',
    content: '<h3>Teorema, Metodología y Valor</h3>',
    image: 'assets/images/slide-2.png'
  },

  // Diapositiva 3: Pilares de Consolidación
  {
    layout: 'layout-default',
    title: 'Tu Programa de Transformación',
    content: `<h3>Los 3 Pilares de tu Consolidación</h3>
              <ul>
                <li>Pilar 1: Liderazgo y Disciplina</li>
                <li>Pilar 2: <strong>Ecosistema Digital de Ventas</strong>)</li>
                <li>Pilar 3: <strong>Inversiones Inteligentes</strong></li>
              </ul>`
  },

  // Diapositiva 4: Guías en el Viaje (Asume layout-split y uso de image2 para 2 fotos de facilitadores)
  {
    layout: 'layout-split reversed',
    title: 'Sus Guías en este Viaje',
    content: `<ul>
                <li>Aliados Expertos</li>
                <li>Garantía de Responsabilidad Compartida</li>
                <li>Implementación Estratégica</li>
              </ul>`,
    image: 'assets/images/facilitador-1.png',
    image2: 'assets/images/facilitador-2.png'
  },

  // Diapositiva 5: Slogan
  {
    layout: 'layout-center-focus',
    title: 'Inversión Inteligente en Canales Digitales',
    content: '<h3>Convierte el Gasto Digital en un Activo:<br>Tu Ruta Rápida Hacia la Rentabilidad Sostenible.</h3>'
  },

  // Diapositiva 6: CTA Inicial (CapEx)
  {
    layout: 'layout-center-focus',
    title: 'CTA Inicial: ¡El Primer Paso!',
    content: `<ul>
                <li><h3>Tu próximo gasto digital (CRM, Web):</h3></li>
                <li>Clasifícalo como <strong>Inversión en Capital (CapEx)</strong></li> 
                <li>No como Gasto Operativo (OpEx)</li>
                </ul>`,
  },

  // Diapositiva 7: La Tesis del Constructor (split para comparación)
  {
    layout: 'layout-split',
    title: 'La Tesis del Constructor',
    content: `<ul>
                <li><strong>Mentalidad 'Chef' (Sobrevivir):</strong> Improvista y gasta.</li>
                <li><strong>Mentalidad 'Constructor' (Prosperar):</strong> Genera Flujo de Caja Operativo (FCO) Positivo.</li>
                <li>Estrategia Clave: Enfoque limitado (Máximo 2 canales).</li>
              </ul>`,
    image: 'assets/images/constructor.png'
  },

  // Diapositiva 8: Arquitectura 1 (Web)
  {
    layout: 'layout-default h1-centered',
    title: 'Arquitectura 1: La Oficina 24/7 (Web)',
    content: '<h3>La Inversión Crítica:</h3><p>Tu Presencia Web Básica debe ser tratada como una <strong>inversión fija en infraestructura crítica (UX/UI)</strong>.</p>',
    image: 'assets/images/web-arquitectura.png'
  },

  // Diapositiva 9: Riesgo de Fricción
  {
    layout: 'layout-center-focus',
    title: 'Riesgo de Fricción',
    content: `<h2><i class='fas fa-exclamation-triangle' style='color: var(--accent-color);'></i> ROI Negativo</h2>
              <p>Si la Arquitectura Base falla, el <strong>88% del dinero de tu publicidad se desperdicia</strong>.</p>`
  },

  // Diapositiva 10: Arquitectura 2 (Set Inicial)
  {
    layout: 'layout-split',
    title: 'Arquitectura 2: El Set Inicial',
    content: `<ul>
                <li>Solución: Inversión en <strong>Contenido Inicial de Alto Valor</strong>.</li>
                <li>5 Piezas Fundamentales.</li>
                <li>Llamada a la Acción irresistible.</li>
              </ul>
              <p>Es el <strong>Activo Amortizable</strong> que eleva el engagement inicial.</p>`,
    image: 'assets/images/5-piezas.png'
  },
  
  // Diapositiva 11: La Arquitectura: Escalabilidad
  {
    layout: 'layout-split',
    title: 'La A de Arquitectura: Escalabilidad',
    content: `<ul>
                <li>Flujos simples <strong>Lead Magnet + Respuesta Automática</strong>.</li>
                <li>Reducción del CPL.</li>
              </ul>
              <p>Es el <strong>Activo Amortizable</strong> que eleva el engagement inicial.</p>`,
    image: 'assets/images/5-piezas.png'
  },

  // Diapositiva 12: Flujo
  {
    layout: 'layout-split',
    title: 'IA y Captación Rápida (El Flujo)',
    content: `<ul>
                <li>Solución: Inversión en <strong>Automatización</strong>.</li>
                <li>Infraestructura Elástica.</li>
                <li>Arquitectura Elástica.</li>
                <li>Disponibilidad 24/7.</li>
              </ul>
              `,
    image: 'assets/images/5-piezas.png'
  },

  // Diapositiva 13: RH
  {
    layout: 'layout-split',
    title: 'C de Capital Humano (La Inversión Más Rentable)',
    content: `<ul>
                <li>Retorno Garantizado<strong>en capacitación</strong>.</li>
                <li>Invertir en caputal humano.</li>
              </ul>
              `,
    image: 'assets/images/5-piezas.png'
  },

  // Diapositiva 14: Checkpoint Financiero (LTV:CAC)
  {
    layout: 'layout-center-focus',
    title: 'La B de Benchmarks: El Checkpoint Financiero',
    content: '<h2>El Único KPI Real: <strong>Ratio LTV:CAC</strong> (3 a 1)</h2><p>Un ratio deficiente condena al negocio a \'quemar caja\'.</p>'
  },
  
  // Diapositiva 15: Dilema CAC (split para comparación)
  {
    layout: 'layout-split',
    title: 'Dilema CAC: Velocidad vs. Sostenibilidad',
    content: `<div><h3>Velocidad (Ads)</h3><p>Usa Publicidad Pagada (Ads) para <strong>flujo de caja y velocidad inmediata</strong>.</p><hr></div>
              <div><h3>Sostenibilidad (Orgánico)</h3><p>Reinvierte el capital en <strong>activos orgánicos</strong> (SEO/Contenido).</p></div>`,
    image: 'assets/images/velocidad-sostenibilidad.png'
  },

  // Diapositiva 16: CTA Final
  {
    layout: 'layout-default h1-centered',
    title: 'El Próximo Paso: Tu Hoja de Ruta',
    content: `<h3><i class='fas fa-check-circle' style='color: var(--primary-color);'></i> Llamada a la Acción y Beneficio Final:</h3>
              <p>Define hoy tu <strong>canal prioritario</strong> y pon en marcha tu métrica <strong>LTV:CAC</strong>.</p>
              <p style='font-size: 1.5em; margin-top: 30px;'>La decisión de hoy lleva a la consolidación y a la libertad financiera.</p>`
  }
];