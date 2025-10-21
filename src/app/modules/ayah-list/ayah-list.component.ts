import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonSpinner
} from '@ionic/angular/standalone';
import { QuranService } from 'src/app/shared/services/quran.service';

@Component({
  selector: 'app-ayah-list',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonSpinner],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ surah()?.name || 'تحميل...' }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content *ngIf="surah(); else loading">
      <ion-list>
        <ion-item *ngFor="let verse of surah()?.verses">
          <ion-label>
            <h3>آية {{ verse.verse }}</h3>
            <p dir="rtl" style="text-align:right">{{ verse.text }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>

    <ng-template #loading>
      <ion-content>
        <div class="ion-padding" style="text-align:center">
          <ion-spinner name="crescent"></ion-spinner>
        </div>
      </ion-content>
    </ng-template>
  `,
})
export class AyahListPage implements OnInit {
  private route = inject(ActivatedRoute);
  private quranService = inject(QuranService);
  surah = signal<any | null>(null);

  async ngOnInit() {
    const num = Number(this.route.snapshot.paramMap.get('surahNumber'));
    const data = await this.quranService.getSurahByNumber(num);
    this.surah.set(data);
  }
}
