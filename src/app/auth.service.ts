import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'firebase';
import { LoginComponent } from './login/login.component';
import * as  firebase from 'firebase';


@Injectable()
export class AuthService {
user: User;

 constructor(public afAuth: AngularFireAuth, public router: Router) { }

 
  login(user: string, password: string): boolean {
   
    if ((user ===  'chandlergegg@gmail.com' || 'Chandlergegg@gmail.com')  && password === 'csc436!') {
      localStorage.setItem('username', user);
      return true;
    }

    return false;
  }

  logout(): any {
    localStorage.removeItem('username');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}


export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
