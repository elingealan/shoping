# Nova Commerce

E-commerce moderno desarrollado con **React + Vite**, diseñado con una arquitectura basada en componentes, responsive y preparada para crecer sin tener que reestructurar todo el proyecto.

El objetivo del proyecto es mantener una separación clara entre **interfaz, componentes, datos y estilos**, facilitando el mantenimiento y la incorporación de nuevas funcionalidades.

---

## 🚀 Características

* 🛍️ Catálogo de productos
* 🔎 Buscador de productos
* 🗂️ Filtrado por categorías
* 🛒 Carrito de compras
* ➕ Agregar productos al carrito
* ➖ Modificar cantidad de productos
* 🗑️ Eliminar productos del carrito
* 📱 Diseño completamente responsive
* 💻 Adaptado para escritorio, tablet y dispositivos móviles
* 🧩 Arquitectura basada en componentes reutilizables
* 🎨 Sistema de variables CSS
* ⚡ Desarrollo con Vite
* 📦 Datos de productos separados de la interfaz
* 🔧 Estructura preparada para futuras integraciones con backend

---

## 🛠️ Tecnologías

| Tecnología | Uso                               |
| ---------- | --------------------------------- |
| React      | Construcción de la interfaz       |
| Vite       | Herramienta de desarrollo y build |
| JavaScript | Lógica de la aplicación           |
| CSS3       | Diseño y responsive               |
| HTML5      | Estructura semántica              |
| Git        | Control de versiones              |

---

## 📁 Arquitectura del proyecto

```text
ecommerce-react/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   │
│   │   ├── common/
│   │   │   └── Componentes reutilizables
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── CartDrawer.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── Categories.jsx
│   │       ├── Products.jsx
│   │       ├── Benefits.jsx
│   │       └── Newsletter.jsx
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── styles/
│   │   └── index.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
└── README.md
```

---

## 🧩 Arquitectura basada en componentes

El proyecto evita concentrar toda la lógica dentro de `App.jsx`.

La aplicación está dividida en componentes independientes:

```text
App
│
├── Navbar
│
├── Hero
│
├── Categories
│
├── Products
│   └── ProductCard
│
├── Benefits
│
├── Newsletter
│
├── CartDrawer
│
└── Footer
```

Esto permite modificar una sección sin afectar innecesariamente al resto de la aplicación.

---

## 📦 Gestión de productos

Los productos se mantienen separados de los componentes.

```text
src/
└── data/
    └── products.js
```

Ejemplo:

```javascript
export const products = [
  {
    id: 1,
    name: "Auriculares Pro",
    category: "Tecnología",
    price: 1299,
    image: "/products/headphones.webp"
  }
];
```

Esto permite agregar nuevos productos sin modificar directamente la estructura visual del catálogo.

---

## 🛒 Carrito

El carrito permite:

* Agregar productos.
* Incrementar cantidades.
* Reducir cantidades.
* Eliminar productos.
* Calcular subtotales.
* Calcular el total.
* Mostrar la cantidad total de productos.

La interfaz del carrito está separada del catálogo para mantener responsabilidades independientes.

---

## 📱 Responsive Design

El diseño utiliza un enfoque responsive para adaptarse a diferentes tamaños de pantalla.

### Desktop

```text
┌────────────────────────────────────────────┐
│                  NAVBAR                    │
├────────────────────────────────────────────┤
│                    HERO                    │
├────────────────────────────────────────────┤
│              CATEGORÍAS                    │
├────────────────────────────────────────────┤
│                                             │
│       PRODUCTO    PRODUCTO    PRODUCTO      │
│                                             │
├────────────────────────────────────────────┤
│                 BENEFICIOS                  │
├────────────────────────────────────────────┤
│                NEWSLETTER                   │
├────────────────────────────────────────────┤
│                  FOOTER                     │
└────────────────────────────────────────────┘
```

### Mobile

```text
┌───────────────────┐
│      NAVBAR       │
├───────────────────┤
│       HERO        │
├───────────────────┤
│    CATEGORÍAS     │
├───────────────────┤
│     PRODUCTO      │
├───────────────────┤
│     PRODUCTO      │
├───────────────────┤
│     PRODUCTO      │
├───────────────────┤
│     BENEFICIOS    │
├───────────────────┤
│     NEWSLETTER    │
├───────────────────┤
│      FOOTER       │
└───────────────────┘
```

El layout utiliza `CSS Grid`, `Flexbox`, `gap`, `minmax()` y unidades relativas para evitar depender de posiciones absolutas.

---

## 🎨 Sistema de estilos

El proyecto utiliza variables CSS para centralizar valores importantes:

```css
:root {
  --primary-color: ...;
  --background-color: ...;
  --text-color: ...;
  --border-color: ...;

  --radius-sm: ...;
  --radius-md: ...;
  --radius-lg: ...;

  --spacing-sm: ...;
  --spacing-md: ...;
  --spacing-lg: ...;
}
```

Esto permite modificar la identidad visual del proyecto desde un solo lugar.

Por ejemplo:

```css
.card {
  border-radius: var(--radius-md);
}
```

En lugar de repetir valores en diferentes componentes.

---

# ⚙️ Instalación

## 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/nova-commerce.git
```

## 2. Entrar al proyecto

```bash
cd nova-commerce
```

## 3. Instalar dependencias

```bash
npm install
```

## 4. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

Vite mostrará una dirección similar a:

```text
http://localhost:5173
```

Abre esa dirección en tu navegador.

---

# 🏗️ Build para producción

Para generar la versión optimizada:

```bash
npm run build
```

Los archivos generados estarán en:

```text
dist/
```

Para comprobar la versión de producción localmente:

```bash
npm run preview
```

---

# 🔮 Próximas funcionalidades

La arquitectura actual permite incorporar posteriormente:

* [ ] API REST con Express
* [ ] MongoDB
* [ ] Sistema de usuarios
* [ ] Registro e inicio de sesión
* [ ] Autenticación mediante JWT
* [ ] Panel administrativo
* [ ] Gestión de productos
* [ ] Gestión de inventario
* [ ] Sistema de pedidos
* [ ] Historial de compras
* [ ] Lista de favoritos
* [ ] Persistencia del carrito
* [ ] Integración con pasarela de pagos
* [ ] Subida de imágenes
* [ ] Sistema de reseñas
* [ ] Paginación
* [ ] Ordenamiento de productos

---

# 🔌 Arquitectura futura

El frontend está pensado para poder evolucionar hacia una arquitectura:

```text
                 ┌──────────────────┐
                 │      React       │
                 │    Frontend      │
                 └────────┬─────────┘
                          │
                          │ HTTP / REST
                          ▼
                 ┌──────────────────┐
                 │     Express      │
                 │      API         │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │     MongoDB      │
                 │    Database      │
                 └──────────────────┘
```

De esta manera, el frontend puede mantenerse independiente del backend.

---

# 📐 Principios del proyecto

El proyecto sigue algunos principios para facilitar su mantenimiento:

### Separación de responsabilidades

Cada componente tiene una responsabilidad específica.

### Reutilización

Los elementos que pueden utilizarse en diferentes partes de la aplicación se convierten en componentes reutilizables.

### Escalabilidad

La estructura permite agregar nuevas funcionalidades sin convertir `App.jsx` en un componente monolítico.

### Mantenibilidad

Los datos, componentes y estilos están separados.

### Responsive Design

La interfaz se adapta a diferentes tamaños de pantalla.

### Código organizado

La estructura está preparada para que nuevos desarrolladores puedan entender rápidamente dónde colocar cada funcionalidad.

---

# 👨‍💻 Autor

**Alan Rosas Garcia**

Proyecto desarrollado como parte de un portafolio profesional de desarrollo web.

---

# 📄 Licencia

Este proyecto puede utilizarse como proyecto personal, educativo o como base para futuros desarrollos.

---

## ⭐ Si este proyecto te resulta útil

Puedes darle una estrella al repositorio y utilizarlo como base para construir nuevas funcionalidades.
