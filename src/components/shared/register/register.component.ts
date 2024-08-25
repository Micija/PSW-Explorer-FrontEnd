import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Your initialization logic here
  }

  toLogin() {
    this.router.navigate(['/login']);
  }
}
