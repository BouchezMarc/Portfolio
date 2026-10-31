import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import MedicalAi from "./pages/MedicalAI";
import DataEngineering from "./pages/DataEngineering";
import MultiLLM from "./pages/MultiLLM";
import ChessAgent from "./pages/ChessAgent";
import LunarLander from "./pages/LunarLander";
import IRMSSL from "./pages/IRMSSL";
import CICDMonitoring from "./pages/CICDMonitoring";
import ChatBotEvent from "./pages/ChatBotEvent";
import CreditRisk from "./pages/CreditRisk";
import MLAttrition from "./pages/MLAttrition";
import MLAttritionAnalysis from "./pages/MLAttritionAnalysis";
import SeattleConsumption from "./pages/SeattleConsumption";
import ClothesSegmentation from "./pages/ClothesSegmentation";
import MultiPC from "./pages/MultiPC";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/Portfolio">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projets/medical-ai" element={<MedicalAi />} />
        <Route  path="/projets/news-pipeline" element={<DataEngineering />}/>
        <Route  path="/projets/multi-llm"  element={<MultiLLM />}/>
        <Route  path="/projets/chess-agent"  element={<ChessAgent />}/>
        <Route  path="/projets/lunar-lander"  element={<LunarLander />}/>
        <Route  path="/projets/irmssl"  element={<IRMSSL />}/>
        <Route path="/projets/irm-ssl" element={<IRMSSL />} />
        <Route path="/projets/cicd-monitoring" element={<CICDMonitoring />} />
        <Route path="/projets/chat-bot-event" element={<ChatBotEvent />} />
        <Route path="/projets/credit-risk" element={<CreditRisk />} />
        <Route path="/projets/ml-attrition" element={<MLAttrition />} />
        <Route path="/projets/ml-attrition-analysis" element={<MLAttritionAnalysis />} />
        <Route path="/projets/seattle-consumption" element={<SeattleConsumption />} />
        <Route path="/projets/clothes-segmentation" element={<ClothesSegmentation />} />
        <Route path="/projets/multi-pc" element={<MultiPC />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);