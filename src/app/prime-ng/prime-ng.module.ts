import { NgModule } from '@angular/core';

//PrimeNg Badge
import {BadgeModule} from 'primeng/badge';

// PrimeNg
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';
import {ToolbarModule} from 'primeng/toolbar';


@NgModule({
  exports:[
    BadgeModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }
