export interface Skill {
  id: string;
  name: string;
  category: string;
  technologies: string[];
  projectIds: string[];
}

export const skills: Skill[] = [
  {
    id: "ia-llm",
    name: "IA & LLM",
    category: "Intelligence artificielle",
    technologies: ["Python", "PyTorch", "Qwen", "SFT", "DPO", "LoRA"],
    projectIds: ["medical-ai", "multi-llm"],
  },
  {
    id: "backend",
    name: "Backend & API",
    category: "Développement",
    technologies: ["Python", "FastAPI", "REST API"],
    projectIds: ["medical-ai"],
  },
  {
    id: "data-engineering",
    name: "Data Engineering",
    category: "Data",
    technologies: ["ETL", "Airflow", "PostgreSQL", "Streamlit"],
    projectIds: ["news-pipeline"],
  },
  {
    id: "devops",
    name: "DevOps & CI/CD",
    category: "Infrastructure",
    technologies: ["Docker", "GitHub Actions", "vLLM"],
    projectIds: ["medical-ai"],
  },
  {
    id: "orchestration",
    name: "Orchestration IA",
    category: "Intelligence artificielle",
    technologies: ["LangGraph", "MCP", "LM Studio"],
    projectIds: ["multi-llm"],
  },
];