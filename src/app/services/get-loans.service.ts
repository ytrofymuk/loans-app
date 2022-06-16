import { Injectable } from '@angular/core';


let jsonLoan: any = {
  loans: [
    {
      id: 1,
      title: "Voluptate et sed tempora qui quisquam.",
      tranche: "A",
      available: 11959,
      annualised_return: 8.60,
      term_remaining: 864000,
      ltv: 48.80,
      amount: 85754
    },
    {
      id: 5,
      title: "Consectetur ipsam qui magnam minus dolore ut fugit.",
      tranche: "B",
      available: 31405,
      annualised_return: 7.10,
      term_remaining: 1620000,
      ltv: 48.80,
      amount: 85754
    },
    {
      id: 12,
      title: "Dolores repudiandae ut voluptas unde laborum quaerat et sapiente.",
      tranche: "C",
      available: 12359,
      annualised_return: 4.80,
      term_remaining: 879000,
      ltv: 48.80,
      amount: 85754
    }
  ]
}

let loans = jsonLoan.loans;



@Injectable({
  providedIn: 'root'
})
export class GetLoansService {


  constructor() {
  }

  getLoans() {
    return loans;
  }

  getTotalAmount() {
    let total: number = 0;
    for (let loan of loans) {
      total += loan.available;
    }
    return total;
  }

  getLoanById(id: string) {
    for (let loan of loans) {
      if (loan.id === Number(id)) {
        return loan;
      }
    }
  }

  invest(id: any, amount: any) {
    for (let loan of loans) {
      if (loan.id === Number(id)) {
        loan.available -= amount;
        loan.invest = true;
      }
    }
  }
}
