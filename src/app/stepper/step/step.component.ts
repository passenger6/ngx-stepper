import {
  Component,
  OnInit,
  Input,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'ngx-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  position = 0;

  @ViewChild('tpl') tpl;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
