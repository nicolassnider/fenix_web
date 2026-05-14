# 🥋 Academia Fenix - Sitio Web

Sitio web oficial de **Academia Fenix**, una escuela de Taekwondo ITF ubicada en Argentina. Construido con [Astro](https://astro.build/) y [Tailwind CSS](https://tailwindcss.com/).

Nuestra misión es proporcionar educación de artes marciales de clase mundial y promover los valores de respeto, disciplina y auto-mejora.

> **Nota:** Toda la documentación y comentarios en español. El código debe estar en inglés.

## 📋 Tabla de Contenido

- [Inicio Rápido](#inicio-rápido)
- [Características](#características)
- [Tecnología](#tecnología)
- [Configuración](#configuración)
  - [Requisitos Previos](#requisitos-previos)
  - [Instalación](#instalación)
  - [Variables de Entorno](#variables-de-entorno)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Desarrollo](#desarrollo)
- [Despliegue](#despliegue)
- [Colaboración](#colaboración)
- [Licencia](#licencia)

## 🚀 Inicio Rápido

```bash
# Clonar el repositorio
git clone https://github.com/yourusername/fenix_web.git
cd fenix_web

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

El sitio estará disponible en `http://localhost:3000`

## ✨ Características

- **🏠 Página de Inicio:** Introducción a Academia Fenix con últimas noticias y eventos
- **ℹ️ Página Sobre Nosotros:** Información de instructores, valores ITF y ubicación
- **📅 Página de Eventos:** Eventos y clases próximas (datos desde Firebase)
- **📰 Blog / Noticias:** Artículos, anuncios y consejos sobre entrenamiento
- **📧 Página de Contacto:** Formulario de contacto e información
- **📱 Diseño Responsivo:** Optimizado para dispositivos móviles y escritorio
- **⚡ Rendimiento:** Construcción estática con Astro para velocidad máxima

## 🛠️ Tecnología

| Tecnología | Propósito |
|-----------|----------|
| [Astro](https://astro.build/) | Framework estático |
| [Tailwind CSS](https://tailwindcss.com/) | Estilos |
| [TypeScript](https://www.typescriptlang.org/) | Tipado estático |
| [Firebase](https://firebase.google.com/) | Base de datos y backend |

## ⚙️ Configuración

### Requisitos Previos

- **Node.js** v22.12.0 o superior
- **npm** v10.0.0 o superior (o yarn)
- **Cuenta de Firebase**

### Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/yourusername/fenix_web.git
   cd fenix_web
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Configurar Firebase:
   - Crear un proyecto en [Firebase Console](https://console.firebase.google.com/)
   - Habilitar Firestore Database
   - Descargar credenciales y configurar en `src/firebase.js`

4. Crear archivo `.env`:
   ```bash
   cp .env.example .env.local
   ```

### Variables de Entorno

Configurar las siguientes variables en `.env.local`:

```env
PUBLIC_FIREBASE_API_KEY=tu_api_key
PUBLIC_FIREBASE_AUTH_DOMAIN=tu_domain
PUBLIC_FIREBASE_PROJECT_ID=tu_project_id
PUBLIC_FIREBASE_STORAGE_BUCKET=tu_bucket
PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
PUBLIC_FIREBASE_APP_ID=tu_app_id
```

## 📁 Estructura del Proyecto

```
fenix_web/
├── src/
│   ├── pages/                # Páginas públicas (rutas automáticas)
│   │   ├── index.astro      # Página de inicio
│   │   ├── about.astro      # Sobre nosotros
│   │   └── contact.astro    # Contacto
│   ├── components/          # Componentes Astro reutilizables
│   │   └── Welcome.astro
│   ├── layouts/             # Plantillas de diseño
│   │   └── Layout.astro
│   ├── assets/              # Imágenes y archivos estáticos
│   └── firebase.js          # Configuración de Firebase
├── public/                  # Archivos estáticos públicos
├── astro.config.mjs         # Configuración de Astro
├── tailwind.config.js       # Configuración de Tailwind
└── package.json             # Dependencias del proyecto
```

## 🧪 Desarrollo

### Comandos disponibles

```bash
# Servidor de desarrollo con hot reload
npm run dev

# Compilar para producción
npm run build

# Vista previa de la compilación
npm run preview

# Verificar sintaxis y tipos
npm run check

# Formatear código
npm run format

# Linter
npm run lint
```

## 🚀 Despliegue

### Opción 1: Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Opción 2: Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

### Opción 3: Firebase Hosting

```bash
firebase deploy
```

## 🤝 Colaboración

Toda contribución es bienvenida. Para contribuir:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Estándares de Código

- Código en **inglés**
- Documentación en **español**
- Usar **TypeScript** para tipado estático
- Seguir convenciones de [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

**Hecho con ❤️ en Academia Fenix**