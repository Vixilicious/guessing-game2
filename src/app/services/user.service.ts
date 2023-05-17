import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  selectedUser: any;
  users: any[] = [];
  userLogs: any[] = [];

  selectUser(user: any) {
    this.selectedUser = user;
  }

  createUser(username: string) {
    const user = { username };
    this.users.push(user);
    this.selectedUser = user; // Automatically select the created user
  }

  logGuess(user: any, guess: number, result: string) {
    const logEntry = { user, guess, result, date: new Date() };
    this.userLogs.push(logEntry);
  }

  getLogHistory(user: any) {
    return this.userLogs.filter((log) => log.user === user);
  }

  getAllLogHistory() {
    return this.userLogs;
  }
}
