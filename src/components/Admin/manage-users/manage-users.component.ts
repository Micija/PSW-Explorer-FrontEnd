import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../auth/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss'],
})
export class ManageUsersComponent implements OnInit {
  susUsers: any[] = [];
  blockedUsers: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getSuspiciousUsers();
    this.getBlockedUsers();
  }

  getSuspiciousUsers(): void {
    this.userService.getSuspiciousUsers().subscribe((users) => {
      console.log('SUS: ', users);
      this.susUsers = users;
    });
  }

  getBlockedUsers(): void {
    this.userService.getBlockedUsers().subscribe((users) => {
      console.log('BLOCKED: ', users);
      this.blockedUsers = users;
    });
  }

  blockUser(userId: number): void {
    this.userService.blockUser(userId).subscribe(() => {
      this.getSuspiciousUsers();
      this.getBlockedUsers();
    });
  }

  unblockUser(userId: number): void {
    this.userService.unblockUser(userId).subscribe(() => {
      this.getBlockedUsers();
      this.getSuspiciousUsers();
    });
  }
}
