# 🧮 Calculadora React

Una calculadora moderna y elegante construida con React, que presenta un diseño oscuro premium con acentos en ámbar.

![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Características

- **Operaciones básicas**: Suma, resta, multiplicación y división
- **Interfaz intuitiva**: Diseño limpio con grid de botones
- **Tema oscuro**: Paleta de colores moderna con acentos en ámbar (#DD922D)
- **Funciones adicionales**: 
  - `AC` - Limpiar toda la pantalla
  - `DEL` - Borrar último dígito
  - Soporte para decimales

## 🛠️ Tecnologías

- [React 19](https://react.dev/) - Biblioteca de UI
- [Create React App](https://create-react-app.dev/) - Configuración y tooling
- CSS Modules - Estilos modulares

## 🚀 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/calc-react.git
   cd calc-react
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o con pnpm
   pnpm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm start
   # o con pnpm
   pnpm start
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 📁 Estructura del Proyecto

```
calc-react/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/
│   │   ├── pages/
│   │   │   ├── Calculator.js      # Componente principal
│   │   │   ├── Calculator.css
│   │   │   ├── Display.js         # Pantalla de la calculadora
│   │   │   ├── Display.css
│   │   │   ├── ButtonPanel.js
│   │   │   ├── ButtonPanel.css
│   │   │   ├── GridCalc.js
│   │   │   └── GridCalc.css
│   │   └── utils/
│   │       └── Button/            # Componente de botón reutilizable
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css                  # Variables CSS globales
├── package.json
└── README.md
```

## 🎨 Paleta de Colores

| Variable | Color | Uso |
|----------|-------|-----|
| `--bg-primary` | `#0d0d0d` | Fondo principal |
| `--bg-secondary` | `#1a1a1a` | Fondo secundario |
| `--bg-tertiary` | `#252525` | Elementos elevados |
| `--accent-primary` | `#DD922D` | Color de acento principal |
| `--accent-secondary` | `#e9a645` | Color de acento secundario |

## 🌐 Despliegue en GitHub Pages

1. **Instala gh-pages como dependencia de desarrollo**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Configura el package.json** (ya configurado en este proyecto):
   - Añade la propiedad `homepage`
   - Añade los scripts `predeploy` y `deploy`

3. **Despliega la aplicación**
   ```bash
   npm run deploy
   ```

La aplicación estará disponible en: `https://tu-usuario.github.io/calc-react`

## 📜 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm start` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la build de producción |
| `npm test` | Ejecuta los tests |
| `npm run deploy` | Despliega a GitHub Pages |

## 🤝 Contribuir

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

⭐ ¡Si te gusta el proyecto, no olvides darle una estrella!
