import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementGridComponent } from './element-grid.component';

describe('ElementGridComponent', () => {
  let component: ElementGridComponent;
  let fixture: ComponentFixture<ElementGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElementGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElementGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
