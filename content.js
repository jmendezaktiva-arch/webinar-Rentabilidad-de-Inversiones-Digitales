

// Archivo de Contenido para el Webinar: Consolida 360° (Reescrito)

const slideContent = [
  // Diapositiva 1: Portada (Guía 1 - BLOQUE 1: BIENVENIDA Y ENCUADRE)
  {
    layout: 'layout-center-focus',
    title: 'Dejar de Perseguir Ventas y Empezar a Construirlas',
    content: '<h2>"El secreto no es trabajar más, es trabajar con inteligencia."</h2><p><em></em></p>',
    image: 'assets/images/slide-1.png',
    background: '#FFFFFF'
  },

  // Diapositiva 2: Misión (Guía 2)
  {
    layout: 'layout-default',
    title: 'Nuestra Misión: Tu Crecimiento Sostenible',
    content: '<h2>"Construimos sistemas, no soluciones temporales."</h2>',
    image: 'assets/images/slide-2.png' // Imagen: Andamio sólido que soporta una planta.
  },

  // Diapositiva 3: Problema (Guía 3)
  {
    layout: 'layout-split',
    title: 'El Síndrome del "Esfuerzo Desconectado"',
    content: `<ul>
                <li><h3><strong>Canales Aislados</strong> = Esfuerzo Duplicado, Resultados Divididos.</h3></li>
                <li><h3>El problema no es tu equipo, es la falta de un sistema que los conecte.</h3></li>
              </ul>`,
    image: 'assets/images/slide-3.png' // Imagen: Diagrama de caos con flechas cruzadas.
  },

  // Diapositiva 4: La Solución (Guía 4)
  {
    layout: 'layout-default',
    title: 'Tu Hoja de Ruta para Hoy',
    content: `<div class="columns-4">
                <div><h3>Una radiografía honesta de tu motor de ventas.</h3></div>
                <div><h3>La identificación precisa de tu mayor fuga de recursos.</h3></div>
                <div><h3>Un medidor de predictibilidad sobre tu crecimiento.</h3></div>
                <div><h3>Claridad sobre la estructura que necesitas para escalar.</h3></div>
              </div>
              <p style="margin-top: 20px; font-size: 1.2em;"><strong>"Al final de esta sesión, tendrás:"</strong></p>`,
    image: 'assets/images/slide-4.png'
  },

  // Diapositiva 5: Pilar 1 - Cerebro (Guía 5 - BLOQUE 2: TALLER DE DIAGNÓSTICO INTERACTIVO)
  {
    layout: 'layout-default',
    title: 'Diagnóstico 1: La Balanza Rota',
    content: '<h2>"80% de tu esfuerzo, ¿genera solo el 20% de tus ventas? Descúbrelo ahora."</h2>',
    image: 'assets/images/slide-5.png'
  },

  // Diapositiva 6: Pilar 2 - Ecosistema (Guía 6)
  {
    layout: 'layout-split',
    title: 'Diagnóstico 2: El Iceberg de la Rentabilidad',
    content: '<h3>Lo que facturas es solo la punta. ¿Sabes qué hay debajo?</h3>',
    image: 'assets/images/slide-6.png'
  },

  // Diapositiva 7: Dato Impactante (Guía 7)
  {
    layout: 'layout-center-focus',
    title: 'Diagnóstico 3: El Botón del Crecimiento',
    content: '<h2>"¿Tienes un sistema predecible o una máquina de apuestas?"</h2>',
    image: 'assets/images/slide-7.png'
  },

  // Diapositiva 8: Pilar 3 - Velocidad (Guía 8)
  {
    layout: 'layout-split',
    title: 'El Techo de Cristal Invisible',
    content: '<h3>Cuando el esfuerzo deja de generar resultados, no es falta de ganas. Es falta de sistema.</h3>',
    image: 'assets/images/slide-8.png' // Imagen: Velocímetro o reloj
  },

  // Diapositiva 9: KPI (Guía 9)
  {
    layout: 'layout-center-focus',
    title: 'Diagnóstico 4: ¿Quién Pilota el Avión?',
    content: '<h2>"Un gran sistema sin un piloto estratégico es un avión en tierra."</h2>',
    image: 'assets/images/slide-9.png' // Imagen: Gráfico de balance
  },

  // Diapositiva 10: Hoja de Ruta (Guía 10)
  {
    layout: 'layout-default',
    title: 'El Diagnóstico es Claro. La Solución También.',
    content: '<h2>De un sistema reactivo a un ecosistema proactivo.</h2>',
    image: 'assets/images/slide-10.png' // Imagen: Infografía de 4 pasos
  },
  
  // Diapositiva 11: Sistema Completo (Guía 11 - BLOQUE 3: CIERRE Y LLAMADO A LA ACCIÓN)
  {
    layout: 'layout-center-focus',
    title: 'Presentamos: El Sistema Consolida 360°',
    content: `<h2>El "CÓMO" que transforma tu negocio en 30 días.</h2>
              <p style="margin-top: 20px; font-size: 1.2em;">No es un curso de teoría. Es una hoja de ruta de implementación guiada.</p>
              <div class="icon-grid" style="margin-top: 40px;">
              </div>`,
    image: 'assets/images/slide-11.png'
  },
  
  // Diapositiva 12: Es para ti (Guía 12)
  {
    layout: 'layout-default',
    title: '¿Es para ti? Si respondes SÍ a esto:',
    content: `<ul style="list-style-type: disc; margin-left: 20px;">
                <li>☑️ ¿Estás listo para dejar de 'apagar incendios' y empezar a construir?</li>
                <li>☑️ ¿Buscas un sistema que te dé control y predictibilidad?</li>
                <li>☑️ ¿Quieres que cada peso invertido en ventas tenga un retorno medible?</li>
              </ul>`,
    image: 'assets/images/slide-12.png' // Imagen: Diseño de checklist
  },

  // Diapositiva 13: La Oferta (Guía 13)
  {
    layout: 'layout-center-focus',
    title: 'Toma el Control de tu Crecimiento. Hoy.',
    image: 'assets/images/slide-13.png' // Imagen: Diseño orientado a la conversión
  },

  // Diapositiva 14: Q&A (Guía 14)
  {
    layout: 'layout-center-focus',
    title: '¿Dudas? Estamos aquí para resolverlas.',
    content: `<h2>"Tu pregunta puede ser la clave para otro líder. ¡Adelante!"</h2>
              <p style="margin-top: 30px;"></p>`,
    image: 'assets/images/slide-14.png'
  }
];
