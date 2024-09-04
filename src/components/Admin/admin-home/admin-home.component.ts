import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { User } from '../../../auth/model/user.model';
import { ProblemService } from '../../../services/problem.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.scss',
})
export class AdminHomeComponent {
  user: User | undefined;

  userId: number = 0;

  constructor(
    private authService: AuthService,
    private problemService: ProblemService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
    this.userId = this.authService.user$.getValue().id;

    this.problemService.getRevisionForAdmin().subscribe((res) => {
      if (res.length > 0) {
        this.toastr.info('New Problems for Revision');
      }
    });
  }
}
