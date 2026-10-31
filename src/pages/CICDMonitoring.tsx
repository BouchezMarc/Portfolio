import "./CICDMonitoring.css";

import architecture from "../pics/PF08_archi.png";
import driftDistribution from "../pics/P08_drift_column_distribution.png";
import driftScores from "../pics/P08_graph_top_20_drift_scores.png";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const repo = "https://github.com/BouchezMarc/PF08-CI-CD-et-Monitoring";

const CICDMonitoring = () => {
  return (
    <main className="cicd-page">
      <header className="cicd-hero">
        <span className="cicd-kicker">MLOps · Projet 08</span>
        <h1>CI/CD et Monitoring</h1>
        <p className="cicd-subtitle">
          Automatisation du cycle de vie d'un modèle de Machine Learning :
          tests, intégration continue, déploiement cloud et surveillance
          des performances et de la dérive des données.
        </p>

        <div className="cicd-tags">
          {[
            "Python",
            "LightGBM",
            "ONNX",
            "FastAPI",
            "GitHub Actions",
            "Docker",
            "Google Cloud Run",
            "Prometheus",
            "Grafana",
          ].map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <a
          className="cicd-github"
          href="https://github.com/BouchezMarc/PF08-CI-CD-et-Monitoring"
          target="_blank"
          rel="noreferrer"
        >
          Voir le dépôt GitHub ↗
        </a>
      </header>
        <section className="cicd-objective">
        <h2>Objectif du projet</h2>
        <p>
            Mettre en place une chaîne MLOps reproductible qui relie
            l'entraînement d'un modèle à son exposition via API, son
            déploiement automatisé et le suivi de son comportement en
            fonctionnement. Le projet aborde ainsi les enjeux de
            fiabilité, de traçabilité et de maintenance d'un service
            de Machine Learning.
        </p>
        </section>
      <section className="cicd-section">
        <div className="cicd-section-heading">
          <span>01</span>
          <h2>Architecture du projet</h2>
        </div>

        <p>
          Le projet organise le cycle de vie du modèle autour de plusieurs
          composants : entraînement LightGBM, export au format ONNX,
          exposition des prédictions par une API FastAPI et supervision
          de l'application.
        </p>

        <figure className="cicd-architecture">
          <img
            src={architecture}
            alt="Architecture globale du projet CI/CD et Monitoring"
            loading="lazy"
          />
          <figcaption>
            Architecture générale du pipeline ML et de son infrastructure.
          </figcaption>
        </figure>
      </section>

      <section className="cicd-section">
        <div className="cicd-section-heading">
          <span>02</span>
          <h2>Pipeline CI/CD automatisé</h2>
        </div>

        <p>
          GitHub Actions automatise les étapes de validation et de livraison.
          Les événements sur les branches main et develop, les pull requests
          et le déclenchement manuel peuvent lancer le workflow.
        </p>

        <div className="cicd-steps">
          <article>
            <span className="cicd-step-number">01</span>
            <h3>Tests automatisés</h3>
            <p>
              Exécution des tests Pytest sur le prétraitement des données,
              l'intégration ONNX et les endpoints de l'API. Un rapport de
              couverture est également généré.
            </p>
          </article>

          <article>
            <span className="cicd-step-number">02</span>
            <h3>Profiling ONNX</h3>
            <p>
              Mesure des performances du modèle, optimisation avec
              onnx-simplifier et comparaison des temps d'inférence.
            </p>
          </article>

          <article>
            <span className="cicd-step-number">03</span>
            <h3>Build Docker</h3>
            <p>
              Construction multi-stage de l'image, utilisation du cache
              Docker et analyse de vulnérabilités avec Trivy.
            </p>
          </article>

          <article>
            <span className="cicd-step-number">04</span>
            <h3>Déploiement Cloud Run</h3>
            <p>
              Déploiement automatique de l'API et de la base de données
              sur Google Cloud Run après validation des étapes requises.
            </p>
          </article>

          <article>
            <span className="cicd-step-number">05</span>
            <h3>Smoke tests</h3>
            <p>
              Vérification du démarrage et du bon fonctionnement du service
              après le déploiement.
            </p>
          </article>
        </div>

        <div className="cicd-note">
          Le déploiement Cloud Run concerne l'API et la base de données.
          Prometheus et Grafana restent des outils de monitoring local.
        </div>
      </section>

      <section className="cicd-section">
        <div className="cicd-section-heading">
          <span>03</span>
          <h2>API et inférence ONNX</h2>
        </div>

        <p>
          Le modèle LightGBM entraîné est exporté au format ONNX afin
          d'être utilisé par une API FastAPI. Cette séparation permet
          de distinguer l'entraînement du modèle et son utilisation
          dans le service de prédiction.
        </p>

        <div className="cicd-endpoints">
          <div>
            <code>GET /health</code>
            <span>Vérification de l'état de l'API</span>
          </div>
          <div>
            <code>GET /metrics</code>
            <span>Exposition des métriques Prometheus</span>
          </div>
          <div>
            <code>POST /predict/test-csv</code>
            <span>Prédictions sur les données CSV</span>
          </div>
          <div>
            <code>POST /drift/run</code>
            <span>Calcul du rapport de dérive des données</span>
          </div>
          <div>
            <code>GET /drift/latest</code>
            <span>Consultation du dernier rapport de drift</span>
          </div>
        </div>
      </section>

      <section className="cicd-section">
        <div className="cicd-section-heading">
          <span>04</span>
          <h2>Monitoring et Data Drift</h2>
        </div>

        <p>
          Le monitoring permet de suivre le comportement de l'API et
          de détecter les changements dans la distribution des données.
          Le mécanisme de simulation du drift utilise notamment le paramètre
          <code> income_multiplier</code> pour modifier les données de test.
        </p>

        <div className="cicd-monitoring-grid">
          <article>
            <h3>Monitoring de l'API</h3>
            <p>
              Prometheus collecte les métriques d'utilisation et de
              performance : nombre de requêtes, latence, erreurs et temps
              d'inférence ONNX. Grafana permet de les visualiser.
            </p>
          </article>
          <article>
            <h3>Surveillance du modèle</h3>
            <p>
              Le suivi du drift permet d'identifier les variables dont
              la distribution évolue entre les données de référence
              et les données observées.
            </p>
          </article>
        </div>

        <div className="cicd-visual">
          <h3>Distribution du drift par variable</h3>
          <img
            src={driftDistribution}
            alt="Distribution du drift par colonne"
            loading="lazy"
          />
          <p>
            Visualisation des différences de distribution détectées
            sur les variables analysées.
          </p>
        </div>

        <div className="cicd-visual">
          <h3>Top 20 des scores de drift</h3>
          <img
            src={driftScores}
            alt="Classement des vingt variables présentant les scores de drift les plus élevés"
            loading="lazy"
          />
          <p>
            Classement des variables selon leur score de dérive afin
            d'identifier les changements les plus marqués.
          </p>
        </div>
      </section>

      <section className="cicd-section">
        <div className="cicd-section-heading">
          <span>05</span>
          <h2>Environnement technique</h2>
        </div>

        <div className="cicd-tech-grid">
          <div>
            <h3>Machine Learning</h3>
            <p>LightGBM · ONNX · ONNX Runtime · Pandas</p>
          </div>
          <div>
            <h3>API et données</h3>
            <p>FastAPI · PostgreSQL · SQLAlchemy</p>
          </div>
          <div>
            <h3>CI/CD et conteneurs</h3>
            <p>GitHub Actions · Docker · Docker Compose · Trivy</p>
          </div>
          <div>
            <h3>Monitoring</h3>
            <p>Prometheus · Grafana · Google Cloud Monitoring</p>
          </div>
          <div>
            <h3>Cloud</h3>
            <p>Google Cloud Run · Google Cloud Platform</p>
          </div>
          <div>
            <h3>Qualité</h3>
            <p>Pytest · Ruff · Black · isort · Codecov</p>
          </div>
        </div>
      </section>      
        <section className="cicd-conclusion">
        <h2>Bilan du projet</h2>
        <p>
            Ce projet met en pratique les principales étapes du cycle de vie
            d'un modèle de Machine Learning, de l'entraînement à son déploiement.
            Il associe automatisation des tests et des livraisons, conteneurisation,
            exposition via API et surveillance des données et des performances.
        </p>
        <p>
            Il permet ainsi d'aborder les enjeux opérationnels du MLOps :
            reproductibilité, fiabilité des déploiements, observabilité et
            détection des évolutions de données susceptibles d'affecter
            le comportement du modèle.
        </p>
        </section>      
      <footer className="cicd-footer">
        <Link to="/" className="cicd-back">
            <ArrowLeft size={16} /> Retour aux projets
        </Link>

        <a href={repo} target="_blank" rel="noreferrer">
            Consulter le code source <ArrowUpRight size={16} />
        </a>
        </footer>
    </main>
  );
};
export default CICDMonitoring;