import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomDetailsComponent } from './recom-details.component';

describe('RecomDetailsComponent', () => {
  let component: RecomDetailsComponent;
  let fixture: ComponentFixture<RecomDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
