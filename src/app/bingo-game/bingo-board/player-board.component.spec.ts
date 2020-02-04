import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBoardComponent } from './player-board.component';

describe('BingoBoardComponent', () => {
  let component: PlayerBoardComponent;
  let fixture: ComponentFixture<PlayerBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
