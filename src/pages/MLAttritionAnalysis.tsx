import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  BrainCircuit,
  Database,
  GitBranch,
  BarChart3,
  Target,
  SlidersHorizontal,
  Lightbulb,
  Activity,
  BriefcaseBusiness,
  TrendingUp,
  ChartNoAxesCombined,
  Scale,
} from "lucide-react";
import "./MLAttritionAnalysis.css";

const repo =
  "https://github.com/BouchezMarc/PF04-Assisstant-Attrition";

const pics =
  "https://raw.githubusercontent.com/BouchezMarc/PF04-Assisstant-Attrition/main/pics";

const visuals = [
  {
    file: "beeswarm_impact.png",
    title: "Impact global des variables — SHAP",
    description:
      "Visualisation de la distribution des contributions SHAP. La couleur représente la valeur de chaque variable et l'axe horizontal son impact sur la sortie du modèle.",
    wide: true,
  },
  {
    file: "permutation_importance.png",
    title: "Permutation Importance",
    description:
      "Comparaison de l'importance des variables par permutation. Cette approche complète l'analyse SHAP avec une autre méthode d'interprétation.",
  },
  {
    file: "waterfall.png",
    title: "Explication d'une prédiction individuelle",
    description:
      "Décomposition de la prédiction d'un salarié : les contributions positives et négatives des variables conduisent au résultat du modèle.",
  },
  {
    file: "prc.png",
    title: "Courbe précision-rappel",
    description:
      "Visualisation du compromis entre précision et rappel selon le seuil de classification. L'Average Precision affichée est de 0,53.",
  },
  {
    file: "matrice.png",
    title: "Matrice de confusion",
    description:
      "Visualisation des classifications correctes et des erreurs pour le seuil utilisé dans cette matrice. Elle est présentée séparément des résultats récapitulatifs du README.",
  },
];

const featureGroups = [
  {
    title: "Satisfaction",
    variables: [
      "satisfaction_globale",
      "dispersion_satisfaction",
    ],
    description:
      "Regroupement des quatre dimensions de satisfaction pour créer une moyenne et une mesure de dispersion.",
  },
  {
    title: "Ancienneté et expérience",
    variables: [
      "ratio_fidelite",
      "ratio_stagnation_poste",
      "duree_moyenne_experience",
    ],
    description:
      "Création de ratios décrivant la fidélité, la stagnation dans le poste et la durée moyenne d'expérience.",
  },
  {
    title: "Rémunération",
    variables: [
      "salaire_par_annee_experience",
      "salaire_vs_poste",
      "salaire_vs_niveau",
    ],
    description:
      "Mise en relation du salaire avec l'expérience, le poste et le niveau hiérarchique.",
  },
];

const models = [
  {
    name: "DummyClassifier",
    role: "Modèle de référence",
    description: "Établir une référence de comparaison simple.",
  },
  {
    name: "LogisticRegression",
    role: "Modèle interprétable",
    description: "Modèle de classification dont les résultats sont détaillés dans le README.",
  },
  {
    name: "RandomForestClassifier",
    role: "Modèle ensembliste",
    description: "Comparer une approche fondée sur des arbres de décision.",
  },
];

export default function MLAttritionAnalysis() {
  return (
    <main className="mla-page">
      <section className="mla-hero">
        <div className="mla-hero-content">
          <span className="mla-eyebrow">
            DATA SCIENCE · MACHINE LEARNING · RH
          </span>

          <h1>
            Analyse et prédiction
            <span> de l'attrition RH</span>
          </h1>

          <p className="mla-lead">
            Identifier les facteurs associés aux départs des collaborateurs
            au sein d'une ESN, comparer plusieurs modèles de classification
            et interpréter leurs prédictions avec SHAP.
          </p>

          <div className="mla-tags">
            {[
              "Python",
              "Pandas",
              "Scikit-learn",
              "Logistic Regression",
              "Random Forest",
              "SMOTE",
              "SHAP",
              "GridSearchCV",
              "Jupyter",
              "uv",
            ].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="mla-hero-meta">
            <span><BrainCircuit size={16} /> Classification binaire</span>
            <span><BarChart3 size={16} /> Analyse exploratoire</span>
            <span><Lightbulb size={16} /> Interprétabilité SHAP</span>
          </div>
        </div>

        <div className="mla-hero-visual">
          <div className="mla-orbit mla-orbit-one" />
          <div className="mla-orbit mla-orbit-two" />
          <div className="mla-core">
            <BrainCircuit size={48} />
            <strong>ATTRITION ML</strong>
          </div>
          <div className="mla-floating-card mla-floating-top">
            <Target size={17} />
            <span>Prédiction</span>
          </div>
          <div className="mla-floating-card mla-floating-bottom">
            <Lightbulb size={17} />
            <span>SHAP</span>
          </div>
        </div>
      </section>

      <section className="mla-section">
        <div className="mla-heading">
          <span className="mla-number">01</span>
          <div>
            <span className="mla-kicker">OBJECTIF DU PROJET</span>
            <h2>Comprendre les facteurs liés aux départs</h2>
          </div>
        </div>

        <div className="mla-objective-grid">
          <div>
            <p>
              Le projet vise à identifier les facteurs associés à l'attrition
              des salariés au sein d'une entreprise de services numériques.
              Il s'appuie sur plusieurs sources de données RH afin de
              construire un jeu de données consolidé et d'étudier les
              caractéristiques des collaborateurs ayant quitté l'entreprise.
            </p>
            <p>
              L'analyse combine exploration statistique, création de
              variables explicatives, comparaison de modèles de classification
              et interprétation des résultats. L'objectif est notamment
              d'améliorer la détection des salariés susceptibles de partir,
              sans transformer la prédiction en décision automatique.
            </p>
          </div>

          <div className="mla-objective-card">
            <span>Variable cible</span>
            <strong>a_quitte_l_entreprise</strong>
            <div className="mla-target-values">
              <div>
                <span className="mla-dot mla-dot-no" />
                <span>0 — Non parti</span>
              </div>
              <div>
                <span className="mla-dot mla-dot-yes" />
                <span>1 — Parti</span>
              </div>
            </div>
            <small>Classification binaire</small>
          </div>
        </div>
      </section>

      <section className="mla-section">
        <div className="mla-heading">
          <span className="mla-number">02</span>
          <div>
            <span className="mla-kicker">DONNÉES RH</span>
            <h2>Consolider plusieurs sources</h2>
          </div>
        </div>

        <p className="mla-intro">
          Trois sources alimentent l'analyse. Elles sont rapprochées à partir
          des identifiants salariés pour construire un ensemble cohérent
          de caractéristiques individuelles.
        </p>

        <div className="mla-data-flow">
          <article>
            <Database size={25} />
            <h3>SIRH</h3>
            <p>Informations administratives et professionnelles des salariés.</p>
            <code>extrait_sirh.csv</code>
          </article>
          <article>
            <BarChart3 size={25} />
            <h3>Évaluations</h3>
            <p>Informations relatives aux évaluations des collaborateurs.</p>
            <code>extrait_eval.csv</code>
          </article>
          <article>
            <Activity size={25} />
            <h3>Sondages</h3>
            <p>Réponses aux enquêtes de satisfaction des salariés.</p>
            <code>extrait_sondage.csv</code>
          </article>
        </div>

        <div className="mla-join">
          <GitBranch size={19} />
          <span>Jointure des trois sources à partir des identifiants salariés</span>
          <ArrowUpRight size={18} />
          <strong>Jeu de données consolidé</strong>
        </div>
      </section>

      <section className="mla-section">
        <div className="mla-heading">
          <span className="mla-number">03</span>
          <div>
            <span className="mla-kicker">FEATURE ENGINEERING</span>
            <h2>Créer des variables explicatives</h2>
          </div>
        </div>

        <p className="mla-intro">
          Le travail de préparation ne se limite pas à l'encodage des
          variables. Des caractéristiques dérivées sont construites pour
          mieux représenter la satisfaction, l'expérience professionnelle
          et la rémunération.
        </p>

        <div className="mla-feature-grid">
          {featureGroups.map((group) => (
            <article className="mla-feature-card" key={group.title}>
              <span className="mla-feature-label">FEATURE ENGINEERING</span>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="mla-variable-list">
                {group.variables.map((variable) => (
                  <code key={variable}>{variable}</code>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mla-preprocessing">
          <div className="mla-preprocessing-icon">
            <SlidersHorizontal size={25} />
          </div>
          <div>
            <h3>Prétraitement des données</h3>
            <p>
              Encodage binaire du genre et des heures supplémentaires,
              conversion des pourcentages, encodage ordinal de la fréquence
              des déplacements et One-Hot Encoding des variables
              catégorielles nominales.
            </p>
            <div className="mla-inline-tags">
              <span>ColumnTransformer</span>
              <span>OneHotEncoder</span>
              <span>Encodage ordinal</span>
              <span>Pipeline Scikit-learn</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mla-section">
        <div className="mla-heading">
          <span className="mla-number">04</span>
          <div>
            <span className="mla-kicker">MODÉLISATION</span>
            <h2>Comparer plusieurs algorithmes</h2>
          </div>
        </div>

        <p className="mla-intro">
          Plusieurs approches sont évaluées dans des pipelines intégrant
          le prétraitement. La recherche d'hyperparamètres et la validation
          croisée stratifiée permettent de comparer les configurations.
        </p>

        <div className="mla-model-grid">
          {models.map((model, index) => (
            <article className="mla-model-card" key={model.name}>
              <span>0{index + 1}</span>
              <BrainCircuit size={25} />
              <h3>{model.name}</h3>
              <strong>{model.role}</strong>
              <p>{model.description}</p>
            </article>
          ))}
        </div>

        <div className="mla-model-tools">
          <div>
            <Scale size={21} />
            <strong>Gestion du déséquilibre</strong>
            <span>class_weight · SMOTE · EditedNearestNeighbours</span>
          </div>
          <div>
            <SlidersHorizontal size={21} />
            <strong>Optimisation</strong>
            <span>GridSearchCV · validation croisée stratifiée</span>
          </div>
        </div>
      </section>

      <section className="mla-section">
        <div className="mla-heading">
          <span className="mla-number">05</span>
          <div>
            <span className="mla-kicker">ÉVALUATION ET SEUIL</span>
            <h2>Adapter le modèle à la détection des départs</h2>
          </div>
        </div>

        <p className="mla-intro">
          Le README présente les résultats de la régression logistique
          sur le jeu de test. Le choix du seuil de classification est
          particulièrement important : il modifie l'équilibre entre
          précision et rappel pour la classe des salariés partis.
        </p>

        <div className="mla-results">
          <div className="mla-result-primary">
            <span>ROC AUC — Jeu de test</span>
            <strong>0,80</strong>
            <small>Régression logistique</small>
          </div>
          <div className="mla-result">
            <span>Précision — Oui</span>
            <strong>0,55</strong>
            <small>Seuil standard documenté</small>
          </div>
          <div className="mla-result">
            <span>Rappel — Oui</span>
            <strong>0,28</strong>
            <small>Seuil standard documenté</small>
          </div>
        </div>

        <div className="mla-threshold">
          <div className="mla-threshold-icon">
            <Target size={28} />
          </div>
          <div>
            <span className="mla-kicker">OPTIMISATION DU SEUIL</span>
            <h3>Seuil de classification fixé à 0,1</h3>
            <p>
              Le rappel sur le jeu de test atteint alors <strong>0,97</strong>.
              Le modèle détecte ainsi une part beaucoup plus importante
              des départs réels, au prix d'un compromis différent sur
              la précision.
            </p>
          </div>
          <div className="mla-threshold-value">
            <span>Recall</span>
            <strong>0,97</strong>
          </div>
        </div>

        <div className="mla-warning">
          <Activity size={19} />
          <p>
            Un rappel élevé ne signifie pas que toutes les prédictions
            positives sont correctes. Le seuil doit être choisi selon
            l'objectif métier et les conséquences des faux positifs
            et des faux négatifs.
          </p>
        </div>

        <h3 className="mla-subtitle">Métriques utilisées</h3>
        <div className="mla-metrics">
          {[
            ["Precision", "Fiabilité des prédictions positives"],
            ["Recall", "Part des départs réels détectés"],
            ["F1-score", "Équilibre entre précision et rappel"],
            ["ROC AUC", "Capacité de discrimination"],
            ["F-beta", "Importance accrue du rappel avec β = 2 et β = 5"],
            ["Matrice de confusion", "Répartition des prédictions correctes et erronées"],
          ].map(([name, description]) => (
            <div key={name}>
              <strong>{name}</strong>
              <span>{description}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mla-section mla-visuals-section">
        <div className="mla-heading">
          <span className="mla-number">06</span>
          <div>
            <span className="mla-kicker">INTERPRÉTABILITÉ ET ANALYSE</span>
            <h2>Comprendre les facteurs associés à l'attrition</h2>
          </div>
        </div>

        <p className="mla-intro">
          L'interprétabilité est une partie centrale du projet. SHAP permet
          d'étudier les contributions des variables aux sorties du modèle,
          à l'échelle globale comme à celle d'une prédiction individuelle.
          La permutation importance apporte un autre regard sur l'influence
          des variables.
        </p>

        <div className="mla-visual-grid">
          {visuals.map((visual) => (
            <figure
              className={`mla-visual-card ${visual.wide ? "mla-visual-wide" : ""}`}
              key={visual.file}
            >
              <a
                href={`${pics}/${visual.file}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ouvrir ${visual.title}`}
              >
                <img
                  src={`${pics}/${visual.file}`}
                  alt={visual.title}
                  loading="lazy"
                />
              </a>
              <figcaption>
                <h3>{visual.title}</h3>
                <p>{visual.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mla-interpretation">
          <Lightbulb size={23} />
          <div>
            <strong>À retenir</strong>
            <p>
              Les visualisations permettent d'étudier notamment la durée
              moyenne d'expérience, la satisfaction globale, le revenu,
              la distance domicile-travail, les promotions et les heures
              supplémentaires. Une association observée par le modèle
              ne démontre pas une relation causale.
            </p>
          </div>
        </div>
      </section>

      <section className="mla-section">
        <div className="mla-heading">
          <span className="mla-number">07</span>
          <div>
            <span className="mla-kicker">ANALYSE MÉTIER</span>
            <h2>Relier les résultats aux enjeux RH</h2>
          </div>
        </div>

        <div className="mla-business-grid">
          <article>
            <BriefcaseBusiness size={25} />
            <h3>Évolution professionnelle</h3>
            <p>
              Étudier les liens entre ancienneté, stagnation dans le poste
              et évolution de carrière.
            </p>
          </article>
          <article>
            <TrendingUp size={25} />
            <h3>Rémunération</h3>
            <p>
              Examiner les variables de salaire en relation avec
              l'expérience et le niveau hiérarchique.
            </p>
          </article>
          <article>
            <Activity size={25} />
            <h3>Satisfaction</h3>
            <p>
              Analyser les dimensions de satisfaction et leur contribution
              aux prédictions du modèle.
            </p>
          </article>
          <article>
            <ChartNoAxesCombined size={25} />
            <h3>Conditions de travail</h3>
            <p>
              Étudier notamment les déplacements et les heures
              supplémentaires.
            </p>
          </article>
        </div>
      </section>

      <section className="mla-section mla-limits">
        <div className="mla-heading">
          <span className="mla-number">08</span>
          <div>
            <span className="mla-kicker">LIMITES ET PERSPECTIVES</span>
            <h2>Une aide à l'analyse, pas une décision RH automatisée</h2>
          </div>
        </div>

        <div className="mla-limits-grid">
          <div>
            <h3>Limites</h3>
            <ul>
              <li>
                Les résultats dépendent de la qualité et de la
                représentativité des données.
              </li>
              <li>
                L'écart entre les résultats d'entraînement et de test
                mérite une attention particulière.
              </li>
              <li>
                Les associations statistiques ne prouvent pas la causalité.
              </li>
              <li>
                Les variables RH peuvent introduire des biais et des
                risques de discrimination.
              </li>
              <li>
                Les prédictions ne doivent pas déclencher automatiquement
                de décisions individuelles.
              </li>
            </ul>
          </div>
          <div>
            <h3>Pistes d'évolution</h3>
            <ul>
              <li>Approfondir la calibration des probabilités.</li>
              <li>Évaluer les performances selon différents segments.</li>
              <li>Analyser les biais potentiels des variables.</li>
              <li>Consolider le choix du seuil selon les besoins métier.</li>
              <li>Valider les résultats sur des données supplémentaires.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mla-conclusion">
        <span className="mla-kicker">CONCLUSION</span>
        <h2>Faire du Machine Learning un outil d'analyse explicable</h2>
        <p>
          PF04 met en œuvre une démarche complète de Data Science appliquée
          aux ressources humaines : consolidation de données hétérogènes,
          feature engineering, comparaison de modèles, optimisation du seuil
          et interprétation des prédictions. Les résultats montrent l'intérêt
          de privilégier le rappel lorsque l'objectif est de détecter
          les départs, tout en conservant une lecture critique des erreurs,
          des biais et des limites du modèle.
        </p>
      </section>

      <footer className="mla-footer">
        <Link to="/" className="mla-back">
          <ArrowLeft size={16} /> Retour aux projets
        </Link>
        <a href={repo} target="_blank" rel="noreferrer">
          Consulter le code source <ArrowUpRight size={16} />
        </a>
      </footer>
    </main>
  );
}