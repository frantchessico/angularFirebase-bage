import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  register(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  isAuthenticated() {
    return this.afAuth.user;
  }

  logout() {
    return this.afAuth.auth.signOut();
  }
}
