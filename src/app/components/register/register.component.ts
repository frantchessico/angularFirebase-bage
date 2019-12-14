import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  createAccount() {
    this.authService.register(this.user.email, this.user.password)
                    .then(res => this.router.navigate(['/login']))
                    .catch(err => console.log(err))
  }

}
