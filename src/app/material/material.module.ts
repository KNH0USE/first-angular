import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Angular matsのAPI
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  // matsを取り込みモジュール内で扱う
  imports: [
    CommonModule,
    MatButtonModule,MatButtonToggleModule,MatCardModule,MatCheckboxModule,MatDatepickerModule,MatDialogModule,MatDividerModule,MatFormFieldModule,MatGridListModule,MatIconModule,MatInputModule,MatListModule,MatMenuModule,MatNativeDateModule,MatPaginatorModule,MatProgressSpinnerModule,MatRadioModule,MatSelectModule,MatSidenavModule,MatTableModule,MatToolbarModule,MatTooltipModule
  ],
  //読み込んだ先に使える
  exports: [
    MatButtonModule,MatButtonToggleModule,MatCardModule,MatCheckboxModule,MatDatepickerModule,MatDialogModule,MatDividerModule,MatFormFieldModule,MatGridListModule,MatIconModule,MatInputModule,MatListModule,MatMenuModule,MatNativeDateModule,MatPaginatorModule,MatProgressSpinnerModule,MatRadioModule,MatSelectModule,MatSidenavModule,MatTableModule,MatToolbarModule,MatTooltipModule
  ]
})
export class MaterialModule { }
