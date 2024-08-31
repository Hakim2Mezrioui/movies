import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {ChartModule} from 'primeng/chart';

import { AdminRoutingModule } from './admin-routing.module';

import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MessageComponent } from './message/message.component';
import { ProfileComponent } from './profile/profile.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AdminComponent } from './admin.component';
import { CardComponent } from './add-movie/card/card.component';
import { SideBarDirective } from './side-bar/side-bar.directive';
import { HeaderAdminComponent } from './header/header.component';
import { FirstFormComponent } from './add-movie/first-form/first-form.component';
import { SecondFormComponent } from './add-movie/second-form/second-form.component';
import { EditComponent } from './edit-movie/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListMessageComponent } from './message/list-message/list-message.component';
import { FormMessageComponent } from './message/form-message/form-message.component';





@NgModule({
  declarations: [
    AddMovieComponent,
    EditMovieComponent,
    MessageComponent,
    ProfileComponent,
    SideBarComponent,
    StatisticsComponent,
    AdminComponent,
    CardComponent,
    SideBarDirective,
    HeaderAdminComponent,    
    FirstFormComponent, SecondFormComponent, EditComponent, DashboardComponent, ListMessageComponent, FormMessageComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ButtonModule,
    ChartModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    AddMovieComponent,
    EditMovieComponent,
    MessageComponent,
    ProfileComponent,
    SideBarComponent,
    StatisticsComponent,
    AdminComponent,
    CardComponent,
    SideBarComponent,
    SideBarDirective,
    HeaderAdminComponent,
    FirstFormComponent
  ]
})
export class AdminModule { }
