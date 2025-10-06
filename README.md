Presentación: Webinar - Rentabilidad de Inversiones Digitales para PyMEs
[cite_start]Este repositorio contiene el código fuente de la presentación web interactiva para el webinar **"Rentabilidad de Inversiones Digitales para PyMEs"**[cite: 2, 3].

[cite_start]El objetivo central de esta sesión es mostrar la inversión necesaria para construir un sistema de ventas digital escalable y financieramente blindado[cite: 4]. [cite_start]La presentación guía a los fundadores a transformar su inversión digital en un activo medible que proteja la rentabilidad y garantice la escalabilidad[cite: 28].

✨ Estructura del Proyecto
El proyecto está organizado de forma modular para separar el contenido de la estructura y la lógica, facilitando su mantenimiento.

/
|-- index.html          # Esqueleto principal de la presentación.
|-- content.js          # ¡IMPORTANTE! Aquí vive todo el texto de las diapositivas y la estructura de los 3 Pilares (Arquitectura, Benchmarks, Capital Humano).
|-- /assets/
|   |-- /css/
|   |   |-- custom.css  # Estilos visuales personalizados.
|   |-- /js/
|   |   |-- main.js     # Lógica que construye las diapositivas dinámicamente.
|   |-- /images/
|       |-- (Aquí deben colocarse las imágenes de tu presentación)
|-- README.md           # Este archivo.

🚀 Cómo Actualizar el Contenido (Foco en el Sistema A-B-C)
La principal ventaja de esta estructura es que no necesitas tocar el código HTML para cambiar los textos o las imágenes.

[cite_start]El enfoque de esta presentación es el marco de inversión **A-B-C (Arquitectura, Benchmarks y Capital Humano)**[cite: 38]. Para modificar cualquier diapositiva, sigue estos pasos:

1.  Abre el archivo **content.js**.
2.  Busca la diapositiva que deseas editar dentro del array `slideContent`. Cada objeto `{...}` en el array corresponde a una diapositiva.
3.  [cite_start]**Mindset:** La presentación enfatiza clasificar la inversión digital como **Inversión en Capital (CapEx)**, no como Gasto Operativo (OpEx)[cite: 30]. [cite_start]Asegúrate de que el contenido refuerce este cambio de lente financiero[cite: 43].
4.  [cite_start]**Métrica Clave:** Modifica los valores para asegurar que el contenido se alinee con el objetivo de lograr y mantener el **Balance LTV:CAC de 3 a 1**[cite: 31, 74].
5.  **Imágenes:** Sube tus imágenes a la carpeta `/assets/images/` y asegúrate de que la ruta en la propiedad `image` sea correcta (ej: `image: 'assets/images/mi-imagen.png'`).

🛠️ Despliegue
Este sitio está configurado para un despliegue continuo y automático a través de Netlify.

* **Repositorio:** Conectado a este repositorio de GitHub.
* **Publicación:** Cualquier cambio subido a la rama `main` disparará un nuevo despliegue en Netlify, actualizando el sitio en segundos.
* **Configuración:** No se requiere ninguna configuración de build. Netlify sirve los archivos estáticos directamente.

[cite_start]El propósito final es **transformar el esfuerzo digital en Flujo de Caja Operativo (FCO) positivo**, la base de la consolidación empresarial[cite: 38].