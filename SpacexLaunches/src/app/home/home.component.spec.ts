import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule, } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let controller: ApolloTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ApolloTestingModule],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
    controller = TestBed.inject(ApolloTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
