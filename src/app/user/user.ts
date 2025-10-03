import {
  Component,
  signal,
  computed,
  input,
  Input,
  output,
  Output,
  EventEmitter,
} from '@angular/core';
import { UserType } from './user.model';

@Component({
  imports: [],
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // avatar = input.required<string>();
  // name = input.required<string>();
  user = input.required<UserType>();
  @Input({ required: true }) isSelected!: boolean;

  // @Output() select = new EventEmitter<string>();
  select = output<string>();

  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }
  imagePath = computed(() => 'assets/users/' + this.user().avatar);

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
