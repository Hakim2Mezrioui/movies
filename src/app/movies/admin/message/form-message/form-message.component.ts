import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminServiceService } from '../../admin-service.service';
import { Message } from '../message.model';

@Component({
  selector: 'form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.css']
})
export class FormMessageComponent implements OnInit {

  messageReceive: Message = new Message('', '');  

  constructor(
    private adminService: AdminServiceService,
  ) { }

  ngOnInit(): void {
    this.messageReceive = this.adminService.messageSubmited.value;
  }

  @ViewChild('f') messageForm: any;

  onSubmit() {
    console.log(this.messageForm.value);
  }

  onCancel() {
    this.adminService.messgaePage.next(false);
  }
}
