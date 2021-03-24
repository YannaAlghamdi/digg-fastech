import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurveyProgressThreePageRoutingModule } from './survey-progress-three-routing.module';

import { SurveyProgressThreePage } from './survey-progress-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SurveyProgressThreePageRoutingModule
  ],
  declarations: [SurveyProgressThreePage]
})
export class SurveyProgressThreePageModule { }
