import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewContactComponent } from '../newcontact/newcontact.component';


describe('NewcontactComponent', () => {
  let component: NewContactComponent;
  let fixture: ComponentFixture<NewContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewContactComponent]
    });
    fixture = TestBed.createComponent(NewContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
