
import { ComponentFixture,TestBed } from '@angular/core/testing';

import { SpeakerDetailsComponent } from './speaker-details.component';

describe('SpeakerDetailsComponent', () => {
  let component: SpeakerDetailsComponent;
  let fixture: ComponentFixture<SpeakerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
