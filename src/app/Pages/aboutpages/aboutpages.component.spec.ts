import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutpagesComponent } from './aboutpages.component';

describe('AboutpagesComponent', () => {
  let component: AboutpagesComponent;
  let fixture: ComponentFixture<AboutpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutpagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
