import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AngularMaterialModule } from "../angular-material.module";
import { DirectiveModule } from "../directives/directives.module";
import { PipesModule } from "../pipes/pipes.module";
import { UsersCardListComponent } from './users-card-list/users-card-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserBeforeAndAfterDialogComponent } from './user-before-and-after-dialog/user-before-and-after-dialog.component';

@NgModule({
    declarations: [
    UsersCardListComponent,
    UserFormComponent,
    UserBeforeAndAfterDialogComponent
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