import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfirmiersComponent } from './infirmiers.component';

describe('InfirmiersComponent', () => {
  let component: InfirmiersComponent;
  let fixture: ComponentFixture<InfirmiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfirmiersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfirmiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
