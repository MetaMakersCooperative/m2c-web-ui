import { NgModule } from '@angular/core';
import { DisclaimerComponent } from './disclaimer.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
      DisclaimerComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    DisclaimerComponent,
    MatButtonModule
  ]
})
export class DisclaimerModule { }
