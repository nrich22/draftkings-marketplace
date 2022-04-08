import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { CoreModule } from '../core/core.module';

import { DropsComponent } from './drops/drops.component';
import { FeaturesRoutingModule } from './features-routing.module';

@NgModule({
  declarations: [
    DropsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    FeaturesRoutingModule
  ], 
  exports: [ ]
})
export class FeaturesModule { }
