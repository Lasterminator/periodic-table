import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableToggleComponent } from './datatable-toggle.component';

describe('DatatableToggleComponent', () => {
  let component: DatatableToggleComponent;
  let fixture: ComponentFixture<DatatableToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatatableToggleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatatableToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
