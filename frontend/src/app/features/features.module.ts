import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CoreModule } from '../core/core.module';

import { DropsComponent } from './drops/drops.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { AuctionComponent } from './auction/auction.component';
import { BrowseComponent } from './browse/browse.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ViewDropComponent } from './view-drop/view-drop.component';

@NgModule({
  declarations: [
    DropsComponent,
    AuctionComponent,
    BrowseComponent,
    PortfolioComponent,
    ViewDropComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FeaturesRoutingModule
  ], 
  exports: [ ]
})
export class FeaturesModule { }
