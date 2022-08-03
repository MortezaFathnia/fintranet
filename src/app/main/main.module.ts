import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { SummaryComponent } from './summary/summary.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { SelectPeopleComponent } from './select-people/select-people.component';


@NgModule({
  declarations: [
    UploadImageComponent,
    SummaryComponent,
    OrderDetailsComponent,
    SelectPeopleComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
