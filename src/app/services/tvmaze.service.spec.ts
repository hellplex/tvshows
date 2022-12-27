import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { TvmazeService } from './tvmaze.service';

describe('TvmazeService', () => {
  let service: TvmazeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule
      ]
    });
    service = TestBed.inject(TvmazeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
