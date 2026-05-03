import { styled, Box, Stack, Paper } from "@mui/material";

export const StyledCard = styled(Paper)(() => ({
  padding: "12px",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  backgroundColor: "rgb(216, 207, 255)",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-4px)",
  },
}));

export const TabContent = styled(Box)(() => ({
  display: "flex",
  gap: "16px",
  marginTop: "24px",
  alignItems: "flex-start",
}));

export const ActionStack = styled(Stack)(() => ({
  marginTop: "16px",
  alignItems: "flex-end",
}));

export const UploadZone = styled(Paper)(() => ({
  border: "2px dashed rgba(0, 0, 0, 0.23)",
  padding: "48px",
  textAlign: "center",
  cursor: "pointer",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  transition: "all 0.3s ease",
  "&:hover": {
    borderColor: "#1976d2",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
}));

export const ResultsWrapper = styled(Box)(() => ({
  marginTop: "32px",
  paddingTop: "16px",
  borderTop: "1px solid rgba(0, 0, 0, 0.12)",
}));
