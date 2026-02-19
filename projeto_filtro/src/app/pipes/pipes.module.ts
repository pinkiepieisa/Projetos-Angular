import { NgModule } from "@angular/core";
import { PhonePipe } from './phone.pipe';
import { AdressPipe } from './adress.pipe';

@NgModule({
    declarations: [
        PhonePipe,
        AdressPipe,
  ],
    exports: [
        PhonePipe,
        AdressPipe,
    ],
})

export class PipesModule {

}