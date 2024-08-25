import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TopBarComponent,
    BottomBarComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [],
})
export class SharedModule {}
