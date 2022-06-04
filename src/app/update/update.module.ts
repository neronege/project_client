import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateHomeComponent } from './update-home/update-home.component';



@NgModule({
  declarations: [UpdateHomeComponent],
  imports: [
    CommonModule
  ],
  exports:[UpdateHomeComponent]
})
export class UpdateModule { }
