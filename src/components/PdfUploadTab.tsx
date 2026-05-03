import React, { ChangeEvent, useState } from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import { UploadZone } from "../App.styles";

interface PdfUploadTabProps {
  onTextParsed: (text: string) => void;
  isLoading: boolean;
}

export const PdfUploadTab: React.FC<PdfUploadTabProps> = ({
  onTextParsed,
  isLoading,
}) => {
  const [isParsing, setIsParsing] = useState<boolean>(false);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || file.type !== "application/pdf") return;

    setIsParsing(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("sourceType", "manual");

    try {
      const response = await fetch("http://localhost:3000/analysis/manual", {
        method: "POST",
        body: formData,
      });

      const result: AnalysisResponse = await response.json();
      if (result.fullText) {
        onTextParsed(result.fullText);
      }
    } catch (e) {
      console.error("Parsing error:", e);
    } finally {
      setIsParsing(false);
    }
  };

  const isInteractionDisabled = isLoading || isParsing;

  return (
    <Box>
      <input
        type="file"
        id="pdf-up"
        hidden
        accept="application/pdf"
        onChange={handleFileChange}
        disabled={isInteractionDisabled}
      />
      <label htmlFor="pdf-up">
        <UploadZone>
          {isParsing ? (
            <CircularProgress size={24} />
          ) : (
            <Button
              variant="outlined"
              component="span"
              disabled={isInteractionDisabled}
            >
              Завантажити PDF
            </Button>
          )}
        </UploadZone>
      </label>
    </Box>
  );
};
