# 🖥️ APV - Cliente Frontend (React)

Interfaz de usuario moderna y reactiva para el **Administrador de Pacientes de Veterinaria**. Esta aplicación se conecta a una API REST personalizada para gestionar la administración de una clínica.

### 🌐 [Ver Demo en Vivo (Netlify)](mernavp.netlify.app)

---

## 🛠️ Tecnologías y Herramientas
- **Framework:** [React.js](https://reactjs.org) (Vite)
- **Estado y Navegación:** React Router DOM & Context API.
- **Estilos:** [Tailwind CSS](https://tailwindcss.com) (Diseño totalmente responsive).
- **HTTP Client:** [Axios](https://axios-http.com) para el consumo de la API.
- **Despliegue:** Netlify con integración continua (CI/CD).

## 📋 Funcionalidades Clave
- **Gestión de Sesiones:** Autenticación basada en JWT almacenado de forma segura.
- **Panel de Administración:** CRUD completo de pacientes (Crear, Editar, Eliminar y Visualizar).
- **Confirmación de Cuentas:** Flujo de validación mediante tokens enviados por email.
- **Formularios Dinámicos:** Validaciones en tiempo real para mejorar la experiencia de usuario (UX).

## 💻 Configuración Local
1. Clona el repositorio:
   ```bash
   git clone https://github.com
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Crea un archivo `.env` y añade la URL de tu backend:
   ```env
   VITE_BACKEND_URL=https://tu-app-en-render.com
   ```
4. Inicia el proyecto:
   ```bash
   npm run dev
   ```

---
📡 **Backend Repositorio:** https://github.com/AdrianLuqueGit/apv_backend_deploy
