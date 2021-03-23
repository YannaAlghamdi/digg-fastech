import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurveyProgressOnePageRoutingModule } from './survey-progress-one-routing.module';

import { SurveyProgressOnePage } from './survey-progress-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveyProgressOnePageRoutingModule
  ],
  declarations: [SurveyProgressOnePage]
})
export class SurveyProgressOnePageModule {}
