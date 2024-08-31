import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';
import { Message } from '../message.model';

@Component({
  selector: 'list-message',
  templateUrl: './list-message.component.html',
  styleUrls: ['./list-message.component.css']
})
export class ListMessageComponent implements OnInit {

  listOfMessage: Message[] = [];

  constructor(
    private adminService: AdminServiceService,
  ) { }

  ngOnInit(): void {
    this.listOfMessage = this.adminService.listOfMessage
  }

  onClick() {
    this.adminService.messgaePage.next(true)
  }

  emitMessage(message: Message) {
    this.adminService.messageSubmited.next(message);
  }
}
