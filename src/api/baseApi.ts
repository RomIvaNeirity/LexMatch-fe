import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Визначаємо типи для відповіді (Strict TS!)
interface IAnalysisResponse {
  fullText: string;
  detectedLaws: string[];
}

export const lexMatchApi = createApi({
  reducerPath: "lexMatchApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    // Ендпоінт для аналізу тексту
    analyzeDecision: builder.mutation<
      IAnalysisResponse,
      { text: string; sourceType: string }
    >({
      query: (body) => ({
        url: "analysis/manual", // NestJS автоматично підхоплює префікс з контролера
        method: "POST",
        body: {
          text: body.text,
          sourceType: "manual", // Додаємо тип джерела, щоб DTO на бекенді не сварився
        },
      }),
    }),
  }),
});

export const { useAnalyzeDecisionMutation } = lexMatchApi;
