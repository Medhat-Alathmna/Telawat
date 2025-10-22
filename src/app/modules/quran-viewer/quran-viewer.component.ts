import { Component, Input, OnInit } from '@angular/core';
import { QuranService } from '../../shared/services/quran.service';
import { IonHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-quran-viewer',
  templateUrl: './quran-viewer.component.html',
  styleUrls: ['./quran-viewer.component.scss']
})
export class QuranViewerComponent implements OnInit {

  @Input() surahNumber!: number;
  surahData: any;

  constructor(private quranService: QuranService) {}

  async ngOnInit() {
    if (this.surahNumber) {
      this.surahData = await this.quranService.getSurahByNumber(this.surahNumber);
    }
  }

  // 🔹 لتلوين كلمة معينة أثناء التلاوة أو عند الخطأ
  highlightWord(ayahIndex: number, wordIndex: number) {
    const ayah = this.surahData.ayat[ayahIndex];
    if (!ayah) return;

    // قسم النص إلى كلمات
    const words = ayah.text.split(' ').map((word, i) => ({
      text: word,
      highlight: i === wordIndex
    }));

    ayah.words = words;
  }
}
