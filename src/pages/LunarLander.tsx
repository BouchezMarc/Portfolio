
import {
  ArrowLeft,
  ArrowUpRight,
  Brain,
  ChartNoAxesCombined,
  Cpu,
  Database,
  Gauge,
  Play,
  Settings2,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./LunarLander.css";

const repo =
  "https://github.com/BouchezMarc/PF11-LunarLander";

const pictures = [
  {
    src: "https://raw.githubusercontent.com/BouchezMarc/PF11-LunarLander/main/pics/config.png",
    title: "Configuration de l'environnement",
    description: "Paramétrage de l'environnement et des expériences.",
  },
  {
    src: "https://raw.githubusercontent.com/BouchezMarc/PF11-LunarLander/main/pics/endpoints.png",
    title: "API FastAPI",
    description: "Documentation des endpoints d'inférence et d'évaluation.",
  },
  {
    src: "https://raw.githubusercontent.com/BouchezMarc/PF11-LunarLander/main/pics/dashboard1.png",
    title: "Dashboard – Vue 1",
    description: "Visualisation des résultats d'évaluation.",
  },
  {
    src: "https://raw.githubusercontent.com/BouchezMarc/PF11-LunarLander/main/pics/dashboard2.png",
    title: "Dashboard – Vue 2",
    description: "Analyse des performances de l'agent.",
  },
  {
    src: "https://raw.githubusercontent.com/BouchezMarc/PF11-LunarLander/main/pics/dashboard3.png",
    title: "Dashboard – Vue 3",
    description: "Suivi des récompenses et des épisodes.",
  },
];

const steps = [
  {
    number: "01",
    title: "Explorer",
    description:
      "Découvrir les espaces d'observation et d'action de LunarLander-v3, ainsi que le fonctionnement des récompenses.",
  },
  {
    number: "02",
    title: "Entraîner",
    description:
      "Construire un premier agent DQN servant de baseline, puis expérimenter avec Stable-Baselines3.",
  },
  {
    number: "03",
    title: "Optimiser",
    description:
      "Tester les hyperparamètres et automatiser leur recherche avec Optuna. Comparer les expériences avec TensorBoard.",
  },
  {
    number: "04",
    title: "Évaluer",
    description:
      "Évaluer le modèle final sur 100 épisodes : récompense moyenne, dispersion, meilleur score et nombre de réussites.",
  },
  {
    number: "05",
    title: "Déployer",
    description:
      "Exposer le modèle avec FastAPI et proposer une interface de démonstration et un dashboard Streamlit.",
  },
];

export default function LunarLander() {
  return (
    <main className="lunar-page">
      <header className="lunar-hero">
        <Link to="/" className="lunar-back">
          <ArrowLeft size={16} /> Retour aux projets
        </Link>

        <div className="lunar-kicker">
          <span>AI ENGINEERING</span>
          <span>REINFORCEMENT LEARNING</span>
        </div>

        <h1>
          Lunar <span>Lander</span>
        </h1>

        <p className="lunar-subtitle">
          Eagle-1 : développer un pilote automatique capable
          d'apprendre à poser un module lunaire de manière
          stable et précise grâce au Deep Reinforcement Learning.
        </p>

        <div className="lunar-tags">
          {[
            "Python",
            "DQN",
            "Gymnasium",
            "Stable-Baselines3",
            "Optuna",
            "FastAPI",
            "Streamlit",
          ].map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <a
          href={repo}
          target="_blank"
          rel="noreferrer"
          className="lunar-github"
        >
          Voir le dépôt GitHub <ArrowUpRight size={17} />
        </a>
      </header>

      <section className="lunar-section">
        <div className="lunar-section-heading">
          <span>01 / OBJECTIF</span>
          <h2>Apprendre à atterrir</h2>
        </div>

        <div className="lunar-intro-grid">
          <div>
            <p>
              Le projet consiste à développer le pilote automatique
              du module Eagle-1 dans l'environnement
              <strong> LunarLander-v3</strong> de Gymnasium.
            </p>
            <p>
              L'agent apprend à contrôler le module en fonction
              de son état, de ses actions et des récompenses
              obtenues au fil des interactions avec l'environnement.
            </p>
            <p>
              L'objectif retenu est d'obtenir une récompense
              moyenne supérieure à <strong>200 points</strong>,
              mesurée sur 100 épisodes.
            </p>
          </div>

          <div className="lunar-objective">
            <Brain size={30} />
            <span>Objectif de performance</span>
            <strong>200+</strong>
            <small>Récompense moyenne sur 100 épisodes</small>
          </div>
        </div>
      </section>

      <section className="lunar-section">
        <div className="lunar-section-heading">
          <span>02 / MÉTHODOLOGIE</span>
          <h2>De l'apprentissage à l'évaluation</h2>
        </div>

        <div className="lunar-timeline">
          {steps.map((step) => (
            <article className="lunar-step" key={step.number}>
              <span className="lunar-step-number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="lunar-section">
        <div className="lunar-section-heading">
          <span>03 / EXPÉRIMENTATION</span>
          <h2>Configuration et analyse</h2>
        </div>

        <div className="lunar-feature-grid">
          <article className="lunar-feature">
            <Settings2 />
            <h3>Hyperparamètres</h3>
            <p>
              Expérimenter sur le taux d'apprentissage,
              gamma, la taille du buffer, les batchs et
              la stratégie d'exploration.
            </p>
          </article>

          <article className="lunar-feature">
            <ChartNoAxesCombined />
            <h3>TensorBoard</h3>
            <p>
              Comparer les expériences et suivre
              l'évolution des performances pendant
              l'entraînement.
            </p>
          </article>

          <article className="lunar-feature">
            <Gauge />
            <h3>Optuna</h3>
            <p>
              Automatiser la recherche de paramètres
              pour améliorer les performances du modèle.
            </p>
          </article>
        </div>

        <div className="lunar-gallery">
          {pictures.slice(0, 1).map((picture) => (
            <figure className="lunar-gallery-item lunar-gallery-wide" key={picture.src}>
              <img src={picture.src} alt={picture.title} loading="lazy" />
              <figcaption>
                <strong>{picture.title}</strong>
                <span>{picture.description}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="lunar-section">
        <div className="lunar-section-heading">
          <span>04 / DÉMONSTRATION</span>
          <h2>Eagle-1 en action</h2>
          <p>
            Deux épisodes illustrent le comportement du pilote
            automatique dans l'environnement LunarLander.
          </p>
        </div>

        <div className="lunar-video-grid">
          <article className="lunar-video-card">
            <div className="lunar-video">
              <video controls preload="metadata" playsInline>
                <source
                  src="/videos/eagle1-episode-0.mp4"
                  type="video/mp4"
                />
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>
            </div>
            <div className="lunar-video-caption">
              <Play size={17} />
              <div>
                <h3>Eagle-1 — Épisode 0</h3>
                <p>Démonstration du pilote automatique.</p>
              </div>
            </div>
          </article>

          <article className="lunar-video-card">
            <div className="lunar-video">
              <video controls preload="metadata" playsInline>
                <source
                  src="/videos/eagle1_episode_1-episode-0.mp4"
                  type="video/mp4"
                />
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>
            </div>
            <div className="lunar-video-caption">
              <Play size={17} />
              <div>
                <h3>Eagle-1 — Épisode 1</h3>
                <p>Seconde démonstration du modèle.</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="lunar-section">
        <div className="lunar-section-heading">
          <span>05 / APPLICATION</span>
          <h2>Du modèle à l'application</h2>
        </div>

        <div className="lunar-architecture">
          <div className="lunar-architecture-node">
            <Brain />
            <strong>Modèle DQN</strong>
            <span>Modèle entraîné</span>
          </div>
          <div className="lunar-architecture-arrow">→</div>
          <div className="lunar-architecture-node">
            <Workflow />
            <strong>FastAPI</strong>
            <span>API d'inférence</span>
          </div>
          <div className="lunar-architecture-arrow">→</div>
          <div className="lunar-architecture-node">
            <Cpu />
            <strong>Streamlit</strong>
            <span>Interface de démonstration</span>
          </div>
          <div className="lunar-architecture-arrow">→</div>
          <div className="lunar-architecture-node">
            <Database />
            <strong>Dashboard</strong>
            <span>Suivi des performances</span>
          </div>
        </div>

        <div className="lunar-api-info">
          <h3>API FastAPI</h3>
          <p>
            L'API centralise le chargement et l'inférence du modèle.
            Elle propose notamment trois endpoints :
          </p>
          <ul>
            <li><code>GET /</code> — état du pilote Eagle-1</li>
            <li><code>GET /play_episode</code> — exécution et vidéo d'un épisode</li>
            <li><code>GET /evaluate</code> — évaluation sur 100 épisodes</li>
          </ul>
        </div>
      </section>

      <section className="lunar-section">
        <div className="lunar-section-heading">
          <span>06 / INTERFACES</span>
          <h2>Visualisation des résultats</h2>
          <p>
            Les captures suivantes présentent les interfaces
            Streamlit et les indicateurs du projet.
          </p>
        </div>

        <div className="lunar-gallery lunar-dashboard-gallery">
          {pictures.slice(1).map((picture) => (
            <figure className="lunar-gallery-item" key={picture.src}>
              <img src={picture.src} alt={picture.title} loading="lazy" />
              <figcaption>
                <strong>{picture.title}</strong>
                <span>{picture.description}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="lunar-section lunar-bilan">
        <div className="lunar-section-heading">
          <span>07 / BILAN</span>
          <h2>Compétences mobilisées</h2>
        </div>

        <div className="lunar-feature-grid">
          <article className="lunar-feature">
            <Brain />
            <h3>Reinforcement Learning</h3>
            <p>DQN, états, actions, récompenses et entraînement d'un agent.</p>
          </article>
          <article className="lunar-feature">
            <ChartNoAxesCombined />
            <h3>Expérimentation</h3>
            <p>Optimisation des hyperparamètres et suivi des performances.</p>
          </article>
          <article className="lunar-feature">
            <Workflow />
            <h3>Développement applicatif</h3>
            <p>API FastAPI, interfaces Streamlit et intégration du modèle.</p>
          </article>
        </div>

        <p className="lunar-conclusion">
          Ce projet met en pratique le cycle complet d'un projet
          de Reinforcement Learning : exploration, entraînement,
          optimisation, évaluation et mise à disposition du modèle.
        </p>
      </section>

      <footer className="lunar-footer">
        <Link to="/" className="lunar-back">
          <ArrowLeft size={16} /> Retour aux projets
        </Link>
        <a href={repo} target="_blank" rel="noreferrer">
          Consulter le code source <ArrowUpRight size={16} />
        </a>
      </footer>
    </main>
  );
}
