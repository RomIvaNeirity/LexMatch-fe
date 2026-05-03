import React from "react";
import { TextField, Button, CircularProgress } from "@mui/material";
import { ActionStack } from "../App.styles";

interface ManualTextTabProps {
  text: string;
  setText: (value: string) => void;
  onAnalyze: (text: string) => void; // Тепер передаємо просто рядок
  isLoading: boolean;
}

export const ManualTextTab: React.FC<ManualTextTabProps> = ({
  text,
  setText,
  onAnalyze,
  isLoading,
}) => {
  return (
    <ActionStack spacing={2}>
      <TextField
        fullWidth
        multiline
        rows={12}
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isLoading}
      />
      <Button
        variant="contained"
        onClick={() => onAnalyze(text)}
        disabled={isLoading || !text}
        startIcon={isLoading && <CircularProgress size={20} />}
      >
        Проаналізувати
      </Button>
    </ActionStack>
  );
};
