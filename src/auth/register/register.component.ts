import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from '../model/registration.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registrationForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    role: new FormControl(''),
    interests: new FormControl([]),
  });

  availableInterests = ['Nature', 'Art', 'Sport', 'Shopping', 'Food']; // List of all possible interests

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    console.log('RegisterComponent initialized');
  }

  register(): void {
    const registration: Registration = {
      username: this.registrationForm.value.username || '',
      password: this.registrationForm.value.password || '',
      email: this.registrationForm.value.email || '',
      name: this.registrationForm.value.name || '',
      surname: this.registrationForm.value.surname || '',
      role: Number(this.registrationForm.value.role),
      interests: this.registrationForm.value.interests || [],
    };

    console.log(registration);

    if (this.registrationForm.valid) {
      this.authService.register(registration).subscribe({
        next: () => {
          this.router.navigate(['/login']);
          alert('Registration successful');
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else {
      console.log(registration);
      alert('Please fill in all fields');
    }
  }

  toLogin() {
    this.router.navigate(['/login']);
  }
}
