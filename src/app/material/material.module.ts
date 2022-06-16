import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

const material: any = [MatButtonModule, MatDialogModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, material
  ],
  exports: [material]
})
export class MaterialModule { }
