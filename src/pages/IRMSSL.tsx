import {
  ArrowLeft,
  ArrowUpRight,
  Brain,
  ChartNoAxesCombined,
  Database,
  Layers3,
  Microscope,
  ScanSearch,
  ShieldAlert,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./IRMSSL.css";

import supervisedMatrix from "../pics/PF10_supervised_matrice.png";
import sslMatrix from "../pics/PF10_SSL_matrice.png";
import activeLearningMatrix from "../pics/PF10_AL_matrice.png";

const repo = "https://github.com/BouchezMarc/PF10-IRM-SSL";

const dataset = [
  { label: "Images annotées", value: "100", detail: "50 cancer · 50 normal" },
  { label: "Images non annotées", value: "1 406", detail: "Exploitation semi-supervisée" },
  { label: "Total", value: "1 506", detail: "Images IRM cérébrales" },
];

const methods = [
  {
    number: "01",
    title: "Apprentissage supervisé",
    description:
      "Entraîner un classifieur MLP uniquement à partir des embeddings des 100 images annotées. Cette approche sert de référence.",
  },
  {
    number: "02",
    title: "Apprentissage semi-supervisé",
    description:
      "Exploiter les images non annotées à travers des pseudo-étiquettes. Une variante de type FixMatch conserve les prédictions dépassant un seuil de confiance.",
  },
  {
    number: "03",
    title: "Active Learning",
    description:
      "Identifier les images pour lesquelles le modèle est le plus incertain afin de sélectionner les exemples informatifs à intégrer à l'apprentissage.",
  },
];

const clustering = [
  { method: "K-Means", ari: "0,1322" },
  { method: "Agglomerative", ari: "0,0712" },
  { method: "DBSCAN", ari: "0,0259" },
];

const metrics = [
  { label: "Accuracy", description: "Proportion de prédictions correctes." },
  { label: "F1-score", description: "Équilibre entre précision et rappel." },
  { label: "Recall", description: "Capacité à retrouver les cas positifs." },
  { label: "AUC-ROC", description: "Capacité à distinguer les deux classes." },
];

export default function IRMSSL() {
  return (
    <main className="irm-page">
      <header className="irm-hero">
        <Link to="/" className="irm-back">
          <ArrowLeft size={16} /> Retour aux projets
        </Link>

        <div className="irm-kicker">
          <span>AI ENGINEERING</span>
          <span>MEDICAL IMAGING</span>
        </div>

        <h1>
          IRM <span>SSL</span>
        </h1>

        <p className="irm-subtitle">
          Analyse semi-supervisée d'images IRM cérébrales :
          exploiter les données non annotées pour étudier
          la classification binaire cancer / normal.
        </p>

        <div className="irm-tags">
          {[
            "Python",
            "PyTorch",
            "ResNet-50",
            "Scikit-learn",
            "Semi-supervised Learning",
            "Active Learning",
            "Jupyter",
            "uv",
          ].map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <a href={repo} target="_blank" rel="noreferrer" className="irm-github">
          Voir le dépôt GitHub <ArrowUpRight size={17} />
        </a>
      </header>

      <section className="irm-section">
        <div className="irm-section-heading">
          <span>01 / PROBLÉMATIQUE</span>
          <h2>Apprendre avec peu d'annotations</h2>
        </div>

        <div className="irm-intro-grid">
          <div>
            <p>
              Dans le domaine de l'imagerie médicale, l'annotation
              des images demande du temps et une expertise spécialisée.
              Le projet étudie une situation où le nombre d'images
              annotées est limité, alors qu'un volume plus important
              d'images sans étiquette est disponible.
            </p>
            <p>
              La question étudiée est la suivante :
              <strong>
                {" "}peut-on exploiter les images non annotées pour
                améliorer la classification cancer / normal ?
              </strong>
            </p>
            <p>
              L'objectif est de comparer différentes stratégies
              d'apprentissage et d'observer leur comportement
              dans cette configuration expérimentale.
            </p>
          </div>

          <div className="irm-objective">
            <Microscope size={30} />
            <span>Classification étudiée</span>
            <strong>Cancer / Normal</strong>
            <small>IRM cérébrales · Deux classes</small>
          </div>
        </div>
      </section>

      <section className="irm-section">
        <div className="irm-section-heading">
          <span>02 / DONNÉES</span>
          <h2>Un déséquilibre entre annotations et données disponibles</h2>
          <p>
            Le jeu de données observé dans le notebook comporte
            1 506 images au total.
          </p>
        </div>

        <div className="irm-dataset-grid">
          {dataset.map((item) => (
            <article className="irm-stat" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <small>{item.detail}</small>
            </article>
          ))}
        </div>

        <div className="irm-dataset-bar">
          <div className="irm-labeled-bar" />
          <div className="irm-unlabeled-bar" />
        </div>
        <div className="irm-bar-legend">
          <span><i className="irm-dot-labeled" /> Annotées : 6,6 %</span>
          <span><i className="irm-dot-unlabeled" /> Non annotées : 93,4 %</span>
        </div>
      </section>

      <section className="irm-section">
        <div className="irm-section-heading">
          <span>03 / PIPELINE</span>
          <h2>De l'image à la représentation numérique</h2>
        </div>

        <div className="irm-pipeline">
          <article>
            <Database />
            <strong>Images IRM</strong>
            <span>JPG · 512 × 512 généralement</span>
          </article>
          <div className="irm-arrow">→</div>
          <article>
            <ScanSearch />
            <strong>Prétraitement</strong>
            <span>RGB · Histogramme · Resize 224 × 224</span>
          </article>
          <div className="irm-arrow">→</div>
          <article>
            <Brain />
            <strong>ResNet-50</strong>
            <span>Poids ImageNet · Extraction de caractéristiques</span>
          </article>
          <div className="irm-arrow">→</div>
          <article>
            <Layers3 />
            <strong>Embeddings</strong>
            <span>Vecteurs de caractéristiques standardisés</span>
          </article>
        </div>

        <div className="irm-note">
          ResNet-50 est utilisé comme extracteur de caractéristiques :
          sa couche finale de classification est retirée. Le projet
          exploite ensuite les embeddings pour le clustering et
          les expériences de classification.
        </div>
      </section>

      <section className="irm-section">
        <div className="irm-section-heading">
          <span>04 / APPRENTISSAGE</span>
          <h2>Trois stratégies comparées</h2>
          <p>
            Le projet cherche à mesurer l'intérêt des données non
            annotées par rapport à une référence supervisée.
          </p>
        </div>

        <div className="irm-methods">
          {methods.map((method) => (
            <article className="irm-method" key={method.number}>
              <span>{method.number}</span>
              <div>
                <h3>{method.title}</h3>
                <p>{method.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="irm-section">
        <div className="irm-section-heading">
          <span>05 / CLUSTERING</span>
          <h2>Explorer les regroupements non supervisés</h2>
          <p>
            Avant la classification, plusieurs algorithmes sont
            évalués pour vérifier si les embeddings forment
            spontanément des groupes correspondant aux deux classes.
          </p>
          <div className="irm-visual">
            <img
                src="https://raw.githubusercontent.com/BouchezMarc/PF10-IRM-SSL/main/pics/k-means.png"
                alt="Visualisation du clustering K-Means sur les embeddings IRM"
                loading="lazy"
            />
            <p>
                Visualisation des regroupements obtenus avec K-Means
                à partir des représentations extraites par ResNet-50.
            </p>
            </div>
            <div className="irm-matrices">
            <h3>Comparaison des matrices de confusion</h3>

            <p>
                Comparaison des prédictions obtenues avec les trois
                stratégies d'apprentissage.
            </p>

            <div className="irm-matrix-grid">
                <figure>
                <img src={supervisedMatrix} alt="Matrice de confusion — apprentissage supervisé" />
                <figcaption>Apprentissage supervisé</figcaption>
                </figure>

                <figure>
                <img src={sslMatrix} alt="Matrice de confusion — apprentissage semi-supervisé" />
                <figcaption>Apprentissage semi-supervisé</figcaption>
                </figure>

                <figure>
                <img src={activeLearningMatrix} alt="Matrice de confusion — Active Learning" />
                <figcaption>Active Learning</figcaption>
                </figure>
            </div>
            </div>
        </div>

        <div className="irm-clustering-grid">
          <article>
            <h3>K-Means</h3>
            <p>Partitionnement en nombre de groupes fixé.</p>
          </article>
          <article>
            <h3>DBSCAN</h3>
            <p>Regroupement par densité et détection du bruit.</p>
          </article>
          <article>
            <h3>Agglomerative</h3>
            <p>Construction hiérarchique des groupes.</p>
          </article>
        </div>

        <h3 className="irm-subheading">Meilleurs ARI reportés</h3>

        <div className="irm-results">
          {clustering.map((item) => (
            <div className="irm-result-row" key={item.method}>
              <span>{item.method}</span>
              <strong>{item.ari}</strong>
            </div>
          ))}
        </div>

        <p className="irm-explanation">
          Les valeurs d'ARI restent faibles. Dans cette configuration,
          le clustering ne permet donc pas de retrouver correctement
          la séparation cancer / normal à partir des embeddings.
        </p>
      </section>

      <section className="irm-section">
        <div className="irm-section-heading">
          <span>06 / ÉVALUATION</span>
          <h2>Mesurer les performances</h2>
        </div>

        <div className="irm-metrics-grid">
          {metrics.map((metric) => (
            <article className="irm-metric" key={metric.label}>
              <ChartNoAxesCombined />
              <h3>{metric.label}</h3>
              <p>{metric.description}</p>
            </article>
          ))}
        </div>

        <div className="irm-validation">
          <h3>Exemple de résultats sur une validation</h3>
          <p>
            Une version stabilisée du notebook rapporte les valeurs
            suivantes. Les trois stratégies obtiennent ici les mêmes
            résultats.
          </p>

          <div className="irm-table-wrap">
            <table className="irm-table">
              <thead>
                <tr>
                  <th>Stratégie</th>
                  <th>Accuracy</th>
                  <th>F1</th>
                  <th>Recall</th>
                  <th>AUC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Supervisé</td>
                  <td>0,950</td>
                  <td>0,957</td>
                  <td>0,917</td>
                  <td>1,000</td>
                </tr>
                <tr>
                  <td>Semi-supervisé</td>
                  <td>0,950</td>
                  <td>0,957</td>
                  <td>0,917</td>
                  <td>1,000</td>
                </tr>
                <tr>
                  <td>Active Learning</td>
                  <td>0,950</td>
                  <td>0,957</td>
                  <td>0,917</td>
                  <td>1,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="irm-explanation">
            Ces résultats ne démontrent pas une supériorité du
            semi-supervisé. Une autre exécution du notebook rapporte
            des scores différents, ce qui souligne la sensibilité
            des expériences au découpage et aux paramètres.
          </p>
        </div>
      </section>

      <section className="irm-section">
        <div className="irm-section-heading">
          <span>07 / LIMITES</span>
          <h2>Interpréter les résultats avec prudence</h2>
        </div>

        <div className="irm-limit">
          <ShieldAlert />
          <div>
            <h3>Projet expérimental et pédagogique</h3>
            <p>
              Les scores obtenus ne constituent pas une validation
              clinique. Le jeu de données est réduit, les annotations
              sont limitées à 100 images et les résultats varient
              selon les configurations.
            </p>
          </div>
        </div>

        <ul className="irm-limit-list">
          <li>Seulement 50 images annotées par classe.</li>
          <li>ResNet-50 pré-entraîné sur ImageNet, pas spécifiquement sur des IRM.</li>
          <li>Pas de validation externe sur un autre centre.</li>
          <li>Pas de séparation documentée par patient.</li>
          <li>Risque de propagation des erreurs par pseudo-étiquetage.</li>
          <li>Pas de modèle exporté, d'API ou d'interface de déploiement.</li>
        </ul>

        <div className="irm-section-heading irm-improvements-heading">
          <span>08 / PERSPECTIVES</span>
          <h2>Axes d'amélioration</h2>
        </div>

        <div className="irm-improvements">
          <span>Augmenter le volume d'images annotées</span>
          <span>Construire un jeu de test indépendant</span>
          <span>Effectuer une séparation par patient</span>
          <span>Comparer des extracteurs pré-entraînés médicaux</span>
          <span>Calibrer les probabilités et les seuils</span>
          <span>Ajouter une validation par des experts</span>
        </div>
      </section>

      <footer className="irm-footer">
        <Link to="/" className="irm-back">
          <ArrowLeft size={16} /> Retour aux projets
        </Link>
        <a href={repo} target="_blank" rel="noreferrer">
          Consulter le code source <ArrowUpRight size={16} />
        </a>
      </footer>
    </main>
  );
}
