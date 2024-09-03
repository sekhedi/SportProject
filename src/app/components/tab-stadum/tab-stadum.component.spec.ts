import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabStadumComponent } from './tab-stadum.component';

describe('TabStadumComponent', () => {
  let component: TabStadumComponent;
  let fixture: ComponentFixture<TabStadumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabStadumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabStadumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
