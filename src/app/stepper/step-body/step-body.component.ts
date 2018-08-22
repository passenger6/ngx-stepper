import {
  Component,
  TemplateRef,
  Input,
  ViewChild,
  DoCheck,
  ElementRef,
  Output,
  EventEmitter,
  HostBinding
} from '@angular/core';
import { StepComponent } from '../step/step.component';
import { OutletDirective } from './outlet.directive';

import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export type StepPosition = 'left' | 'center' | 'right';

@Component({
  selector: 'ngx-step-body',
  templateUrl: './step-body.component.html',
  styleUrls: ['./step-body.component.scss'],
  animations: [trigger('translateStep', [
    state('left', style({ transform: 'translate3d(-100%, 0, 0)', overflow: 'hidden' })),
    state('center', style({ transform: 'translate3d(0, 0, 0)', overflow: 'hidden' })),
    state('right', style({ transform: 'translate3d(100%, 0, 0)', overflow: 'hidden' })),
    transition('* => left, * => right, left => center, right => center',
      animate('200ms cubic-bezier(0.4, 0.0, 0.6, 1)'),
    ),
  ],
  )]
})


export class StepBodyComponent implements DoCheck {
  stepPosition: StepPosition;

  @Input() template: TemplateRef<StepComponent>;
  @ViewChild(OutletDirective) outlet: OutletDirective;
  @Input() active = true;

  @Input('position') set position(newPosition: number) {
    this.setPosition(newPosition);
  }

  @Output() transitionStart: EventEmitter<number> = new EventEmitter<number>();
  @Output() transitionDone: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('class.active') get activeClass() {
    return this.active;
  }

  constructor(private _elementRef: ElementRef) { }

  setPosition(newPosition: number) {
    if (newPosition < 0) {
      this.stepPosition = 'left';
    }

    if (newPosition === 0) {
      this.active = true;
      this.stepPosition = 'center';
    }

    if (newPosition > 0) {
      this.stepPosition = 'right';
    }
  }

  _onTranslateStepStart($event: any) {
    if ($event.toState === 'center') {
      this.transitionStart.emit(this._elementRef.nativeElement.clientHeight);
    }
  }

  _onTranslateStepDone($event: any) {
    if ($event.toState === 'center') {
      this.transitionDone.emit($event);
    }

    if (!this.active) {
      this.detach();
    }
  }

  attach() {
    if (!this.outlet.hasAttached() && this.active) {
      this.outlet.attach(this.template);
    }
  }

  detach() {
    this.outlet.detach();
  }

  ngDoCheck() {
    this.attach();
  }
}
