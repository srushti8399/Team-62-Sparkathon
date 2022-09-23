import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectprofileComponent } from './connectprofile.component';

describe('ConnectprofileComponent', () => {
  let component: ConnectprofileComponent;
  let fixture: ComponentFixture<ConnectprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
