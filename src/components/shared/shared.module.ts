import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, HomeComponent, NavbarComponent, TopBarComponent, BottomBarComponent],
  imports: [CommonModule, FormsModule],
  exports: [],
})
export class SharedModule {}
