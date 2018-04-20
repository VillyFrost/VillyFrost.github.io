import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
