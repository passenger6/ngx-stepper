# NgStepper

Simple and very easy to use Angular Stepper.
<hr>

[Demo](https://stackblitz.com/edit/github-uuksdt?embed=1&file=src/main.ts)

<hr>

# Usage

```TypeScript
//app.module.ts
import { NgStepperModule } from 'ngx-stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        NgStepperModule,
        BrowserAnimationsModule
        ]
    })
```
For animations please import the ```BrowserAnimationsModule```.
 Angular animations are built on top of the standard Web Animations API and run natively on browsers that support it.


```Html
//app.component.html

  <ngx-stepper #stepper>
    <ngx-step [label]="'Setup your account'">
    Step 1
    </ngx-step>
    <ngx-step [label]="'Privacy Policy'">
    Step 2
    </ngx-step>
    <ngx-step [label]="'Terms of Service.'">
    Step 3
    </ngx-step>
  </ngx-stepper>


  <button (click)="stepper.prev()"> 
    <-Back
  </button>
  
  <button *ngIf="!stepper.lastStepActive" (click)="stepper.next()">
     Next->
  </button>

```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4100/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
