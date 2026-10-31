import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import "./ChatBotEvent.css";

import architecture from "../pics/PF07_archi.png";

const repo = "https://github.com/BouchezMarc/PF07-Chat-Bot-Event";

const ChatBotEvent = () => {
  return (
    <main className="pf07-page">
      <header className="pf07-hero">
        <span className="pf07-kicker">Projet 07 · AI Engineering</span>
        <h1>Assistant intelligent de recommandation d'événements</h1>
        <p className="pf07-subtitle">
          Un assistant conversationnel basé sur le RAG pour rechercher
          et recommander des événements culturels locaux à partir des
          données publiques OpenAgenda.
        </p>

        <div className="pf07-tags">
          {[
            "Python",
            "RAG",
            "LangChain",
            "FAISS",
            "Mistral AI",
            "FastAPI",
            "Hugging Face",
            "Sentence Transformers",
            "Pydantic",
            "Uvicorn",
          ].map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </header>

      <section className="pf07-objective">
        <h2>Objectif du projet</h2>
        <p>
          Concevoir un assistant capable de répondre à des questions sur
          les événements culturels disponibles dans une zone géographique
          donnée, en tenant compte du lieu, de la période et du thème
          recherché.
        </p>
        <p>
          Le POC vise à démontrer la faisabilité d'une architecture RAG
          combinant une source de données actualisable, une recherche
          sémantique sur un index vectoriel local et une génération de
          réponses contextualisées. L'assistant doit s'appuyer sur les
          événements retrouvés et éviter d'inventer des informations.
        </p>
        <div className="pf07-objective-scope">
          <span><strong>Zone :</strong> Valenciennes et département du Nord</span>
          <span><strong>Source :</strong> OpenAgenda via OpenDataSoft</span>
          <span><strong>Type :</strong> Proof of Concept RAG</span>
        </div>
      </section>

      <section className="pf07-section">
        <div className="pf07-heading">
          <span>01</span>
          <h2>Architecture du système</h2>
        </div>

        <p>
          Le système suit une chaîne RAG en plusieurs étapes : collecte
          des événements, nettoyage, découpage des documents, création
          des embeddings, indexation vectorielle, récupération du contexte
          et génération de la réponse par le modèle Mistral.
        </p>

        <figure className="pf07-architecture">
          <img
            src={architecture}
            alt="Schéma d'architecture de l'assistant RAG de recommandation d'événements"
            loading="lazy"
          />
          <figcaption>
            Architecture globale du POC de recommandation d'événements.
          </figcaption>
        </figure>
      </section>

      <section className="pf07-section">
        <div className="pf07-heading">
          <span>02</span>
          <h2>Collecte et préparation des données</h2>
        </div>

        <p>
          Les données proviennent de l'API publique OpenDataSoft qui
          expose les événements issus d'OpenAgenda. La collecte est
          réalisée par le script <code>scripts/fetch_data.py</code>.
        </p>

        <div className="pf07-flow">
          <article>
            <span className="pf07-flow-number">01</span>
            <h3>Collecte</h3>
            <p>
              Récupération paginée des événements avec filtrage sur
              Valenciennes et le département du Nord.
            </p>
          </article>
          <article>
            <span className="pf07-flow-number">02</span>
            <h3>Nettoyage</h3>
            <p>
              Suppression des balises HTML, gestion des valeurs absentes,
              normalisation des dates et harmonisation des champs.
            </p>
          </article>
          <article>
            <span className="pf07-flow-number">03</span>
            <h3>Découpage</h3>
            <p>
              Découpage des descriptions avec RecursiveCharacterTextSplitter :
              chunks de 500 caractères et chevauchement de 50 caractères.
            </p>
          </article>
          <article>
            <span className="pf07-flow-number">04</span>
            <h3>Vectorisation</h3>
            <p>
              Transformation des textes en vecteurs avec
              all-MiniLM-L6-v2, produisant des embeddings de dimension 384.
            </p>
          </article>
        </div>

        <div className="pf07-info-panel">
          <h3>Persistance des données</h3>
          <p>
            Les événements normalisés sont enregistrés dans
            <code> data/events.json</code>. Les embeddings et les documents
            associés sont conservés dans l'index FAISS local situé dans
            <code> data/faiss_index</code>.
          </p>
        </div>
      </section>

      <section className="pf07-section">
        <div className="pf07-heading">
          <span>03</span>
          <h2>Recherche sémantique et génération RAG</h2>
        </div>

        <p>
          LangChain orchestre la récupération des documents pertinents
          et leur transmission au modèle de génération. Le système combine
          ainsi recherche vectorielle et génération de texte pour produire
          une réponse adaptée à la question.
        </p>

        <div className="pf07-rag-grid">
          <article>
            <h3>Recherche documentaire</h3>
            <p>
              FAISS interroge l'index vectoriel local pour retrouver
              les événements dont le contenu est sémantiquement proche
              de la demande.
            </p>
          </article>
          <article>
            <h3>Contexte métier</h3>
            <p>
              Les métadonnées des événements, notamment le titre,
              la description, la ville, les dates et les tags,
              permettent de contextualiser les résultats.
            </p>
          </article>
          <article>
            <h3>Génération Mistral</h3>
            <p>
              Le modèle mistral-small-latest est appelé via le SDK
              mistralai et intégré au pipeline LangChain.
            </p>
          </article>
          <article>
            <h3>Réponse contrôlée</h3>
            <p>
              Le prompt impose de rester dans les informations récupérées,
              de ne pas inventer d'événements ou de dates et de présenter
              les résultats de façon structurée.
            </p>
          </article>
        </div>

        <div className="pf07-info-panel">
          <h3>Format de réponse attendu</h3>
          <p>
            Les informations sont présentées sous une forme lisible :
            nom de l'événement, date, lieu et description.
          </p>
        </div>
      </section>

      <section className="pf07-section">
        <div className="pf07-heading">
          <span>04</span>
          <h2>API FastAPI</h2>
        </div>

        <p>
          L'application expose le système RAG au travers d'une API
          FastAPI. Elle permet de poser une question, de vérifier
          la disponibilité du service et de reconstruire la base
          de connaissances.
        </p>

        <div className="pf07-endpoints">
          <article>
            <div className="pf07-endpoint-title">
              <span className="pf07-method get">GET</span>
              <code>/</code>
            </div>
            <p>Vérification de l'état de réponse de l'API.</p>
          </article>

          <article>
            <div className="pf07-endpoint-title">
              <span className="pf07-method post">POST</span>
              <code>/ask</code>
            </div>
            <p>
              Transmission d'une question au moteur RAG et retour
              de la réponse générée.
            </p>
          </article>

          <article>
            <div className="pf07-endpoint-title">
              <span className="pf07-method post">POST</span>
              <code>/rebuild</code>
            </div>
            <p>
              Reconstruction de la base de connaissances, protégée
              par une authentification Basic Auth.
            </p>
          </article>
        </div>

        <div className="pf07-info-panel">
          <h3>Organisation du code</h3>
          <ul>
            <li><code>app/api.py</code> : exposition des endpoints.</li>
            <li><code>app/rag.py</code> : logique de récupération et génération.</li>
            <li><code>app/prompt.py</code> : règles de génération des réponses.</li>
            <li><code>scripts/fetch_data.py</code> : collecte des événements.</li>
            <li><code>scripts/build_index.py</code> : construction de l'index vectoriel.</li>
          </ul>
        </div>
      </section>

      <section className="pf07-section">
        <div className="pf07-heading">
          <span>05</span>
          <h2>Tests et évaluation</h2>
        </div>

        <p>
          Le dépôt comprend des scripts de validation indépendants
          permettant de contrôler l'API, le chargement de l'index,
          les règles métier du RAG et certains indicateurs de performance.
          L'évaluation des réponses repose sur un petit jeu de questions
          annotées manuellement.
        </p>

        <div className="pf07-evaluation">
          <div className="pf07-evaluation-score">
            <strong>75 %</strong>
            <span>Réponses correctes</span>
            <small>3 réponses correctes sur 4</small>
          </div>
          <div className="pf07-evaluation-details">
            <div>
              <strong>3</strong>
              <span>Correctes</span>
            </div>
            <div>
              <strong>0</strong>
              <span>Partiellement correctes</span>
            </div>
            <div>
              <strong>1</strong>
              <span>Incorrecte</span>
            </div>
          </div>
        </div>

        <p className="pf07-evaluation-note">
          Résultat obtenu sur le jeu de validation présent dans le dépôt
          (4 questions). Cet échantillon permet une première vérification
          fonctionnelle, mais reste trop limité pour tirer une conclusion
          statistique sur la qualité globale du système.
        </p>

        <div className="pf07-tests">
          <h3>Scripts de validation présents</h3>
          <ul>
            <li>Vérification des endpoints de l'API.</li>
            <li>Contrôle du chargement des données et de l'index FAISS.</li>
            <li>Tests des règles métier du RAG.</li>
            <li>Vérification de métriques de performance.</li>
            <li>Évaluation sur des questions annotées.</li>
          </ul>
          <p>
            L'exécution globale est regroupée dans
            <code> test/run_all_tests.py</code>. Il s'agit de scripts
            Python autonomes et non d'une suite Pytest classique.
          </p>
        </div>
      </section>

      <section className="pf07-section">
        <div className="pf07-heading">
          <span>06</span>
          <h2>Limites et perspectives</h2>
        </div>

        <div className="pf07-limits-grid">
          <article>
            <h3>Limites identifiées</h3>
            <ul>
              <li>Périmètre géographique limité à Valenciennes et au Nord.</li>
              <li>Dépendance à la qualité et à la disponibilité des données OpenAgenda.</li>
              <li>Qualité des réponses dépendante des documents récupérés.</li>
              <li>Coût et latence liés à l'appel au modèle Mistral distant.</li>
              <li>Jeu d'évaluation de seulement quatre questions.</li>
            </ul>
          </article>

          <article>
            <h3>Améliorations envisagées</h3>
            <ul>
              <li>Élargir et mieux annoter le jeu de test.</li>
              <li>Ajouter un monitoring des temps de réponse et des erreurs API.</li>
              <li>Améliorer le reranking des documents avant génération.</li>
              <li>Externaliser et documenter la configuration.</li>
              <li>Ajouter une conteneurisation Docker reproductible.</li>
              <li>Mettre en place une chaîne CI/CD.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="pf07-conclusion">
        <h2>Bilan du projet</h2>
        <p>
          Ce POC met en œuvre une architecture RAG de bout en bout,
          depuis la collecte de données événementielles jusqu'à la
          génération de réponses contextualisées via une API.
          Il associe préparation documentaire, embeddings, recherche
          vectorielle et génération par un modèle de langage.
        </p>
        <p>
          Le projet permet de mettre en pratique les principaux
          composants d'un système de recherche augmentée par génération,
          tout en identifiant les points à renforcer avant un éventuel
          passage à l'échelle : qualité des données, évaluation,
          supervision et industrialisation.
        </p>
      </section>

      <footer className="pf07-footer">
        <Link to="/" className="pf07-back">
          <ArrowLeft size={16} /> Retour aux projets
        </Link>
        <a href={repo} target="_blank" rel="noreferrer">
          Consulter le code source <ArrowUpRight size={16} />
        </a>
      </footer>
    </main>
  );
};

export default ChatBotEvent;