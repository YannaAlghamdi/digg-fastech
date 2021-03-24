import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyProgressTwoPage } from './survey-progress-two.page';

const routes: Routes = [
  {
    path: '',
    component: SurveyProgressTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyProgressTwoPageRoutingModule {}
