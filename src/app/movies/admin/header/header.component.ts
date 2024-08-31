import { Component, HostListener, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderAdminComponent implements OnInit {

  constructor(
    private adminService: AdminServiceService
  ) { }

  ngOnInit(): void {    
  }

  isvisible = false;

  onclick() {
    this.isvisible = !this.isvisible;
    this.adminService.sideBarVisible.emit(this.isvisible)
    // console.log(window.innerWidth);
  }

  @HostListener('window:resize') onResize() {
    this.innerWidth = window.innerWidth
  }

  activeUserOptions:boolean = false;  
  innerWidth: number = 0;

}
