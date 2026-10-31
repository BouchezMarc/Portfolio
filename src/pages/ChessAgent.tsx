
import {
  ArrowLeft,
  ArrowUpRight,
  Database,
  Search,
  BookOpen,
  Video,
  Cpu,
  Server,
  Monitor,
  Network,
  Workflow,
  Layers,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./ChessAgent.css";

const services = [
  {
    icon: BookOpen,
    title: "Lichess",
    description:
      "Récupération des informations théoriques : ouverture, code ECO, coups théoriques et statistiques disponibles.",
    role: "Théorie échiquéenne",
  },
  {
    icon: Cpu,
    title: "Stockfish",
    description:
      "Analyse moteur de la position, recherche du meilleur coup, évaluation et profondeur d'analyse.",
    role: "Analyse tactique",
  },
  {
    icon: Database,
    title: "MongoDB",
    description:
      "Stockage documentaire des données applicatives et des conversations selon les besoins du projet.",
    role: "Persistance",
  },
  {
    icon: Search,
    title: "Milvus",
    description:
      "Recherche par similarité vectorielle dans les documents d'ouvertures à partir du contexte échiquéen.",
    role: "Recherche sémantique",
  },
  {
    icon: Video,
    title: "YouTube",
    description:
      "Recherche de vidéos correspondant au contexte de la position et aux résultats de la recherche vectorielle.",
    role: "Ressources pédagogiques",
  },
];

const stages = [
  {
    number: "01",
    title: "Interaction avec l'échiquier",
    description:
      "Le joueur déplace les pièces sur un échiquier interactif. Le frontend gère les coups et la position courante.",
    technology: "Angular · ngx-chessground · chess.js",
  },
  {
    number: "02",
    title: "Transmission de la position",
    description:
      "La position est convertie au format FEN puis transmise à l'API backend pour validation et traitement.",
    technology: "FEN · FastAPI",
  },
  {
    number: "03",
    title: "Orchestration conditionnelle",
    description:
      "LangGraph interroge Lichess. Si une théorie est disponible, elle est utilisée. Sinon, Stockfish fournit une analyse alternative.",
    technology: "LangGraph · Lichess · Stockfish",
  },
  {
    number: "04",
    title: "Construction du contexte",
    description:
      "Les informations obtenues sont normalisées pour construire un contexte échiquéen exploitable par les étapes suivantes.",
    technology: "ChessContextService · Python",
  },
  {
    number: "05",
    title: "Recherche et enrichissement",
    description:
      "Le contexte est utilisé pour effectuer une recherche vectorielle dans Milvus, puis rechercher des vidéos pédagogiques sur YouTube.",
    technology: "Milvus · Embeddings · YouTube API",
  },
  {
    number: "06",
    title: "Restitution des résultats",
    description:
      "Les informations issues des services sont renvoyées au frontend pour être affichées à l'utilisateur.",
    technology: "FastAPI · Angular",
  },
];

export default function ChessAgent() {
  return (
    <main className="chess-page">
      <section className="chess-hero">
        <div className="chess-eyebrow">
          AI ENGINEERING / PROJET 13
        </div>

        <h1>
          Chess Agent
          <span> – Assistant IA pour les échecs.</span>
        </h1>

        <p className="chess-intro">
          Conception d'une application d'analyse et d'assistance aux
          échecs combinant un échiquier interactif, un moteur d'analyse,
          une orchestration LangGraph et une recherche sémantique de
          ressources pédagogiques.
        </p>

        <div className="chess-tags">
          <span>AI Agent</span>
          <span>LangGraph</span>
          <span>RAG</span>
          <span>Chess Engine</span>
          <span>Docker</span>
        </div>
      </section>

      <section className="chess-section">
        <div className="chess-section-heading">
          <span>01 / CONTEXTE</span>
          <h2>Transformer une position en ressources d'analyse.</h2>
        </div>

        <p>
          Le projet vise à fournir une assistance à l'apprentissage
          des échecs à partir de la position jouée sur un échiquier.
          L'application ne se limite pas à afficher un meilleur coup :
          elle combine informations théoriques, analyse moteur et
          ressources documentaires.
        </p>

        <p>
          L'objectif technique est de faire collaborer plusieurs
          services spécialisés au sein d'un workflow orchestré,
          tout en séparant l'interface utilisateur, l'API et les
          traitements métier.
        </p>
      </section>

      <section className="chess-section">
        <div className="chess-section-heading">
          <span>02 / SERVICES</span>
          <h2>Des services spécialisés et complémentaires.</h2>
        </div>

        <div className="chess-services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="chess-service-card" key={service.title}>
                <Icon size={22} />
                <span>{service.role}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>

        <div className="chess-note">
          Stockfish est un moteur d'échecs et non un modèle de
          Machine Learning. Milvus effectue une recherche sémantique
          par similarité vectorielle, et non une recherche exacte
          de position FEN.
        </div>
      </section>

      <section className="chess-section">
        <div className="chess-section-heading">
          <span>03 / ARCHITECTURE</span>
          <h2>Une architecture distribuée et orchestrée.</h2>
          <br/>
            <div className="chess-architecture-image">
        <img
            src="https://raw.githubusercontent.com/BouchezMarc/PF13-chess-agent/main/pics/graph_api.png"
            alt="Architecture de l'API Chess Agent"
        />
        </div></div>
      </section>

      <section className="chess-section">
        <div className="chess-section-heading">
          <span>04 / WORKFLOW</span>
          <h2>Du coup joué à l'enrichissement pédagogique.</h2>
        </div>

        <div className="chess-stages">
          {stages.map((stage) => (
            <article className="chess-stage" key={stage.number}>
              <span className="chess-stage-number">{stage.number}</span>
              <div>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
                <span className="chess-stage-tech">
                  {stage.technology}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="chess-section">
        <div className="chess-section-heading">
          <span>05 / RECHERCHE VECTORIELLE</span>
          <h2>Relier une position à des connaissances échiquéennes.</h2>
        </div>

        <div className="chess-vector-card">
          <Network size={24} />
          <div>
            <h3>Milvus et embeddings</h3>
            <p>
              Les documents d'ouvertures sont chargés depuis
              <code> openings.json</code> dans la collection
              <code> chess_openings</code>. Le modèle
              <code> all-MiniLM-L6-v2</code> produit des vecteurs
              de dimension 384. La recherche utilise la métrique
              COSINE pour retrouver les documents les plus proches
              sémantiquement du contexte fourni.
            </p>
          </div>
        </div>

        <p>
          Cette approche permet de rapprocher une position de
          connaissances documentaires similaires. Elle ne remplace
          pas la validation échiquéenne ni l'analyse exacte d'une
          position par Stockfish.
        </p>
      </section>

      <section className="chess-section">
        <div className="chess-section-heading">
          <span>06 / STACK TECHNIQUE</span>
          <h2>Une séparation entre interface, API et services.</h2>
        </div>

        <div className="chess-stack-grid">
          <article>
            <Monitor size={21} />
            <h3>Frontend</h3>
            <p>Angular · TypeScript · ngx-chessground · chess.js</p>
          </article>
          <article>
            <Server size={21} />
            <h3>Backend</h3>
            <p>Python · FastAPI · Uvicorn · python-chess</p>
          </article>
          <article>
            <Workflow size={21} />
            <h3>Orchestration</h3>
            <p>LangGraph · services spécialisés</p>
          </article>
          <article>
            <Database size={21} />
            <h3>Stockage et recherche</h3>
            <p>MongoDB · Milvus · Sentence Transformers</p>
          </article>
          <article>
            <Cpu size={21} />
            <h3>Analyse échiquéenne</h3>
            <p>Stockfish · Lichess API</p>
          </article>
          <article>
            <Layers size={21} />
            <h3>Déploiement</h3>
            <p>Docker · Docker Compose · Nginx</p>
          </article>
        </div>
      </section>

      <section className="chess-section">
        <div className="chess-section-heading">
          <span>07 / BILAN</span>
          <h2>Ce que le projet permet de mettre en œuvre.</h2>
        </div>

        <ul className="chess-outcomes">
          <li>Développement d'un frontend Angular avec échiquier interactif.</li>
          <li>Représentation et transmission des positions au format FEN.</li>
          <li>Conception d'une API backend avec FastAPI.</li>
          <li>Orchestration conditionnelle de services avec LangGraph.</li>
          <li>Combinaison d'une source théorique et d'un moteur d'analyse.</li>
          <li>Recherche sémantique avec embeddings et Milvus.</li>
          <li>Enrichissement des résultats par des ressources vidéo.</li>
          <li>Conteneurisation des composants avec Docker Compose.</li>
        </ul>

        <div className="chess-limitations">
          <h3>Limites et pistes d'évolution</h3>
          <p>
            Le workflow actuel repose sur une orchestration conditionnelle
            et des services spécialisés. La recherche vectorielle porte
            sur les documents d'ouvertures disponibles, et ne constitue
            pas une base exhaustive de positions échiquéennes.
          </p>
          <p>
            Des évolutions possibles concernent l'enrichissement de la
            base documentaire, l'amélioration de la pertinence des
            ressources proposées et l'évaluation systématique des
            résultats retournés par les différents services.
          </p>
        </div>
      </section>

      <footer className="chess-footer">
        <Link to="/#projets">
          <ArrowLeft size={17} /> Tous les projets
        </Link>

        <a
          href="https://github.com/BouchezMarc/PF13-chess-agent"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <ArrowUpRight size={16} />
        </a>
      </footer>
    </main>
  );
}
