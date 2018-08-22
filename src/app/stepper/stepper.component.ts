import {
  Component,
  QueryList,
  ContentChildren,
  AfterContentChecked,
  Input, ViewChild, ElementRef, Renderer2
} from '@angular/core';
import { StepComponent } from './step/step.component';


@Component({
  selector: 'ngx-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})

export class StepperComponent implements AfterContentChecked {

  lastStepActive = false;
  stepCount = 0;
  position = 0;
  private _activeStep = 0;
  private _stepBodyWrapperHeight: number;

  @ContentChildren(StepComponent) steps: QueryList<StepComponent>;
  @ViewChild('stepBodyWrapper') _stepBodyWrapper: ElementRef;

  @Input('activeStep') set activeStep(step: number) {
    this._activeStep = step;
  }

  get activeStep() {
    return this._activeStep;
  }

  constructor(private _renderer: Renderer2) {
  }

  next(nextStep?: number) {
    this._activeStep++;
    if (this._activeStep === this.steps.length - 1) {
      this.lastStepActive = true;
    }
  }

  prev(nextStep?: number) {
    if (this._activeStep - 1 >= 0) {
      this._activeStep--;
    }
    this.lastStepActive = false;
  }

  onTransitionDone() {
    this._stepBodyWrapperHeight = this._stepBodyWrapper.nativeElement.clientHeight;
    this._renderer.setStyle(this._stepBodyWrapper.nativeElement, 'height', '');
  }

  onTransitionStart(height: number) {
    this._renderer.setStyle(this._stepBodyWrapper.nativeElement, 'height', this._stepBodyWrapperHeight + 'px');
    if (this._stepBodyWrapper.nativeElement.offsetHeight) {
      this._renderer.setStyle(this._stepBodyWrapper.nativeElement, 'height', height + 'px');
    }
  }

  ngAfterContentChecked() {
    this.stepCount = this.steps.length;

    this._activeStep = Math.min(this.steps.length, Math.max(this._activeStep || 0, 0));

    this.steps.forEach((step: StepComponent, index: number) => {
      step.position = index - this._activeStep;
    });

  }
}
