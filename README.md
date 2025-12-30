# Reto AI-Native 21 Días - Next.js

Una aplicación web interactiva para seguir el progreso del Reto AI-Native de Platzi, construida con Next.js, React y TypeScript.

## Características

- **Seguimiento de Progreso**: Marca cada día como completado y visualiza tu progreso en tiempo real
- **Fechas Personalizables**: Elige tu propia fecha de inicio y las fechas se calcularán automáticamente
- **Guardado Automático**: Tu progreso se guarda en localStorage
- **Diseño Responsivo**: Funciona perfectamente en dispositivos móviles y de escritorio
- **Animaciones**: Celebración con confetti al completar los 21 días
- **5 Fases de Aprendizaje**: Organizadas en categorías con objetivos claros

## Requisitos

- Node.js 18 o superior
- npm o yarn

## Instalación

```bash
# Clonar o descargar el proyecto
cd AI-Desafio

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Uso

### Marcar Días Completados
- Haz clic en el checkbox de cada día para marcarlo como completado
- El progreso se actualiza automáticamente

### Cambiar Fechas del Desafío
1. Haz clic en el botón "Cambiar fechas del desafío" en la sección de progreso
2. Selecciona tu fecha de inicio deseada
3. Haz clic en "Guardar Cambios"
4. Las fechas de todos los días se actualizarán automáticamente

### Reiniciar Progreso
- Haz clic en "Reiniciar progreso" en el pie de página
- Confirma la acción en el diálogo

## Estructura del Proyecto

```
AI-Desafio/
├── app/
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx            # Layout principal de la aplicación
│   └── page.tsx              # Página principal
├── components/
│   ├── ChallengeTracker.tsx  # Componente principal del desafío
│   └── DateSelector.tsx      # Selector de fechas
├── lib/
│   ├── challengeData.ts      # Datos de las fases y días del desafío
│   └── dateUtils.ts          # Utilidades para manejo de fechas
├── package.json
├── tsconfig.json
└── next.config.js
```

## Tecnologías Utilizadas

- **Next.js 16**: Framework de React con App Router
- **React 19**: Biblioteca de UI
- **TypeScript**: Tipado estático
- **CSS Modules**: Estilos con variables CSS

## Fases del Desafío

1. **Mentalidad AI-Native** (Días 1-3)
2. **Productividad y Creación** (Días 4-8)
3. **Datos, Estrategia y Fundamentos** (Días 9-13)
4. **Construcción Avanzada** (Días 14-18)
5. **Profesional AI-Native** (Días 19-21)

## Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construcción para producción
npm run build

# Iniciar servidor de producción
npm run start

# Linter
npm run lint
```

## Personalización

### Modificar los Datos del Desafío

Edita el archivo `lib/challengeData.ts` para cambiar:
- Títulos de fases
- Descripción de días
- Enlaces a cursos
- Objetivos de cada fase

### Modificar Estilos

Los estilos principales están en `app/globals.css`. Puedes personalizar:
- Colores (variables CSS en `:root`)
- Tipografía
- Espaciado
- Animaciones

## Licencia

Este proyecto está creado con fines educativos como parte del Reto AI-Native de Platzi.
