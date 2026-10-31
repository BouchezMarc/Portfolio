import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Network,
  Monitor,
  RefreshCw,
  ShieldCheck,
  MousePointer2,
  HardDrive,
} from "lucide-react";
import MermaidDiagram from "../components/MermaidDiagram";
import "./MultiPC.css";

const sections = [
  {
    icon: RefreshCw,
    title: "Synchronisation des fichiers",
    description:
      "Mise en place d'une synchronisation décentralisée entre cinq ordinateurs. Chaque machine participe au réseau Syncthing et échange les fichiers avec les autres appareils autorisés, sans dépendre d'un serveur central.",
    technologies: ["Syncthing", "P2P", "TCP 22000", "UDP 22000"],
  },
  {
    icon: MousePointer2,
    title: "Contrôle multi-PC",
    description:
      "Configuration de Deskflow pour partager un même clavier et une même souris entre plusieurs ordinateurs. Linux Mint assure le rôle de serveur Deskflow, les autres machines se connectant en tant que clients.",
    technologies: ["Deskflow", "Client / Serveur", "Réseau local"],
  },
  {
    icon: ShieldCheck,
    title: "Pare-feu et sécurité réseau",
    description:
      "Configuration des règles de pare-feu pour autoriser les communications nécessaires entre les machines. Restriction des accès aux équipements concernés et adaptation des règles selon les systèmes d'exploitation.",
    technologies: [
      "Windows Defender Firewall",
      "Linux Firewall",
      "Règles entrantes",
      "Filtrage réseau",
    ],
  },
  {
    icon: Network,
    title: "Infrastructure réseau",
    description:
      "Organisation des équipements sur le réseau local, gestion de l'adressage IP et vérification de la connectivité entre les postes. Utilisation du routeur Meraki Go GX50 au sein de l'infrastructure domestique.",
    technologies: [
      "Meraki Go GX50",
      "TCP / UDP",
      "IPv4",
      "Réseau local",
    ],
  },
];

export default function MultiPC() {
  return (
    <main className="medical-page">
      <header className="medical-header">
        <Link className="medical-back" to="/#projets">
          <ArrowLeft size={17} />
          Retour aux projets
        </Link>
        <span className="medical-label">INFRASTRUCTURE · LABORATOIRE</span>
      </header>

      <section className="medical-hero">
        <div className="medical-eyebrow">
          <span className="medical-dot" />
          MULTI-PC & INFRASTRUCTURE RÉSEAU
        </div>

        <h1>
          Environnement
          <br />
          <span>multi-machines.</span>
        </h1>

        <p className="medical-intro">
          Conception d'un environnement multi-PC permettant de synchroniser
          les fichiers entre plusieurs ordinateurs et de partager les
          périphériques de saisie. Le projet repose sur une infrastructure
          réseau locale, Syncthing, Deskflow et la configuration des pare-feu.
        </p>

        <div className="medical-tags">
          {[
            "Syncthing",
            "Deskflow",
            "Windows",
            "Linux Mint",
            "macOS",
            "Meraki Go",
            "TCP / UDP",
            "Firewall",
          ].map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      <section className="medical-section">
        <div className="medical-section-heading">
          <span>01 / OBJECTIF</span>
          <h2>Un environnement de travail unifié.</h2>
        </div>

        <p>
          L'objectif est de faire communiquer plusieurs ordinateurs
          hétérogènes au sein d'un même réseau local, tout en facilitant
          le travail entre les différentes machines. Deux besoins sont
          traités : la synchronisation des fichiers et le partage des
          périphériques de saisie.
        </p>

        <div className="medical-notice">
          <Network size={22} />
          <div>
            <h3>Deux services, deux architectures</h3>
            <p>
              Syncthing fonctionne en pair-à-pair entre cinq ordinateurs.
              Deskflow repose sur une architecture client-serveur distincte :
              Linux Mint héberge le serveur de partage clavier/souris et
              n'appartient pas au réseau de synchronisation Syncthing.
            </p>
          </div>
        </div>
      </section>

      <section className="medical-section">
        <div className="medical-section-heading">
          <span>02 / ARCHITECTURE</span>
          <h2>Organisation des machines.</h2>
        </div>


<section className="medical-section">
  <div className="medical-section-heading">
    <span>02 / ARCHITECTURE</span>
    <h2>Organisation des machines.</h2>
  </div>

  <p>
    L'infrastructure repose sur deux services indépendants :
    Deskflow pour le partage des périphériques de saisie et
    Syncthing pour la synchronisation des fichiers.
  </p>

  <div className="medical-components">
    <article className="medical-component">
      <MousePointer2 size={25} />
      <h3>Réseau Deskflow</h3>
      <p>
        Un PC serveur Deskflow partage son clavier et sa souris
        avec quatre autres ordinateurs configurés comme clients.
      </p>
      <div className="medical-tags">
        <span>1 serveur</span>
        <span>4 clients</span>
        <span>Clavier / souris</span>
      </div>
    </article>

    <article className="medical-component">
      <RefreshCw size={25} />
      <h3>Réseau Syncthing</h3>
      <p>
        Un PC serveur Syncthing synchronise les dossiers partagés
        avec trois PC clients. Le serveur Deskflow ne participe
        pas à ce réseau.
      </p>
      <div className="medical-tags">
        <span>1 serveur</span>
        <span>3 clients</span>
        <span>Pair-à-pair</span>
      </div>
    </article>
  </div>
          <br/>
  <div className="medical-component">
    <HardDrive size={25} />
    <h3>Organisation des dossiers synchronisés</h3>
    <ul className="medical-outcomes">
    <li>Vault Obsidian : notes au format Markdown (.md).</li>
    <li>Dossier de mots de passe.</li>
    <li>Dossier de fichiers d'échange.</li>
    <li>Dossier Clipboard : partage de contenus copiés.</li>
    </ul>
</div>

<div className="medical-architecture">
  <h3>01 — Contrôle des périphériques avec Deskflow</h3>
  <MermaidDiagram
    chart={`
      flowchart TB
        DS["PC serveur Deskflow"]
        D1["PC client 1"]
        D2["PC client 2"]
        D3["PC client 3"]
        D4["PC client 4"]

        DS <--> D1
        DS <--> D2
        DS <--> D3
        DS <--> D4

        classDef server fill:#2563eb,stroke:#60a5fa,color:#ffffff,stroke-width:2px
        classDef client fill:#164e63,stroke:#22d3ee,color:#ffffff,stroke-width:1px

        class DS server
        class D1,D2,D3,D4 client
    `}
  />
</div>

<div className="medical-architecture">
  <h3>02 — Synchronisation des fichiers avec Syncthing</h3>
  <MermaidDiagram
    chart={`
      flowchart TB
        SS["PC serveur Syncthing"]

        subgraph VAULT["Dossiers partagés"]
          V1["Vault Obsidian — Markdown"]
          V2["Mots de passe"]
          V3["Fichiers d'échange"]
          V4["Clipboard"]
        end

        SS --- VAULT

        C1["PC client 1"]
        C2["PC client 2"]
        C3["PC client 3"]

        SS <--> C1
        SS <--> C2
        SS <--> C3

        classDef server fill:#15803d,stroke:#4ade80,color:#ffffff,stroke-width:2px
        classDef client fill:#14532d,stroke:#4ade80,color:#ffffff,stroke-width:1px
        classDef folder fill:#713f12,stroke:#fbbf24,color:#ffffff,stroke-width:1px

        class SS server
        class C1,C2,C3 client
        class V1,V2,V3,V4 folder
        style VAULT fill:#292524,stroke:#fbbf24,color:#ffffff
    `}
  />
</div>

</section>

        <br/>
        <div className="medical-components">
          <article className="medical-component">
            <RefreshCw size={25} />
            <h3>Réseau Syncthing</h3>
            <p>
              Cinq ordinateurs échangent leurs fichiers directement.
              Chaque appareil est un participant du réseau et peut
              synchroniser les dossiers partagés avec les autres appareils
              autorisés.
            </p>
            <div className="medical-tags">
              <span>5 ordinateurs</span>
              <span>Pair-à-pair</span>
              <span>TCP / UDP 22000</span>
            </div>
          </article>

          <article className="medical-component">
            <Monitor size={25} />
            <h3>Serveur Deskflow</h3>
            <p>
              Linux Mint héberge le serveur Deskflow. Les autres ordinateurs
              configurés comme clients peuvent utiliser le même clavier et
              la même souris au travers du réseau local.
            </p>
            <div className="medical-tags">
              <span>Linux Mint</span>
              <span>Serveur</span>
              <span>Clients</span>
            </div>
          </article>
        </div>
      </section>

      <section className="medical-section">
        <div className="medical-section-heading">
          <span>03 / RÉALISATION</span>
          <h2>Les composants de l'infrastructure.</h2>
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
          <span>04 / CONFIGURATION RÉSEAU</span>
          <h2>Maîtriser les communications.</h2>
        </div>

        <p>
          Le fonctionnement des services dépend de règles réseau adaptées
          aux besoins de chaque application. Les pare-feu des différents
          systèmes doivent autoriser les communications nécessaires entre
          les équipements concernés.
        </p>

        <div className="medical-results-table">
          <table>
            <thead>
              <tr>
                <th>Service</th>
                <th>Protocole</th>
                <th>Port</th>
                <th>Utilisation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Syncthing</td>
                <td>TCP</td>
                <td>22000</td>
                <td>Transfert de fichiers</td>
              </tr>
              <tr>
                <td>Syncthing</td>
                <td>UDP</td>
                <td>22000</td>
                <td>Transfert QUIC</td>
              </tr>
              <tr>
                <td>Deskflow</td>
                <td>TCP</td>
                <td>24800*</td>
                <td>Communication client-serveur</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="medical-future">
          * Port TCP par défaut de Deskflow, à adapter si le port de
          configuration du serveur est différent. Les règles sont à
          limiter aux machines et réseaux autorisés. Le port Syncthing
          22000 est nécessaire pour les connexions directes entre les
          cinq ordinateurs.
        </p>

        <div className="medical-notice">
          <ShieldCheck size={22} />
          <div>
            <h3>Gestion des règles de pare-feu</h3>
            <p>
              Le paramétrage porte sur les règles entrantes et les
              autorisations de communication entre les machines. Une
              attention particulière est accordée à la portée des règles,
              afin de ne pas exposer inutilement les services sur des
              réseaux non concernés.
            </p>
          </div>
        </div>
      </section>

      <section className="medical-section">
        <div className="medical-section-heading">
          <span>05 / BILAN</span>
          <h2>Compétences mobilisées.</h2>
        </div>

        <ul className="medical-outcomes">
          <li>
            Mise en réseau de cinq ordinateurs pour la synchronisation
            décentralisée des fichiers.
          </li>
          <li>
            Configuration d'une architecture client-serveur avec Deskflow.
          </li>
          <li>
            Intégration d'environnements Windows, macOS et Linux.
          </li>
          <li>
            Configuration et adaptation des règles de pare-feu.
          </li>
          <li>
            Gestion de l'adressage IP et diagnostic de la connectivité réseau.
          </li>
          <li>
            Séparation des services de synchronisation et de contrôle
            des périphériques.
          </li>
        </ul>

        <div className="medical-results-summary">
          <div>
            <span>Syncthing : </span>
            <strong>4 PC</strong>
          </div>
          <div>
            <span>Deskflow : </span>
            <strong>3 Clients / 1 Serveur</strong>
          </div>
          <div>
            <span>Infrastructure : </span>
            <strong>Multi-OS Mac OS, Linux Mint, Windows</strong>
          </div>
        </div>

        <p className="medical-future">
          Ce laboratoire permet de mettre en pratique l'administration
          système, les réseaux, la sécurisation des communications et
          l'intégration de services entre plusieurs environnements
          informatiques.
        </p>
      </section>

      <footer className="medical-footer">
        <Link to="/#projets">
          <ArrowLeft size={17} /> Tous les projets
        </Link>
      </footer>
    </main>
  );
}