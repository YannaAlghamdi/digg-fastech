import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyProgressOnePage } from './survey-progress-one.page';

const routes: Routes = [
  {
    path: '',
    component: SurveyProgressOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyProgressOnePageRoutingModule {}
