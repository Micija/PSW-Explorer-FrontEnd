import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminProblemsOverviewComponent } from './admin-problems-overview/admin-problems-overview.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

@NgModule({
  declarations: [AdminHomeComponent, AdminProblemsOverviewComponent, ManageUsersComponent],
  imports: [CommonModule, FormsModule],
  exports: [AdminHomeComponent],
})
export class AdminModule {}
