import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private moviesService: MoviesService,
  ) {    
    this.moviesService.isAdminPage.next(true)
  }

  ngOnInit(): void {
  }

}
