import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  user: User | null = null

  constructor(public authService: AuthService) {

  }

  ngOnInit() {
    this.user = this.authService.user
  }

}
