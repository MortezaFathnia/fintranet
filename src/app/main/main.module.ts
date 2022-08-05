import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';

import { MainRoutingModule } from './main-routing.module';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { SummaryComponent } from './summary/summary.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { SelectPeopleComponent } from './select-people/select-people.component';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProductService } from '../services/product.service';


@NgModule({
  declarations: [
    UploadImageComponent,
    SummaryComponent,
    OrderDetailsComponent,
    SelectPeopleComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    DialogModule,
    ToolbarModule,
    ConfirmDialogModule,
    RatingModule,
    InputNumberModule,
    InputTextareaModule,
    RadioButtonModule,
    DropdownModule,
    ButtonModule,
    FileUploadModule,
    CalendarModule,
    MultiSelectModule,
    
  ],
  providers: [ProductService],
})
export class MainModule { }
