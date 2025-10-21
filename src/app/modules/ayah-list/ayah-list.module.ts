import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SurahListPage } from '../surah-list/surah-list.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AyahListPage } from './ayah-list.component';


const routes: Routes = [
    { path: '', component: AyahListPage }
];

@NgModule({
    imports: [
       CommonModule,
    IonicModule,
    // TranslateModule,
    FormsModule,
    RouterModule.forChild(routes), 
    ],
   
    
})
export class AyahListModule { }