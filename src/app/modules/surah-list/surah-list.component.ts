import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';
import { QuranService } from 'src/app/shared/services/quran.service';

@Component({
  selector: 'app-surah-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel
  ],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>📖 السور</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        @for (surah of surahs(); track $index) {
           <ion-item 
          [routerLink]="['/ayah-list', surah.id]"
          button
        >
          <ion-label>
            <h2>{{ surah.name }}</h2>
            <p>{{ surah.transliteration }} — {{ surah.total_verses }} آية</p>
          </ion-label>
        </ion-item>
        }
       
      </ion-list>
    </ion-content>
  `
})
export class SurahListPage {
  private quranService = inject(QuranService);
  surahs = signal(this.quranService.getSurahs());

  constructor() {
  }
}