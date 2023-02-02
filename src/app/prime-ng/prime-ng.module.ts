import { NgModule } from '@angular/core';

//PrimeNg Badge
import {BadgeModule} from 'primeng/badge';

// PrimeNg
import {ButtonModule} from 'primeng/button';

//PrimeNg Panel
import {CardModule} from 'primeng/card';

//PrimeNg MenuBar
import {MenubarModule} from 'primeng/menubar';
// import {MenuItem} from 'primeng/api';

//PrimeNG Fieldset
import {FieldsetModule} from 'primeng/fieldset';


@NgModule({
  exports:[
    BadgeModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
