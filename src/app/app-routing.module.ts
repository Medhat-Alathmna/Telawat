import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AyahListPage } from './modules/ayah-list/ayah-list.component';
import { SurahListPage } from './modules/surah-list/surah-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'surah-list', pathMatch: 'full' },
  { path: 'surah-list', component: SurahListPage },
  { path: 'ayah-list/:surahNumber', component: AyahListPage },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
