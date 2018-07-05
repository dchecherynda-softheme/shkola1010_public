import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  user = {
    email: null,
    password: null
  };

  @ViewChild('name') name: ElementRef;
  @ViewChild('loginForm') loginForm: ElementRef;

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      const form: HTMLFormElement = <HTMLFormElement>this.loginForm.nativeElement;
      form.submit();
    }
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.name.nativeElement.focus();
    }, 500);
  }
}
