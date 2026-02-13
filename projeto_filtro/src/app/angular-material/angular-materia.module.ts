import { NgModule } from "@angular/core";

import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker"
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


@NgModule(
    {
        imports: [
            MatListModule,
            MatDividerModule,
            MatInputModule,
            MatFormFieldModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatSelectModule,
            MatButtonModule,

        ],
        exports: [
            MatListModule,
            MatDividerModule,
            MatInputModule,
            MatFormFieldModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatSelectModule,
            MatButtonModule,
        ],
    }
)
export class AngularMaterialModule {

}