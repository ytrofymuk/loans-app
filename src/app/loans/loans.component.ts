import { Component, OnInit } from '@angular/core';
import { GetLoansService } from '../services/get-loans.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {

  loans!: any[];
  totalAmount!: number;

  constructor(private getLoansService: GetLoansService) { }


  ngOnInit(): void {
    this.loans = this.getLoansService.getLoans();
    this.totalAmount = this.getLoansService.getTotalAmount()
    console.log(this.totalAmount)
  }

}
