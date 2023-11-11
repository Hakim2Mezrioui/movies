import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  basicData: any;

  multiAxisData: any;

  multiAxisOptions: any;

  lineStylesData: any;

  basicOptions: any;

  constructor(
    private adminService : AdminServiceService,
  ) { }

  ngOnInit(): void {
    this.multiAxisData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
          label: 'Dataset 1',
          fill: false,
          borderColor: '#42A5F5',
          yAxisID: 'y',
          tension: .4,
          data: [65, 59, 80, 81, 56, 55, 10]
      }, {
          label: 'Dataset 2',
          fill: false,
          borderColor: '#00bb7e',
          yAxisID: 'y1',
          tension: .4,
          data: [28, 48, 40, 19, 86, 27, 90]
      }]
    };
  }

  goMessageForm() {
    this.adminService.messgaePage.next(true);
  }

}
