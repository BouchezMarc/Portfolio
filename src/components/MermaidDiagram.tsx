
import { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "base",
  securityLevel: "strict",
  flowchart: {
    curve: "basis",
    htmlLabels: true,
    nodeSpacing: 50,
    rankSpacing: 60,
  },
  themeVariables: {
    background: "#111827",
    primaryTextColor: "#ffffff",
    lineColor: "#94a3b8",
    fontFamily: "Arial, sans-serif",
  },
});

type MermaidDiagramProps = {
  chart: string;
};

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    const renderDiagram = async () => {
      try {
        const id = `mermaid-${Math.random().toString(36).slice(2)}`;
        const { svg } = await mermaid.render(id, chart);

        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      } catch (error) {
        console.error("Erreur de rendu Mermaid :", error);
      }
    };

    renderDiagram();

    return () => {
      cancelled = true;
    };
  }, [chart]);

  return <div className="medical-mermaid" ref={containerRef} />;
}
