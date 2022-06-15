import { Component, DoCheck, OnInit } from '@angular/core';
import { GetLoansService } from '../services/get-loans.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit, DoCheck {

  loans!: any[];
  totalAmount!: number;
  currentElem: any;
  initial = new Map();


  constructor(private getLoansService: GetLoansService, public matDialog: MatDialog) { }

  ngOnInit(): void {
    this.loans = this.getLoansService.getLoans();
    this.totalAmount = this.getLoansService.getTotalAmount()

    for (let loan of this.loans) {
      this.initial.set(loan.id, loan.available);
    }
  }

  openDialog(e: Event) {
    this.currentElem = e.target;
    let id = this.currentElem.id;
    let loan = this.getLoansService.getLoanById(id);
    let month = 0;
    let day = Math.floor((loan.term_remaining / 86400))
    if (day > 30) {
      month = Math.floor(day / 30)
      day -= 30 * month;
    }
    let dialogRef = this.matDialog.open(DialogComponent, {
      data: {
        title: loan.title,
        available: loan.available,
        month: month,
        day: day,
        id: id
      }
    })
    dialogRef.afterClosed().subscribe(res => {
      if (res) {

      }
    })
  }

  ngDoCheck(): void {
    this.loans = this.getLoansService.getLoans();
    this.totalAmount = this.getLoansService.getTotalAmount()
  }
}
