import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export const slideAnimations = trigger('translateStep', [
  state('left', style({ transform: 'translate3d(-100%, 0, 0)', overflow: 'hidden' })),
  state('center', style({ transform: 'translate3d(0, 0, 0)', overflow: 'hidden' })),
  state('right', style({ transform: 'translate3d(100%, 0, 0)', overflow: 'hidden' })),
  transition('* => left, * => right, left => center, right => center',
    animate('200ms cubic-bezier(0.4, 0.0, 0.6, 1)'),
  ),
],
);
