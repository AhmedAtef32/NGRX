import { TestBed } from '@angular/core/testing';
import { MiniEcommerce } from './mini-ecommerce';

describe('MiniEcommerce', () => {
  let service: MiniEcommerce;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiniEcommerce);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
