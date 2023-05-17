import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'; // Update the import path
import { UserListComponent } from './components/user-list/user-list.component';
import { GameComponent } from './components/game/game.component';
import { LogHistoryComponent } from './components/log-history/log-history.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    GameComponent,
    LogHistoryComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
