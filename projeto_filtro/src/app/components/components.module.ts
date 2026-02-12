import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AngularMaterialModule } from "../angular-material/angular-materia.module";

import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';




@NgModule(
    {
        declarations: [
    UserDetailsComponent,
    FilterComponent
  ],
        imports: [
            AngularMaterialModule,
            FormsModule,

        ],
        exports: [
            UserDetailsComponent,
            FormsModule,
            FilterComponent,

        ]
    }
)
export class ComponentsModule {

}