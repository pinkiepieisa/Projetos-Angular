import { Component } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UserList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userSelected: IUser = UserList[0];
}
