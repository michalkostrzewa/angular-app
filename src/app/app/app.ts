import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  users = DUMMY_USERS;
  selectedUserId = signal<string>('');

  selectedUser = computed(() => this.users.find((u) => u.id === this.selectedUserId()));

  onSelectUser(id: string) {
    this.selectedUserId.set(id);
  }
}
