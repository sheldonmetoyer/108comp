import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TempCalculatorComponent } from './temp-calculator/temp-calculator.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserListComponent } from './user-list/user-list.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'converter', component: TempCalculatorComponent},
  { path: 'login', component: UserLoginComponent},
  { path: 'user/list', component: UserListComponent},
  { path: 'user/new', component: UserRegisterComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
