import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFountComponent } from './page-not-fount.component';

describe('PageNotFountComponent', () => {
  let component: PageNotFountComponent;
  let fixture: ComponentFixture<PageNotFountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
