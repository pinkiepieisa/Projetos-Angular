import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserResponse } from './interfaces/user-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  user$! : Observable<IUserResponse>;
}
