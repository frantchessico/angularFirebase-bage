import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }
  constructor(private flashMessage: FlashMessagesService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.login(this.user.email, this.user.password)
                    .then(res => {
                      this.flashMessage.show("Welcome you are logged successfully", {
                        cssClass: 'alert-info',
                        timeout: 5000
                      })
                      this.router.navigate(['/'])
                    })
                    .catch(err => {
                      this.flashMessage.show(err.message, {
                        cssClass: 'alert-warning',
                        timeout: 5000
                      })
                    })
  }

}
