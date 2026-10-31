
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
    icon: BrainCircuit,
    title: "Modèle et fine-tuning",
    description:
      "Qwen3-1.7B-Base adapté à la tâche par fine-tuning supervisé (SFT), puis optimisation des préférences par Direct Preference Optimization (DPO) avec LoRA.",
    technologies: ["Qwen3", "Transformers", "Unsloth", "PEFT", "SFT", "DPO", "LoRA"],
  },
  {
    icon: Database,
    title: "Données et évaluation",
    description:
      "Préparation de jeux de données bilingues français/anglais, anonymisation, séparation entraînement/validation/test et évaluation comparative des modèles.",
    technologies: ["MedQuAD", "FrenchMedMCQA", "MediQAl", "RewardBench"],
  },
  {
    icon: Server,
    title: "API et inférence",
    description:
      "Exposition du modèle via une API REST FastAPI, avec inférence assurée par vLLM et collecte des temps de réponse et des métriques techniques.",
    technologies: ["FastAPI", "vLLM", "Python", "Docker"],
  },
  {
    icon: Workflow,
    title: "Déploiement et CI/CD",
    description:
      "Conteneurisation de l'application, tests automatisés et préparation d'un pipeline de déploiement avec GitHub Actions.",
    technologies: ["Docker", "GitHub Actions", "Pytest"],
  },
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

      <section className="medical-hero">
        <div className="medical-eyebrow">
          <span className="medical-dot" />
          INTELLIGENCE ARTIFICIELLE & MLOPS
        </div>

        <h1>
          Assistant de triage
          <br />
          <span>médical IA.</span>
        </h1>

        <p className="medical-intro">
          Conception d'un prototype d'assistant de triage médical bilingue
          français/anglais, fondé sur un modèle de langage spécialisé par
          fine-tuning et exposé au moyen d'une API.
        </p>

        <div className="medical-tags">
          {["Python", "Qwen3", "SFT", "DPO", "LoRA", "FastAPI", "vLLM", "Docker"].map(
            (tag) => (
              <span key={tag}>{tag}</span>
            ),
          )}
        </div>
      </section>

      <section className="medical-section">
        <div className="medical-section-heading">
          <span>01 / OBJECTIF</span>
          <h2>Valider la faisabilité technique.</h2>
        </div>
        <p>
          Le projet vise à construire et évaluer un prototype capable de
          répondre à des questions de triage médical en français et en anglais.
          Le travail porte sur l'adaptation du modèle, la qualité des données,
          l'évaluation des réponses, la traçabilité et l'intégration dans une
          architecture API.
        </p>

        <div className="medical-notice">
          <ShieldCheck size={22} />
          <div>
            <h3>Un prototype, pas un dispositif clinique validé</h3>
            <p>
              Les résultats présentés évaluent la faisabilité technique et les
              performances expérimentales. Ils ne constituent pas une
              validation clinique et ne démontrent pas que le système peut
              remplacer un professionnel de santé.
            </p>
          </div>
        </div>
      </section>

      <section className="medical-section">
        <div className="medical-section-heading">
          <span>02 / ARCHITECTURE</span>
          <h2>Du modèle à l'API.</h2>
        </div>

        <div className="medical-flow">
          <div><Database size={22} /><strong>Données</strong><span>Préparation et anonymisation</span></div>
          <div className="medical-flow-arrow">→</div>
          <div><BrainCircuit size={22} /><strong>Fine-tuning</strong><span>SFT puis DPO</span></div>
          <div className="medical-flow-arrow">→</div>
          <div><Server size={22} /><strong>Inférence</strong><span>vLLM et FastAPI</span></div>
          <div className="medical-flow-arrow">→</div>
          <div><CheckCircle2 size={22} /><strong>Évaluation</strong><span>Qualité et métriques</span></div>
        </div>
      </section>

      <section className="medical-section">
        <div className="medical-section-heading">
          <span>03 / RÉALISATION</span>
          <h2>Les composants du projet.</h2>
        </div>

        <div className="medical-components">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <article className="medical-component" key={section.title}>
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


      <section className="medical-section">
        <div className="medical-section-heading">
          <span>04 / BILAN</span>
          <h2>Résultats et évaluation du modèle.</h2>
        </div>

        <ul className="medical-outcomes">
          <li>Préparation de données bilingues pour le fine-tuning.</li>
          <li>Comparaison des étapes SFT et DPO et de leurs résultats.</li>
          <li>Exposition du modèle par API et mesure de la latence.</li>
          <li>Tests automatisés, journalisation et traçabilité technique.</li>
          <li>Identification des limites avant toute éventuelle évaluation clinique.</li>
        </ul>

        <div className="medical-results">

          <h3>Entraînement supervisé — SFT</h3>
          <p>
            Évolution des fonctions de perte pendant l'entraînement et
            l'évaluation du modèle.
          </p>

          <div className="medical-results-grid">
            <figure>
              <figcaption>Train Loss</figcaption>
              <img src={sftTrainLoss} alt="Évolution de la train loss SFT" />
            </figure>

            <figure>
              <figcaption>Evaluation Loss</figcaption>
              <img src={sftEvalLoss} alt="Évolution de la evaluation loss SFT" />
            </figure>
          </div>

          <h3>Optimisation par préférences — DPO</h3>
          <p>
            Comparaison des différentes versions du modèle sur le benchmark
            de 776 exemples.
          </p>

          <figure className="medical-results-benchmark">
            <img src={dpoBenchmark} alt="Résultats du benchmark DPO" />
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
                {[
                  ["Base", 245, 776, "31,57 %"],
                  ["SFT v3", 264, 776, "34,02 %"],
                  ["DPO v3", 298, 776, "38,40 %"],
                  ["DPO v4", 330, 776, "42,53 %"],
                  ["DPO v6", 349, 776, "44,97 %"],
                  ["DPO v7", 406, 776, "52,32 %"],
                  ["DPO v8", 478, 776, "61,60 %"],
                  ["DPO v9", 474, 776, "61,08 %"],
                  ["DPO v10", 477, 776, "61,47 %"],
                ].map(([model, correct, total, accuracy]) => (
                  <tr key={model} className={model === "DPO v8" ? "best-result" : ""}>
                    <td>{model}</td>
                    <td>{correct}</td>
                    <td>{total}</td>
                    <td>{accuracy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="medical-results-summary">
            <div>
              <span>Modèle de base</span>
              <strong>31,57 %</strong>
            </div>
            <div>
              <span>Meilleur résultat</span>
              <strong>61,60 %</strong>
            </div>
            <div>
              <span>Progression</span>
              <strong>+30,03 points</strong>
            </div>
          </div>

        </div>

        <p className="medical-future">
          Le benchmark montre une progression des performances jusqu'à DPO v8.
          Les versions v9 et v10 obtiennent des résultats très proches.
          Ces résultats mesurent les performances sur le benchmark utilisé
          et ne constituent pas une validation médicale ou clinique.
        </p>
      </section>


    <footer className="medical-footer">
      <Link to="/#projets">
        <ArrowLeft size={17} /> Tous les projets
      </Link>

      <a
        href="https://github.com/BouchezMarc/PF14-Medical-AI"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub <ArrowUpRight size={16} />
      </a>
    </footer>
    </main>
  );
}
