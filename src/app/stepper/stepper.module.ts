import { NgModule } from '@angular/core';

import { StepperComponent } from './stepper.component';
import { StepComponent } from './step/step.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { StepBodyComponent } from './step-body/step-body.component';
import { StepperHeaderComponent } from './header/header.component';

import { OutletDirective } from './step-body/outlet.directive';
import { HeaderBlockComponent } from './header/header-block/header-block.component';




@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    StepperComponent,
    StepBodyComponent,
    StepComponent,
    StepperHeaderComponent,
    HeaderBlockComponent
  ],
  declarations: [
    OutletDirective,
    StepperComponent,
    StepComponent,
    StepBodyComponent,
    StepperHeaderComponent,
    HeaderBlockComponent
  ],
  providers: [],
})
export class NgStepperModule { }
