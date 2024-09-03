import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPlayerComponent } from './tab-player.component';

describe('TabPlayerComponent', () => {
  let component: TabPlayerComponent;
  let fixture: ComponentFixture<TabPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
