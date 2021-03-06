import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuctionComponent } from './auction/auction.component';
import { BrowseComponent } from './browse/browse.component';
import { DropsComponent } from './drops/drops.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ViewDropComponent } from './view-drop/view-drop.component';

const routes: Routes = [
  {
    path: '',
    component: DropsComponent,
  },
  {
    path: 'drop',
    component: ViewDropComponent,
  },
  {
    path: 'auction',
    component: AuctionComponent,
  },
  {
    path: 'browse',
    component: BrowseComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}