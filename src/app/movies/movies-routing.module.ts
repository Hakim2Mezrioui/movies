import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShowMoviesComponenent } from './show-movies/show-movies.component';
import { LogComponent } from './log/log.component';
import { LoginComponent } from './log/login/login.component';
import { SingupComponent } from './log/singup/singup.component';
import { ShowMovieComponent } from './show-movie/show-movie.component';

const routes: Routes = [  
  { path: "", component: ShowMoviesComponenent, pathMatch: 'full' },
  { path: "log", component: LogComponent, children: [
    { path: "login", component: LoginComponent },
    { path: "signup", component: SingupComponent},
    ]   
  },
  { path: ":name/:id", component: ShowMovieComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesRoutingModule { }
