import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-general-informatios',
  templateUrl: './general-informatios.component.html',
  styleUrl: './general-informatios.component.scss'
})
export class GeneralInformatiosComponent {
  @Input({ required: true }) user: IUser | undefined = {} as IUser;
  // Força o typescript a aceitar reafirmando que o objeto vazio será do tipo IUser
}
