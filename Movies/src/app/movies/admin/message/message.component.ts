import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  isMainPage:boolean = false;
  constructor(
    private adminService: AdminServiceService,
  ) { }

  ngOnInit(): void {
    this.adminService.messgaePage.subscribe(val => {
      this.isMainPage = val
    })
  }

  goMessageForm() {
    this.adminService.messgaePage.next(true);
  }

}
