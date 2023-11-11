import { Component, HostListener, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent implements OnInit {
  isVisible: string = 'none';
  innerWidth: number = 0;

  constructor(
    private adminService: AdminServiceService,
  ) { 
    this.innerWidth = window.innerWidth
  }

  ngOnInit(): void {
    this.adminService.sideBarVisible.subscribe(val => {
      this.isVisible = val? 'none' : '';
    })
    this.isVisible = this.innerWidth < 1300 ? 'none' : ''
  }

  @HostListener('window:resize') onResize() {
    this.innerWidth = window.innerWidth
    this.isVisible = this.innerWidth < 1300 ? 'none' : '';
  }
}