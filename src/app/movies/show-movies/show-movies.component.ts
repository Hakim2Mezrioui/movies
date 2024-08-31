import { JsonPipe } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import {  ActivatedRoute, Router } from "@angular/router";
import { first } from "rxjs";
import { MoviesModel } from "../movies.model";
import { MoviesService } from "../movies.service";

@Component({
    selector: 'app-show-movies',
    templateUrl: "./show-movies.component.html",
    styleUrls: ['./show-movies.component.css']
})

export class ShowMoviesComponenent implements OnInit, OnDestroy {
    listMovies: MoviesModel[] = [];
    listMoviesFiltred: MoviesModel[] = [];

    constructor(
        private MoviesService: MoviesService,
        private router: Router,
        private activeRouter: ActivatedRoute,
        ) {
        this.listMovies = this.MoviesService.listMovies
    }
    
    ngOnInit(): void {
        this.listMoviesFiltred = this.listMovies
    }

    showMovie(movie: MoviesModel, id: number) {
        this.router.navigate([movie.title + '/' + id], { relativeTo: this.activeRouter })
        //console.log(movie, id)
    }

    onBtnFinders(firstLetter: string) {
        this.listMoviesFiltred = this.listMovies.filter(movie => movie.title[0] === firstLetter)
        console.log(this.listMoviesFiltred);
    }

    onSearchFinder(value: string){
        this.listMoviesFiltred = this.listMovies.filter(movie => movie.title.toLowerCase().match(value.toLowerCase()))
    }

    resetView() {
        this.listMoviesFiltred = this.listMovies
    }

    ngOnDestroy(): void {
        // this.listMoviesFiltred = this.listMovies
    }

}