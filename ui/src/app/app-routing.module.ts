import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'one',
    loadChildren: () => import('./survey-progress-one/survey-progress-one.module').then(m => m.SurveyProgressOnePageModule)
  },
  {
    path: 'two',
    loadChildren: () => import('./survey-progress-two/survey-progress-two.module').then(m => m.SurveyProgressTwoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
