import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetLoansService } from '../services/get-loans.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private getLoanService: GetLoansService) { }

  ngOnInit(): void {
  }

  state: boolean = false;

  invest(inp: any) {
    let value = inp
    this.getLoanService.invest(this.data.id, value)
  }

  checkError(value: any) {
    if (value > this.data.available) {
      this.state = true;
    } else {
      this.state = false;
    }
  }
}
