import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropsComponent } from './drops/drops.component';

const routes: Routes = [
  {
    path: '',
    component: DropsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}