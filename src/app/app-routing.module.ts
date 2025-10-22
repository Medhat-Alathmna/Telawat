import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AyahListPage } from './modules/ayah-list/ayah-list.component';
import { SurahListPage } from './modules/surah-list/surah-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'surah-list',
    pathMatch: 'full'
  },
  {
    path: 'surah-list',
    loadComponent: () => import('./modules/surah-list/surah-list.component').then(m => m.SurahListPage)
  },
  {
    path: 'ayah-list/:surahNumber',
    loadComponent: () => import('./modules/ayah-list/ayah-list.component').then(m => m.AyahListPage)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
