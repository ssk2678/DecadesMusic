import { TestBed } from '@angular/core/testing';
import { YouTubeSearchAPIService } from './you-tube-search-api.service';

describe('YouTubeSearchAPIService', () => {
  let service: YouTubeSearchAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YouTubeSearchAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
