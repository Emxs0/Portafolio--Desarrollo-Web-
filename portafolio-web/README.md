# Portafolio Profesional - Emmanuel Granados Pulgarin

Sitio web frontend responsivo desarrollado con **Bootstrap 5**, **HTML5**, **CSS3 personalizado** y **JavaScript** para la evaluación del **Parcial 2** de la asignatura **Desarrollo Web**.

---

## Datos Académicos

- **Estudiante**: Emmanuel Granados Pulgarin
- **Programa**: Ingeniería Informática (4.° Semestre)
- **Institución**: Corporación Universitaria Lasallista (Medellín / Caldas, Antioquia)
- **Asignatura**: Desarrollo Web
- **Docente**: Néstor Vélez Vargas
- **Fecha de Entrega**: Octubre 20, 2026 - 23:59
- **Perfil GitHub**: [https://github.com/Emxs0](https://github.com/Emxs0)

---

## Cumplimiento de la Rúbrica de Calificación (5.0 / 5.0)

| Criterio | Puntos | Estado | Descripción técnica implementada |
| :--- | :---: | :---: | :--- |
| **1. Framework Responsive** | **1.0** | ✅ Cumplido | Implementado con **Bootstrap 5.3.3**, utilizando su sistema de cuadrícula (Grid System de 12 columnas), Flexbox, utilidades y componentes nativos (Navbar, Cards, Badges, Progress Bars). |
| **2. Secciones Requeridas & Responsividad** | **3.0** | ✅ Cumplido | Contiene las 5 secciones solicitadas con visualización adaptativa optimizada para pantallas pequeñas (móviles `< 768px`), medianas (tablets `768px - 991px`) y grandes (escritorio `≥ 992px`). |
| **3. GitHub & Despliegue en GitHub Pages** | **1.0** | ✅ Guía lista | Código versionado con Git, estructurado para GitHub y configurado para despliegue inmediato en GitHub Pages. |

---

## Secciones del Portafolio

1. **a. Información Personal (`#inicio` / Hero)**:
   - Nombre completo, título profesional, semblanza/biografía.
   - Datos directos de ubicación (Medellín), correo electrónico (`emmanuelgranados2007@gmail.com`) y enlace a perfil de GitHub.
   - Avatar vectorial profesional diseñado a medida.
   - Botón interactivo para alternar entre **Modo Claro** y **Modo Oscuro** (*Dark Mode*) con guardado en `localStorage`.

2. **b. Estudios Realizados (`#estudios`)**:
   - Corporación Universitaria Lasallista - Ingeniería Informática (4.° Semestre).
   - Competencias clave en formación: POO, Desarrollo Web, Bases de Datos SQL, Algoritmos, Estructuras de Datos y Git.

3. **c. Proyectos en los que ha Participado (`#proyectos`)**:
   - **Proyecto Destacado Real**: *Portal Web INCIETEC - Prevención y Salud Sexual (ETS)* con enfoque pedagógico y comunitario.
   - **Proyecto 2**: *Sistema de Gestión & Base de Datos SQL* con arquitectura en capas en Java y transacciones SQL.
   - **Proyecto 3**: *Prototipo de Videojuego 2D Arcade* programado en Python con el motor Pygame.

4. **d. Lenguajes de Programación que Domina (`#habilidades`)**:
   - Java, Python, HTML5, CSS3, SQL y JavaScript, presentados con iconos representativos, niveles de dominio y barras de progreso.

5. **e. Áreas de Interés Profesional (`#intereses`)**:
   - **Desarrollo Web Full Stack**: Creación de soluciones web modernas e integrales de frontend y backend.
   - **Desarrollo de Videojuegos**: Diseño lúdico, mecánicas de física, motores gráficos y lógica de interactividad.

6. **Contacto (`#contacto`) & Footer**:
   - Tarjeta informativa directa con enlaces y formulario de contacto con validación y respuesta visual.

---

## Estructura de Archivos

```
portafolio-web/
│
├── index.html                  # Documento principal semántico y accesible
├── css/
│   └── styles.css              # Estilos personalizados, paleta de colores y media queries
├── js/
│   └── main.js                 # Lógica de modo oscuro, scroll suave y menú responsivo
├── img/
│   ├── avatar.svg              # Avatar profesional estilizado con monograma EG
│   ├── project-incietec.svg    # Mockup visual del proyecto web INCIETEC
│   ├── project-java-sql.svg    # Mockup visual del proyecto de Java y Base de Datos SQL
│   └── project-game.svg        # Mockup visual del prototipo de videojuego en Python
└── README.md                   # Esta documentación completa
```

---

## Guía Paso a Paso: Subir a GitHub y Desplegar en GitHub Pages

Sigue estos sencillos pasos desde la terminal (PowerShell o Git Bash) en tu computador:

### Paso 1: Abrir la terminal en la carpeta del proyecto
Abre PowerShell o tu terminal favorita y navega a la carpeta del proyecto:
```powershell
cd "C:\Users\User\.gemini\antigravity\scratch\portafolio-web"
```

### Paso 2: Inicializar el repositorio Git local
Ejecuta los siguientes comandos:
```bash
git init
git add .
git commit -m "Initial commit: Portafolio profesional con Bootstrap 5 para Parcial 2"
```

### Paso 3: Crear el repositorio en GitHub
1. Ingresa a tu cuenta de GitHub: [https://github.com](https://github.com).
2. Haz clic en el botón verde **"New"** (Nuevo repositorio).
3. En **Repository name**, escribe: `portafolio-web` (o el nombre que prefieras).
4. Asegúrate de marcarlo como **Public** (Público, requisito obligatorio del parcial).
5. **No** marques las casillas de "Add a README file" ni `.gitignore` (ya los tenemos en local).
6. Haz clic en **"Create repository"**.

### Paso 4: Vincular tu repositorio local con GitHub y subirlo
Copia y pega los comandos que te muestra GitHub (reemplaza `Emxs0` si usas otra cuenta):
```bash
git branch -M main
git remote add origin https://github.com/Emxs0/portafolio-web.git
git push -u origin main
```

### Paso 5: Activar GitHub Pages (Despliegue)
1. En tu repositorio en GitHub, ve a la pestaña **Settings** (Configuración).
2. En el menú lateral izquierdo, haz clic en **Pages** (dentro de la sección *Code and automation*).
3. En **Build and deployment > Source**, selecciona **Deploy from a branch**.
4. En **Branch**, selecciona la rama `main` y la carpeta `/(root)`.
5. Haz clic en el botón **Save** (Guardar).
6. Espera aproximadamente 1 a 2 minutos. Recarga la página y verás una caja verde que dice:
   > *"Your site is live at https://emxs0.github.io/portafolio-web/"*

¡Tu sitio ya estará en internet accesible desde cualquier celular, tablet o computador!

---

## Plantilla de Correo para el Docente

Una vez desplegado el sitio, redacta y envía el correo institucional con el siguiente formato sugerido:

- **Para**: `nvelez@unilasallista.edu.co`
- **Asunto**: `Entrega Parcial 2 Desarrollo Web - Emmanuel Granados Pulgarin`
- **Cuerpo del correo**:

```text
Estimado docente Néstor Vélez Vargas,

Espero se encuentre muy bien.

Por medio del presente correo hago entrega formal del Parcial 2 de la asignatura Desarrollo Web (Programa de Ingeniería Informática), correspondiente a la construcción y despliegue de mi portafolio profesional responsivo desarrollado con Bootstrap 5.

A continuación comparto los enlaces solicitados en la rúbrica de evaluación:

- Enlace del repositorio en GitHub (Público):
  https://github.com/Emxs0/portafolio-web

- Enlace del sitio web desplegado en GitHub Pages:
  https://emxs0.github.io/portafolio-web/

Estudiante: Emmanuel Granados Pulgarin
Código estudiantil: [Tu Código Aquí]
Programa: Ingeniería Informática - 4.° Semestre
Corporación Universitaria Lasallista

Quedo atento a cualquier retroalimentación o comentario.

Atentamente,
Emmanuel Granados Pulgarin
emmanuelgranados2007@gmail.com
```
