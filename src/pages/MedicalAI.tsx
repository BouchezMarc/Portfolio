import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Database,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import "./MedicalAI.css";

import sftTrainLoss from "../pics/PF14_sft_train_loss.png";
import sftEvalLoss from "../pics/PF14_sft_eval_loss.png";
import dpoBenchmark from "../pics/PF14_sft_dpo.png";

const sections = [
  {
    icon: Database,
    title: "Préparation des données",
    description:
      "Constitution de jeux de données médicaux bilingues à partir de MedQuAD, FrenchMedMCQA et MediQAl. Anonymisation, harmonisation des formats et séparation des données en ensembles d'entraînement, validation et test.",
    technologies: [
      "Python",
      "MedQuAD",
      "FrenchMedMCQA",
      "MediQAl",
      "JSONL",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Fine-tuning des modèles",
    description:
      "Adaptation de Qwen3-1.7B-Base au domaine médical par Supervised Fine-Tuning (SFT), puis optimisation des préférences par Direct Preference Optimization (DPO). Entraînement avec LoRA pour limiter les ressources nécessaires.",
    technologies: [
      "Qwen3-1.7B",
      "PyTorch",
      "Transformers",
      "Unsloth",
      "PEFT",
      "LoRA",
      "SFT",
      "DPO",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Évaluation et expérimentation",
    description:
      "Comparaison du modèle de base et des différentes versions affinées. Suivi des fonctions de perte, évaluation sur un benchmark de 776 exemples et analyse de la qualité des réponses.",
    technologies: [
      "RewardBench",
      "Train Loss",
      "Evaluation Loss",
      "MLflow",
    ],
  },
  {
    icon: Server,
    title: "API et inférence",
    description:
      "Développement d'une API REST avec FastAPI pour exposer le modèle. Utilisation de vLLM pour l'inférence, avec suivi des temps de réponse, journalisation des requêtes et collecte des métriques techniques.",
    technologies: [
      "Python",
      "FastAPI",
      "vLLM",
      "REST API",
    ],
  },
  {
    icon: Workflow,
    title: "Conteneurisation, CI/CD et déploiement",
    description:
      "Création de l'image Docker de l'application, publication sur GitHub Container Registry (GHCR), puis déploiement sur RunPod pour l'inférence sur GPU. GitHub Actions et Pytest sont utilisés pour les vérifications et les tests automatisés.",
    technologies: [
      "Docker",
      "GHCR",
      "RunPod",
      "GitHub Actions",
      "Pytest",
      "CI/CD",
    ],
  },
];

const benchmarkResults = [
  ["Base", 245, 776, "31,57 %"],
  ["SFT v3", 264, 776, "34,02 %"],
  ["DPO v3", 298, 776, "38,40 %"],
  ["DPO v4", 330, 776, "42,53 %"],
  ["DPO v6", 349, 776, "44,97 %"],
  ["DPO v7", 406, 776, "52,32 %"],
  ["DPO v8", 478, 776, "61,60 %"],
  ["DPO v9", 474, 776, "61,08 %"],
  ["DPO v10", 477, 776, "61,47 %"],
];

export default function MedicalAi() {
  return (
    <main className="medical-page">
      <header className="medical-header">
        <Link className="medical-back" to="/#projets">
          <ArrowLeft size={17} />
          Retour aux projets
        </Link>
        <span className="medical-label">PROJET IA · POC</span>
      </header>

      {/* INTRODUCTION */}
      <section className="medical-hero">
        <div className="medical-eyebrow">
          <span className="medical-dot" />
          AI ENGINEERING & MLOPS
        </div>

        <h1>
          Assistant de triage
          <br />
          <span>médical IA.</span>
        </h1>

        <p className="medical-intro">
          Développement d'un prototype bilingue de triage médical
          basé sur Qwen3-1.7B. Le projet couvre la préparation des
          données, le fine-tuning SFT/DPO, l'évaluation des modèles
          et leur intégration dans une API d'inférence.
        </p>

        <div className="medical-tags">
          {[
            "Python",
            "Qwen3-1.7B",
            "SFT",
            "DPO",
            "LoRA",
            "Unsloth",
            "FastAPI",
            "vLLM",
            "Docker",
            "GHCR",
            "RunPod",
            "CI/CD",
          ].map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      {/* 01 - OBJECTIF */}
      <section className="medical-section">
        <div className="medical-section-heading">
          <span>01 / OBJECTIF</span>
          <h2>Un assistant médical bilingue.</h2>
        </div>

        <p>
          L'objectif est d'étudier la faisabilité technique d'un
          assistant capable de répondre à des questions de triage
          médical en français et en anglais. Le travail consiste
          à adapter un modèle de langage généraliste au domaine
          médical, à comparer plusieurs stratégies de fine-tuning
          et à intégrer le modèle dans une architecture de service.
        </p>

        <div className="medical-notice">
          <ShieldCheck size={22} />
          <div>
            <h3>Un prototype, pas un dispositif clinique validé</h3>
            <p>
              Les expérimentations évaluent la faisabilité technique
              et les performances sur des jeux de données et benchmarks.
              Elles ne constituent pas une validation clinique et ne
              démontrent pas que le système peut remplacer un
              professionnel de santé.
            </p>
          </div>
        </div>
      </section>

      {/* 02 - ARCHITECTURE */}
      <section className="medical-section">
        <div className="medical-section-heading">
          <span>02 / ARCHITECTURE</span>
          <h2>Une chaîne complète d'AI Engineering.</h2>
        </div>

        <p>
          Le projet suit quatre étapes principales, de la préparation
          des données jusqu'au déploiement du modèle pour l'inférence.
        </p>

        <div className="medical-flow">
          <div>
            <Database size={22} />
            <strong>Données</strong>
            <span>Collecte, anonymisation et préparation</span>
          </div>

          <div className="medical-flow-arrow">→</div>

          <div>
            <BrainCircuit size={22} />
            <strong>Entraînement</strong>
            <span>Qwen3, SFT, DPO et LoRA</span>
          </div>

          <div className="medical-flow-arrow">→</div>

          <div>
            <CheckCircle2 size={22} />
            <strong>Évaluation</strong>
            <span>Benchmarks et comparaison</span>
          </div>

          <div className="medical-flow-arrow">→</div>

          <div>
            <Server size={22} />
            <strong>Déploiement</strong>
            <span>Image Docker publiée sur GHCR puis déployée sur RunPod</span>
          </div>
        </div>
      </section>

      {/* 03 - REALISATION */}
      <section className="medical-section">
        <div className="medical-section-heading">
          <span>03 / RÉALISATION</span>
          <h2>Les étapes de développement.</h2>
        </div>

        <p>
          Chaque composant répond à un besoin technique précis :
          préparer les données, adapter le modèle, mesurer ses
          performances et rendre son utilisation accessible.
        </p>

        <div className="medical-components">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <article
                className="medical-component"
                key={section.title}
              >
                <Icon size={25} />
                <h3>{section.title}</h3>
                <p>{section.description}</p>

                <div className="medical-tags">
                  {section.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 04 - RESULTATS */}
      <section className="medical-section">
        <div className="medical-section-heading">
          <span>04 / RÉSULTATS</span>
          <h2>Évaluation et optimisation des modèles.</h2>
        </div>

        <p>
          Les différentes versions ont été comparées afin de mesurer
          l'évolution des performances après le fine-tuning.
          L'analyse s'appuie sur les fonctions de perte pendant
          l'entraînement et sur un benchmark de 776 exemples.
        </p>

        <div className="medical-results">
          <h3>Fine-tuning supervisé — SFT</h3>

          <p>
            Suivi de la convergence du modèle à travers l'évolution
            des pertes d'entraînement et de validation.
          </p>

          <div className="medical-results-grid">
            <figure>
              <figcaption>Train Loss</figcaption>
              <img
                src={sftTrainLoss}
                alt="Évolution de la perte d'entraînement SFT"
              />
            </figure>

            <figure>
              <figcaption>Evaluation Loss</figcaption>
              <img
                src={sftEvalLoss}
                alt="Évolution de la perte de validation SFT"
              />
            </figure>
          </div>

          <h3>Optimisation par préférences — DPO</h3>

          <p>
            Comparaison des versions successives du modèle sur
            le benchmark utilisé pour mesurer leur évolution.
          </p>

          <figure className="medical-results-benchmark">
            <img
              src={dpoBenchmark}
              alt="Comparaison des résultats des modèles SFT et DPO"
            />
          </figure>

          <div className="medical-results-table">
            <table>
              <thead>
                <tr>
                  <th>Modèle</th>
                  <th>Correct</th>
                  <th>Total</th>
                  <th>Accuracy</th>
                </tr>
              </thead>

              <tbody>
                {benchmarkResults.map(
                  ([model, correct, total, accuracy]) => (
                    <tr
                      key={model}
                      className={
                        model === "DPO v8" ? "best-result" : ""
                      }
                    >
                      <td>{model}</td>
                      <td>{correct}</td>
                      <td>{total}</td>
                      <td>{accuracy}</td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>

          <div className="medical-results-summary">
            <div>
              <span>Modèle de base</span>
              <strong>31,57 %</strong>
            </div>

            <div>
              <span>Meilleur résultat affiché</span>
              <strong>61,60 %</strong>
            </div>

            <div>
              <span>Progression affichée</span>
              <strong>+30,03 points</strong>
            </div>
          </div>
        </div>

        <p className="medical-future">
          Les résultats présentés correspondent aux évaluations
          expérimentales réalisées sur le benchmark utilisé.
          Ils permettent de comparer les versions du modèle,
          mais ne constituent ni une mesure de performance clinique
          ni une garantie de fiabilité en situation réelle.
        </p>
      </section>

      {/* 05 - LIMITES ET PERSPECTIVES */}
      <section className="medical-section">
        <div className="medical-section-heading">
          <span>05 / PERSPECTIVES</span>
          <h2>Limites et évolutions possibles.</h2>
        </div>

        <p>
          Ce prototype constitue une première validation de
          l'architecture technique. Les prochaines étapes concernent
          l'amélioration de la qualité des réponses, l'évaluation
          de leur fiabilité, la robustesse du service et l'étude
          des conditions nécessaires à une éventuelle expérimentation
          supervisée par des professionnels de santé.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="medical-footer">
        <Link to="/#projets">
          <ArrowLeft size={17} />
          Tous les projets
        </Link>

        <a
          href="https://github.com/BouchezMarc/PF14-Medical-AI"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir le code sur GitHub
          <ArrowUpRight size={16} />
        </a>
      </footer>
    </main>
  );
}