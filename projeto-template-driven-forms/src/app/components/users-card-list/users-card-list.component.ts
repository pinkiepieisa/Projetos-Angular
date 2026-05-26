import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersListResponse } from 'src/app/types/users-list-response';

@Component({
  selector: 'app-users-card-list',
  templateUrl: './users-card-list.component.html',
  styleUrls: ['./users-card-list.component.scss']
})
export class UsersCardListComponent {
  @Input() usersList: UsersListResponse = [];
  // Input que vai receber os dados e sua tipagem sendo inicializado com um array vazio

  @Output('onUserSelected') onUserSelectedEmitt = new EventEmitter<number>();

  OnUserSelected(userIndex: number) {
    this.onUserSelectedEmitt.emit(userIndex);
  }

  // Método que pegará o index do user 

}
