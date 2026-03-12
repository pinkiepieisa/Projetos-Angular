import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentGeralComponent } from './component-geral.component';

describe('ComponentGeralComponent', () => {
  let component: ComponentGeralComponent;
  let fixture: ComponentFixture<ComponentGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentGeralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
