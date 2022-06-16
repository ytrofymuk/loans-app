import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogComponent } from './dialog.component';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GetLoansService } from '../services/get-loans.service';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  let hostElement: HTMLElement;
  let getLoanService: GetLoansService
  let p: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogComponent],
      imports: [MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        GetLoansService
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    getLoanService = fixture.debugElement.injector.get(GetLoansService)
    hostElement = fixture.debugElement.nativeElement
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject MAT_DIALOG_DATA', () => {
    fixture.debugElement.injector.get(MAT_DIALOG_DATA)
    fixture.detectChanges()
    expect(component.data).toBeTruthy();
  })

  it('should show msg', () => {
    component.state = true;
    fixture.detectChanges();
    p = hostElement.querySelector('#warning')
    expect(p).toBeTruthy();
  })

  it('shouldn`t show msg', () => {
    p = hostElement.querySelector('#warning')
    component.state = false;
    fixture.detectChanges();
    expect(p).toBeFalsy();
  })


  describe('invest', () => {
    it('should call getLoanService.invest', () => {
      let spy = spyOn(getLoanService, 'invest');
      component.invest({});
      expect(spy).toHaveBeenCalled();
    })
  });

  describe('checkError', () => {
    it('should change state to true', () => {
      component.state = false;
      component.data = { available: 10 };
      component.checkError(10000);
      expect(component.state).toBeTrue();
    })
  });

  describe('checkError', () => {
    it('should change state to false', () => {
      component.state = true;
      component.data = { available: 100 };
      component.checkError(10);
      expect(component.state).toBeFalse();
    })
  });

});
