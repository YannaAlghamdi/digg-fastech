import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyProgressThreePage } from './survey-progress-three.page';

const routes: Routes = [
  {
    path: '',
    component: SurveyProgressThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyProgressThreePageRoutingModule {}
