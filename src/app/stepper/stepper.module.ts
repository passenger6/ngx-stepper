import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperComponent } from './stepper.component';
import { StepComponent } from './step/step.component';

import { StepBodyComponent } from './step-body/step-body.component';
import { StepperHeaderComponent } from './header/header.component';

import { OutletDirective } from './step-body/outlet.directive';
import { HeaderBlockComponent } from './header/header-block/header-block.component';


@NgModule({
  imports: [
    CommonModule
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
