import {
    trigger,
    animate,
    transition,
    style,
    query
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
    transition('* => *', [
        query(
            ':enter',
            [style({ opacity: 0, position: 'fixed', top: 0, right: 0, left: 0 })],
            { optional: true }
        ),
        query(
            ':leave',
            [style({ opacity: 1, position: 'fixed', top: 0, right: 0, left: 0 }), animate('0.3s', style({ opacity: 0 }))],
            { optional: true }
        ),
        query(
            ':enter',
            [style({ opacity: 0, position: 'fixed', top: 0, right: 0, left: 0 }), animate('0.3s', style({ opacity: 1 }))],
            { optional: true }
        )
    ])
]);


export const formAnimation = trigger('formAnimation', [
    transition(':enter', [
        style({ height: '!', transform: 'translateX(-100%)' }),
        animate('0.5s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)' }))
    ]),
    transition(':leave', [
        style({ height: '!', transform: 'translateX(0%)' }),
        animate('0.5s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(100%)' }))
    ])
]);
