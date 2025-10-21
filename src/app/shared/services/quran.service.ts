import { Injectable } from '@angular/core';
import surahsList from 'quran-json/dist/quran.json';

@Injectable({ providedIn: 'root' })
export class QuranService {
  private surahs = surahsList as any[];

  getSurahs() {
    return this.surahs;
  }

  async getSurahByNumber(num: number) {
    try {
      const surah = await import(`quran-json/dist/chapters/${num}.json`);
      return surah.default;
    } catch (e) {
      console.error('Failed to load surah', e);
      return null;
    }
  }
}
