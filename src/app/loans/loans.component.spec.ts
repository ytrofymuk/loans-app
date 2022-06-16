import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../material/material.module';
import { LoansComponent } from './loans.component';
import { MatDialog } from '@angular/material/dialog';
import { GetLoansService } from '../services/get-loans.service';

describe('LoansComponent', () => {
  let component: LoansComponent;
  let fixture: ComponentFixture<LoansComponent>;
  let getLoansService: GetLoansService;
  let matDialogService: MatDialog
  let nativeEl: HTMLElement;
  let h3: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoansComponent],
      imports: [MaterialModule],
      providers: [GetLoansService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoansComponent);
    component = fixture.componentInstance;
    getLoansService = fixture.debugElement.injector.get(GetLoansService)
    matDialogService = fixture.debugElement.injector.get(MatDialog)
    nativeEl = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject and return loans', () => {
    expect(component.loans).toEqual(getLoansService.getLoans())

  })
  it('should return totalAmount', () => {
    expect(component.totalAmount).toEqual(getLoansService.getTotalAmount())
  })

  it('should show loan.title', () => {
    h3 = nativeEl.querySelector('.loans__name');
    expect(h3.textContent).toContain(component.loans[0].title)
  })

  it('should return loan by id', () => {
    expect(component.loans[0]).toEqual(getLoansService.getLoanById('1'))
  })

  it('should show msg invested', () => {
    component.loans[0].invest = true;
    fixture.detectChanges();
    let invested = nativeEl.querySelector('.invested');
    expect(invested).toBeTruthy();
  })

  it('should show msg invested', () => {
    component.loans[0].invest = false;
    fixture.detectChanges();
    let invested = nativeEl.querySelector('.invested');
    expect(invested).toBeFalsy();
  })

});
