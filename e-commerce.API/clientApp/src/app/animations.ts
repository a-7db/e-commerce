import { animate, state, style, transition, trigger } from "@angular/animations";

export let zoomIn = trigger('zoomIn', [
    state('void', style({
        opacity: 0,
        transform: 'scale(0)',
        transformOrigin: 'top center'
    })),
    transition(':enter, :leave', [animate(150)])
]);

export let toRight = trigger('toRight', [
    state('hidden', style({
        transform: 'translateX(-100%)'
    })),
    state('visible', style({
        transform: 'translateX(0)'
    })),
    transition('hidden => visible', animate('300ms ease-out')),
    transition('visible => hidden', animate('300ms ease-in'))
]);

export let display = trigger('display', [
    state('hidden', style({
        display: 'none'
    })),
    state('visible', style({
        display: 'block'
    })),
    transition('hidden => visible', animate('300ms ease-out')),
    transition('visible => hidden', animate('300ms ease-in'))
]);

export const height = trigger('height', [
    state('void', style({
        height: 0,
        opacity: 0
    })),
    transition(':enter, :leave', [animate(150)])
])