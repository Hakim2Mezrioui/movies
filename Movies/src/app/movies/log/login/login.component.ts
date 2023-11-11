import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  colorUnderLineEmail: string = ''
  colorUnderLinePassword: string = ''

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private activeRouter: ActivatedRoute,
  ) { 
  }

  ngOnInit(): void {
    this.moviesService.isLoginPage.next(true)
  }

  @ViewChild('f') loginForm: any;
  Type: string = 'password';

  goHome() {
    this.router.navigate([""], {relativeTo: this.activeRouter})
  }

  onSubmit() {
    console.log(this.loginForm.controls)
    this.loginForm.reset()
  }

  

  toggleType(data: boolean) {
    this.Type = data? 'text' : 'password'
  }

  ngOnDestroy(): void {
    // this.moviesService.isLoginPage.next(false)
  }
}