import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakeComponent } from './make.component';



@NgModule({
  declarations: [
    MakeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MakeComponent
  ]
})
export class MakeModule { }
