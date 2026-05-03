import React from "react";
import { TextField, Button } from "@mui/material";
import { TabContent } from "../App.styles";

interface CaseSearchTabProps {
  caseNumber: string;
  setCaseNumber: (value: string) => void;
  onAnalyze: () => void;
  isLoading: boolean;
}

export const CaseSearchTab: React.FC<CaseSearchTabProps> = ({
  caseNumber,
  setCaseNumber,
  onAnalyze,
  isLoading,
}) => {
  return (
    <TabContent>
      <TextField
        fullWidth
        label="Номер справи"
        placeholder="Наприклад: 757/12345/22-ц"
        variant="outlined"
        value={caseNumber}
        onChange={(e) => setCaseNumber(e.target.value)}
        disabled={isLoading}
      />
      <Button
        variant="contained"
        size="large"
        onClick={onAnalyze}
        disabled={isLoading || !caseNumber}
        sx={{ height: "56px", minWidth: "120px" }}
      >
        Знайти
      </Button>
    </TabContent>
  );
};
