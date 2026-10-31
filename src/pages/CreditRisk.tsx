import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import "./CreditRisk.css";

const repo = "https://github.com/BouchezMarc/PF06-Monitoring-Credit-Default-Risk-";

const CreditRisk = () => {
  return (
    <main className="credit-risk-page">
      <header className="credit-risk-hero">
        <span className="credit-risk-kicker">Projet 06 · Data Science / Machine Learning</span>
        <h1>Scoring du risque de défaut de crédit</h1>
        <p className="credit-risk-subtitle">
          Développer un modèle de scoring capable d'estimer la probabilité
          de défaut d'un emprunteur, d'optimiser le seuil de décision et
          d'expliquer les prédictions grâce à SHAP.
        </p>

        <div className="credit-risk-tags">
          {[
            "Python",
            "Pandas",
            "Scikit-learn",
            "LightGBM",
            "XGBoost",
            "Optuna",
            "MLflow",
            "SHAP",
            "imbalanced-learn",
            "uv",
          ].map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </header>

      <section className="credit-risk-objective">
        <h2>Objectif du projet</h2>
        <p>
          Concevoir un modèle de scoring crédit qui estime la probabilité
          qu'un client ne rembourse pas son prêt, puis transforme cette
          probabilité en une aide à la décision : acceptation ou refus
          de la demande.
        </p>
        <p>
          L'enjeu métier est de détecter les défauts de remboursement.
          Le coût associé à un faux négatif étant considéré comme plus
          important que celui d'un faux positif, le seuil de décision
          doit être optimisé en fonction de ce compromis.
        </p>
        <div className="credit-risk-scope">
          <span><strong>Dataset :</strong> Home Credit Default Risk</span>
          <span><strong>Cible :</strong> TARGET = 1 (défaut)</span>
          <span><strong>Coût métier :</strong> 10 × FN + 1 × FP</span>
        </div>
      </section>

      <section className="credit-risk-section">
        <div className="credit-risk-heading">
          <span>01</span>
          <h2>Architecture et données</h2>
        </div>

        <p>
          Le projet s'appuie sur plusieurs tables décrivant la demande
          courante et l'historique financier du client. Les tables
          secondaires sont agrégées par identifiant client avant
          d'être jointes à la table principale.
        </p>

        <div className="credit-risk-data-flow">
          <article>
            <h3>Demande courante</h3>
            <p>Application train et application test.</p>
          </article>
          <article>
            <h3>Historique de crédit</h3>
            <p>Bureau de crédit et historique mensuel bureau_balance.</p>
          </article>
          <article>
            <h3>Historique Home Credit</h3>
            <p>Previous applications, POS-CASH et cartes de crédit.</p>
          </article>
          <article>
            <h3>Comportement de paiement</h3>
            <p>Installments payments et historique des échéances.</p>
          </article>
        </div>

        <div className="credit-risk-info">
          <h3>Assemblage des données</h3>
          <p>
            Les historiques sont agrégés par <code>SK_ID_CURR</code>,
            puis intégrés à la table des demandes. Le premier assemblage
            produit 756 colonnes. Après filtrage des variables ayant
            moins de 50 % de valeurs manquantes et retrait de l'identifiant,
            le jeu de données utilisé pour les expériences compte
            565 variables.
          </p>
        </div>
      </section>

      <section className="credit-risk-section">
        <div className="credit-risk-heading">
          <span>02</span>
          <h2>Préparation et feature engineering</h2>
        </div>

        <p>
          Le notebook principal <code>search.ipynb</code> regroupe
          l'exploration, la préparation des variables et les expérimentations
          de modélisation.
        </p>

        <div className="credit-risk-process">
          <article>
            <span>01</span>
            <h3>Encodage</h3>
            <p>
              Encodage binaire des variables à deux modalités et
              one-hot encoding des variables catégorielles.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Nettoyage</h3>
            <p>
              Remplacement des valeurs sentinelles, traitement des
              valeurs infinies et gestion des valeurs manquantes.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Feature engineering</h3>
            <p>
              Création de ratios métier : revenus/crédit, annuité/revenu,
              revenu par personne et taux de paiement.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>Agrégations</h3>
            <p>
              Calcul de statistiques min, max, moyenne, somme, variance
              et taille sur les historiques de crédit et de paiement.
            </p>
          </article>
        </div>

        <div className="credit-risk-info">
          <h3>Déséquilibre des classes</h3>
          <p>
            Le taux de défaut observé dans le jeu d'apprentissage est
            d'environ 8,1 %. Le notebook expérimente plusieurs stratégies
            pour prendre en compte ce déséquilibre : pondération des classes,
            <code> scale_pos_weight</code>, Edited Nearest Neighbours
            (ENN) et SMOTE.
          </p>
        </div>
      </section>

      <section className="credit-risk-section">
        <div className="credit-risk-heading">
          <span>03</span>
          <h2>Modélisation et optimisation</h2>
        </div>

        <p>
          Plusieurs familles de modèles sont comparées afin d'évaluer
          leur capacité à identifier les clients présentant un risque
          de défaut.
        </p>

        <div className="credit-risk-models">
          <article>
            <h3>Régression logistique</h3>
            <p>
              Modèle de référence pour établir une première mesure
              de performance et disposer d'une approche interprétable.
            </p>
          </article>
          <article>
            <h3>Random Forest</h3>
            <p>
              Modèle d'ensemble permettant de capturer des relations
              non linéaires entre les variables.
            </p>
          </article>
          <article>
            <h3>Gradient Boosting</h3>
            <p>
              Expérimentations avec LightGBM et XGBoost pour améliorer
              la capacité de discrimination du scoring.
            </p>
          </article>
        </div>

        <div className="credit-risk-info">
          <h3>Optimisation des hyperparamètres et du seuil</h3>
          <p>
            Optuna est utilisé pour rechercher les hyperparamètres.
            Le notebook étudie également le seuil de décision qui minimise
            le coût métier défini par <code>10 × FN + FP</code>.
            L'objectif est de privilégier la détection des défauts plutôt
            que d'utiliser systématiquement le seuil standard de 0,5.
          </p>
        </div>

        <div className="credit-risk-metrics">
          <h3>Indicateurs d'évaluation</h3>
          <div className="credit-risk-metric-tags">
            {[
              "ROC AUC",
              "Précision",
              "Recall",
              "F1-score",
              "F-beta (β = 2)",
              "F-beta (β = 5)",
              "Coût métier",
            ].map((metric) => (
              <span key={metric}>{metric}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="credit-risk-section">
        <div className="credit-risk-heading">
          <span>04</span>
          <h2>Résultats des expérimentations</h2>
        </div>

        <p>
          Les résultats ci-dessous sont ceux enregistrés dans le notebook.
          Ils correspondent à des configurations et des découpages
          différents : ils ne doivent donc pas être interprétés comme
          une comparaison directe entre modèles.
        </p>

        <div className="credit-risk-table-wrap">
          <table className="credit-risk-table">
            <thead>
              <tr>
                <th>Expérience</th>
                <th>ROC AUC</th>
                <th>Précision</th>
                <th>Recall</th>
                <th>F1</th>
                <th>Seuil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Régression logistique · initiale</td>
                <td>0,5893</td>
                <td>0,5096</td>
                <td>0,5001</td>
                <td>0,4795</td>
                <td>0,50</td>
              </tr>
              <tr>
                <td>Gradient Boosting · seuil optimisé</td>
                <td>0,7287</td>
                <td>0,5570</td>
                <td>0,6633</td>
                <td>0,5486</td>
                <td>0,56</td>
              </tr>
              <tr>
                <td>Régression logistique · autre configuration</td>
                <td>0,7779</td>
                <td>0,7401</td>
                <td>0,5157</td>
                <td>0,5108</td>
                <td>0,50</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="credit-risk-caption">
          Résultats issus des cellules d'expérimentation du notebook.
          Le choix du modèle de référence doit être confirmé par une
          expérience MLflow reproductible et un protocole de validation fixe.
        </p>
      </section>

      <section className="credit-risk-section">
        <div className="credit-risk-heading">
          <span>05</span>
          <h2>Interprétabilité avec SHAP</h2>
        </div>

        <p>
          SHAP permet d'expliquer les prédictions du modèle à deux niveaux :
          une vision globale des variables influentes et une explication
          détaillée pour une observation individuelle.
        </p>

        <div className="credit-risk-shap-grid">
          <figure>
            <img
              src="https://raw.githubusercontent.com/BouchezMarc/PF06-Monitoring-Credit-Default-Risk-/main/pics/beeswarm.png"
              alt="Graphique SHAP beeswarm montrant la distribution de l'impact des variables"
              loading="lazy"
            />
            <figcaption>
              <strong>Beeswarm SHAP</strong>
              <span>
                Distribution des valeurs SHAP et sens de l'influence
                des principales variables sur les prédictions.
              </span>
            </figcaption>
          </figure>

          <figure>
            <img
              src="https://raw.githubusercontent.com/BouchezMarc/PF06-Monitoring-Credit-Default-Risk-/main/pics/shap1.png"
              alt="Graphique SHAP présentant l'importance globale des variables"
              loading="lazy"
            />
            <figcaption>
              <strong>Importance globale SHAP</strong>
              <span>
                Classement des variables selon leur contribution
                moyenne à la sortie du modèle.
              </span>
            </figcaption>
          </figure>

          <figure className="credit-risk-waterfall">
            <img
              src="https://raw.githubusercontent.com/BouchezMarc/PF06-Monitoring-Credit-Default-Risk-/main/pics/waterfall.png"
              alt="Graphique SHAP waterfall expliquant une prédiction individuelle"
              loading="lazy"
            />
            <figcaption>
              <strong>Waterfall SHAP</strong>
              <span>
                Décomposition d'une prédiction individuelle en contributions
                positives et négatives des variables.
              </span>
            </figcaption>
          </figure>
        </div>

        <div className="credit-risk-info">
          <h3>Lecture des valeurs SHAP</h3>
          <p>
            Une contribution SHAP positive augmente la sortie du modèle
            associée au risque de défaut ; une contribution négative
            la diminue. L'interprétation exacte dépend de l'espace de sortie
            du modèle et de l'explainer utilisé.
          </p>
        </div>
      </section>

      <section className="credit-risk-section">
        <div className="credit-risk-heading">
          <span>06</span>
          <h2>Suivi des expérimentations avec MLflow</h2>
        </div>

        <p>
          MLflow assure la traçabilité des expériences de Machine Learning.
          Il permet de conserver les paramètres, les métriques et les
          artefacts associés aux différents essais.
        </p>

        <div className="credit-risk-mlflow">
          <article>
            <h3>Expériences</h3>
            <p>
              Regroupement des essais dans l'expérience
              <code> Projet 06</code>.
            </p>
          </article>
          <article>
            <h3>Paramètres et métriques</h3>
            <p>
              Journalisation des hyperparamètres, scores et résultats
              des expérimentations Optuna.
            </p>
          </article>
          <article>
            <h3>Runs parent / enfants</h3>
            <p>
              Organisation des essais d'optimisation et suivi
              de leurs configurations respectives.
            </p>
          </article>
          <article>
            <h3>Artefacts</h3>
            <p>
              Enregistrement des modèles scikit-learn et LightGBM
              ainsi que des artefacts dans <code>mlruns/</code>.
            </p>
          </article>
        </div>
      </section>

      <section className="credit-risk-section">
        <div className="credit-risk-heading">
          <span>07</span>
          <h2>Limites et perspectives</h2>
        </div>

        <div className="credit-risk-limits">
          <article>
            <h3>État actuel</h3>
            <ul>
              <li>Pipeline principal concentré dans le notebook.</li>
              <li><code>main.py</code> contient un exemple minimal.</li>
              <li>Résultats enregistrés issus de configurations différentes.</li>
              <li>Protocole de référence à stabiliser.</li>
              <li>Pas d'API de scoring sécurisée actuellement intégrée.</li>
            </ul>
          </article>

          <article>
            <h3>Prochaines étapes</h3>
            <ul>
              <li>Extraire le pipeline dans des modules versionnés et testables.</li>
              <li>Fixer un protocole de validation reproductible.</li>
              <li>Versionner les jeux de données et les features.</li>
              <li>Enregistrer le seuil métier avec le modèle.</li>
              <li>Ajouter des tests de données et de non-régression.</li>
              <li>Surveiller le drift, la calibration et les performances par segment.</li>
              <li>Documenter les règles de décision et les contrôles de biais.</li>
              <li>Développer une API ou un batch de scoring sécurisé.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="credit-risk-conclusion">
        <h2>Bilan du projet</h2>
        <p>
          Ce projet met en œuvre les principales étapes d'un processus
          de scoring crédit : exploration et agrégation de données
          hétérogènes, feature engineering, comparaison de modèles,
          gestion du déséquilibre des classes et optimisation du seuil
          de décision selon un coût métier.
        </p>
        <p>
          L'utilisation de SHAP apporte une dimension explicative aux
          prédictions, tandis que MLflow permet de tracer les expériences.
          Le travail constitue une base analytique et expérimentale
          pour préparer un pipeline de scoring plus industrialisé.
        </p>
      </section>

      <footer className="credit-risk-footer">
        <Link to="/" className="credit-risk-back">
          <ArrowLeft size={16} /> Retour aux projets
        </Link>
        <a href={repo} target="_blank" rel="noreferrer">
          Consulter le code source <ArrowUpRight size={16} />
        </a>
      </footer>
    </main>
  );
};

export default CreditRisk;