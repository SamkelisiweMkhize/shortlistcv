import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  user: User | null = null

  constructor(public authService: AuthService) {

  }

  ngOnInit() {
    this.authService.getUserData()
    this.user = this.authService.user
  }

}
