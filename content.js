// Archivo de Contenido para el Webinar: Tu Ecosistema Digital Rentable
// Contenido actualizado según el plan de sesión de 20 diapositivas.

const slideContent = [
  // Diapositiva 1: Portada de Bienvenida
  {
    template: 1,
    title: 'Tu Ecosistema Digital Rentable',
    content: '<h3>Menos Esfuerzo, Más Clientes</h3>',
    image: 'assets/images/portada.png', // SUGERENCIA: Usar una imagen dinámica y profesional
    background: '#FFFFFF'
  },

  // Diapositiva 2: ¿Estás aquí? El Dolor del Marketing Digital
  {
    template: 2,
    title: '¿Estás aquí?',
    content: `<h2><i class="fas fa-keyboard" style="color: var(--primary-color);"></i> Pon en el Chat:</h2>
              <p style="font-size: 1.5em; margin-top: 40px;">¿Cuál es tu mayor <strong>frustración</strong> con tu Marketing Digital AHORA MISMO?</p>`,
  },

  // Diapositiva 3: Nuestra Promesa Para Ti
  {
    template: 3,
    title: 'Mi Promesa para Ti Hoy',
    content: `<ul>
                <li>Saldrás con el <strong>MAPA EXACTO</strong> para elegir los canales que SÍ funcionan para tu negocio.</li>
                <li>Tendrás un <strong>plan de acción</strong> para empezar a usarlos...</li>
                <li><strong>...ESTA MISMA SEMANA.</strong></li>
              </ul>`,
    image: 'assets/images/promesa.png' // SUGERENCIA: Un ícono de mapa o brújula
  },

  // Diapositiva 4: ¿Quiénes Somos? Mi Empresa Crece
  {
    template: 3,
    title: '¿Quiénes Somos? Mi Empresa Crece',
    content: `<p>No somos teóricos, somos <strong>consultores</strong> que implementamos sistemas que generan <strong>resultados reales</strong>.</p>
              <p>Nuestra metodología se basa en la <strong>responsabilidad compartida</strong> para transformar tu negocio.</p>`,
    // NOTA: main.js soporta dos imágenes para esta plantilla
    image: 'assets/images/facilitador1.png', // SUGERENCIA: Foto del Facilitador 1
    image2: 'assets/images/facilitador2.png' // SUGERENCIA: Foto del Facilitador 2
  },

  // Diapositiva 5: El Programa "Consolida 360°"
  {
    template: 2,
    title: 'El Programa "Consolida 360°"',
    subtitle: 'Este webinar es una muestra de un sistema integral de transformación',
    content: `<div class="columns-wrapper" style="margin-top: 30px; align-items: stretch;">
                <div class="column">
                  <h3><i class="fas fa-users"></i> Pilar A: Equipos Autónomos</h3>
                </div>
                <div class="column" style="border: 4px solid var(--accent-color); border-radius: 15px; padding: 15px; transform: scale(1.05);">
                  <h3><i class="fas fa-bullseye"></i> Pilar B: Ecosistema de Ventas</h3>
                  <p><strong>(Hoy veremos una muestra de este pilar)</strong></p>
                </div>
                <div class="column">
                  <h3><i class="fas fa-coins"></i> Pilar C: Inversiones Inteligentes</h3>
                </div>
              </div>`
  },
  
  // Diapositiva 6: El Verdadero Problema
  {
    template: 1,
    title: 'El Verdadero Problema...',
    content: `<p>Intentar estar en todos lados es como entrar a una jungla <strong>sin mapa ni brújula.</strong></p>
              <p style="font-size: 1.5em;">El problema no eres tú, es que <strong>te falta el mapa.</strong></p>`,
    image: 'assets/images/jungla.png' // SUGERENCIA: Una imagen de una encrucijada o jungla
  },

  // Diapositiva 7: La Solución: Tu Ecosistema de Ventas Digitales
  {
    template: 3,
    title: 'La Solución: Tu Ecosistema de Ventas',
    content: `<p>Deja de pensar en "canales" aislados.</p>
              <p>Empieza a pensar en un <strong>SISTEMA INTELIGENTE</strong> donde cada pieza tiene un propósito.</p>
              <p>No tienes que estar en todos lados, sino en los <strong>lugares CORRECTOS para ti.</strong></p>`,
    image: 'assets/images/ecosistema.png' // SUGERENCIA: Un diagrama de flujo simple
  },

  // Diapositiva 8: El Mapa del Ecosistema Digital
  {
    template: 2,
    title: 'El Mapa del Ecosistema Digital',
    subtitle: 'Esta diapositiva vale oro: es tu brújula para tomar decisiones',
    content: `<p>Cada estrategia tiene un propósito, un tiempo de retorno y una inversión necesaria MUY diferentes.</p>`,
    image: 'assets/images/mapa-ecosistema.png' // IMPORTANTE: Imagen de la tabla "Mapa Ecosistema Digital"
  },

  // Diapositiva 9: El Filtro de Decisión
  {
    template: 2,
    title: 'El Filtro de Decisión: 3 Preguntas Clave',
    content: `<div class="columns-wrapper" style="margin-top: 30px;">
                <div class="column"><h3><i class="fas fa-user-check"></i> 1. ¿Dónde está mi cliente ideal?</h3></div>
                <div class="column"><h3><i class="fas fa-balance-scale"></i> 2. ¿Qué tiene mayor impacto vs. esfuerzo AHORA?</h3></div>
                <div class="column"><h3><i class="fas fa-battery-full"></i> 3. ¿Tengo la capacidad REAL (tiempo, dinero, habilidad)?</h3></div>
              </div>
              <p style="text-align: center; margin-top: 40px;">Ser <strong>honesto</strong> aquí te salva de empezar proyectos que morirán en un mes.</p>`
  },

  // Diapositiva 10: La Regla de Oro
  {
    template: 1,
    title: 'La Regla de Oro que te dará PAZ',
    content: `<div style="font-size: 10em; font-weight: bold; color: var(--primary-color); line-height: 1;">2</div>
              <h2 style="margin-top: 0;">MÁXIMO 2 CANALES</h2>
              <p>Domínenlos. Perfeciónenlos. Y solo entonces, piensen en un tercero.</p>`
  },
  
  // Diapositiva 11: Tu Primera Victoria Rápida
  {
    template: 2,
    title: 'Tu Primera Victoria: Set Inicial de 5 Contenidos',
    subtitle: 'No necesitas mil ideas, necesitas estas 5 piezas clave para arrancar.',
    content: `<ol style="font-size: 1.2em; margin-top: 20px;">
                <li>Post de <strong>Bienvenida</strong> (Tu historia, tu porqué).</li>
                <li>Producto/Servicio <strong>en Acción</strong> (Foto o video corto).</li>
                <li><strong>Testimonio</strong> Real de un Cliente.</li>
                <li><strong>Consejo Práctico</strong> / Mini Tutorial de Valor.</li>
                <li><strong>Invitación Clara</strong> a la Acción (CTA).</li>
              </ol>`
  },
  
  // Diapositiva 12: Mide lo que Importa
  {
    template: 1,
    title: 'Mide lo que Importa (Sin Abrumarte)',
    content: `<p>Define solo 3 indicadores clave para no liderar a ciegas.</p>
             <div class="columns-wrapper" style="margin-top: 30px;">
                <div class="column"><h3><i class="fas fa-users"></i> Visitas Calificadas</h3></div>
                <div class="column"><h3><i class="fas fa-exchange-alt"></i> Tasa de Conversión</h3></div>
                <div class="column"><h3><i class="fas fa-dollar-sign"></i> Costo por Lead (CPL)</h3></div>
              </div>`
  },

  // Diapositiva 13: El Sistema Completo
  {
    template: 1,
    title: 'El Sistema en Acción',
    content: `<h3>Mapa + Filtro + Regla de Oro + Contenido + Métricas</h3>
              <p style="margin-top: 40px;">Te hemos dado el "QUÉ". El verdadero reto es el "CÓMO" y el acompañamiento.</p>
              <h2 style="margin-top: 40px;">Escribe <strong style="color: var(--accent-color)">"SISTEMA"</strong> en el chat si quieres las herramientas completas.</h2>`,
    image: 'assets/images/sistema-completo.png' // SUGERENCIA: Un gráfico que una los conceptos
  },
  
  // Diapositiva 14: Taller Intensivo "Consolida 360°"
  {
    template: 3,
    title: 'Taller Intensivo: Consolida 360°',
    content: `<p>Para los que escribieron "SISTEMA":</p>
              <p>No es un curso para escuchar.</p>
              <p>Es un <strong>taller de CONSTRUCCIÓN</strong> para tu negocio.</p>`,
    image: 'assets/images/logo-programa.png' // SUGERENCIA: Logo del programa
  },

  // Diapositiva 15: La Construcción: Sesión por Sesión
  {
    template: 2,
    title: 'El Plan de Construcción',
    content: `<div class="columns-wrapper">
                <div class="column">
                  <h3><i class="fas fa-users"></i> Sesión A: El Piloto</h3>
                  <p>Crea un equipo proactivo y autónomo.</p>
                </div>
                <div class="column">
                  <h3><i class="fas fa-bullseye"></i> Sesión B: El Mapa</h3>
                  <p>Sales con tu Plan Maestro de Canal de 1 página.</p>
                </div>
                <div class="column">
                  <h3><i class="fas fa-coins"></i> Sesión C: El Combustible</h3>
                  <p>Tomas decisiones de inversión con certeza.</p>
                </div>
              </div>`
  },
  
  // Diapositiva 16: ¿Qué obtendrás en la Sesión B (Versión Completa)?
  {
    template: 3,
    title: 'La Sesión B fue solo la punta del Iceberg',
    content: `<p>Dentro del programa, no solo vemos el mapa, lo construimos con:</p>
              <ul>
                <li>Matriz de Priorización Inteligente</li>
                <li>Ficha de Cliente Ideal (Buyer Persona)</li>
                <li>Plan de Contenidos a fondo</li>
                <li>Diseño de tu primer Flujo de Captación</li>
              </ul>`,
    image: 'assets/images/iceberg.png' // SUGERENCIA: Imagen de un iceberg
  },

  // Diapositiva 17: La Oferta Irresistible
  {
    template: 2,
    title: 'La Oferta Irresistible',
    content: `<ul class="infographic-list" style="max-width: 80%;">
                <li><i class="fas fa-chalkboard-teacher"></i> <div><strong>3 Sesiones Taller en Vivo</strong></div></li>
                <li><i class="fas fa-file-alt"></i> <div><strong>Workbooks y Plantillas de Implementación</strong></div></li>
                <li><i class="fas fa-user-tie"></i> <div><strong>Sesión de Seguimiento 1 a 1 con un Consultor</strong></div></li>
              </ul>
              <h2 style="text-align: center; margin-top: 40px;">Valor Total: $5,690 MXN</h2>`
  },

  // Diapositiva 18: Tu Decisión: La Oferta Especial
  {
    template: 1,
    title: 'Oferta Especial para Asistentes',
    content: `<p style="font-size: 1.2em;">Precio Normal: <del>$5,690 MXN</del></p>
              <p style="margin-top: 30px;">Primeros 10 en inscribirse:</p>
              <h2 style="color: var(--secondary-color); font-size: 2em;">$4,190 MXN</h2>
              <p style="margin-top: 30px;">Si te inscribes en los próximos 15 minutos:</p>
              <h2 style="font-size: 3em; color: var(--accent-color);"><strong>$1,190 MXN</strong></h2>
              <p style="margin-top: 30px;">El enlace para inscribirte está en el chat.</p>`
  },

  // Diapositiva 19: Preguntas y Respuestas
  {
    template: 4,
    title: '¿Preguntas?',
    subtitle: '<p style="font-size: 0.8em;">La oferta especial termina pronto. El enlace de inscripción está en el chat.</p>'
  },
  
  // Diapositiva 20: Cierre y Último Llamado a la Acción
  {
    template: 1,
    title: 'Tu Decisión Final',
    content: `<h3>Seguir improvisando en la jungla vs. <strong>Instalar un Sistema con un Mapa.</strong></h3>
              <p style="margin-top: 60px;">Gracias por acompañarnos. A los que se unieron, ¡nos vemos dentro!</p>`,
    image: 'assets/images/cierre.png' // SUGERENCIA: Una imagen de un camino claro
  }
];
