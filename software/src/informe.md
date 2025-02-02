# Informe tecnico del proyecto

# Informe Técnico del Proyecto

## 1. Introducción

Este informe técnico detalla la estructura, tecnologías y funcionamiento del proyecto, que consiste en una aplicación web educativa desarrollada con React y TypeScript en el frontend, y Node.js con Express en el backend.

## 2. Estructura del Proyecto

El proyecto está dividido en dos partes principales:

### 2.1 Frontend (Directorio "software")

- Desarrollado con React, TypeScript y Vite
- Utiliza Tailwind CSS para estilos
- Estructura de directorios:
  - `src/`: Contiene el código fuente
    - `components/`: Componentes React reutilizables
    - `modulos/`: Módulos específicos de la aplicación
    - `assets/`: Recursos estáticos
  - `public/`: Archivos públicos accesibles directamente

### 2.2 Backend (Directorio "backend")

- Desarrollado con Node.js y Express
- Utiliza MySQL como base de datos
- Archivo principal: `server.js`

## 3. Tecnologías Utilizadas

### 3.1 Frontend

- React 18.2.0
- TypeScript 5.2.2
- Vite 5.2.0
- Tailwind CSS 3.4.17
- Axios para peticiones HTTP
- React Router para navegación

### 3.2 Backend

- Node.js
- Express 4.21.1
- MySQL 2.18.1
- CORS para manejo de solicitudes cross-origin
- JSON Web Token (JWT) para autenticación

## 4. Componentes Principales del Frontend

### 4.1 Registro (Registro.tsx)

- Maneja el registro de nuevos usuarios
- Utiliza un formulario con validación de datos
- Envía datos al backend para su procesamiento

### 4.2 Login (Login.tsx)

- Gestiona la autenticación de usuarios
- Interactúa con el backend para verificar credenciales

### 4.3 EjercicioInteractivo (EjercicioInteractivo.tsx)

- Componente para ejercicios interactivos
- Presenta oraciones con palabras faltantes y opciones de respuesta

### 4.4 Chatbot (Chatbot.tsx)

- Implementa funcionalidad de chat interactivo
- Posiblemente utiliza la API de Google AI (@google/generative-ai)

## 5. Funcionalidades del Backend

### 5.1 Conexión a Base de Datos

- Establece conexión con MySQL
- Maneja errores de conexión

### 5.2 Rutas API

- `/api/registro`: Procesa el registro de nuevos usuarios
- `/api/login`: Maneja la autenticación de usuarios

### 5.3 Middleware

- Utiliza CORS para permitir solicitudes cross-origin
- Parsea JSON en las solicitudes entrantes

## 6. Flujo de Datos y Funcionamiento

1. El usuario interactúa con la interfaz de React.
2. Los componentes React manejan la lógica de presentación y captura de datos.
3. Las solicitudes se envían al backend mediante Axios.
4. El servidor Express procesa las solicitudes, interactúa con la base de datos MySQL y devuelve respuestas.
5. El frontend actualiza la interfaz de usuario basándose en las respuestas del servidor.

## 7. Seguridad

- Uso de JWT para autenticación segura
- Implementación de CORS para controlar el acceso a recursos

## 8. Escalabilidad y Mantenimiento

- La estructura modular permite fácil expansión y mantenimiento
- El uso de TypeScript mejora la robustez y facilita la detección de errores

## 9. Conclusiones y Recomendaciones

- El proyecto implementa una arquitectura cliente-servidor moderna y eficiente
- Se recomienda implementar pruebas unitarias y de integración
- Considerar la implementación de un sistema de caché para mejorar el rendimiento

## 10. Anexos

- Diagramas de arquitectura (a ser añadidos)
- Documentación de API (a ser desarrollada)

# Informe de Proyecto Tecnológico: Software Educativo para el Aprendizaje de Inglés

## 1. Introducción

Este proyecto se centra en el desarrollo de una aplicación web educativa diseñada para facilitar el aprendizaje del idioma inglés. La plataforma combina tecnologías modernas de desarrollo web con principios pedagógicos avanzados para crear una experiencia de aprendizaje interactiva y efectiva.

## 2. Planteamiento del Problema

En la era digital actual, existe una creciente demanda de herramientas educativas en línea que sean efectivas, accesibles y atractivas para los estudiantes. Específicamente en el campo del aprendizaje de idiomas, se ha identificado una brecha entre los métodos tradicionales de enseñanza y las necesidades de los estudiantes modernos, quienes buscan:

1. Flexibilidad en el aprendizaje
2. Interactividad y retroalimentación inmediata
3. Adaptabilidad a diferentes estilos de aprendizaje
4. Integración de tecnologías modernas en el proceso educativo

Además, muchos estudiantes enfrentan dificultades para mantener la motivación y el compromiso a largo plazo en el aprendizaje de un nuevo idioma.

## 3. Objetivos

### 3.1 Objetivo General

Desarrollar una plataforma web educativa interactiva que facilite y mejore el proceso de aprendizaje del idioma inglés, utilizando tecnologías modernas y metodologías pedagógicas efectivas.

### 3.2 Objetivos Específicos

1. Implementar un sistema de ejercicios interactivos que cubran diferentes aspectos del aprendizaje del inglés (gramática, vocabulario, comprensión auditiva, etc.).
2. Integrar un chatbot inteligente para proporcionar asistencia personalizada y práctica conversacional.
3. Desarrollar un sistema de seguimiento del progreso del estudiante.
4. Crear una interfaz de usuario intuitiva y atractiva que fomente el compromiso del estudiante.
5. Implementar un sistema de autenticación seguro para gestionar cuentas de usuarios.

## 4. Metodología de Software Educativo de Pere Marquès

Se ha elegido la metodología de software educativo propuesta por Pere Marquès debido a su enfoque integral en el desarrollo de herramientas educativas digitales. Esta metodología se adapta perfectamente a nuestro proyecto por las siguientes razones:

1. **Enfoque centrado en el usuario**: La metodología de Marquès enfatiza la importancia de considerar las necesidades y características del usuario final (en este caso, los estudiantes de inglés) en todas las etapas del desarrollo.

2. **Integración de aspectos pedagógicos y tecnológicos**: Esta metodología proporciona un marco para equilibrar los objetivos educativos con las posibilidades tecnológicas, asegurando que el producto final sea tanto efectivo pedagógicamente como técnicamente robusto.

3. **Evaluación continua**: Marquès propone una evaluación constante del software durante su desarrollo, lo que permite ajustes y mejoras basados en retroalimentación real.

4. **Diseño de actividades interactivas**: La metodología ofrece pautas para el diseño de actividades educativas interactivas, que son fundamentales en nuestra plataforma de aprendizaje de idiomas.

5. **Consideración de aspectos motivacionales**: Este enfoque pone énfasis en crear elementos que mantengan la motivación del estudiante, crucial para el aprendizaje de idiomas a largo plazo.

## 5. Metodología de Desarrollo Incremental

Para el proceso de desarrollo de software, se ha optado por la metodología de desarrollo incremental. Esta elección se basa en las siguientes consideraciones:

1. **Flexibilidad y adaptabilidad**: El desarrollo incremental permite ajustar el proyecto basándose en la retroalimentación recibida en cada incremento, lo cual es crucial en un proyecto educativo donde la experiencia del usuario es fundamental.

2. **Entrega temprana de funcionalidades**: Esta metodología permite lanzar versiones funcionales del software más rápidamente, lo que es beneficioso para pruebas con usuarios reales y para obtener retroalimentación temprana.

3. **Gestión de riesgos**: Al desarrollar el software en incrementos, se pueden identificar y abordar los riesgos y problemas en etapas tempranas del proyecto.

4. **Priorización de características**: Permite desarrollar primero las funcionalidades más críticas o valiosas, asegurando que los aspectos core del software estén disponibles lo antes posible.

5. **Integración con la metodología educativa**: El desarrollo incremental se alinea bien con el enfoque de Marquès, permitiendo la evaluación y ajuste continuo del software educativo.

## 6. Conclusión

La combinación de la metodología de software educativo de Pere Marquès con el desarrollo incremental proporciona un marco sólido para la creación de nuestra plataforma de aprendizaje de inglés. Este enfoque nos permite desarrollar un producto que no solo es tecnológicamente avanzado, sino también pedagógicamente efectivo y centrado en las necesidades del usuario.

A medida que avancemos en el desarrollo, continuaremos evaluando y ajustando nuestro enfoque para asegurar que el producto final cumpla con los objetivos establecidos y proporcione una experiencia de aprendizaje valiosa y efectiva para los estudiantes de inglés.
