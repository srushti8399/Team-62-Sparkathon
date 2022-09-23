import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectprofileComponent } from './connectprofile/connectprofile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    ConnectprofileComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    ConnectprofileComponent
  ]
})
export class ConnectModule { }
