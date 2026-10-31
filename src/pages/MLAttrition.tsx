import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  GitBranch,
  Workflow,
  ShieldCheck,
  TestTube2,
  Container,
  Server,
  Database,
  BrainCircuit,
  CheckCircle2,
  Package,
  RefreshCw,
  Code2,
} from "lucide-react";
import "./MLAttrition.css";

const pipelineSteps = [
  {
    number: "01",
    title: "Push / Pull Request",
    description: "Déclenchement du workflow à partir des changements du dépôt.",
    icon: GitBranch,
  },
  {
    number: "02",
    title: "Environnement CI",
    description: "Installation des dépendances et préparation de l'environnement.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Tests automatisés",
    description: "Vérification de l'API, de la base de données et du modèle.",
    icon: TestTube2,
  },
  {
    number: "04",
    title: "Build Docker",
    description: "Construction de l'image de l'application.",
    icon: Container,
  },
  {
    number: "05",
    title: "Déploiement",
    description: "Livraison de l'application dans l'environnement cible.",
    icon: Server,
  },
];

const tests = [
  {
    title: "Tests API",
    description: "Vérification des endpoints et des réponses de l'application.",
  },
  {
    title: "Tests base de données",
    description: "Contrôle des interactions avec la couche de persistance.",
  },
  {
    title: "Tests modèle",
    description: "Vérification du chargement et du fonctionnement du modèle.",
  },
  {
    title: "Tests utilitaires",
    description: "Validation des fonctions de traitement et de préparation.",
  },
];

export default function MLAttrition() {
  return (
    <main className="attrition-page">
      <section className="attrition-hero">
        <div className="attrition-hero-content">
          <span className="attrition-eyebrow">
            DEVOPS · CI/CD · INDUSTRIALISATION
          </span>

          <h1>
            Déploiement CI/CD
            <span> d'une application RH</span>
          </h1>

          <p className="attrition-lead">
            Industrialiser une application de prédiction de l'attrition
            développée dans un projet RH antérieur : automatiser les tests,
            conteneuriser l'application et structurer son processus
            de déploiement.
          </p>

          <div className="attrition-tags">
            {[
              "GitHub Actions",
              "Python",
              "Pytest",
              "Docker",
              "FastAPI",
              "SQLAlchemy",
              "PostgreSQL",
              "uv",
            ].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="attrition-hero-meta">
            <span><GitBranch size={16} /> Intégration continue</span>
            <span><Container size={16} /> Conteneurisation</span>
            <span><Server size={16} /> Déploiement applicatif</span>
          </div>
        </div>

        <div className="attrition-hero-visual">
          <div className="attrition-orbit orbit-one" />
          <div className="attrition-orbit orbit-two" />
          <div className="attrition-core">
            <Workflow size={45} />
            <strong>CI / CD</strong>
          </div>
          <div className="attrition-floating-card floating-top">
            <CheckCircle2 size={17} />
            <span>Tests automatisés</span>
          </div>
          <div className="attrition-floating-card floating-bottom">
            <Container size={17} />
            <span>Docker</span>
          </div>
        </div>
      </section>

      <section className="attrition-section attrition-objective">
        <div className="attrition-section-heading">
          <span className="attrition-number">01</span>
          <div>
            <span className="attrition-kicker">OBJECTIF DU PROJET</span>
            <h2>Passer d'une application RH à une application déployable</h2>
          </div>
        </div>

        <div className="attrition-objective-grid">
          <div>
            <p>
              PF05 s'inscrit dans la continuité d'un projet RH antérieur
              consacré à l'analyse des causes d'attrition dans une entreprise.
              L'objectif n'est plus de développer un nouveau modèle prédictif,
              mais de reprendre l'application existante et de structurer
              son cycle de validation et de livraison.
            </p>
            <p>
              Le travail porte sur l'automatisation des contrôles,
              la reproductibilité de l'environnement, la construction
              d'une image Docker et le processus de déploiement.
            </p>
          </div>

          <div className="attrition-objective-callout">
            <span>Positionnement</span>
            <strong>Industrialisation applicative</strong>
            <div className="attrition-objective-points">
              <span><CheckCircle2 size={16} /> Tester</span>
              <span><CheckCircle2 size={16} /> Construire</span>
              <span><CheckCircle2 size={16} /> Déployer</span>
            </div>
          </div>
        </div>
      </section>

      <section className="attrition-section">
        <div className="attrition-section-heading">
          <span className="attrition-number">02</span>
          <div>
            <span className="attrition-kicker">PIPELINE CI/CD</span>
            <h2>Automatiser le cycle de livraison</h2>
          </div>
        </div>

        <p className="attrition-section-intro">
          Le dépôt s'appuie sur GitHub Actions et des workflows stockés
          dans le répertoire <code>.github/workflows</code>. La chaîne
          est présentée autour de ses grandes étapes : validation du code,
          tests, construction de l'image et déploiement.
        </p>

        <div className="attrition-pipeline">
          {pipelineSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div className="attrition-pipeline-item" key={step.number}>
                <div className="attrition-pipeline-card">
                  <span className="attrition-step-number">{step.number}</span>
                  <Icon size={27} />
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index !== pipelineSteps.length - 1 && (
                  <div className="attrition-pipeline-arrow">
                    <ArrowUpRight size={19} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="attrition-ci-cd-explanation">
          <article>
            <span className="attrition-kicker">CONTINUOUS INTEGRATION</span>
            <h3>CI — Intégration continue</h3>
            <p>
              Vérifier automatiquement que les modifications du projet
              ne dégradent pas son fonctionnement. Les tests constituent
              le contrôle principal avant la livraison.
            </p>
          </article>
          <article>
            <span className="attrition-kicker">CONTINUOUS DELIVERY / DEPLOYMENT</span>
            <h3>CD — Livraison et déploiement</h3>
            <p>
              Préparer une version conteneurisée de l'application et
              automatiser son acheminement vers l'environnement cible.
              Le déploiement est le prolongement de la validation CI.
            </p>
          </article>
        </div>
      </section>

      <section className="attrition-section">
        <div className="attrition-section-heading">
          <span className="attrition-number">03</span>
          <div>
            <span className="attrition-kicker">TESTS AUTOMATISÉS</span>
            <h2>Sécuriser les évolutions de l'application</h2>
          </div>
        </div>

        <p className="attrition-section-intro">
          La suite de tests Python permet de contrôler plusieurs composants
          de l'application RH avant sa livraison.
        </p>

        <div className="attrition-tests-grid">
          {tests.map((test) => (
            <article className="attrition-test-card" key={test.title}>
              <div className="attrition-test-icon">
                <TestTube2 size={22} />
              </div>
              <h3>{test.title}</h3>
              <p>{test.description}</p>
            </article>
          ))}
        </div>

        <div className="attrition-command">
          <div>
            <span>Exécuter les tests</span>
            <code>uv run pytest</code>
          </div>
          <div>
            <span>Générer la couverture HTML</span>
            <code>uv run pytest --cov=src --cov-report=html</code>
          </div>
        </div>

        <div className="attrition-test-detail">
          <div>
            <strong>Pytest</strong>
            <span>Exécution de la suite de tests</span>
          </div>
          <div>
            <strong>pytest-asyncio</strong>
            <span>Tests asynchrones</span>
          </div>
          <div>
            <strong>pytest-cov</strong>
            <span>Mesure de la couverture de code</span>
          </div>
        </div>
      </section>

      <section className="attrition-section">
        <div className="attrition-section-heading">
          <span className="attrition-number">04</span>
          <div>
            <span className="attrition-kicker">CONTENEURISATION</span>
            <h2>Reproduire l'environnement d'exécution</h2>
          </div>
        </div>

        <div className="attrition-docker-layout">
          <div className="attrition-docker-card">
            <Container size={38} />
            <span>Image applicative</span>
            <strong>Docker</strong>
            <code>Dockerfile</code>
          </div>

          <div className="attrition-docker-content">
            <p>
              Le Dockerfile décrit l'environnement nécessaire à l'exécution
              de l'application. Il permet de construire une image contenant
              l'application et ses dépendances.
            </p>
            <ul>
              <li>Environnement d'exécution reproductible.</li>
              <li>Isolation de l'application dans un conteneur.</li>
              <li>Construction d'une image à partir du code source.</li>
              <li>Exécution de l'API dans un environnement maîtrisé.</li>
            </ul>
          </div>
        </div>

        <div className="attrition-command attrition-command-single">
          <div>
            <span>Construire l'image</span>
            <code>docker build -t projet05-rh .</code>
          </div>
          <div>
            <span>Lancer le conteneur</span>
            <code>docker run -p 7860:7860 projet05-rh</code>
          </div>
        </div>
      </section>

      <section className="attrition-section">
        <div className="attrition-section-heading">
          <span className="attrition-number">05</span>
          <div>
            <span className="attrition-kicker">APPLICATION RH EXISTANTE</span>
            <h2>Le composant métier déployé</h2>
          </div>
        </div>

        <p className="attrition-section-intro">
          L'application RH constitue le support fonctionnel du projet
          d'industrialisation. Elle permet de prédire le départ d'un
          collaborateur à partir de ses données et expose ces fonctionnalités
          au travers d'une API.
        </p>

        <div className="attrition-app-grid">
          <article>
            <BrainCircuit size={25} />
            <h3>Modèle de prédiction</h3>
            <p>
              Pipeline Scikit-learn reposant sur une régression logistique
              pour une classification binaire du départ d'un employé.
            </p>
          </article>
          <article>
            <Server size={25} />
            <h3>API FastAPI</h3>
            <p>
              Exposition des fonctionnalités de prédiction et documentation
              interactive via Swagger.
            </p>
          </article>
          <article>
            <Database size={25} />
            <h3>Persistance SQL</h3>
            <p>
              Gestion des données RH et des prédictions avec SQLAlchemy,
              PostgreSQL et SQLite pour les tests.
            </p>
          </article>
        </div>

        <p className="attrition-note">
          Le modèle et les fonctionnalités RH sont le contenu de l'application
          livrée. Ils ne constituent pas le principal objectif technique
          de PF05.
        </p>
      </section>

      <section className="attrition-section">
        <div className="attrition-section-heading">
          <span className="attrition-number">06</span>
          <div>
            <span className="attrition-kicker">STRUCTURE DU PROJET</span>
            <h2>Organiser le code et les outils d'industrialisation</h2>
          </div>
        </div>

        <div className="attrition-structure">
          <div className="attrition-tree">
            <div className="tree-root"><Package size={17} /> PF05-ML-Attrition</div>
            <div className="tree-branch"><span>├─</span><strong>.github/workflows/</strong><small>Workflows CI/CD</small></div>
            <div className="tree-branch"><span>├─</span><strong>src/</strong><small>Code applicatif</small></div>
            <div className="tree-branch"><span>├─</span><strong>test/</strong><small>Tests automatisés</small></div>
            <div className="tree-branch"><span>├─</span><strong>model/</strong><small>Modèle sérialisé</small></div>
            <div className="tree-branch"><span>├─</span><strong>sql/</strong><small>Scripts SQL et données</small></div>
            <div className="tree-branch"><span>├─</span><strong>Dockerfile</strong><small>Construction de l'image</small></div>
            <div className="tree-branch"><span>└─</span><strong>main.py</strong><small>Point d'entrée FastAPI</small></div>
          </div>

          <div className="attrition-structure-info">
            <h3>Une séparation des responsabilités</h3>
            <p>
              Les workflows automatisent les opérations de livraison.
              Le répertoire de tests contrôle le fonctionnement de l'application.
              Le Dockerfile définit son environnement de déploiement.
              Le code métier reste séparé de ces mécanismes.
            </p>
            <div className="attrition-structure-tags">
              <span>Code</span>
              <span>Tests</span>
              <span>CI/CD</span>
              <span>Docker</span>
            </div>
          </div>
        </div>
      </section>

      <section className="attrition-section attrition-limits">
        <div className="attrition-section-heading">
          <span className="attrition-number">07</span>
          <div>
            <span className="attrition-kicker">BILAN ET PERSPECTIVES</span>
            <h2>De l'application au processus de livraison</h2>
          </div>
        </div>

        <div className="attrition-limits-grid">
          <div>
            <h3>Apports du projet</h3>
            <ul>
              <li>Automatisation des contrôles par GitHub Actions.</li>
              <li>Tests de plusieurs couches de l'application.</li>
              <li>Mesure de la couverture de code.</li>
              <li>Conteneurisation avec Docker.</li>
              <li>Structuration du processus de déploiement.</li>
            </ul>
          </div>
          <div>
            <h3>Axes d'amélioration</h3>
            <ul>
              <li>Formaliser les environnements de développement et de production.</li>
              <li>Renforcer la gestion des secrets et des configurations.</li>
              <li>Ajouter des contrôles de sécurité sur les images Docker.</li>
              <li>Mettre en place des vérifications après déploiement.</li>
              <li>Suivre la disponibilité et les erreurs de l'application.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="attrition-conclusion">
        <span className="attrition-kicker">CONCLUSION</span>
        <h2>Industrialiser le cycle de vie d'une application existante</h2>
        <p>
          PF05 illustre une étape complémentaire au développement initial
          d'une solution de machine learning. À partir d'une application RH
          existante, le projet met l'accent sur l'automatisation des tests,
          la construction d'une image Docker et la structuration du
          déploiement. La valeur ajoutée se situe dans la reproductibilité
          et la fiabilisation du processus de livraison, plutôt que dans
          la création d'un nouvel algorithme prédictif.
        </p>
      </section>

      <footer className="attrition-footer">
        <Link to="/" className="attrition-back">
          <ArrowLeft size={16} /> Retour aux projets
        </Link>
        <a
          href="https://github.com/BouchezMarc/PF05-ML-Attrition"
          target="_blank"
          rel="noreferrer"
        >
          Consulter le code source <ArrowUpRight size={16} />
        </a>
      </footer>
    </main>
  );
}