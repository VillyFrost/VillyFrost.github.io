import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NavberComponent } from './navber/navber.component';

@NgModule({
  imports: [CommonModule,MaterialModule,FormsModule,RouterModule],
  exports: [CommonModule,MaterialModule,FormsModule,NavberComponent,RouterModule],
  declarations: [NavberComponent]
})
export class SharedModule { }
