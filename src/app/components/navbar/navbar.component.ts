import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  myUser = null;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.currentUser();
  }

  signout() {
    this.authService.logout()
                    .then(res => {
                      this.router.navigate(['/login'])
                    })
    
  }

  currentUser() {
    this.authService.isAuthenticated().subscribe(user => {
      this.myUser = user
    })
  }

}
