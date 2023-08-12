import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './theme/button/button.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ButtonComponent
  ],
  exports:[
    ButtonComponent
  ]
})
export class SharedModule { }
