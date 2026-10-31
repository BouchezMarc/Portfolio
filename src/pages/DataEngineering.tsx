
import {
  ArrowLeft,
  ArrowUpRight,
  Database,
  Workflow,
  Globe,
  FileJson,
  BarChart3,
  Layers,
  Image,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./DataEngineering.css";

const sources = [
  {
    name: "NewsAPI",
    description: "Collecte d'articles d'actualité via API.",
  },
  {
    name: "NewsData.io",
    description: "Deuxième source d'actualités via API.",
  },
  {
    name: "RSS Le Monde",
    description: "Récupération des publications depuis un flux RSS.",
  },
  {
    name: "FakeNewsNet",
    description: "Données de référence PolitiFact et GossipCop.",
  },
];

const stages = [
  {
    number: "01",
    title: "Extraction",
    description:
      "Collecte des publications depuis plusieurs sources hétérogènes. Chaque extracteur fonctionne indépendamment afin qu'une erreur sur une source ne bloque pas les autres.",
    technology: "Python · APIs · RSS",
  },
  {
    number: "02",
    title: "Transformation",
    description:
      "Nettoyage du contenu, normalisation des titres, textes, dates et URLs. Vérification des images et identification des publications multimodales.",
    technology: "Python · JSON",
  },
  {
    number: "03",
    title: "Orchestration ETL",
    description:
      "Exécution des étapes de transformation et de chargement à travers un DAG Airflow planifié quotidiennement.",
    technology: "Apache Airflow",
  },
  {
    number: "04",
    title: "Stockage",
    description:
      "Chargement des sources, publications et métriques d'exécution dans une base PostgreSQL. Gestion des doublons à partir de l'URL des articles.",
    technology: "PostgreSQL",
  },
  {
    number: "05",
    title: "Visualisation",
    description:
      "Exploitation des données stockées pour suivre les volumes, la qualité des publications et les performances des traitements ETL.",
    technology: "Streamlit",
  },
];

const metrics = [
  "Nombre d'articles et de sources",
  "Taux d'articles avec image",
  "Répartition des publications par source",
  "Complétude des titres, textes et labels",
  "Articles valides et doublons d'URL",
  "Durée et statut des tâches ETL",
  "Erreurs d'exécution et estimation des coûts",
];

export default function DataEngineering() {
  return (
    <main className="data-page">
      <section className="data-hero">
        <div className="data-eyebrow">
          DATA ENGINEERING / PROJET 12
        </div>

        <h1>
          Pipeline de collecte
          <span> & traitement de données.</span>
        </h1>

        <p className="data-intro">
          Conception d'une chaîne ETL automatisée pour collecter,
          transformer et stocker des données d'actualité multimodales.
          Le projet alimente les travaux de détection de désinformation
          de CheckIT.AI.
        </p>

        <div className="data-tags">
          <span>Data Engineering</span>
          <span>ETL</span>
          <span>Multimodal</span>
          <span>Automatisation</span>
        </div>
      </section>

      <section className="data-section">
        <div className="data-section-heading">
          <span>01 / CONTEXTE</span>
          <h2>Construire un pipeline de données de bout en bout.</h2>
        </div>

        <p>
          Le projet répond à un besoin de centralisation de données
          provenant de plusieurs sources d'actualité. Les formats et
          niveaux de complétude étant différents, une étape de
          normalisation est nécessaire avant leur exploitation.
        </p>

        <p>
          L'objectif est de mettre en place une chaîne reproductible :
          de l'acquisition des données jusqu'à leur stockage dans une
          base relationnelle, avec un suivi des traitements.
        </p>
      </section>

      <section className="data-section">
        <div className="data-section-heading">
          <span>02 / SOURCES</span>
          <h2>Des données issues de plusieurs environnements.</h2>
        </div>

        <div className="data-source-grid">
          {sources.map((source) => (
            <article className="data-source-card" key={source.name}>
              <Globe size={20} />
              <h3>{source.name}</h3>
              <p>{source.description}</p>
            </article>
          ))}
        </div>

        <p className="data-note">
          L'extracteur Reddit est présent dans le dépôt à titre
          exploratoire, mais il n'est pas appelé par le script principal
          et ne fait pas partie du DAG actuel.
        </p>
      </section>

      <section className="data-section">
        <div className="data-section-heading">
          <span>03 / ARCHITECTURE</span>
          <h2>De la collecte à l'exploitation.</h2>
        </div>

        <div className="data-architecture">
          <div className="data-architecture-group">
            <span className="data-architecture-label">SOURCES</span>
            <div className="data-architecture-node">
              NewsAPI · NewsData.io
            </div>
            <div className="data-architecture-node">
              RSS Le Monde · FakeNewsNet
            </div>
          </div>

          <div className="data-flow-arrow">↓</div>

          <div className="data-architecture-node data-node-highlight">
            <FileJson size={19} />
            <div>
              <strong>main.py</strong>
              <small>Extraction des données</small>
            </div>
          </div>

          <div className="data-flow-arrow">↓</div>

          <div className="data-architecture-node">
            <Database size={19} />
            <div>
              <strong>data/*.json</strong>
              <small>Données brutes</small>
            </div>
          </div>

          <div className="data-flow-arrow">↓</div>

          <div className="data-architecture-node data-node-highlight">
            <Layers size={19} />
            <div>
              <strong>transform_run.py</strong>
              <small>Nettoyage et normalisation</small>
            </div>
          </div>

          <div className="data-flow-arrow">↓</div>

          <div className="data-architecture-node">
            <FileJson size={19} />
            <div>
              <strong>dataset_clean.json</strong>
              <small>Dataset normalisé</small>
            </div>
          </div>

          <div className="data-flow-arrow">↓</div>

          <div className="data-architecture-group">
            <span className="data-architecture-label">ORCHESTRATION AIRFLOW</span>
            <div className="data-architecture-node data-node-highlight">
              <Workflow size={19} />
              <div>
                <strong>transform_dataset</strong>
                <small>Préparation et métriques</small>
              </div>
            </div>
            <div className="data-flow-arrow">↓</div>
            <div className="data-architecture-node data-node-highlight">
              <Database size={19} />
              <div>
                <strong>load_postgresql</strong>
                <small>Chargement des données</small>
              </div>
            </div>
          </div>

          <div className="data-flow-arrow">↓</div>

          <div className="data-architecture-node">
            <Database size={19} />
            <div>
              <strong>PostgreSQL</strong>
              <small>sources · publications · etl_metrics</small>
            </div>
          </div>

          <div className="data-flow-arrow">↓</div>

          <div className="data-architecture-node data-node-output">
            <BarChart3 size={19} />
            <div>
              <strong>Dashboard Streamlit</strong>
              <small>Suivi de la qualité et des performances ETL</small>
            </div>
          </div>
        </div>
      </section>

      <section className="data-section">
        <div className="data-section-heading">
          <span>04 / PIPELINE ETL</span>
          <h2>Les étapes du traitement.</h2>
        </div>

        <div className="data-stages">
          {stages.map((stage) => (
            <article className="data-stage" key={stage.number}>
              <span className="data-stage-number">{stage.number}</span>
              <div>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
                <span className="data-stage-tech">
                  {stage.technology}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="data-section">
        <div className="data-section-heading">
          <span>05 / MODÈLE DE DONNÉES</span>
          <h2>Structurer les données pour leur exploitation.</h2>
        </div>

        <div className="data-tables">
          <article>
            <Database size={21} />
            <h3>sources</h3>
            <p>Référentiel des sources de données.</p>
          </article>
          <article>
            <FileJson size={21} />
            <h3>publications</h3>
            <p>Articles normalisés avec une contrainte d'unicité sur l'URL.</p>
          </article>
          <article>
            <Workflow size={21} />
            <h3>etl_metrics</h3>
            <p>Durée, statut, volume traité et message d'erreur par tâche.</p>
          </article>
        </div>

        <div className="data-multimodal">
          <Image size={21} />
          <div>
            <h3>Dimension multimodale</h3>
            <p>
              Le dataset conserve notamment les URLs des images et
              calcule les indicateurs <code>has_image</code> et{" "}
              <code>is_multimodal</code> afin de caractériser les
              publications contenant du texte et des images.
            </p>
          </div>
        </div>
      </section>

      <section className="data-section">
        <div className="data-section-heading">
          <span>06 / MONITORING</span>
          <h2>Suivre la qualité et les traitements.</h2>
        </div>

        <p>
          Le dashboard Streamlit exploite les tables PostgreSQL pour
          rendre visibles les volumes collectés, la complétude des
          données et les performances du pipeline.
        </p>

        <ul className="data-metrics">
          {metrics.map((metric) => (
            <li key={metric}>
              <ShieldCheck size={17} />
              {metric}
            </li>
          ))}
        </ul>
      </section>

      <section className="data-section">
        <div className="data-section-heading">
          <span>07 / BILAN</span>
          <h2>Ce que le projet permet de mettre en œuvre.</h2>
        </div>

        <ul className="data-outcomes">
          <li>Connexion à plusieurs sources de données hétérogènes.</li>
          <li>Construction d'une chaîne d'extraction et de transformation.</li>
          <li>Normalisation de données textuelles et multimodales.</li>
          <li>Orchestration des traitements avec Apache Airflow.</li>
          <li>Stockage relationnel et gestion des doublons.</li>
          <li>Suivi des performances et de la qualité des données.</li>
        </ul>

        <div className="data-limitations">
          <h3>Limites et pistes d'évolution</h3>
          <p>
            Les relances automatiques Airflow sont actuellement
            désactivées (retries = 0). Les notifications ne sont pas
            configurées et les labels ne sont pas disponibles pour
            toutes les sources. Ces points constituent des axes
            d'amélioration pour renforcer la robustesse et le suivi
            opérationnel du pipeline.
          </p>
        </div>
      </section>

      <footer className="data-footer">
        <Link to="/#projets">
          <ArrowLeft size={17} /> Tous les projets
        </Link>

        <a
          href="https://github.com/BouchezMarc/P12"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <ArrowUpRight size={16} />
        </a>
      </footer>
    </main>
  );
}
