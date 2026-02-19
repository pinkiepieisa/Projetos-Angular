import { NgModule } from "@angular/core";
import { PhonePipe } from './phone.pipe';
import { AdressPipe } from './adress.pipe';
import { StatusPipe } from './status.pipe';
import { DashIfEmptyPipe } from './dash-if-empty.pipe';

@NgModule({
    declarations: [
        PhonePipe,
        AdressPipe,
        StatusPipe,
        DashIfEmptyPipe,
  ],
    exports: [
        PhonePipe,
        AdressPipe,
        StatusPipe,
        DashIfEmptyPipe,
    ],
})

export class PipesModule {

}