import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {
  guess!: number;
  result!: string;

  constructor(private userService: UserService, private router: Router) {}

  checkGuess() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (this.guess === randomNumber) {
      this.result = "Yay, it's correct!";
    } else if (this.guess < randomNumber) {
      this.result = 'The number is higher.';
    } else {
      this.result = 'The number is lower.';
    }

    this.userService.logGuess(
      this.userService.selectedUser,
      this.guess,
      this.result
    );
  }

  showLogHistory() {
    if (this.userService.selectedUser) {
      this.router.navigate(['/log-history']);
    }
  }
}
