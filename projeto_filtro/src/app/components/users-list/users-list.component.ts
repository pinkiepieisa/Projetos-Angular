import { Component } from '@angular/core';
import { UserList } from 'src/app/data/users-list';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  usersList: IUser[] = UserList;
  displayedColumns: string[] = ['name', 'date', 'status'];

  onUserSelected(user: IUser) {
    console.log('user', user);

  }
}
