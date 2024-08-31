import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { MoviesService } from 'src/app/movies/movies.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
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
export class EditComponent implements OnInit {
  isFirstForm: boolean = true;
  constructor(
    private moviesService: MoviesService
  ) {
   }



  ngOnInit(): void {
    
  }

}
