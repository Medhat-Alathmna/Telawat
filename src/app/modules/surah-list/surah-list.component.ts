import { Component, inject, signal } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { QuranService } from 'src/app/shared/services/quran.service';

@Component({
  selector: 'app-surah-list',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, RouterLink],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>📖 السور</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item *ngFor="let surah of surahs()" [routerLink]="['/ayah-list', surah.number]">
          <ion-label>
            <h2>{{ surah.name }}</h2>
            <p>{{ surah.englishName }} — {{ surah.numberOfAyahs }} آية</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  `,
})
export class SurahListPage {
  private quranService = inject(QuranService);
  surahs = signal(this.quranService.getSurahs());
}
