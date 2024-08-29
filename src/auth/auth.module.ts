import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MutualModule } from '../mutual/mutual.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MutualModule,
    FormsModule,
    NgSelectModule,
  ],
  exports: [LoginComponent],
})
export class AuthModule {}
