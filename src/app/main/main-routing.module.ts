import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrderDetailsComponent } from "./order-details/order-details.component";
import { SelectPeopleComponent } from "./select-people/select-people.component";
import { SummaryComponent } from "./summary/summary.component";
import { UploadImageComponent } from "./upload-image/upload-image.component";
  
const routes: Routes = [
  { path: "upload", component: UploadImageComponent },
  { path: "details", component: OrderDetailsComponent },
  { path: "people", component: SelectPeopleComponent },
  { path: "summary", component: SummaryComponent }
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}