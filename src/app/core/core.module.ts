import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [
      AppRoutingModule,
      SharedModule
    ],
    exports: [AppRoutingModule],
    providers: []
})
export class CoreModule {}
