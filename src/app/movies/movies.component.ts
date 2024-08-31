import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  isLoginPage: boolean = false;
  isRequest: boolean = false;
  isAdminPage: boolean = false;

  constructor( 
    private moviesService: MoviesService,
    ) {
    this.moviesService.isLoginPage.subscribe(val => {
      this.isLoginPage = val
    })

    this.moviesService.isAdminPage.subscribe(val => {
      this.isAdminPage = val
      console.log(val)
    })

   }

  ngOnInit(): void {
    console.log(this.isAdminPage)
  }

  onRequest() {
    this.isRequest = !this.isRequest
  }

}
