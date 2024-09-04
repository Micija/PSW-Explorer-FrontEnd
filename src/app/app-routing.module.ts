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
import { BoughtToursOverviewComponent } from '../components/Tourist/bought-tours-overview/bought-tours-overview.component';
import { ProblemsOverviewComponent } from '../components/Author/problems-overview/problems-overview.component';
import { AdminProblemsOverviewComponent } from '../components/Admin/admin-problems-overview/admin-problems-overview.component';
import { ManageUsersComponent } from '../components/Admin/manage-users/manage-users.component';
import { TouristProblemsOverviewComponent } from '../components/Tourist/tourist-problems-overview/tourist-problems-overview.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'admin', component: AdminHomeComponent, canActivate: [AdminGuard] },
  {
    path: 'admin-problems-overview',
    component: AdminProblemsOverviewComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'manage-users',
    component: ManageUsersComponent,
    canActivate: [AdminGuard],
  },

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
    path: 'problems-overview',
    component: ProblemsOverviewComponent,
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
  {
    path: 'bought-tours-overview',
    component: BoughtToursOverviewComponent,
    canActivate: [TouristGuard],
  },
  {
    path: 'tourist-problems-overview',
    component: TouristProblemsOverviewComponent,
    canActivate: [TouristGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
