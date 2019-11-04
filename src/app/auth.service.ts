import { Injectable } from '@angular/core';
// import { User } from './user/user.model';
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


  // login(user: string, password: string): boolean {
  //   if (user === 'chandlergegg@gmail.com' && password === 'csc436!') {
  //     localStorage.setItem('username', user);
  //     return true;
  //   }

  //   return false;
  // }

  logout(): any {
    localStorage.removeItem('username');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }


  login(email: string, password: string) : boolean{
  
    try{
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      // this.router.navigate(['username/lis']);
      localStorage.setItem('username', email);
    return true;

    }
    catch(e){
      alert("Error!" + e.message);
    }
    return false;
  }

// async logout(){
//   await this.afAuth.auth.signOut();
//   localStorage.removeItem('user');
//   this.router.navigate(['admin/login']);
// }

// isLoggedIn(): boolean {
//   const user = JSON.parse(localStorage.getItem('user'));
//   return user !== null;
// }



}


// this.afAuth.authState.subscribe((user: any) => {
//  if(user) {

//   this.user = user;
//   localStorage.setItem('user', JSON.stringify(this.user));
//  }
//  else {
//    localStorage.setItem('user', null);
//  }
  
// })




export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
