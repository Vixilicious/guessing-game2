import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  constructor(public userService: UserService, private router: Router) {}

  selectUser(user: any) {
    this.userService.selectUser(user);
    this.router.navigate(['/']);
  }
}
