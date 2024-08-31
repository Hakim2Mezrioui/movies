import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActorsModel } from 'src/app/movies/movies.model';

@Component({
  selector: 'second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.css']
})
export class SecondFormComponent implements OnInit {
  
  imageActor: string = '';

  constructor(

  ) { }

  ngOnInit(): void {
    this.actorsArrayFiltred = this.actorsArray
  }

  @Output() goBack = new EventEmitter<boolean> ()

  secondForm: FormGroup = new FormGroup({
    trailer: new FormControl(null),
    description: new FormControl(null),
    actors: new FormArray([
      new FormArray([])
    ])
  })

  actors = this.secondForm.get('actors') as FormArray;

  actorsArray: ActorsModel[] = []
  actorsArrayFiltred: ActorsModel[] = []

  onClick() {
    this.goBack.emit(true)
  }

  onSearch(value:string) {
    this.actorsArrayFiltred = this.actorsArray.filter(actor => actor.name.toLocaleLowerCase().match(value.toLocaleLowerCase()))
  }

  onFocus() {
    this.actorsArrayFiltred = this.actorsArray
  }

  Enter(event: any, name: any, image: any, description: any) {
    event.keyCode == 13 ? this.addActor(name, image, description) : null
  }

  addActor(name: any, image: any, description:any) {
    this.actorsArray.push(new ActorsModel(name.value, image.value, description.value))
    name.value = description.value = image.value = '';
    this.actorsArrayFiltred = this.actorsArray
  }

  deleteActor(name: string) {
    let index = this.actorsArray.findIndex(actor => actor.name == name);
    this.actorsArray.splice(index, 1);
    this.actorsArrayFiltred = this.actorsArray
  }

  editActor(i: number, name: any, image: any, description: any) {
    let actor = this.actorsArray[i]
    name.value = actor.name
    image.value = actor.img
    description.value = actor.description
  }

  onFileSelected(event: any) {
    this.imageActor = event.target.files[0].name;
    console.log(event.target.result)
  }

  confirm() {
    console.log(this.secondForm.value);
  }
}
