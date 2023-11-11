import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  name: string = "Name";
  type: string = "Type";
  rating: number = 0;
  year: number = 0;


  constructor(
    private adminService: AdminServiceService
  ) { }

  ngOnInit(): void {
    this.adminService.emitDataCard.subscribe(data => {
      this.name = data.name ? data.name : "Name"
      this.type = data.type ? data.type : "Type"
      this.rating = data.rating 
      this.year = data.year
    })
  }

}
