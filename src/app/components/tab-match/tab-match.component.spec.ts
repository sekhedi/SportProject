import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMatchComponent } from './tab-match.component';

describe('TabMatchComponent', () => {
  let component: TabMatchComponent;
  let fixture: ComponentFixture<TabMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
