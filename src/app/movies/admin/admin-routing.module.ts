import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { ProfileComponent } from './profile/profile.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MessageComponent } from './message/message.component';
import { EditComponent } from './edit-movie/edit/edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  
  { path: "admin", component: AdminComponent, children: [
    {path: "", component: DashboardComponent},
    {path: "add-movie", component: AddMovieComponent},
    {path: "edit-movies", component: EditMovieComponent},
    {path: ":name/:id/edit", component: EditComponent},
    {path: "profile", component: ProfileComponent},
    {path: "statistics", component: StatisticsComponent},
    {path: "messages", component: MessageComponent}
  ] }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
