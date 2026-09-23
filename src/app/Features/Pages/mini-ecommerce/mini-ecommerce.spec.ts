import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiniECommerce } from './mini-ecommerce';

describe('MiniECommerce', () => {
  let component: MiniECommerce;
  let fixture: ComponentFixture<MiniECommerce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniECommerce],
    }).compileComponents();

    fixture = TestBed.createComponent(MiniECommerce);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
