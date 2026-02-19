import { NgModule } from "@angular/core";
import { PhonePipe } from './phone.pipe';
import { AdressPipe } from './adress.pipe';
import { StatusPipe } from './status.pipe';

@NgModule({
    declarations: [
        PhonePipe,
        AdressPipe,
        StatusPipe,
  ],
    exports: [
        PhonePipe,
        AdressPipe,
        StatusPipe
    ],
})

export class PipesModule {

}