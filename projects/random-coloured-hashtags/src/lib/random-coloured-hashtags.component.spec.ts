import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomColouredHashtagsComponent } from './random-coloured-hashtags.component';

describe('RandomColouredHashtagsComponent', () => {
  let component: RandomColouredHashtagsComponent;
  let fixture: ComponentFixture<RandomColouredHashtagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomColouredHashtagsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomColouredHashtagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
