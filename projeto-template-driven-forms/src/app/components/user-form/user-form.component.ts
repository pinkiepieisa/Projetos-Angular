import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';
import { StatesListResponse } from 'src/app/types/brazilian-states-list-response';
import { GenresListResponse } from 'src/app/types/genres-list-response';
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

  @Input() genresList: GenresListResponse = [];
  @Input() statesList: StatesListResponse = [];
  @Input() userSelected: IUser = {} as IUser;

  ngOnChanges(changes: SimpleChanges) {
    const USER_CHANGED = changes['userSelected'];
    // Guarda o usuário que foi selecionado (quando houver uma mudança)

    if (USER_CHANGED) {
      this.onPasswordChange(this.userSelected.password);
    }
  }

  onPasswordChange(password: string) {
    this.passwordStrenghtValue = getPasswordStrengthValue(password);
  }

  ngOnInit() {
    this.setMinAndMaxDate();
  }

  private setMinAndMaxDate() {
    this.minDate = new Date(new Date().getFullYear() - 100, 0, 1);
    // Ano atual menos 100 anos

    this.maxDate = new Date();
    // Pega a data atual, dia de hoje (Sempre é atualizado)
  }

}
