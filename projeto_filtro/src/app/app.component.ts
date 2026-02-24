import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UserList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.Interface';
import { isWithinInterval } from 'date-fns';

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

    this.usersListFiltered = this.filterUsersList(filterOptions, this.usersList);
    //Parametro os dados que são escutados nos filtros e a lista original, para não dar problema de lista vazia após uma filtragem já feita
  }
  //Acionado atrasvés do botão de filtrar

  filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {

    let filteredList: IUser[] = [];

    filteredList = this.filterUsersListByName(filterOptions.name, usersList);

    filteredList = this.filterUsersListByStatus(filterOptions.status, filteredList);

    filteredList = this.filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList)

    return filteredList;

  }

  filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === undefined;
    //Caso não tenha nada no campo name
    
    if(NAME_NOT_TYPPED) {
      return usersList;
      //Retorna a lista original
    }

    const filteredList = usersList.filter((user) => user.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
    //Se o nome (presente na lista) inclui o nome digitado no filtro name (tudo é coparado em letra minúscula)

    return filteredList;
    //Retorna a lista filtrada
  }

  filterUsersListByStatus(status: boolean | undefined, usersList: IUser[]): IUser[] {
    const STATUS_NOT_SELECTED = status === undefined;

    if(STATUS_NOT_SELECTED) {
      return usersList;
      //Retorna a lista original
    }

    const filteredList = usersList.filter((user) => user.ativo === status);
    //Se o status de alguém da lista é igual ao selecionado no filtro

    return filteredList;

  }

    filterUsersListByDate(startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] {
      const DATE_NOT_SELECTED = startDate === undefined || endDate === undefined;

      if(DATE_NOT_SELECTED) {
        return usersList;
      }

      const listFiltered = usersList.filter((user) => isWithinInterval(new Date(user.dataCadastro), {
        start: startDate,
        end: endDate,
      }));

      //Uma constante ue recebe a lista filtrada que usa como parametro o usuário
      //usa a função da biblioteca importada que usa como parametro a data de usuário, porém como ela é uma string, está sendo convertida no formato Date
      //Usa como parametros uma data de início e uma de final, que já estão no formato data e são recolhidas no javascript

      return listFiltered;
  }


}
