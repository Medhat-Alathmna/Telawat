import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonSpinner,
  IonButtons,
  IonBackButton
} from '@ionic/angular/standalone';
import { QuranService } from 'src/app/shared/services/quran.service';

@Component({
  selector: 'app-ayah-list',
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonSpinner,
    IonButtons,
    IonBackButton
  ],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/surah-list"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ surah()?.name || 'تحميل...' }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content *ngIf="surah(); else loading">
      <ion-list>
        <ion-item *ngFor="let verse of surah()?.verses" lines="full">
          <ion-label class="ion-text-wrap">
            <h3 style="color: var(--ion-color-primary)">آية {{ verse.verse }}</h3>
            <p dir="rtl" style="text-align: right; font-size: 1.2em; line-height: 2; padding: 10px 0;">
              {{ verse.text }}
            </p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>

    <ng-template #loading>
      <ion-content>
        <div class="ion-padding" style="display: flex; justify-content: center; align-items: center; height: 100%;">
          <ion-spinner name="crescent" color="primary"></ion-spinner>
        </div>
      </ion-content>
    </ng-template>
  `
})
export class AyahListPage implements OnInit {
  private route = inject(ActivatedRoute);
  private quranService = inject(QuranService);
  surah = signal<any | null>(null);

  async ngOnInit() {
    const num = Number(this.route.snapshot.paramMap.get('surahNumber'));
    const data = await this.quranService.getSurahByNumber(num);
    console.log(num);
    
    this.surah.set(data);
  }
}