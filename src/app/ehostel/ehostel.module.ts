import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessService } from './service/Product_Add_Messanger/mess.service';
import { ProductApiService } from './service/InBuild_Web_Api/apiservice.service';
import { ServiceService } from './service/service.service';
import { Displaydata } from './Display/Products_UI/display.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ProductitemComponent } from './Display/Product_item_display/productitem.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { AddProductComponent } from './add-product/add-product.component';


import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [Displaydata, ProductitemComponent, ProductDescriptionComponent, AddProductComponent],
  imports: [
    CommonModule, BrowserAnimationsModule, RouterModule,
    MatInputModule, MatButtonModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule,
    HttpClientModule, FormsModule,
    MatSnackBarModule
  ],
  exports: [Displaydata, ProductitemComponent, ProductDescriptionComponent],
  providers: [ServiceService, MessService,],
})

export class EhostelModule { }
