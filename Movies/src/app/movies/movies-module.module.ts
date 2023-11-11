import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { ShowMovieComponent } from './show-movie/show-movie.component';
import { ShowMoviesComponenent } from './show-movies/show-movies.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BackImageDirective } from './back-image.directive';
import { MovieTrailerUrlPipe } from './movie-trailer-url.pipe';
import { LoginComponent } from './log/login/login.component';
import { LogComponent } from './log/log.component';
import { SingupComponent } from './log/singup/singup.component';
import { RequestComponent } from './request/request.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MoviesComponent,
    ShowMovieComponent,
    MoviesComponent,
    ShowMoviesComponenent,
    HeaderComponent,
    FooterComponent,
    BackImageDirective,
    MovieTrailerUrlPipe,
    LoginComponent,
    LogComponent,
    RequestComponent,
    SingupComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [    
    MoviesComponent,
    ShowMovieComponent,
    MoviesComponent,
    ShowMoviesComponenent,
    HeaderComponent,
    FooterComponent,
    BackImageDirective,
    MovieTrailerUrlPipe,
    LoginComponent,
    LogComponent,
    RequestComponent,
    SingupComponent,
  ]
})
export class MoviesModuleModule { }
