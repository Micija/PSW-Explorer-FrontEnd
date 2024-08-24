import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/shared/home/home.component';
import { LoginComponent } from '../components/shared/login/login.component';
import { RegisterComponent } from '../components/shared/register/register.component';
import { AdminHomeComponent } from '../components/Admin/admin-home/admin-home.component';
import { AuthorHomeComponent } from '../components/Author/author-home/author-home.component';
import { TouristHomeComponent } from '../components/Tourist/tourist-home/tourist-home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'admin', component: AdminHomeComponent },

  { path: 'author', component: AuthorHomeComponent },

  { path: 'tourist', component: TouristHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
