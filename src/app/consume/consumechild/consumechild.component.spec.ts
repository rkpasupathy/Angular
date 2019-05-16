import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumechildComponent } from './consumechild.component';

describe('ConsumechildComponent', () => {
  let component: ConsumechildComponent;
  let fixture: ComponentFixture<ConsumechildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumechildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
