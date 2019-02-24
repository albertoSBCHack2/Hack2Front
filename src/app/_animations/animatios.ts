import {
    trigger,
    animate,
    transition,
    style,
    query,
    keyframes
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
    transition('* => *', [
        query(
            ':enter',
            [style({ opacity: 0, position: 'absolute', top: 0, right: 0, left: 0 })],
            { optional: true }
        ),
        query(
            ':leave',
            [style({ opacity: 1, position: 'absolute', top: 0, right: 0, left: 0 }), animate('0.3s', style({ opacity: 0 }))],
            { optional: true }
        ),
        query(
            ':enter',
            [style({ opacity: 0, position: 'absolute', top: 0, right: 0, left: 0 }), animate('0.3s', style({ opacity: 1 }))],
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

export const elAnimation = trigger('elAnimation', [
    transition('void => *', animate('600ms cubic-bezier(.4, 0.0, .2, 1)', keyframes([
        style({ minHeight: '0px', overflow: 'hidden', height: '0px', borderBottomWidth: '0px', opacity: 0, offset: 0 }),
        style({ minHeight: '*', overflow: 'hidden', height: '*', borderBottomWidth: '*', opacity: 1, offset: 1 }),
    ]))),
    // transition('* => void', animate('600ms cubic-bezier(.4, 0.0, .2, 1)', keyframes([
    //     style({ minHeight: '*', overflow: 'hidden', height: '*', borderBottomWidth: '*', opacity: 1, offset: 0 }),
    //     style({ minHeight: '0px', overflow: 'hidden', height: '0px', borderBottomWidth: '0px', opacity: 0, offset: 1 }),
    // ])))
]);
