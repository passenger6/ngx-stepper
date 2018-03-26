import {
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';


@Component({
  selector: 'ngx-header-block',
  templateUrl: './header-block.component.html',
  styleUrls: ['./header-block.component.scss']
})
export class HeaderBlockComponent implements OnChanges {

  @Input() stepIndex: number;
  @Input() activeStep: number;
  @Input() finished: boolean;
  @Input() last: boolean;
  @Input() mode: string;

  completed = false;
  active = false;

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.finished && changes.finished.currentValue === true && this.last) {
      this.completed = true;
      return;
    }
    if (changes.activeStep && changes.activeStep.currentValue === this.stepIndex) {
      this.active = true;
      this.completed = false;
      return;
    }

    if (changes.activeStep && changes.activeStep.currentValue > this.stepIndex) {
      this.completed = true;
      return;
    }

    if (changes.activeStep && changes.activeStep.currentValue < this.stepIndex) {
      this.completed = false;
      this.active = false;
      return;
    }
  }

  constructor() {
  }

}
