// lexmatch-be/src/analysis/analysis.service.ts
import { Injectable } from "@nestjs/common";

@Injectable()
export class AnalysisService {
  // Простий приклад на Regex (для початку)
  extractLawReferences(text: string): string[] {
    // Шукаємо паттерни типу "ст. 121 КК", "стаття 204-1 КУпАП" тощо

    const regex =
      /(?:ст\.|стаття|статті|пункт)\s+(\d+(?:-\d+)?)\s+([А-ЯA-Z]{2,6})/gu;
    const matches = text.matchAll(regex);
    const foundLaws = new Set<string>();

    for (const match of matches) {
      // match[1] - номер статті, match[2] - кодекс (КК, ЦК, КУпАП тощо)
      foundLaws.add(`ст. ${match[1]} ${match[2]}`);
    }

    return Array.from(foundLaws);
  }
}
