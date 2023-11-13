import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router
  ) {}

  loginFn() {
    if (!this.email || !this.password) {
      this.alertService.error('All fileds are required');
      return;
    }

    this.authService
      .loginFn(this.email, this.password)
      .subscribe((data: any) => {
        console.log(data);

        if (!data?._id) {
          this.alertService.error(data.message);
          return;
        }

        this.authService.setUserData(data);
        this.alertService.success(`Welcome ${data.name}`);
        this.router.navigate(['/private/home']);
      });
  }
}
