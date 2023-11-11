import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core'
import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';
import { ActorsModel, MoviesModel } from 'src/app/movies/movies.model';
import { MoviesService } from 'src/app/movies/movies.service';
import { NgForm, NgModel } from '@angular/forms';
import { AdminServiceService } from '../../admin-service.service';

@Component({
    selector: 'first-form',
    templateUrl: './first-form.component.html',
    styleUrls: [
        './first-form.component.css'
    ]
})

export class FirstFormComponent implements OnInit{

    name: string = ''
    type: string = ''
    rating: number = 0
    year: number = 0
    image: string = ''

    constructor(
        private moviesService: MoviesService,
        private adminService: AdminServiceService,
    ) {
        this.moviesService.moviesSelected.subscribe(movie => {
            console.log(movie)
        })
    }

    ngOnInit(): void {
    }
    @ViewChild('firstForm') form: NgForm | undefined;
    @Output() next = new EventEmitter<boolean>();
    @Output() dataOfFirstForm = new EventEmitter<any>();

    onClick() {
        this.next.emit(false)
        this.dataOfFirstForm.emit(this.form?.value)
    }

    cardData() {
        let data = {
                    name: this.name,
                    type: this.type,
                    rating: this.rating,
                    year: this.year,
                    image: this.image
                    }
        this.adminService.emitDataCard.next(data)
    }
}