import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() disable = new EventEmitter<boolean>()
  
  onDisable() {
    this.disable.emit(false)
  }

  requestForm = new FormGroup({
    name: new FormControl(null),
    email: new FormControl(null),
    message: new FormControl(null)
  })

  onSubmit() {
    console.log(this.requestForm.value)
  }

}
