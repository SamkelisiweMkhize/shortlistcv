import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PrivateComponent } from './layout/private/private.component';
import { ShortlistPageComponent } from './pages/shortlist-page/shortlist-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '404', component: NotfoundPageComponent },
  {
    path: 'private',
    component: PrivateComponent,
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'shortlist', component: ShortlistPageComponent },
      { path: 'admin', component: AdminPageComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'private/home', pathMatch: 'full' },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
