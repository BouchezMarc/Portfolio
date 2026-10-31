# Portfolio – Ingénieur Interopérabilité et IA

Portfolio personnel présentant mon parcours professionnel, mes compétences techniques et mes projets en développement logiciel, interopérabilité des systèmes d'information et intelligence artificielle.

🌐 **Portfolio en ligne :** `https://BouchezMarc.github.io/portfolio-v1/`  
💻 **GitHub :** https://github.com/BouchezMarc/

---

## Présentation

Ce portfolio a pour objectif de présenter mon évolution professionnelle et technique, ainsi que les projets réalisés dans différents domaines :

- Intelligence artificielle et Machine Learning
- AI Engineering et modèles de langage (LLM)
- Développement logiciel
- Ingénierie des données
- Interopérabilité des systèmes d'information
- Automatisation et CI/CD

## Technologies

| Domaine | Technologies |
|---|---|
| Frontend | React, TypeScript |
| Build | Vite |
| Navigation | React Router |
| Icônes | Lucide React |
| Styles | CSS |
| Versioning | Git, GitHub |
| Déploiement | GitHub Pages |
| CI/CD | GitHub Actions |

## Architecture du projet

```text
portfolio-v1/
├── public/
├── src/
│   ├── data/
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── pages/
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
```

## Installation

Prérequis :
- Node.js
- npm
- Git

Cloner le dépôt :

```bash
git clone https://github.com/BouchezMarc/portfolio-v1.git
cd portfolio-v1
```

Installer les dépendances :

```bash
npm install
```

## Développement local

Lancer le serveur de développement :

```bash
npm run dev
```

Le portfolio est accessible à l'adresse indiquée dans le terminal, généralement :

```text
http://localhost:5173
```

## Build

Générer la version de production :

```bash
npm run build
```

Les fichiers générés sont placés