import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Building2,
  Database,
  MapPin,
  Target,
  Workflow,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import "./SeattleConsumption.css";

const repo = "https://github.com/BouchezMarc/PF03-Consommation-Seattle";
const pics =
  "https://raw.githubusercontent.com/BouchezMarc/PF03-Consommation-Seattle/main";

const visuals = [
  {
    src: `${pics}/feature_importance.png`,
    title: "Importance des variables",
    description:
      "Vue synthétique des variables les plus influentes dans le modèle : caractéristiques d'usage, âge et localisation du bâtiment.",
    wide: false,
  },
  {
    src: `${pics}/20_featutes.png`,
    title: "Les 20 variables les plus influentes",
    description:
      "Détail des vingt variables retenues dans la visualisation, notamment les catégories de bâtiments et certains quartiers de Seattle.",
    wide: true,
  },
];

export default function SeattleConsumption() {
  return (
    <main className="sea-page">
      <section className="sea-hero">
        <div className="sea-hero-content">
          <span className="sea-eyebrow">DATA SCIENCE · MACHINE LEARNING</span>
          <h1>Prédiction de la consommation énergétique des bâtiments</h1>
          <p className="sea-subtitle">
            Analyse exploratoire et modélisation supervisée à partir des
            données de consommation énergétique de la ville de Seattle.
          </p>
          <div className="sea-tags">
            {[
              "Python",
              "Pandas",
              "NumPy",
              "Scikit-learn",
              "Linear Regression",
              "Random Forest",
              "SVR",
              "GridSearchCV",
              "Folium",
              "Jupyter",
              "uv",
            ].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="sea-hero-icon">
          <Building2 size={76} strokeWidth={1.1} />
          <span>SEATTLE · 2016</span>
        </div>
      </section>

      <section className="sea-section sea-objective">
        <div className="sea-section-heading">
          <span className="sea-number">01</span>
          <div>
            <span className="sea-kicker">OBJECTIF</span>
            <h2>Estimer la consommation énergétique</h2>
          </div>
        </div>
        <p>
          Le projet consiste à exploiter les données de benchmarking
          énergétique de Seattle pour construire un modèle capable d'estimer
          la consommation énergétique des bâtiments non résidentiels à partir
          de leurs caractéristiques structurelles et fonctionnelles.
        </p>
        <div className="sea-target">
          <Target size={22} />
          <div>
            <strong>Variable cible</strong>
            <code>SiteEnergyUse(kBtu)</code>
          </div>
        </div>
        <p>
          L'enjeu est de pouvoir estimer cette consommation pour des bâtiments
          dont les mesures détaillées ne sont pas disponibles, en s'appuyant
          sur les informations descriptives du bâtiment.
        </p>
      </section>

      <section className="sea-section">
        <div className="sea-section-heading">
          <span className="sea-number">02</span>
          <div>
            <span className="sea-kicker">DONNÉES</span>
            <h2>Exploration et préparation du dataset</h2>
          </div>
        </div>
        <p>
          Le projet utilise le jeu de données{" "}
          <strong>2016 Building Energy Benchmarking</strong>, composé de
          46 colonnes décrivant les bâtiments, leurs usages, leur localisation
          et leurs consommations énergétiques.
        </p>
        <div className="sea-stats">
          <div className="sea-stat">
            <Database size={21} />
            <strong>46</strong>
            <span>Colonnes initiales</span>
          </div>
          <div className="sea-stat">
            <Building2 size={21} />
            <strong>1 674</strong>
            <span>Lignes du sous-ensemble initial</span>
          </div>
          <div className="sea-stat">
            <CheckCircle2 size={21} />
            <strong>1 441</strong>
            <span>Observations après filtrage IQR</span>
          </div>
        </div>
        <h3>Préparation des données</h3>
        <ul className="sea-list">
          <li>Sélection des bâtiments non résidentiels.</li>
          <li>Exclusion des bâtiments non conformes et de certains usages.</li>
          <li>Contrôle des valeurs manquantes, incohérentes et atypiques.</li>
          <li>Filtrage des valeurs extrêmes avec la méthode IQR.</li>
          <li>Étude des corrélations et de la multicolinéarité avec le VIF.</li>
        </ul>
      </section>

      <section className="sea-section">
        <div className="sea-section-heading">
          <span className="sea-number">03</span>
          <div>
            <span className="sea-kicker">FEATURE ENGINEERING</span>
            <h2>Construire les variables explicatives</h2>
          </div>
        </div>
        <p>
          Les variables sont transformées pour rendre les données exploitables
          par les algorithmes de régression et mieux représenter les
          caractéristiques des bâtiments.
        </p>
        <div className="sea-feature-grid">
          <article>
            <h3>Caractéristiques du bâtiment</h3>
            <p>
              Transformation de l'année de construction en âge du bâtiment
              et exploitation des surfaces.
            </p>
            <code>BuildingAge</code>
          </article>
          <article>
            <h3>Usage et localisation</h3>
            <p>
              Encodage des catégories d'usage principal et des quartiers
              avec OneHotEncoder.
            </p>
            <code>LargestPropertyUseType</code>
          </article>
          <article>
            <h3>Sources d'énergie</h3>
            <p>
              Transformation de certaines informations de présence de
              sources énergétiques en indicateurs binaires.
            </p>
            <code>SteamUse · Electricity · NaturalGas</code>
          </article>
        </div>
        <div className="sea-note">
          <AlertTriangle size={19} />
          <p>
            Les variables directement liées à la consommation cible doivent
            être écartées des jeux de caractéristiques lorsqu'elles
            réintroduisent indirectement l'information à prédire. Ce point
            est pris en compte dans les comparaisons principales du notebook.
          </p>
        </div>
      </section>

      <section className="sea-section">
        <div className="sea-section-heading">
          <span className="sea-number">04</span>
          <div>
            <span className="sea-kicker">MODÉLISATION</span>
            <h2>Comparer plusieurs modèles de régression</h2>
          </div>
        </div>
        <p>
          Une première comparaison permet d'évaluer plusieurs familles de
          modèles sur un même découpage apprentissage/test, avec une
          validation croisée.
        </p>
        <div className="sea-models">
          {[
            ["DummyRegressor", "Modèle de référence"],
            ["LinearRegression", "Régression linéaire"],
            ["SVR", "Support Vector Regression"],
            ["RandomForestRegressor", "Ensemble d'arbres de décision"],
          ].map(([name, description]) => (
            <div className="sea-model" key={name}>
              <BarChart3 size={19} />
              <div>
                <strong>{name}</strong>
                <span>{description}</span>
              </div>
            </div>
          ))}
        </div>
        <h3>Pipeline de préparation et optimisation</h3>
        <ul className="sea-list">
          <li>
            <strong>ColumnTransformer</strong> pour organiser les traitements
            selon les types de variables.
          </li>
          <li>
            <strong>StandardScaler</strong> pour la mise à l'échelle de la
            surface.
          </li>
          <li>
            <strong>OneHotEncoder</strong> pour les variables catégorielles.
          </li>
          <li>
            <strong>GridSearchCV</strong> pour optimiser les paramètres de
            la régression linéaire.
          </li>
        </ul>
      </section>

      <section className="sea-section sea-results">
        <div className="sea-section-heading">
          <span className="sea-number">05</span>
          <div>
            <span className="sea-kicker">ÉVALUATION</span>
            <h2>Résultats de la modélisation</h2>
          </div>
        </div>
        <p>
          La comparaison initiale place la régression linéaire devant les
          autres modèles sur le score R² du jeu de test. Après optimisation,
          le modèle retenu obtient les résultats suivants :
        </p>
        <div className="sea-score">
          <span>R² sur le jeu de test</span>
          <strong>0,5954</strong>
          <div className="sea-score-track">
            <span style={{ width: "59.54%" }} />
          </div>
        </div>
        <div className="sea-metrics">
          <div>
            <span>RMSE</span>
            <strong>2 047 570,27</strong>
          </div>
          <div>
            <span>MAE</span>
            <strong>1 408 620,39</strong>
          </div>
          <div>
            <span>Paramètre</span>
            <strong>fit_intercept = False</strong>
          </div>
        </div>
        <p className="sea-caption">
          Valeurs reportées dans le README pour la régression linéaire
          optimisée. Les métriques d'erreur sont exprimées dans l'unité de
          la variable cible, kBtu.
        </p>
      </section>

      <section className="sea-section">
        <div className="sea-section-heading">
          <span className="sea-number">06</span>
          <div>
            <span className="sea-kicker">INTERPRÉTABILITÉ</span>
            <h2>Identifier les variables influentes</h2>
          </div>
        </div>
        <p>
          L'analyse des coefficients et des importances permet de mieux
          comprendre quelles caractéristiques contribuent le plus aux
          estimations du modèle. Les visualisations ci-dessous présentent
          les variables les plus influentes extraites du notebook.
        </p>
        <div className="sea-visuals">
          {visuals.map((visual) => (
            <figure
              className={`sea-visual ${visual.wide ? "sea-visual-wide" : ""}`}
              key={visual.src}
            >
              <img src={visual.src} alt={visual.title} loading="lazy" />
              <figcaption>
                <strong>{visual.title}</strong>
                <span>{visual.description}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="sea-note sea-note-info">
          <MapPin size={19} />
          <p>
            Les résultats mettent en évidence le rôle de la surface du
            bâtiment, du type d'usage, de l'âge et de la localisation.
            Une importance statistique ne démontre toutefois pas une
            relation de causalité.
          </p>
        </div>
      </section>

      <section className="sea-section">
        <div className="sea-section-heading">
          <span className="sea-number">07</span>
          <div>
            <span className="sea-kicker">LIMITES ET PERSPECTIVES</span>
            <h2>Points de vigilance</h2>
          </div>
        </div>
        <ul className="sea-list">
          <li>
            La qualité des prédictions dépend des caractéristiques
            disponibles et de leur qualité.
          </li>
          <li>
            Certaines variables explicatives sont corrélées entre elles.
          </li>
          <li>
            Les performances dépendent des choix de nettoyage, de
            transformation et de sélection des variables.
          </li>
          <li>
            Les importances des variables ne doivent pas être interprétées
            comme des relations causales.
          </li>
        </ul>
        <h3>Prolongements possibles</h3>
        <p>
          Approfondir la sélection des variables, tester des méthodes
          d'interprétabilité comme SHAP et explorer d'autres approches
          d'ensemble ou de modélisation.
        </p>
      </section>

      <section className="sea-conclusion">
        <span className="sea-kicker">CONCLUSION</span>
        <h2>De la donnée bâtiment à l'estimation énergétique</h2>
        <p>
          Ce projet met en œuvre une démarche complète de Data Science :
          exploration, nettoyage, feature engineering, comparaison de
          modèles supervisés, optimisation et interprétation. Il montre
          comment exploiter les caractéristiques des bâtiments pour
          estimer leur consommation énergétique, tout en identifiant
          les limites liées aux données et à la modélisation.
        </p>
      </section>

      <footer className="sea-footer">
        <Link to="/" className="sea-back">
          <ArrowLeft size={16} />
          Retour aux projets
        </Link>
        <a href={repo} target="_blank" rel="noreferrer">
          Consulter le code source
          <ArrowUpRight size={16} />
        </a>
      </footer>
    </main>
  );
}