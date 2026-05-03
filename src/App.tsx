import React, { useState } from "react";
import { Tabs, Tab, Box, Chip } from "@mui/material";
import { StyledCard } from "./App.styles";
import { useAnalysis } from "./hooks/useAnalysis";

// ІМПОРТИ КОМПОНЕНТІВ (Не зі стилів!)
import { CaseSearchTab } from "./components/CaseSearchTab";
import { PdfUploadTab } from "./components/PdfUploadTab";
import { ManualTextTab } from "./components/ManualTextTab";

export const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [manualText, setManualText] = useState("");
  const [caseNumber, setCaseNumber] = useState("");

  const { analyzeText, analyzeCase, isLoading, data } = useAnalysis();

  return (
    <StyledCard>
      <Tabs
        value={activeTab}
        onChange={(_, v) => setActiveTab(v)}
        variant="fullWidth"
      >
        <Tab label="Номер" />
        <Tab label="PDF" />
        <Tab label="Текст" />
      </Tabs>

      <Box sx={{ mt: 2 }}>
        {activeTab === 0 && (
          <CaseSearchTab
            caseNumber={caseNumber}
            setCaseNumber={setCaseNumber}
            onAnalyze={() => analyzeCase(caseNumber)}
            isLoading={isLoading}
          />
        )}
        {activeTab === 1 && (
          <PdfUploadTab
            onTextParsed={(text: string) => {
              setManualText(text);
              setActiveTab(2);
            }}
            isLoading={isLoading}
          />
        )}
        {activeTab === 2 && (
          <ManualTextTab
            text={manualText}
            setText={setManualText}
            onAnalyze={analyzeText}
            isLoading={isLoading}
          />
        )}
      </Box>

      {/* Результати (чіпи) */}
      {data && (
        <Box sx={{ mt: 3 }}>
          {data.detectedLaws.map((law, i) => (
            <Chip
              key={`${law.title}-${i}`}
              label={law.title}
              onClick={(e) => onChipClick(e, law)}
              variant="outlined"
              color="primary"
              sx={{ m: 0.5 }}
            />
          ))}
        </Box>
      )}
    </StyledCard>
  );
};
