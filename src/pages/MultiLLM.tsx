
import {
  ArrowLeft,
  ArrowUpRight,
  BrainCircuit,
  Cpu,
  Database,
  MessageSquare,
  Network,
  BarChart3,
  Code,
  Server,
  Workflow,
  Gauge,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./MultiLLM.css";

const models = [
  {
    name: "Qwen 3 14B",
    id: "qwen",
    usage: "Code, programmation et tâches techniques.",
    role: "Développement",
  },
  {
    name: "DeepSeek R1 Distill Qwen 14B",
    id: "deepseek",
    usage: "Raisonnement complexe, calculs multiétapes et logique.",
    role: "Raisonnement",
  },
  {
    name: "Gemma 4 12B QAT",
    id: "gemma",
    usage: "Explications, vulgarisation, rédaction et questions générales.",
    role: "Conversation",
  },
];

const features = [
  {
    icon: BrainCircuit,
    title: "Classification des requêtes",
    description:
      "Laya analyse l'intention de la question et détermine la catégorie de traitement adaptée.",
  },
  {
    icon: Network,
    title: "Routage dynamique",
    description:
      "Le routeur sélectionne automatiquement le modèle correspondant au besoin, parmi les trois modèles configurés.",
  },
  {
    icon: MessageSquare,
    title: "Interface de chat",
    description:
      "Une interface web permet de poser une question et de visualiser la réponse, le modèle sélectionné et le temps de traitement.",
  },
  {
    icon: Database,
    title: "Historique local",
    description:
      "Les interactions, les réponses et les informations de routage sont enregistrées dans une base SQLite locale.",
  },
  {
    icon: BarChart3,
    title: "Évaluation des réponses",
    description:
      "L'utilisateur peut évaluer la pertinence du modèle, attribuer une note de qualité et ajouter un commentaire.",
  },
  {
    icon: Gauge,
    title: "Suivi des performances",
    description:
      "Une page de statistiques expose la latence moyenne, le taux d'erreur, la répartition des modèles et l'activité.",
  },
];

export default function MultiLLM() {
  return (
    <main className="multillm-page">
      <section className="multillm-hero">
        <div className="multillm-eyebrow">
          AI ENGINEERING / ROUTER LM STUDIO
        </div>

        <h1>
          Architecture
          <span> multi-LLM.</span>
        </h1>

        <p className="multillm-intro">
          Conception d'un routeur intelligent capable de sélectionner
          automatiquement un modèle de langage selon l'intention de
          l'utilisateur. Une architecture locale combinant Laya,
          FastAPI et LM Studio.
        </p>

        <div className="multillm-tags">
          <span>Multi-LLM</span>
          <span>AI Engineering</span>
          <span>Routing</span>
          <span>Local AI</span>
        </div>
      </section>

      <section className="multillm-section">
        <div className="multillm-section-heading">
          <span>01 / CONTEXTE</span>
          <h2>Un modèle différent selon le besoin.</h2>
        </div>

        <p>
          Un modèle de langage n'est pas nécessairement le plus adapté
          à tous les types de requêtes. Une demande de programmation,
          un problème de raisonnement ou une question générale peuvent
          nécessiter des capacités différentes.
        </p>

        <p>
          L'objectif du projet est de construire un mécanisme de
          routage qui analyse chaque question et choisit le modèle
          approprié, sans demander à l'utilisateur de sélectionner
          manuellement le LLM.
        </p>
      </section>

      <section className="multillm-section">
        <div className="multillm-section-heading">
          <span>02 / MODÈLES</span>
          <h2>Trois modèles, trois usages.</h2>
        </div>

        <div className="multillm-model-grid">
          {models.map((model) => (
            <article className="multillm-model-card" key={model.id}>
              <div className="multillm-model-icon">
                <BrainCircuit size={22} />
              </div>
              <span className="multillm-model-role">{model.role}</span>
              <h3>{model.name}</h3>
              <p>{model.usage}</p>
              <code>{model.id}</code>
            </article>
          ))}
        </div>

        <p className="multillm-note">
          Les identifiants de routage sont associés aux identifiants
          des modèles exposés par LM Studio. Les trois modèles sont
          configurés dans le dictionnaire MODELS de app.py.
        </p>
      </section>

      <section className="multillm-section">
        <div className="multillm-section-heading">
          <span>03 / ARCHITECTURE</span>
          <h2>Un routage local entre l'utilisateur et les LLM.</h2>
        </div>

        <div className="multillm-architecture">
          <div className="multillm-architecture-node">
            <MessageSquare size={21} />
            <div>
              <strong>Utilisateur</strong>
              <small>Question envoyée depuis l'interface web</small>
            </div>
          </div>

          <div className="multillm-arrow">↓</div>

          <div className="multillm-architecture-node">
            <Server size={21} />
            <div>
              <strong>FastAPI</strong>
              <small>Application web et API locale</small>
            </div>
          </div>

          <div className="multillm-arrow">↓</div>

          <div className="multillm-architecture-node multillm-node-highlight">
            <BrainCircuit size={21} />
            <div>
              <strong>Laya Router</strong>
              <small>Classification de l'intention sur CPU</small>
            </div>
          </div>

          <div className="multillm-arrow">↓</div>

          <div className="multillm-model-branches">
            <div className="multillm-branch">
              <strong>Qwen</strong>
              <small>Code et technique</small>
            </div>
            <div className="multillm-branch">
              <strong>DeepSeek</strong>
              <small>Raisonnement</small>
            </div>
            <div className="multillm-branch">
              <strong>Gemma</strong>
              <small>Questions générales</small>
            </div>
          </div>

          <div className="multillm-arrow">↓</div>

          <div className="multillm-architecture-node">
            <Cpu size={21} />
            <div>
              <strong>LM Studio</strong>
              <small>API compatible OpenAI · 127.0.0.1:1234</small>
            </div>
          </div>

          <div className="multillm-arrow">↓</div>

          <div className="multillm-architecture-node">
            <MessageSquare size={21} />
            <div>
              <strong>Réponse générée</strong>
              <small>Modèle utilisé et durée de traitement</small>
            </div>
          </div>

          <div className="multillm-arrow">↓</div>

          <div className="multillm-architecture-node multillm-node-output">
            <Database size={21} />
            <div>
              <strong>SQLite · history.db</strong>
              <small>Historique, routage et métriques</small>
            </div>
          </div>
        </div>
      </section>

      <section className="multillm-section">
        <div className="multillm-section-heading">
          <span>04 / FONCTIONNEMENT</span>
          <h2>Du classement à la génération.</h2>
        </div>

        <div className="multillm-steps">
          <article>
            <span>01</span>
            <div>
              <h3>Réception de la question</h3>
              <p>
                L'utilisateur saisit sa question dans l'interface web.
                La requête est transmise à l'application FastAPI.
              </p>
            </div>
          </article>

          <article>
            <span>02</span>
            <div>
              <h3>Classification par Laya</h3>
              <p>
                Le routeur identifie l'intention et attribue une
                catégorie correspondant à l'un des modèles configurés.
              </p>
            </div>
          </article>

          <article>
            <span>03</span>
            <div>
              <h3>Sélection et génération</h3>
              <p>
                L'application sélectionne le modèle puis transmet
                la requête à l'API locale de LM Studio.
              </p>
            </div>
          </article>

          <article>
            <span>04</span>
            <div>
              <h3>Enregistrement et évaluation</h3>
              <p>
                La réponse, le modèle utilisé et les métriques sont
                enregistrés. L'utilisateur peut ensuite fournir
                un retour sur la qualité de la réponse.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="multillm-section">
        <div className="multillm-section-heading">
          <span>05 / FONCTIONNALITÉS</span>
          <h2>Une application avec suivi des interactions.</h2>
        </div>

        <div className="multillm-feature-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article className="multillm-feature" key={feature.title}>
                <Icon size={22} />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="multillm-section">
        <div className="multillm-section-heading">
          <span>06 / API ET OUTILS</span>
          <h2>Une application structurée autour de FastAPI.</h2>
        </div>

        <div className="multillm-api-list">
          <div>
            <code>GET /api/health</code>
            <span>Vérification de l'état de l'API.</span>
          </div>
          <div>
            <code>POST /api/chat</code>
            <span>Routage d'une question et génération de réponse.</span>
          </div>
          <div>
            <code>POST /api/feedback</code>
            <span>Enregistrement de l'évaluation utilisateur.</span>
          </div>
          <div>
            <code>GET /api/stats</code>
            <span>Récupération des statistiques et de l'historique.</span>
          </div>
          <div>
            <code>GET /stats</code>
            <span>Accès à l'interface des statistiques.</span>
          </div>
        </div>

        <div className="multillm-stack">
          <span>Python 3.13+</span>
          <span>FastAPI</span>
          <span>Laya</span>
          <span>LM Studio</span>
          <span>SQLite</span>
          <span>uv</span>
          <span>HTML / JavaScript</span>
        </div>
      </section>

      <section className="multillm-section">
        <div className="multillm-section-heading">
          <span>07 / BILAN</span>
          <h2>Ce que le projet permet d'explorer.</h2>
        </div>

        <ul className="multillm-outcomes">
          <li>Architecture locale multi-LLM.</li>
          <li>Classification d'intentions avec Laya.</li>
          <li>Routage dynamique vers plusieurs modèles.</li>
          <li>Connexion à une API compatible OpenAI avec LM Studio.</li>
          <li>Exposition des fonctionnalités avec FastAPI.</li>
          <li>Historisation des interactions avec SQLite.</li>
          <li>Évaluation utilisateur et suivi des performances.</li>
        </ul>

        <div className="multillm-limitations">
          <h3>Limites et pistes d'évolution</h3>
          <p>
            Le routage est réalisé question par question, sans
            conversation persistante. Les réponses sont générées
            sans streaming. L'adresse de LM Studio est codée en dur
            dans l'application et la base SQLite locale n'est pas
            conçue pour un usage multi-utilisateur ou fortement
            concurrent.
          </p>
          <p>
            Le routeur Laya fonctionne sur CPU avec
            <code> max_loaded=1</code>. LM Studio peut utiliser le
            CPU ou le GPU selon sa configuration.
          </p>
        </div>
      </section>

      <footer className="multillm-footer">
        <Link to="/#projets">
          <ArrowLeft size={17} /> Tous les projets
        </Link>

        <a
          href="https://github.com/BouchezMarc/Router-LM-Studio"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <ArrowUpRight size={16} />
        </a>
      </footer>
    </main>
  );
}
