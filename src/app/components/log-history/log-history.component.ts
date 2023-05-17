import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-log-history',
  templateUrl: './log-history.component.html',
  styleUrls: ['./log-history.component.css'],
})
export class LogHistoryComponent {
  logHistory: any[];

  constructor(private userService: UserService) {
    if (this.userService.selectedUser) {
      this.logHistory = this.userService.getLogHistory(
        this.userService.selectedUser
      );
    } else {
      this.logHistory = this.userService.getAllLogHistory();
    }
  }
}
