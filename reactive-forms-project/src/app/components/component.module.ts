import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { PipesModule } from "../pipes/pipes.module";
import { UsersListComponent } from './users-list/users-list.component';
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { GeneralInformatiosComponent } from './general-informatios/general-informatios.component';
import { UserInfoItemComponent } from './user-info-item/user-info-item.component';
import { ContactInformationsComponent } from './contact-informations/contact-informations.component';
import { PhoneListComponent } from './contact-informations/components/phone-list/phone-list.component';
import { AddressListComponent } from './address-list/address-list.component';
import { DependentsListComponent } from './dependents-list/dependents-list.component';
import { ButtonsContainerComponent } from './buttons-container/buttons-container.component';
import { UserInformationsContainerComponent } from './user-informations-container/user-informations-container.component';
import { GeneralInformationsEditComponent } from './general-informations-edit/general-informations-edit.component';

@NgModule({
    declarations: [
        UsersListComponent,
        GeneralInformatiosComponent,
        UserInfoItemComponent,
        ContactInformationsComponent,
        PhoneListComponent,
        AddressListComponent,
        DependentsListComponent,
        ButtonsContainerComponent,
        UserInformationsContainerComponent,
        GeneralInformationsEditComponent,
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
        ContactInformationsComponent,
        DependentsListComponent,
        ButtonsContainerComponent,
        UserInformationsContainerComponent,
    ],
})

export class ComponentsModule { }