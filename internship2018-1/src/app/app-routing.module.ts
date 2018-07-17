import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: AuthComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MainModule,
    AuthRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
