import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { IUser } from 'src/app/interfaces/user/user.interface';
import { StatesListResponse } from 'src/app/types/brazilian-states-list-response';
import { GenresListResponse } from 'src/app/types/genres-list-response';
import { convertDateObjToPtBr } from 'src/app/utils/convert-date-obj-to-pt-br-date';
import { convertPtBrDateToDateObj } from 'src/app/utils/convert-pt-br-date-to-date-object';
import { getPasswordStrengthValue } from 'src/app/utils/get-password-strength-value';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnChanges, OnInit {
  passwordStrenghtValue = 0;

  minDate: Date | null = null;
  maxDate: Date | null = null;
  dateValue: Date | null = null;

  displayedColumns: string[] = ['title', 'band', 'genre', 'favorite'];

  filterGenresList: GenresListResponse = [];

  @Input() genresList: GenresListResponse = [];
  @Input() statesList: StatesListResponse = [];
  @Input() userSelected: IUser = {} as IUser;

  // Life cicles

  ngOnInit() {
    this.setMinAndMaxDate();
  }

  ngOnChanges(changes: SimpleChanges) {
    const USER_CHANGED = changes['userSelected'];
    // Guarda o usuário que foi selecionado (quando houver uma mudança)

    if (USER_CHANGED) {
      this.onPasswordChange(this.userSelected.password);
      
      this.setBirthDateToDatepicker(this.userSelected.birthDate);

      this.filterGenresList = this.genresList;
    }
  }

  // Métodos

  onPasswordChange(password: string) {
    this.passwordStrenghtValue = getPasswordStrengthValue(password);
  }

  onDateChange($event: MatDatepickerInputEvent<any, any>) {
    if (!$event.value) {
      return;
    }

    this.userSelected.birthDate = convertDateObjToPtBr($event.value);
  }

  displayFn(genreId: number) {
    const genreFound = this.genresList.find(genre => genre.id === genreId);

    return genreFound ? genreFound.description : '';
  }

  filterGenres(text: string) {
    if(typeof text === 'number') return;

    const searchTerm = text.toLowerCase();

    this.filterGenresList = this.genresList.filter(
      genre => genre.description.toLowerCase().includes(searchTerm)
    );
  }

  // Métodos privados

  private setMinAndMaxDate() {
    this.minDate = new Date(new Date().getFullYear() - 100, 0, 1);
    // Ano atual menos 100 anos

    this.maxDate = new Date();
    // Pega a data atual, dia de hoje (Sempre é atualizado)
  }

  private setBirthDateToDatepicker(birthDate: string) {
    this.dateValue = convertPtBrDateToDateObj(birthDate);
  }

}
