import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  newUsername!: string;

  constructor(public userService: UserService, private router: Router) {}

  startGame() {
    if (this.userService.selectedUser) {
      this.router.navigate(['/game']);
    }
  }

  showLogHistory() {
    if (this.userService.selectedUser) {
      this.router.navigate(['/log-history']);
    }
  }

  showAllLogHistory() {
    this.router.navigate(['/log-history']);
  }

  showUserList() {
    // Logic to show the user list
    console.log('Showing user list');
  }

  createUser() {
    if (this.newUsername) {
      this.userService.createUser(this.newUsername);
      this.newUsername = ''; // Clear the input field after user creation
    }
  }

  showCreateUserForm() {
    // Logic to show the create user form
    console.log('Showing create user form');
  }
}
