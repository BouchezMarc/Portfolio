
import { projects } from "./data/projects";
import { skills } from "./data/skills";
import { useMemo, useState } from "react";
import { 
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  Layers3,
  Network,
  Search,
  Server,
  Workflow,
  RotateCcw,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./App.css";

const categories = [
  "Toutes",
  ...new Set(skills.map((skill) => skill.category)),
];

type GraphNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  type: string;
};

const defaultGraphNodes: GraphNode[] = [
  { id: "qwen", label: "Qwen", x: 95, y: 75, type: "IA" },
  { id: "sft", label: "SFT / DPO", x: 250, y: 75, type: "IA" },
  { id: "fastapi", label: "FastAPI", x: 410, y: 75, type: "Backend" },
  { id: "docker", label: "Docker", x: 570, y: 75, type: "DevOps" },
  { id: "python", label: "Python", x: 250, y: 185, type: "Langage" },
  { id: "airflow", label: "Airflow", x: 410, y: 185, type: "Data" },
  { id: "postgres", label: "PostgreSQL", x: 570, y: 185, type: "Data" },
];

const defaultGraphEdges: [string, string][] = [
  ["qwen", "sft"],
  ["sft", "fastapi"],
  ["fastapi", "docker"],
  ["python", "sft"],
  ["python", "airflow"],
  ["airflow", "postgres"],
];

function App() {
  const [category, setCategory] = useState("Toutes");
  const [search, setSearch] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );
  const [selectedNode, setSelectedNode] = useState("qwen");

  const filteredSkills = useMemo(
    () =>
      skills.filter(
        (skill) =>
          (category === "Toutes" || skill.category === category) &&
          `${skill.name} ${skill.technologies.join(" ")}`
            .toLowerCase()
            .includes(search.toLowerCase()),
      ),
    [category, search],
  );

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId,
  );

  const graphNodes = useMemo<GraphNode[]>(() => {
    if (!selectedProject) return defaultGraphNodes;

    const technologies = selectedProject.technologies;
    const count = technologies.length;

    const nodes: GraphNode[] = [
      {
        id: `project-${selectedProject.id}`,
        label: selectedProject.title,
        x: 340,
        y: 125,
        type: "Projet",
      },
    ];

    technologies.forEach((technology, index) => {
      const angle = (2 * Math.PI * index) / Math.max(count, 1) - Math.PI / 2;
      nodes.push({
        id: `technology-${index}`,
        label: technology,
        x: 340 + 220 * Math.cos(angle),
        y: 125 + 85 * Math.sin(angle),
        type: "Technologie",
      });
    });

    return nodes;
  }, [selectedProject]);

  const graphEdges: [string, string][] = selectedProject
    ? selectedProject.technologies.map((_, index) => [
        `project-${selectedProject.id}`,
        `technology-${index}`,
      ])
    : defaultGraphEdges;

  const activeNode =
    graphNodes.find((node) => node.id === selectedNode) ?? graphNodes[0];

  function selectProject(projectId: string) {
    setSelectedProjectId(projectId);
    setSelectedNode(`project-${projectId}`);
    document.getElementById("graphe")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  function resetGraph() {
    setSelectedProjectId(null);
    setSelectedNode("qwen");
  }

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#accueil">
          <span className="brand-icon">
            <BrainCircuit size={23} />
          </span>
          <span>
            portfolio<span className="accent">.tech</span>
          </span>
        </a>

        <nav>
          <a href="#profil">Profil</a>
          <a href="#projets">Projets</a>
          <a href="#competences">Compétences</a>
          <a href="#graphe">Graphe</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="github-link"
          href="https://github.com/BouchezMarc/"
          target="_blank"
          rel="noreferrer"
        >
          <Code2 size={17} /> GitHub <ArrowUpRight size={15} />
        </a>
      </header>

      <section className="hero section" id="accueil">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="pulse" /> PORTFOLIO TECHNIQUE
          </div>
          <h1>
            Concevoir.
            <br />
            Construire.
            <br />
            <span className="gradient-text">Donner du sens à l&apos;IA.</span>
          </h1>
          <p className="hero-description">
            Un espace dédié à mes projets, mes expérimentations et aux
            technologies qui façonnent les systèmes intelligents de demain.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="mailto:marcbouchez@hotmail.fr">
              marcbouchez@hotmail.fr <ArrowUpRight size={17} />
            </a>

            <a
              className="button secondary"
              href="https://github.com/BouchezMarc/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <Code2 size={16} /> Développement
            </span>
            <span>
              <BrainCircuit size={16} /> IA Engineering
            </span>
            <span>
              <Database size={16} /> Data Engineering
            </span>
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label="Illustration abstraite de réseau neuronal"
        >
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="core">
            <BrainCircuit size={62} strokeWidth={1.2} />
          </div>
          <div className="float-card card-ai">
            <BrainCircuit size={17} /> LLM &amp; Fine-tuning
          </div>
          <div className="float-card card-data">
            <Database size={17} /> Data pipelines
          </div>
          <div className="float-card card-api">
            <Server size={17} /> APIs &amp; services
          </div>
          <div className="visual-caption">
            SYSTEMS / DATA / INTELLIGENCE
          </div>
        </div>
        <div className="scroll-note">
          <span /> DÉFILER POUR EXPLORER
        </div>
      </section>


      <section className="section profile-section" id="profil">
        <div className="section-heading">
          <div>
            <div className="eyebrow">01 / PARCOURS</div>
            <h2>
              Ingénieur <span className="gradient-text">AI Engineer | Interopérabilité & Data.</span>
            </h2>
          </div>
          <p>
            De l'informatique industrielle à l'intelligence artificielle,
            un parcours construit autour des systèmes, des données et du développement.
          </p>
        </div>

        <div className="profile-intro">
          <div className="profile-intro-icon">
            <BrainCircuit size={30} />
          </div>
          <div>
            <h3>Un parcours entre systèmes et intelligence artificielle</h3>
            <p>
              Mon parcours professionnel s'est construit à la croisée de
              l'informatique industrielle, du développement logiciel et des
              systèmes d'information de santé.
            </p>
            <p>
              Après plusieurs expériences dans le support informatique,
              la maintenance industrielle et l'automatisme, je me suis
              orienté vers le développement logiciel, puis vers
              l'interopérabilité des systèmes d'information hospitaliers.
            </p>
            <p>
              Cette expérience m'a permis de développer une expertise dans
              les échanges de données et la communication entre systèmes
              hétérogènes.
            </p>
            <p>
              Aujourd'hui, je prolonge cette expertise par l'intelligence
              artificielle et l'AI Engineering : Machine Learning,
              fine-tuning de modèles de langage, architectures multi-LLM
              et conception d'applications intégrant l'IA.
            </p>
            <p>
              Mon objectif est de combiner interopérabilité, ingénierie
              logicielle et intelligence artificielle pour concevoir des
              solutions capables de s'intégrer dans des environnements
              techniques complexes.
            </p>
          </div>
        </div>

        <div className="profile-timeline-heading">
          <div className="eyebrow">EXPÉRIENCES & FORMATIONS</div>
          <p>Une évolution progressive de l'industrie vers l'IA.</p>
        </div>

        <div className="profile-timeline">
          <article className="profile-entry">
            <div className="profile-entry-icon"><GraduationCap size={18} /></div>
            <div className="profile-entry-content">
              <span className="profile-date">04/2025 — 04/2026</span>
              <h3>Formation AI Engineer</h3>
              <span className="profile-entry-type">Formation</span>
              <p>Spécialisation en intelligence artificielle et ingénierie des systèmes IA.</p>
            </div>
          </article>

          <article className="profile-entry">
            <div className="profile-entry-icon"><BriefcaseBusiness size={18} /></div>
            <div className="profile-entry-content">
              <span className="profile-date">03/2024 — 11/2025</span>
              <h3>Ingénieur interopérabilité</h3>
              <span className="profile-entry-type">Centre Hospitalier de Cambrai</span>
              <p>Interopérabilité et échanges de données entre systèmes d'information hospitaliers.</p>
            </div>
          </article>

          <article className="profile-entry">
            <div className="profile-entry-icon"><BriefcaseBusiness size={18} /></div>
            <div className="profile-entry-content">
              <span className="profile-date">03/2022 — 02/2024</span>
              <h3>Technicien interopérabilité</h3>
              <span className="profile-entry-type">Centre Hospitalier de Valenciennes</span>
            </div>
          </article>

          <article className="profile-entry">
            <div className="profile-entry-icon"><BriefcaseBusiness size={18} /></div>
            <div className="profile-entry-content">
              <span className="profile-date">09/2020 — 08/2021</span>
              <h3>Concepteur développeur</h3>
              <span className="profile-entry-type">Expérience professionnelle</span>
            </div>
          </article>

          <article className="profile-entry">
            <div className="profile-entry-icon"><GraduationCap size={18} /></div>
            <div className="profile-entry-content">
              <span className="profile-date">02/2020 — 09/2020</span>
              <h3>Formation concepteur développeur</h3>
              <span className="profile-entry-type">Niveau Bac+3 / Bac+4</span>
            </div>
          </article>

          <article className="profile-entry">
            <div className="profile-entry-icon"><BriefcaseBusiness size={18} /></div>
            <div className="profile-entry-content">
              <span className="profile-date">2013 — 2020</span>
              <h3>Intérim — Industrie, automatisme et informatique industrielle</h3>
              <span className="profile-entry-type">Expériences professionnelles</span>
            </div>
          </article>

          <article className="profile-entry">
            <div className="profile-entry-icon"><GraduationCap size={18} /></div>
            <div className="profile-entry-content">
              <span className="profile-date">2012</span>
              <h3>Formation développeur logiciel</h3>
              <span className="profile-entry-type">Niveau Bac+2</span>
            </div>
          </article>

          <article className="profile-entry">
            <div className="profile-entry-icon"><BriefcaseBusiness size={18} /></div>
            <div className="profile-entry-content">
              <span className="profile-date">2011</span>
              <h3>Intérim — Maintenance industrielle</h3>
              <span className="profile-entry-type">Expérience professionnelle</span>
            </div>
          </article>

          <article className="profile-entry">
            <div className="profile-entry-icon"><GraduationCap size={18} /></div>
            <div className="profile-entry-content">
              <span className="profile-date">2010</span>
              <h3>Formation technicien supérieur en automatisme et informatique industrielle</h3>
            </div>
          </article>

          <article className="profile-entry">
            <div className="profile-entry-icon"><BriefcaseBusiness size={18} /></div>
            <div className="profile-entry-content">
              <span className="profile-date">2004 — 2009</span>
              <h3>SAV — Magasin informatique</h3>
              <span className="profile-entry-type">Expérience professionnelle</span>
            </div>
          </article>

          <article className="profile-entry">
            <div className="profile-entry-icon"><BriefcaseBusiness size={18} /></div>
            <div className="profile-entry-content">
              <span className="profile-date">2001 — 2003</span>
              <h3>SAV — Magasin de jeux vidéo</h3>
              <span className="profile-entry-type">Expérience professionnelle</span>
            </div>
          </article>
        </div>
      </section>



      <section className="section projects-section" id="projets">
        <div className="section-heading">
          <div>
            <div className="eyebrow">02 / RÉALISATIONS</div>
            <h2>
              Projets <span className="gradient-text">sélectionnés.</span>
            </h2>
          </div>
          <p>
            Des projets concrets, des architectures et des expérimentations
            techniques.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card ${
                selectedProjectId === project.id ? "selected" : ""
              }`}
              key={project.id}
              onClick={() => selectProject(project.id)}
              role="button"
              tabIndex={0}
              aria-pressed={selectedProjectId === project.id}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  selectProject(project.id);
                }
              }}
            >
              <div className="project-top">
                <span className="project-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="project-category">{project.category}</span>
                <ArrowUpRight size={18} className="project-arrow" />
              </div>

              <div className="project-illustration">
                {index === 0 ? (
                  <BrainCircuit size={47} />
                ) : index === 1 ? (
                  <Workflow size={47} />
                ) : (
                  <Network size={47} />
                )}
                <span className="illustration-grid" />
              </div>

              <div className="project-status">{project.status}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {project.pageUrl && (
                <Link to={project.pageUrl}>
                  Découvrir le projet
                  <ArrowUpRight size={16} />
                </Link>
              )}

              <div className="tag-list">
                {project.technologies.map((technology) => (
                  <span className="tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <button
                type="button"
                className="button secondary"
                onClick={(event) => {
                  event.stopPropagation();
                  selectProject(project.id);
                }}
              >
                Voir dans le graphe
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-section" id="competences">
        <div className="section-heading">
          <div>
            <div className="eyebrow">03 / BOÎTE À OUTILS</div>
            <h2>
              Un écosystème <span className="gradient-text">technique.</span>
            </h2>
          </div>
          <p>
            Explore les technologies par domaine ou recherche une compétence
            précise.
          </p>
        </div>

        <div className="skill-controls">
          <div className="search-box">
            <Search size={17} />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Rechercher une compétence..."
            />
          </div>
          <div className="filter-list">
            {categories.map((item) => (
              <button
                className={`filter-chip ${
                  category === item ? "active" : ""
                }`}
                key={item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <article className="skill-card" key={skill.id}>
              <span className="skill-dot" />
              <div>
                <h3>{skill.name}</h3>
                <p>{skill.technologies.join(" · ")}</p>
              </div>
              <span className="skill-category">{skill.category}</span>
            </article>
          ))}
          {filteredSkills.length === 0 && (
            <p className="empty-state">Aucune compétence trouvée.</p>
          )}
        </div>
        <p className="disclaimer">
          Liste initiale à personnaliser selon tes projets et ton niveau réel de
          maîtrise.
        </p>
      </section>

      <section className="section graph-section" id="graphe">
        <div className="section-heading">
          <div>
            <div className="eyebrow">04 / CARTOGRAPHIE</div>
            <h2>
              Les connexions <span className="gradient-text">techniques.</span>
            </h2>
          </div>
          <p>
            {selectedProject
              ? `Technologies associées au projet : ${selectedProject.title}`
              : "Vue globale. Sélectionne un projet pour afficher ses technologies."}
          </p>
        </div>

        <div className="graph-panel">
          <div className="graph-toolbar">
            <span>
              <span className="pulse" />{" "}
              {selectedProject
                ? selectedProject.title.toUpperCase()
                : "GRAPHE DES TECHNOLOGIES"}
            </span>
            <span>
              {graphNodes.length} NŒUDS · {graphEdges.length} RELATIONS
            </span>
          </div>

          {selectedProject && (
            <div className="graph-actions">
              <button
                type="button"
                className="button secondary"
                onClick={resetGraph}
              >
                <RotateCcw size={16} /> Tous les projets
              </button>
            </div>
          )}

          <div className="graph-canvas">
            <svg
              viewBox="0 0 680 250"
              role="img"
              aria-label="Relations entre projets et technologies"
            >
              {graphEdges.map(([from, to]) => {
                const a = graphNodes.find((node) => node.id === from);
                const b = graphNodes.find((node) => node.id === to);
                if (!a || !b) return null;

                return (
                  <line
                    key={`${from}-${to}`}
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    className={`graph-edge ${
                      selectedNode === from || selectedNode === to
                        ? "highlight"
                        : ""
                    }`}
                  />
                );
              })}

              {graphNodes.map((node) => (
                <g
                  key={node.id}
                  className={`graph-node ${
                    selectedNode === node.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedNode(node.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Sélectionner ${node.label}`}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedNode(node.id);
                    }
                  }}
                >
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={selectedNode === node.id ? 25 : 20}
                  />
                  <text
                    x={node.x}
                    y={node.y + 38}
                    textAnchor="middle"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div className="graph-detail">
            <div className="graph-detail-icon">
              <Layers3 size={21} />
            </div>
            <div>
              <span className="detail-label">
                {activeNode?.type === "Projet"
                  ? "PROJET SÉLECTIONNÉ"
                  : "TECHNOLOGIE SÉLECTIONNÉE"}
              </span>
              <h3>{activeNode?.label}</h3>
              <p>
                {activeNode?.type === "Projet"
                  ? "Ce projet est relié aux technologies affichées dans le graphe."
                  : `Type : ${activeNode?.type}.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section section" id="contact">
        <div className="eyebrow">04 / ET ENSUITE ?</div>
        <h2>
          Une idée mérite
          <br />
          d&apos;être <span className="gradient-text">construite.</span>
        </h2>
        <p>
          Ce portfolio évoluera avec les projets, les apprentissages et les
          nouvelles connexions techniques.
        </p>
        <a
          className="button primary"
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          Retrouver mes projets <ArrowUpRight size={17} />
        </a>
      </section>

      <footer className="footer">
        <a className="brand" href="#accueil">
          <span className="brand-icon">
            <BrainCircuit size={20} />
          </span>
          <span>
            portfolio<span className="accent">.tech</span>
          </span>
        </a>
        <span>Conçu avec React &amp; TypeScript</span>
        <a href="#accueil">Retour en haut ↑</a>
      </footer>
    </main>
  );
}

export default App;
