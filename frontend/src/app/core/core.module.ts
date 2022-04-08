import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
  ]
})
export class CoreModule { }
