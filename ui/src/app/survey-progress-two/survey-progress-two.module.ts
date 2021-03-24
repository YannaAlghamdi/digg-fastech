import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurveyProgressTwoPageRoutingModule } from './survey-progress-two-routing.module';

import { SurveyProgressTwoPage } from './survey-progress-two.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SurveyProgressTwoPageRoutingModule
  ],
  declarations: [SurveyProgressTwoPage]
})
export class SurveyProgressTwoPageModule { }
