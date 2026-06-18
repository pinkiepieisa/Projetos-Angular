import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInformatiosComponent } from './general-informatios.component';

describe('GeneralInformatiosComponent', () => {
  let component: GeneralInformatiosComponent;
  let fixture: ComponentFixture<GeneralInformatiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralInformatiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralInformatiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
