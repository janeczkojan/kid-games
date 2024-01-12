import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchBoardViewComponent } from './touch-board-view.component';

describe('TouchBoardViewComponent', () => {
  let component: TouchBoardViewComponent;
  let fixture: ComponentFixture<TouchBoardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TouchBoardViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TouchBoardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
