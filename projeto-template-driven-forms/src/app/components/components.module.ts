import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AngularMaterialModule } from "../angular-material.module";
import { DirectiveModule } from "../directives/directives.module";
import { PipesModule } from "../pipes/pipes.module";
import { UsersCardListComponent } from './users-card-list/users-card-list.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
    declarations: [
    UsersCardListComponent,
    UserFormComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        AngularMaterialModule,
        DirectiveModule,
        PipesModule
    ],
    exports: [
        UsersCardListComponent,
        UserFormComponent,
    ]
})

export class ComponentsModule {

}