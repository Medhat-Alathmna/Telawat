import { Injectable } from '@angular/core';
import surahsList from 'quran-json/dist/quran.json';

@Injectable({ providedIn: 'root' })
export class QuranService {
  private surahs = surahsList as any[];

  getSurahs() {
    return this.surahs;
  }

   async getSurahByNumber(num: number) {
    const id = num.toString().padStart(3, '0');
    try {
      const response = await fetch(`assets/quran/surahs/${id}.json`);
      return await response.json();
    } catch (e) {
      console.error('Failed to load surah', e);
      return null;
    }
  }
}
