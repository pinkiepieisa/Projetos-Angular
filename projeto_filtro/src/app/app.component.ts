import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UserList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.Interface';
import { filterUsersList } from './utils/filter-users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  usersList: IUser[] = [];
  //Inícia com uma lista vazia 
  // Recebe a lista original

  usersListFiltered: IUser[] = [];

  userSelected: IUser = {} as IUser;
  //Casting, força a aceitar o objeto vazio

  showUserDetails: boolean = false;
  //Inicia a tela sem seleção de usuário

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }
  //Seleção do usuário

  ngOnInit()  {
    setTimeout(() => {
      this.usersList = UserList;
      this.usersListFiltered = UserList;
    }, 3000)
    //Lista filtrada e lista original inicialmente são as mesmas
  }
  //Simulação de chamada http 
  //A lista antes vazia recebe a lista dos usuários após 3 segundos de carregamento

  onFilter(filterOptions: IFilterOptions) {
    console.log(filterOptions);

    this.usersListFiltered = filterUsersList(filterOptions, this.usersList);
    //Parametro os dados que são escutados nos filtros e a lista original, para não dar problema de lista vazia após uma filtragem já feita
  }
  //Acionado atrasvés do botão de filtrar

}
