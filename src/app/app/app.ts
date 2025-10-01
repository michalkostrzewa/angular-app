import { Component, computed, signal } from '@angular/core';
import { Header } from '../header/header';
import { User } from '../user/user';
import { DUMMY_USERS } from '../dummy-users';
import { Tasks } from '../tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  users = DUMMY_USERS;
  selectedUserId = signal<string>('');

  selectedUserName = computed(() => this.users.find((u) => u.id === this.selectedUserId())?.name);

  onSelectUser(id: string) {
    this.selectedUserId.set(id);
  }
}
