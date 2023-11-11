import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeScale } from 'chart.js';
import { MoviesModel } from '../../movies.model';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movies: MoviesModel[] = []
  moviesFiltred: MoviesModel[] = []

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private activeRouter: ActivatedRoute,
  ) { 
    this.movies = this.moviesService.listMovies
  }


  ngOnInit(): void {
    this.moviesFiltred = this.movies
  }

  onSelectMovie(i: number) {
    this.moviesService.moviesSelected.next(this.movies[i])
    this.router.navigate(['../', this.movies[i].title, i, 'edit'], {relativeTo: this.activeRouter})
  }

  onSearch(value: string) {
    var moviesFiltred1 = this.movies.filter(movie => movie.title.toLowerCase().match(value.toLowerCase()))
    var moviesFiltred2 = this.movies.filter(movie => movie.type.toLowerCase().match(value.toLowerCase()))

    this.moviesFiltred = moviesFiltred1.length > moviesFiltred2.length ? moviesFiltred1 : moviesFiltred2
  }
}
