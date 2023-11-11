import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
  animations: [
    trigger(
      'showHide', [
        state('show', style({
          transform: 'translateX(0%)',
          position: 'absolute',
          opacity: 1,
        })),
    
        state('hide', style({
          // transform: 'translateX(-100%)',
          // opacity: 0,
          // zIndex: -1,
          display: 'none'
        })),

        state('hideSecondForm', style({
          // transform: 'translateX(100%)',
          // opacity: 0,
          // zIndex: -1,
          display: 'none'
        })),
    
        transition('show <=> hide', [
          animate('.5s',
          style({
            transform: 'translateX(-100%)',
            opacity: 0,
            zIndex: -1,
          })
          )
        ]),

        transition('show <=> hideSecondForm', [
          animate('.5s',
          style({
            transform: 'translateX(100%)',
            opacity: 0,
            zIndex: -1,
          }))
        ]),
      ]
    )
  ]
})

export class AddMovieComponent implements OnInit {
  isFirstForm: boolean = true;
  dataOfFistForm: any;

  constructor() {}

  ngOnInit(): void {
  }

}
