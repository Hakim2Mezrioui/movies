import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit, OnDestroy {

  constructor(
    private moviesService: MoviesService
  ) {     
    this.moviesService.isLoginPage.next(true)
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.moviesService.isLoginPage.next(false)
  }

}
