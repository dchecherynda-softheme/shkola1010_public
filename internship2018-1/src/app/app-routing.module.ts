import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/components/login/login.component';
import { LoginModule } from './login/login.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
