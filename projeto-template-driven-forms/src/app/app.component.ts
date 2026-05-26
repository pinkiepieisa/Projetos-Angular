import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';
import { BrazilianStatesService } from './services/brazilian-states.service';
import { UsersListResponse } from './types/users-list-response';
import { GenresListResponse } from './types/genres-list-response';
import { StatesListResponse } from './types/brazilian-states-list-response';
import { IUser } from './interfaces/user/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { UserBeforeAndAfterDialogComponent } from './components/user-before-and-after-dialog/user-before-and-after-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  userSelected: IUser = {} as IUser;
  // Guarda a cópia do objeto usuário original
  userSelectedIndex: number | undefined;
  // Guarda o index do usuário

  usersList: UsersListResponse = [];
  genresList: GenresListResponse = [];
  statesList: StatesListResponse = [];

  constructor(
    private readonly _usersService: UsersService,
    private readonly _genresService: GenresService,
    private readonly _brazilianStatesService: BrazilianStatesService,
    private readonly _matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.getUsers();
    this.getGenres();
    this.getStates();
  }

  onUserSelected(userIndex: number) {
    const userFound = this.usersList[userIndex];
    // Confere se tem um idex selecionado

    if (userFound) {
      this.userSelectedIndex = userIndex;
      this.userSelected = structuredClone(userFound);
      // Valorizando as propriedades

      // Se tiver um index, então ele guarda cópias dos elementos
      // Lembrando que isso tudo ocorre em um evento de click (seleção de usuário)
    }

  }

  showRealUser() {
    console.log(this.usersList);
  }

  onFormSubmit() {
    if(this.userSelectedIndex === undefined) return;

    const originalUser = this.usersList[this.userSelectedIndex];

    this.openBeforeAndAfterDialog(originalUser, this.userSelected);
  }

  openBeforeAndAfterDialog(originalUser: IUser, updatedUser: IUser) {
    const dialogRef = this._matDialog.open(UserBeforeAndAfterDialogComponent, {
      data: {
        originalUser,
        updatedUser,
      },
      minWidth: '70%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result) {
        this.confirmUserUpdate();
      }
    });
  }
  
  confirmUserUpdate() {
    throw new Error('Method not implemented.');
  }

  private getStates() {
    this._brazilianStatesService.getStates().subscribe((statesListResponse) => {
      this.statesList = statesListResponse;
    });
  }

  private getUsers() {
    this._usersService.getUsers().subscribe((usersListResponse) => {
      this.usersList = usersListResponse;
    });
  }

  private getGenres() {
    this._genresService.getGenres().subscribe((genresListResponse) => {
      this.genresList = genresListResponse;
    })

  }

}
