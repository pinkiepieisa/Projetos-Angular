import { Component, Input } from '@angular/core';
import { UsersListResponse } from 'src/app/types/users-list-response';

@Component({
  selector: 'app-users-card-list',
  templateUrl: './users-card-list.component.html',
  styleUrls: ['./users-card-list.component.scss']
})
export class UsersCardListComponent {
  @Input() usersList: UsersListResponse = [];
  // Input que vai receber os dados e sua tipagem sendo inicializado com um array vazio

}
