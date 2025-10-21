import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SurahListPage } from '../surah-list/surah-list.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
    { path: '', component: SurahListPage }
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
export class SurahListModule { }