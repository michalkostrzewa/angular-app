import { Component, signal, computed, input, output, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  avatar = input.required<string>();
  name = input.required<string>();
  id = input.required<string>();

  // @Output() select = new EventEmitter<string>();
  select = output<string>();

  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }
  imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelectUser() {
    this.select.emit(this.id());
  }
}
