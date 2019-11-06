import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {


  constructor(public authService: AuthService, private router: Router) {
  }

   
  ngOnInit() {
  }

  logoutButton(): boolean {
    this.authService.logout();
    this.router.navigateByUrl('/login');
    return false;
  }

}
