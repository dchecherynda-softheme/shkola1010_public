import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { MatCardModule, MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
