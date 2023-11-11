import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit, OnDestroy {

  constructor(    
    private router: Router,
    private activeRouter: ActivatedRoute,
    private moviesService: MoviesService,
  ) { }

  ngOnInit(): void {
    this.moviesService.isLoginPage.next(true)
  }

  @ViewChild('f') signupForm:any;
  Type: string='password';

  goHome() {
    this.router.navigate([""], {relativeTo: this.activeRouter})
  }

  ngOnDestroy(): void {
    // this.moviesService.isLoginPage.next(false)
  }

  onSubmit() {
    // console.log(this.signupForm);
    // console.log(this.signupForm.value);
    this.signupForm.reset()
  }

  toggleType(data: boolean) {
    this.Type = data? 'text' : 'password'
  }

}
