import { animate, state, style, transition, trigger } from '@angular/animations';

export function routerTransition() {
  return fadeInAnimation();
}

export function bottomTransiton() {
  return slideToBottom();
}

export function fadeInAnimation() {
  return trigger('routerTransition', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('.7s', style({ opacity: 1 }))
    ]),
  ]);
}

export function slideToBottom() {
  return trigger('routerTransition', [
    state('void', style({})),
    state('*', style({})),
    transition(':enter', [
      style({ transform: 'translateY(-100%)' }),
      animate('0.7s ease', style({ transform: 'translateY(0%)' }))
    ]),
    transition(':leave', [
      style({ transform: 'translateY(0%)' }),
      animate('0.7s ease', style({ transform: 'translateY(100%)' }))
    ])
  ]);
}
