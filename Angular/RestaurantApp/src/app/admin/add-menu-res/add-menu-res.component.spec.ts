import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenuResComponent } from './add-menu-res.component';

describe('AddMenuResComponent', () => {
  let component: AddMenuResComponent;
  let fixture: ComponentFixture<AddMenuResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMenuResComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMenuResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
