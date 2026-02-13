import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AngularMaterialModule } from "../angular-material/angular-materia.module";

import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { CommonModule } from "@angular/common";
import { UsersListComponent } from './users-list/users-list.component';




@NgModule(
    {
        declarations: [
            UserDetailsComponent,
            FilterComponent,
            UsersListComponent
        ],
        imports: [
            AngularMaterialModule,
            FormsModule,
            CommonModule,
        ],
        exports: [
            UserDetailsComponent,
            FormsModule,
            FilterComponent,
            UsersListComponent,
        ]
    }
)
export class ComponentsModule {

}