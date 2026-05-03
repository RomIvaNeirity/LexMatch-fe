// src/types/analysis.ts (або просто в App чи окремо)

export interface Law {
  title: string;
  lawUrl: string;
  courtUrl: string;
}

export interface AnalysisResponse {
  detectedLaws: Law[];
  fullText?: string; // для результатів парсингу
}

export interface AnalysisRequest {
  sourceType: "manual" | "fetch";
  text?: string;
  caseNumber?: string;
}
