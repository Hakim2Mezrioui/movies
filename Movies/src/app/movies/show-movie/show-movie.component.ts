import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesModel } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {
  
  listMovies: MoviesModel[] = [];
  movie: MoviesModel = new MoviesModel('', '', 0, '', 0, '', '', '', []);
  trailer: string = '';
  ToggleComment: boolean = false;
  Ilike: boolean = false;
  likeOrDislike: string = "Like";

  constructor(
    private moviesService: MoviesService,
    private activeRouter: ActivatedRoute,
    private route: Router,
  ){
    this.listMovies = this.moviesService.listMovies
   }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(params => {
      this.movie = this.listMovies[params['id']]
      this.trailer = this.movie.Trailer
    })
  }

  toggleComment() {
    this.ToggleComment = !this.ToggleComment
  }
  
  ilikeIt() {
    this.Ilike = !this.Ilike
    this.likeOrDislike = this.Ilike ? "Dislike" : "Like"
  }

  onlikeOrDislike() {
  } 

}
