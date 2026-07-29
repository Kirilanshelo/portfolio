# Enrico's Portfolio - Vue 3

Portfolio personale sviluppato con **Vue 3**, **Vite**, **Pinia** e **Vue Router**.

Migrato da React a Vue 3 mantenendo tutte le funzionalità e lo stile originale.

## 🚀 Tecnologie

- **Vue 3** con Composition API (`<script setup>`)
- **Vite** - Build tool veloce e moderno
- **Pinia** - State management per gestione tema
- **Vue Router** - Routing con hash navigation
- **Bootstrap Vue Next** - Componenti UI
- **FontAwesome** - Icone
- **GitHub Pages** - Deployment

## 📦 Setup

```bash
npm install
```

## 🛠️ Development

Avvia il dev server:

```bash
npm run dev
```

Apri [http://localhost:5173/portfolio/](http://localhost:5173/portfolio/)

## 🏗️ Build

Build per production:

```bash
npm run build
```

I file saranno generati nella cartella `dist/`.

## 🚢 Deploy

Il deploy su GitHub Pages è automatico tramite GitHub Actions: ad ogni push su `master` o `develop` il workflow `.github/workflows/deploy-gh-pages.yml` builda il progetto e pubblica la cartella `dist/`.

## ✨ Funzionalità

- **Theme Switcher**: Toggle tra tema chiaro e scuro con persistenza in localStorage
- **Responsive Design**: Layout ottimizzato per mobile, tablet e desktop
- **Smooth Scrolling**: Navigazione fluida tra le sezioni
- **Portfolio Sections**:
  - About Me
  - Career Experience
  - Education
  - Skills & Languages
  - Contact

## 📁 Struttura Progetto

```
src/
├── components/         # Componenti Vue
│   ├── Navbar.vue
│   ├── Header.vue
│   ├── AboutMe.vue
│   ├── Experience.vue
│   ├── Abilities.vue
│   ├── Footer.vue
│   └── ThemeButton.vue
├── stores/            # Pinia stores
│   └── themeStore.js
├── router/            # Vue Router config
│   └── index.js
├── assets/            # Immagini e risorse
├── App.vue            # Componente root
├── main.js            # Entry point
└── App.css            # Stili globali
```

## 🔄 Migrazione da React

Questo progetto è stato completamente migrato da React a Vue 3 mantenendo:
- ✅ Stessa struttura visuale e CSS
- ✅ Sistema di gestione tema (Context API → Pinia)
- ✅ Tutte le funzionalità originali
- ✅ Compatibilità GitHub Pages
- ✅ Responsive design

### Principali cambiamenti:

| React | Vue 3 |
|-------|-------|
| `useState` | `ref` / `reactive` |
| `useContext` | `useStore` (Pinia) |
| `useEffect` | `watch` / `watchEffect` |
| Context API | Pinia Store |
| JSX | Template syntax |
| react-bootstrap | bootstrap-vue-next |
| CRA | Vite |

## 📄 License

© 2022-2026 Enrico Montanari
