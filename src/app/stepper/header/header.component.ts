import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { StepComponent } from '../step/step.component';


@Component({
  selector: 'ngx-step-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class StepperHeaderComponent implements OnInit {

  @Input() stepList: StepComponent[];
  @Input() activeStep: number;
  @Input() finished: boolean;


  constructor() {
  }

  ngOnInit() {
  }

}
