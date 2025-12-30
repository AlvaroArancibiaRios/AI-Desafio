export interface Day {
  dayNumber: number;
  title: string;
  topics: string;
  courseLink?: string;
  courseTitle?: string;
  finalProject?: string[];
}

export interface Phase {
  id: number;
  title: string;
  meta: string;
  objective: string;
  days: Day[];
}

export interface ChallengeData {
  phases: Phase[];
}

export const challengeData: ChallengeData = {
  phases: [
    {
      id: 1,
      title: 'Mentalidad AI-Native',
      meta: 'Días 1-3',
      objective: 'Entender qué es ser AI-Native y empezar a usar AI todos los días.',
      days: [
        {
          dayNumber: 1,
          title: 'Qué es ser AI-Native',
          topics: 'Qué es IA, GenAI y LLMs · Qué problemas puede resolver hoy · Casos reales de productividad 10x',
          courseLink: 'https://platzi.com/cursos/introduccion-ai/',
          courseTitle: 'Curso de Introducción a la IA'
        },
        {
          dayNumber: 2,
          title: 'Pensar en prompts, no en herramientas',
          topics: 'Cómo piensa un modelo · Qué es un buen prompt · Estructura: rol, contexto, tarea, formato',
          courseLink: 'https://platzi.com/cursos/prompt-engineering/',
          courseTitle: 'Curso de Prompt Engineering'
        },
        {
          dayNumber: 3,
          title: 'Tu copiloto diario',
          topics: 'ChatGPT / Gemini / Claude como asistente personal · Pensamiento estratégico · Soporte de escritura y análisis',
          courseLink: 'https://platzi.com/cursos/chatgpt/',
          courseTitle: 'Curso de ChatGPT'
        }
      ]
    },
    {
      id: 2,
      title: 'Productividad y Creación',
      meta: 'Días 4-8',
      objective: 'Usar IA para crear, automatizar y producir más rápido.',
      days: [
        {
          dayNumber: 4,
          title: 'AI en el trabajo real',
          topics: 'Copilots en documentos, presentaciones y emails · IA como asistente de oficina',
          courseLink: 'https://platzi.com/cursos/365-copilot/',
          courseTitle: 'Curso de Microsoft 365 Copilot'
        },
        {
          dayNumber: 5,
          title: 'Crear sin programar',
          topics: 'Generar landings y páginas web con IA · Pensar en prototipos rápidos',
          courseLink: 'https://platzi.com/cursos/lovable/',
          courseTitle: 'Curso de Lovable'
        },
        {
          dayNumber: 6,
          title: 'Automatizar tareas repetitivas',
          topics: 'Qué es una automatización · Conectar herramientas con IA · Flujos básicos (trigger → acción → IA)',
          courseLink: 'https://platzi.com/cursos/n8n-lowcode/',
          courseTitle: 'Curso de Automatizaciones con n8n'
        },
        {
          dayNumber: 7,
          title: 'Crear imágenes con IA',
          topics: 'Modelos generativos de imagen · Prompting visual · Uso en marketing, branding y producto',
          courseLink: 'https://platzi.com/cursos/imagenes-ai/',
          courseTitle: 'Curso de Generación de Imágenes con IA'
        },
        {
          dayNumber: 8,
          title: 'Crear videos con IA',
          topics: 'Texto a video · Video para educación, marketing y redes · Pipelines simples de creación',
          courseLink: 'https://platzi.com/cursos/video-ai/',
          courseTitle: 'Curso de Creación de Videos con IA'
        }
      ]
    },
    {
      id: 3,
      title: 'Datos, Estrategia y Fundamentos',
      meta: 'Días 9-13',
      objective: 'Entender cómo funciona la IA por dentro y cómo usarla estratégicamente.',
      days: [
        {
          dayNumber: 9,
          title: 'IA + Datos',
          topics: 'Cómo la IA trabaja con datos · Limpieza, estructura y contexto · Casos de análisis asistido',
          courseLink: 'https://platzi.com/cursos/ai-datos/',
          courseTitle: 'Curso de AI para Manejo de Datos'
        },
        {
          dayNumber: 10,
          title: 'Estrategia con GenAI',
          topics: 'Dónde sí y dónde no usar IA · Casos empresariales reales · Liderar proyectos con IA',
          courseLink: 'https://platzi.com/cursos/estrategia-proyectos-ai/',
          courseTitle: 'Curso de Estrategia de Proyectos de Gen AI'
        },
        {
          dayNumber: 11,
          title: 'Cómo funcionan los LLMs',
          topics: 'Qué es un LLM · Tokens, embeddings, contexto · Limitaciones reales',
          courseLink: 'https://platzi.com/cursos/llms/',
          courseTitle: 'Curso de Fundamentos de LLMs'
        },
        {
          dayNumber: 12,
          title: 'Herramientas AI para Developers',
          topics: 'IDEs con IA · Debugging asistido · Productividad en código',
          courseLink: 'https://platzi.com/cursos/herramientas-ai-developers/',
          courseTitle: 'Curso de Herramientas AI para Developers'
        },
        {
          dayNumber: 13,
          title: 'Editores de código con IA',
          topics: 'Programar con IA como copiloto · Pair programming con modelos',
          courseLink: 'https://platzi.com/cursos/cursor/',
          courseTitle: 'Curso de Cursor AI Code Editor'
        }
      ]
    },
    {
      id: 4,
      title: 'Construcción Avanzada',
      meta: 'Días 14-18',
      objective: 'Construir sistemas reales con IA.',
      days: [
        {
          dayNumber: 14,
          title: 'RAG: IA con conocimiento propio',
          topics: 'Qué es RAG · Casos de uso reales (docs, PDFs, bases internas)',
          courseLink: 'https://platzi.com/cursos/rag/',
          courseTitle: 'Curso de RAG con Microsoft Azure'
        },
        {
          dayNumber: 15,
          title: 'MCP y arquitecturas modernas',
          topics: 'Qué es MCP · Conectar modelos, herramientas y datos',
          courseLink: 'https://platzi.com/cursos/mcp/',
          courseTitle: 'Curso de MCP con Microsoft Azure'
        },
        {
          dayNumber: 16,
          title: 'Usar la OpenAI API',
          topics: 'Llamadas a modelos · Tokens, costos y performance · Casos reales',
          courseLink: 'https://platzi.com/cursos/openai-api/',
          courseTitle: 'Curso de OpenAI API'
        },
        {
          dayNumber: 17,
          title: 'Crear chatbots reales',
          topics: 'Diseño conversacional · Memoria, contexto y flujos',
          courseLink: 'https://platzi.com/cursos/openai-api-23/',
          courseTitle: 'Curso de Desarrollo de Chatbots con OpenAI'
        },
        {
          dayNumber: 18,
          title: 'Agentes de IA',
          topics: 'Qué es un agente · Herramientas, decisiones y estados',
          courseLink: 'https://platzi.com/cursos/agentes-langgraph/',
          courseTitle: 'Curso de Agentes de AI con LangGraph'
        }
      ]
    },
    {
      id: 5,
      title: 'Profesional AI-Native',
      meta: 'Días 19-21',
      objective: 'Pensar como alguien que vive con IA todos los días.',
      days: [
        {
          dayNumber: 19,
          title: 'Observabilidad y control',
          topics: 'Medir agentes · Debugging de IA · Mejorar resultados',
          courseLink: 'https://platzi.com/cursos/observabilidad-ai/',
          courseTitle: 'Curso de Observabilidad de Agentes AI'
        },
        {
          dayNumber: 20,
          title: 'Integración total',
          topics: 'Conectar: Agentes + Automatizaciones + Datos + Interfaces · Repaso integrado (n8n + APIs + Agentes)',
          courseLink: 'https://platzi.com/cursos/n8n-lowcode/',
          courseTitle: 'Repaso: Cursos de n8n + APIs + Agentes'
        },
        {
          dayNumber: 21,
          title: 'Tu identidad AI-Native',
          topics: 'Mostrar tu proyecto · Documentar tu sistema · Pensar en el siguiente nivel profesional',
          finalProject: [
            'Un proyecto funcional con IA',
            'Un flujo AI-end-to-end',
            'Mentalidad AI-Native instalada'
          ]
        }
      ]
    }
  ]
};
