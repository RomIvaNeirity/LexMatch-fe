import { useAnalyzeDecisionMutation } from "../api/baseApi";

export const useAnalysis = () => {
  const [analyze, { isLoading, error, data }] = useAnalyzeDecisionMutation();

  const handleAnalyzeText = async (text: string) => {
    if (!text.trim()) return;
    console.log("Sending text:", text.trim());
    await analyze({
      sourceType: "manual",
      text: text.trim(),
    });
  };

  const handleAnalyzeCase = async (caseNumber: string) => {
    if (!caseNumber.trim()) return;
    await analyze({ caseNumber, sourceType: "fetch" });
  };

  return {
    analyzeText: handleAnalyzeText,
    analyzeCase: handleAnalyzeCase,
    isLoading,
    error,
    data,
  };
};
