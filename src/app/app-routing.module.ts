import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/shared/home/home.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { AdminHomeComponent } from '../components/Admin/admin-home/admin-home.component';
import { AuthorHomeComponent } from '../components/Author/author-home/author-home.component';
import { TouristHomeComponent } from '../components/Tourist/tourist-home/tourist-home.component';
import { TouristGuard } from '../auth/tourist.guard';
import { AuthorGuard } from '../auth/author.guard';
import { AdminGuard } from '../auth/admin.guard';
import { CreateTourComponent } from '../components/Author/create-tour/create-tour.component';
import { TourOverviewComponent } from '../components/Author/tour-overview/tour-overview.component';
import { CreateKeypointComponent } from '../components/Author/create-keypoint/create-keypoint.component';
import { TouristOrAuthorGuard } from '../auth/tourist&author.guard';
import { CartComponent } from '../components/Tourist/cart/cart.component';
import { ReportsOverviewComponent } from '../components/Author/reports-overview/reports-overview.component';
import { AskForRecommendedComponent } from '../components/Tourist/ask-for-recommended/ask-for-recommended.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'admin', component: AdminHomeComponent, canActivate: [AdminGuard] },

  {
    path: 'author',
    component: AuthorHomeComponent,
    canActivate: [AuthorGuard],
  },
  {
    path: 'create-tour',
    component: CreateTourComponent,
    canActivate: [AuthorGuard],
  },
  {
    path: 'tour-overview/:tourId',
    component: TourOverviewComponent,
    canActivate: [TouristOrAuthorGuard],
  },
  {
    path: 'create-keypoint/:tourId',
    component: CreateKeypointComponent,
    canActivate: [AuthorGuard],
  },
  {
    path: 'reports-overview',
    component: ReportsOverviewComponent,
    canActivate: [AuthorGuard],
  },

  {
    path: 'tourist',
    component: TouristHomeComponent,
    canActivate: [TouristGuard],
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [TouristGuard],
  },
  {
    path: 'ask-for-recommended',
    component: AskForRecommendedComponent,
    canActivate: [TouristGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
