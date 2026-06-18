import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { PipesModule } from "../pipes/pipes.module";
import { UsersListComponent } from './users-list/users-list.component';
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { GeneralInformatiosComponent } from './general-informatios/general-informatios.component';

@NgModule({
    declarations: [
        UsersListComponent,
        GeneralInformatiosComponent,
  ],
    imports: [
    AngularMaterialModule,
    PipesModule,
    BrowserModule,
    CommonModule,
],
    exports: [
        UsersListComponent,
        GeneralInformatiosComponent,
    ],
})

export class ComponentsModule {}