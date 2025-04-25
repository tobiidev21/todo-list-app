# 📝 To-Do List App

Una aplicación de lista de tareas desarrollada con una arquitectura **fullstack moderna**:

- **Frontend:** Vite + React + Bun
- **Backend:** Strapi + Node.js (con npm)
- **Monorepo:** estructura unificada para frontend y backend

---

## 📁 Estructura del proyecto

```txt
to-do-list-app/
├── frontend/          # Aplicación React (Vite + Bun)
│   ├── bun.lockb
│   ├── index.html
│   ├── src/
│   └── ...
├── backend/           # API CMS Strapi (npm)
│   ├── package.json
│   ├── config/
│   ├── src/
│   └── ...
├── .gitignore         # Configurado para ambos entornos
├── package.json       # Scripts y configuración general (opcional)
└── README.md          # Este archivo
```

---

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/to-do-list-app.git
cd to-do-list-app
```

### 2. Configurar el backend

```bash
cd backend
npm install
```

### 3. Configurar el frontend

```bash
cd ../frontend
bun install
```

---

## 🧑‍💻 Desarrollo

### Levantar el backend (Strapi)

```bash
cd backend
npm run develop
```

> ⚠️ Asegúrate de tener una base de datos SQLite configurada o tu `.env` preparado.

### Levantar el frontend (Vite)

```bash
cd frontend
bun run dev
```

---

## 🔧 Comandos útiles

Desde la raíz podés ejecutar estos scripts si los agregás en el `package.json`:

```json
{
  "scripts": {
    "dev": "concurrently \"npm run dev --prefix backend\" \"bun run dev --prefix frontend\""
  },
  "devDependencies": {
    "concurrently": "^8.0.0"
  }
}
```

Instalá `concurrently` si aún no lo tenés:

```bash
npm install --save-dev concurrently
```

Entonces simplemente podés hacer:

```bash
npm run dev
```

---

## 📦 Build para producción

### Frontend

```bash
cd frontend
bun run build
```

### Backend

El backend normalmente no necesita build (es ejecutado como Node.js), pero si usás Strapi Cloud o despliegues, podés revisar la documentación oficial.

---

## 🧠 Notas adicionales

- El archivo `.gitignore` está adaptado para esta estructura.
- El frontend usa **Bun** por velocidad en desarrollo, pero puede adaptarse a `npm` si lo necesitás.
- Strapi requiere Node >=14 y <20. Verificá tu versión con `node -v`.

---

## 🧑‍🎓 Autor

**Tu Nombre**  
[GitHub](https://github.com/tu-usuario) | [LinkedIn](https://linkedin.com/in/tu-perfil)

---

## 📃 Licencia

MIT