import { NgModule } from '@angular/core';
import { FlipcardComponent, FrontDirective, BackDirective } from './flipcard.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FlipcardComponent, FrontDirective, BackDirective],
  imports: [
    CommonModule
  ],
  exports: [FlipcardComponent, FrontDirective, BackDirective]
})
export class FlipcardModule { }
